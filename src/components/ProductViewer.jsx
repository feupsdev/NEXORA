
import { Suspense, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  useGLTF,
} from '@react-three/drei'
import * as THREE from 'three'
import { COLORS } from '../data/product'

const WALLPAPERS = {
  azul: {
    colors: ['#050b19', '#153b78', '#3988ff', '#a7caff'],
    glow: 'rgba(57, 136, 255, 0.35)',
  },
  preto: {
    colors: ['#050505', '#17191d', '#424750', '#9299a3'],
    glow: 'rgba(160, 170, 185, 0.22)',
  },
  prata: {
    colors: ['#15191f', '#59616d', '#cfd5de', '#f4f6f8'],
    glow: 'rgba(207, 213, 222, 0.30)',
  },
  roxo: {
    colors: ['#10091c', '#39205f', '#8055cb', '#d0b6ff'],
    glow: 'rgba(164, 119, 255, 0.30)',
  },
  dourado: {
    colors: ['#160f06', '#59401e', '#c9a45c', '#f4d99d'],
    glow: 'rgba(213, 166, 83, 0.30)',
  },
}

function makeScreenTexture(colorId) {
  const palette = WALLPAPERS[colorId] || WALLPAPERS.azul

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 1024

  const ctx = canvas.getContext('2d')

  // Fundo principal
  const bg = ctx.createLinearGradient(0, 0, 512, 1024)

  bg.addColorStop(0, palette.colors[0])
  bg.addColorStop(0.35, palette.colors[1])
  bg.addColorStop(0.7, palette.colors[2])
  bg.addColorStop(1, palette.colors[0])

  ctx.fillStyle = bg
  ctx.fillRect(0, 0, 512, 1024)

  // Formas abstratas metálicas
  ctx.save()
  ctx.globalAlpha = 0.7

  const glow = ctx.createRadialGradient(
    256, 400, 20,
    256, 400, 420
  )

  glow.addColorStop(0, palette.glow)
  glow.addColorStop(1, 'rgba(0,0,0,0)')

  ctx.fillStyle = glow
  ctx.fillRect(0, 0, 512, 1024)

  ctx.restore()

  // Curva metálica
  ctx.beginPath()
  ctx.moveTo(-100, 650)
  ctx.bezierCurveTo(100, 400, 350, 850, 620, 350)

  ctx.lineWidth = 95
  ctx.strokeStyle = palette.colors[3]
  ctx.globalAlpha = 0.16
  ctx.stroke()

  ctx.globalAlpha = 1

  // Nome da marca
  ctx.textAlign = 'center'
  ctx.shadowColor = palette.glow
  ctx.shadowBlur = 30

  ctx.fillStyle = '#ffffff'
  ctx.font = '700 58px sans-serif'
  ctx.fillText('NEXORA', 256, 520)

  ctx.fillStyle = palette.colors[3]
  ctx.font = '500 27px sans-serif'
  ctx.fillText('ONE', 256, 562)

  ctx.shadowBlur = 0

  // Linha decorativa
  ctx.fillStyle = palette.colors[3]
  ctx.globalAlpha = 0.7
  ctx.fillRect(196, 590, 120, 2)
  ctx.globalAlpha = 1

  const texture = new THREE.CanvasTexture(canvas)
  texture.flipY = false
  texture.colorSpace = THREE.SRGBColorSpace
  texture.needsUpdate = true

  return texture
}

function Phone({ url, colorId }) {
  const { scene } = useGLTF(url)
  const root = useRef()

  const model = useMemo(() => scene.clone(true), [scene])

  const screen = useMemo(
    () => makeScreenTexture(colorId),
    [colorId]
  )

  useEffect(() => {
    model.traverse((object) => {
      if (!object.isMesh) return

      object.castShadow = true

      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material]

      materials.forEach((material) => {
        if (
          material &&
          material.name &&
          material.emissiveMap &&
          material.emissive.r > 0.9
        ) {
          material.emissiveMap = screen
          material.needsUpdate = true
        }
      })
    })
  }, [model, screen])

  const t0 = useRef(0)

  useFrame((_, dt) => {
    t0.current = Math.min(1, t0.current + dt * 0.9)

    const e = 1 - Math.pow(1 - t0.current, 3)

    root.current.scale.setScalar(0.85 + 0.15 * e)
    root.current.rotation.y = THREE.MathUtils.lerp(-2.4, -0.45, e)
  })

  return (
    <group ref={root}>
      <primitive object={model} />
    </group>
  )
}

export default function ProductViewer({
  colorId = 'azul',
  className = '',
}) {
  const color = COLORS.find((c) => c.id === colorId) ?? COLORS[0]

  const mobile =
    typeof window !== 'undefined' && window.innerWidth < 768

  const lightColor = color.hex

  return (
    <div
      className={className}
      role="img"
      aria-label={`Modelo 3D do NEXORA ONE na cor ${color.name}. Arraste para girar.`}
    >
      <Canvas
        shadows
        dpr={[1, mobile ? 1.5 : 2]}
        camera={{
          position: [0, 0, mobile ? 2.3 : 1.8],
          fov: 30,
        }}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={0.45} />

        <pointLight
          position={[-1.5, 1, 1.5]}
          intensity={3}
          color={lightColor}
        />

        <pointLight
          position={[1.5, -1, 1]}
          intensity={1.5}
          color="#ffffff"
        />

        <Suspense fallback={null}>
          <Float
            speed={1.4}
            rotationIntensity={0.15}
            floatIntensity={0.35}
          >
            <Phone
              key={`${color.model}-${color.id}`}
              url={color.model}
              colorId={color.id}
            />
          </Float>

          <ContactShadows
            position={[0, -0.42, 0]}
            opacity={0.4}
            scale={2}
            blur={2.6}
            far={1}
            color="#111827"
          />

          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableDamping
          minDistance={1.2}
          maxDistance={mobile ? 3 : 2.6}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Canvas>
    </div>
  )
}

useGLTF.preload(COLORS[0].model)
