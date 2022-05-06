import { useFormContext } from "react-hook-form";
import useFieldArrayUtils from "../service/useFieldArrayUtils";

function Certificates(){
  const { register } = useFormContext();
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'job' });

  return (
    <>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>

          <Remove index={index} />

          <label>자격증</label>
          <input placeholder="자격증" {...register(`certificate.${index}.name`)} />

          <label>기간</label>
          <input placeholder="YYYY.MM - YYYY.MM" {...register(`certificate.${index}.period`)} />
        </div>
      ))}

      <Append />
    </>
  )
}

export default Certificates;
