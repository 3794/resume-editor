import { useFieldArray, UseFieldArrayProps } from 'react-hook-form'

function useFieldArrayUtils<T> (fildArrayProps: UseFieldArrayProps) {
  const { fields, append, remove } = useFieldArray(fildArrayProps)

  const Remove = ({ index }: { index: number }) => (
    <div style={{ float: 'right' }}>
      <button
        type="button"
        onClick={() => remove(index)}
      >
        X
      </button>
    </div>
  )

  const Append = ({ defaultValue }: { defaultValue: T }) => (
    <div className="flex-center">
      <button
        type="button"
        onClick={() => append(defaultValue)}
      >
        +
      </button>
    </div>
  )

  return {
    fields, Remove, Append
  }
}

export default useFieldArrayUtils
