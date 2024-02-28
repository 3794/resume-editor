import { certificatesDefaultValue } from '../model/defaultValues'
import { useFormContext } from 'react-hook-form'
import useFieldArrayUtils from '../service/useFieldArrayUtils'

function Certificates() {
  const { register } = useFormContext()
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'certificates' })

  return (
    <>
      <h2>Certificates</h2>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <Remove index={index} />
          <input placeholder="name" {...register(`certificates.${index}.name`)} />
          <input placeholder="date" {...register(`certificates.${index}.date`)} />
          <input placeholder="issuer" {...register(`certificates.${index}.issuer`)} />
          <input placeholder="url" {...register(`certificates.${index}.url`)} />
        </div>
      ))}

      <Append defaultValue={certificatesDefaultValue} />
    </>
  )
}

export default Certificates
