
import { useState } from 'react'
import { COLORS, STORAGES } from '../data/product'

export function useConfigurator() {
  const [requested, setRequested] = useState('azul')
  const [applied, setApplied] = useState('azul')
  const [storage, setStorage] = useState(STORAGES[1])

  const pickColor = (id) => {
    const selectedColor = COLORS.find((color) => color.id === id)

    if (!selectedColor) return

    setRequested(id)

    // Só troca o modelo quando existe um arquivo GLB real.
    if (selectedColor.model) {
      setApplied(id)
    }
  }

  const requestedColor = COLORS.find(
    (color) => color.id === requested
  )

  const appliedColor = COLORS.find(
    (color) => color.id === applied
  )

  return {
    requested,
    applied,
    storage,
    setStorage,
    pickColor,

    comingSoon:
      requestedColor && !requestedColor.model
        ? requestedColor
        : null,

    appliedColor,
  }
}
