import { Button } from "@/components/ui/button";
import { useFieldArray, UseFieldArrayProps } from "react-hook-form";

function useFieldArrayUtils<T>(fildArrayProps: UseFieldArrayProps) {
  const { fields, append, remove } = useFieldArray(fildArrayProps);

  const Remove = ({ index, ...rest }: { index: number }) => (
    <div style={{ float: "right" }}>
      <Button type="button" onClick={() => remove(index)} {...rest}>
        X
      </Button>
    </div>
  );

  const Append = ({ defaultValue, ...rest }: { defaultValue: T }) => (
    <div className="flex justify-center">
      <Button type="button" onClick={() => append(defaultValue)} {...rest}>
        Add
      </Button>
    </div>
  );

  return {
    fields,
    Remove,
    Append,
  };
}

export default useFieldArrayUtils;
