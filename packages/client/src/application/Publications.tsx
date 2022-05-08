import { useFormContext } from 'react-hook-form'
import { publicationsDefaultValues } from '../model/defaultValues'
import useFieldArrayUtils from '../service/useFieldArrayUtils'

function Publications () {
  const { register } = useFormContext()
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'publications' })

  return (
    <>
      <h2>Publications</h2>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <Remove index={index} />
          <input placeholder="name" {...register(`publications.${index}.name`)} />
          <input placeholder="publisher" {...register(`publications.${index}.publisher`)} />
          <input placeholder="releaseDate" {...register(`publications.${index}.releaseDate`)} />
          <input placeholder="url" {...register(`publications.${index}.url`)} />
          <input placeholder="summary" {...register(`publications.${index}.summary`)} />
        </div>
      ))}

      <Append defaultValue={publicationsDefaultValues} />
    </>
  )
}

export default Publications
