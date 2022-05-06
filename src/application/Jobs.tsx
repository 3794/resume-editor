import { useFieldArray, useFormContext } from "react-hook-form";

function Jobs(){
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({ name: 'job' });

  return (
    <>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <div style={{ float: 'right' }}>
            <button
              type="button"
              onClick={() => remove(index)}
            >
              X
            </button>
          </div>
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
      <div className="flex-center">
        <button
          type="button"
          onClick={() => append(1)}
        >
          +
        </button>
      </div>
    </>
  )
}


export default Jobs;
