import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { volunteerDefaultValue } from "../model/defaultValues";
import useFieldArrayUtils from "../service/useFieldArrayUtils";

function HighLights({ index }: {index: number }){
  const { setValue, getValues } = useFormContext();
  const [fields, setFields] = useState<string[]>(['']);

  const handleAppend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFields(['', ...fields]);
  }

  const handleChangeHighlight = (e: React.ChangeEvent<HTMLInputElement>, highlightIndex: number) => {
    const value = e.target.value;
    const highlights = getValues(`volunteer.${index}.highlights`) || [];
    highlights[highlightIndex] = value;
    setValue(`volunteer.${index}.highlights`, highlights);
  }

  return (
    <>
      {fields.map((field: string, index: number) => (
        <div key={index}>
          <input placeholder="highlights" onChange={(e) => handleChangeHighlight(e, index)} />
        </div>
      ))}
      <button onClick={handleAppend}>+</button>
    </>
  )
}

function Volunteer(){
  const { register } = useFormContext();
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'volunteer' });

  return (
    <>
      <h2>Volunteer</h2>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <Remove index={index} />
          <input placeholder="organization" {...register(`volunteer.${index}.organization`)} />
          <input placeholder="position" {...register(`volunteer.${index}.position`)} />
          <input placeholder="url" {...register(`volunteer.${index}.url`)} />
          <input placeholder="startDate" {...register(`volunteer.${index}.startDate`)} />
          <input placeholder="endDate" {...register(`volunteer.${index}.endDate`)} />
          <input placeholder="summary" {...register(`volunteer.${index}.summary`)} />
          <input type="hidden" {...register(`volunteer.${index}.highlights`)} />
          <HighLights index={index} />
        </div>
      ))}

      <Append defaultValue={volunteerDefaultValue} />
    </>
  )
}

export default Volunteer;
