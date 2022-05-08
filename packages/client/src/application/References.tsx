import { useFormContext } from 'react-hook-form'
import { referencesDefaultValues } from '../model/defaultValues'
import useFieldArrayUtils from '../service/useFieldArrayUtils'

function References () {
  const { register } = useFormContext()
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'references' })

  return (
    <>
      <h2>References</h2>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <Remove index={index} />
          <input placeholder="name" {...register(`references.${index}.name`)} />
          <input placeholder="reference" {...register(`references.${index}.reference`)} />
        </div>
      ))}

      <Append defaultValue={referencesDefaultValues} />
    </>
  )
}

export default References
