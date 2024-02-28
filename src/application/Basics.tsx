import { basicProfilesDefaultValue } from '../model/defaultValues'
import { useFieldArray, useFormContext } from 'react-hook-form'
import useFieldArrayUtils from '../service/useFieldArrayUtils'
import { Button } from '@/components/ui/button'

function Basics() {
  const { register } = useFormContext()

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
      <Profiles />
    </>
  )
}

function Profiles() {
  const { register } = useFormContext()
  // const { fields, Remove, Append } = useFieldArrayUtils({ name: 'basics.profiles' })
  const { fields, remove, append } = useFieldArray({ name: 'basics.profiles' })


  return (
    <>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <input placeholder="network" {...register(`basics.profiles.${index}.network`)} />
          <input placeholder="username" {...register(`basics.profiles.${index}.username`)} />
          <input placeholder="url" {...register(`basics.profiles.${index}.url`)} />
          {/* <Remove index={index} aria-label="remove basic profiles" /> */}
          <Button type="button" onClick={() => remove()}>Remove</Button>
        </div>
      ))}
      <Button type="button" onClick={() => append(undefined)}>ADD</Button>
      {/* <Append defaultValue={basicProfilesDefaultValue} aria-label="append basic profiles" /> */}
    </>
  )
}

export default Basics
