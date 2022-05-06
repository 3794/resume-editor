import { useFormContext } from "react-hook-form";
import useFieldArrayUtils from "../service/useFieldArrayUtils";

function Jobs(){
  const { register } = useFormContext();
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'job' });

  return (
    <>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          
          <Remove index={index} />

          <label>회사명</label>
          <input placeholder="회사명" {...register(`job.${index}.company`)} />
          <label>직무</label>
          <input placeholder="직무" {...register(`job.${index}.role`)} />
          <label>기간</label>
          <input placeholder="YYYY.MM - YYYY.MM" {...register(`job.${index}.period`)} />
          <label>상세 업무 및 성과</label>
          <textarea placeholder="상세 업무 및 성과" {...register(`job.${index}.description`)} />
        </div>
      ))}

      <Append />
    </>
  )
}

export default Jobs;
