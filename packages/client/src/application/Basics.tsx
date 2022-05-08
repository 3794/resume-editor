import { useFormContext } from 'react-hook-form'
import useFieldArrayUtils from '../service/useFieldArrayUtils'

function Basics () {
  const { register } = useFormContext()
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'basics.profiles' })
  const profilesDefaultValue = {
    profiles: ''
  }

  return (
    <>
      <h2>Basics</h2>
      <input placeholder="Name" {...register('basics.name')} />
      <input placeholder="Label" {...register('basics.label')} />
      <input placeholder="Image" {...register('basics.image')} />
      <input placeholder="Email" {...register('basics.email')} />
      <input placeholder="Phone" {...register('basics.phone')} />
      <input placeholder="URL" {...register('basics.url')} />
      <input placeholder="Summary" {...register('basics.summary')} />
      <input placeholder="Location.Address" {...register('basics.location.address')} />
      <input placeholder="Location.PostalCode" {...register('basics.location.postalCode')} />
      <input placeholder="Location.City" {...register('basics.location.city')} />
      <input placeholder="Location.CountryCode" {...register('basics.location.countryCode')} />
      <input placeholder="Location.Region" {...register('basics.location.region')} />

      {fields.map((field: any, index: number) => (
        <div key={field.id}>

          <Remove index={index} />

          <input placeholder="Profiles" {...register(`basics.${index}.profiles`)} />
        </div>
      ))}

      <Append defaultValue={profilesDefaultValue}/>
    </>
  )
}

export default Basics
