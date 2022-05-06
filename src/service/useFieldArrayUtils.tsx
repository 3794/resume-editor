import { useFieldArray, UseFieldArrayProps } from "react-hook-form";

function useFieldArrayUtils(fildArrayProps: UseFieldArrayProps) {
  const { fields, append, remove } = useFieldArray(fildArrayProps);

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

  const Append = () => (
    <div className="flex-center">
      <button
        type="button"
        onClick={() => append(1)}
      >
        +
      </button>
    </div>
  )

  return {
    fields, Remove, Append
  }
}

export default useFieldArrayUtils;
