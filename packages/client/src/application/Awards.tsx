import { useFormContext } from 'react-hook-form'
import { awardsDefaultValue } from '../model/defaultValues'
import useFieldArrayUtils from '../service/useFieldArrayUtils'

function Awards () {
  const { register } = useFormContext()
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'awards' })

  return (
    <>
      <h2>Awards</h2>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <Remove index={index} />
          <input placeholder="title" {...register(`awards.${index}.title`)} />
          <input placeholder="date" {...register(`awards.${index}.date`)} />
          <input placeholder="awarder" {...register(`awards.${index}.awarder`)} />
          <input placeholder="summary" {...register(`awards.${index}.summary`)} />
        </div>
      ))}

      <Append defaultValue={awardsDefaultValue} />
    </>
  )
}

export default Awards
