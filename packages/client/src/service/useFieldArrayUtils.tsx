import { useFieldArray, UseFieldArrayProps } from 'react-hook-form'

function useFieldArrayUtils<T> (fildArrayProps: UseFieldArrayProps) {
  const { fields, append, remove } = useFieldArray(fildArrayProps)

  const Remove = ({ index, ...rest }: { index: number, rest?: any[] }) => (
    <div style={{ float: 'right' }}>
      <button
        type="button"
        onClick={() => remove(index)}
        {...rest}
      >
        X
      </button>
    </div>
  )

  const Append = ({ defaultValue, ...rest }: { defaultValue: T, rest?: any[] }) => (
    <div className="flex-center">
      <button
        type="button"
        onClick={() => append(defaultValue)}
        {...rest}
      >
        Add
      </button>
    </div>
  )

  return {
    fields, Remove, Append
  }
}

export default useFieldArrayUtils
