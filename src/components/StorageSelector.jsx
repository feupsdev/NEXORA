
import { STORAGES } from '../data/product'

export default function StorageSelector({ value, onChange }) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm text-silver/70">
        Armazenamento
      </legend>

      <div className="grid grid-cols-2 gap-2">
        {STORAGES.map((storage) => (
          <button
            key={storage}
            type="button"
            onClick={() => onChange(storage)}
            aria-pressed={value === storage}
            className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
              value === storage
                ? 'theme-selected text-white'
                : 'border-white/15 text-silver hover:border-white/40'
            }`}
          >
            {storage}
          </button>
        ))}
      </div>
    </fieldset>
  )
}
