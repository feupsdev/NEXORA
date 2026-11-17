
import { COLORS } from '../data/product'

export default function ColorSelector({ requested, onPick, comingSoon }) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm text-silver/70">
        Cor
      </legend>

      <div className="flex flex-wrap gap-3">
        {COLORS.map((c) => {
          const selected = requested === c.id

          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onPick(c.id)}
              aria-pressed={selected}
              aria-label={`${c.name}${c.model ? '' : ' (em breve)'}`}
              title={c.name}
              className={`relative h-10 w-10 rounded-full border transition-all duration-300 ${
                selected
                  ? 'ring-2 ring-offset-2 ring-offset-[var(--page-background)] scale-110'
                  : 'border-white/20 hover:border-white/60 hover:scale-105'
              }`}
              style={{
                background: c.hex,
                borderColor: selected
                  ? 'var(--accent)'
                  : undefined,
                '--tw-ring-color': 'var(--accent)',
              }}
            >
              {!c.model && (
                <span
                  className="absolute inset-0 rounded-full bg-[repeating-linear-gradient(135deg,transparent_0_4px,rgba(5,7,13,.55)_4px_6px)]"
                  aria-hidden="true"
                />
              )}
            </button>
          )
        })}
      </div>

      <p
        className="mt-3 min-h-[1.5rem] text-sm text-silver"
        aria-live="polite"
      >
        {comingSoon
          ? `${comingSoon.name} estará disponível em breve. O modelo exibido continua o da última cor disponível.`
          : COLORS.find((c) => c.id === requested)?.name}
      </p>
    </fieldset>
  )
}
