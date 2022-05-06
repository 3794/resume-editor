import { useFieldArray, useFormContext } from "react-hook-form";

function Certificates(){
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({ name: 'certificate' });

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
          <label>자격증</label>
          <input placeholder="자격증" {...register(`certificate.${index}.name`)} />

          <label>기간</label>
          <input placeholder="YYYY.MM - YYYY.MM" {...register(`certificate.${index}.period`)} />
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

export default Certificates;
