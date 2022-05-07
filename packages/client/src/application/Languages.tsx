import { useFormContext } from "react-hook-form";
import { languagesDefaultValues } from "../model/defaultValues";
import useFieldArrayUtils from "../service/useFieldArrayUtils";

function Languages(){
  const { register } = useFormContext();
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'languages' });

  return (
    <>
      <h2>Languages</h2>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <Remove index={index} />
          <input placeholder="language" {...register(`languages.${index}.language`)} />
          <input placeholder="fluency" {...register(`languages.${index}.fluency`)} />
        </div>
      ))}

      <Append defaultValue={languagesDefaultValues} />
    </>
  )
}

export default Languages;
