import { basicProfilesDefaultValue } from '../model/defaultValues'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function Basics() {
  const { register } = useFormContext()

  return (
    <>
      <h2 className="text-2xl">Basics</h2>

      <div className="grid gap-2 mb-2">
        <Input placeholder="Name" {...register('basics.name')} />
        <Input placeholder="Label" {...register('basics.label')} />
        <Input placeholder="Image" {...register('basics.image')} />
        <Input placeholder="Email" {...register('basics.email')} />
        <Input placeholder="Phone" {...register('basics.phone')} />
        <Input placeholder="URL" {...register('basics.url')} />
        <Input placeholder="Summary" {...register('basics.summary')} />
        <Input placeholder="Location.Address" {...register('basics.location.address')} />
        <Input placeholder="Location.PostalCode" {...register('basics.location.postalCode')} />
        <Input placeholder="Location.City" {...register('basics.location.city')} />
        <Input placeholder="Location.CountryCode" {...register('basics.location.countryCode')} />
        <Input placeholder="Location.Region" {...register('basics.location.region')} />
      </div>
      <Profiles />
    </>
  )
}

function Profiles() {
  const { register } = useFormContext()
  const { fields, remove, append } = useFieldArray({ name: 'basics.profiles' })


  return (
    <>
      {fields.map((field: any, index: number) => (
        <div key={field.id} className="grid gap-2">
          <Input placeholder="network" {...register(`basics.profiles.${index}.network`)} />
          <Input placeholder="username" {...register(`basics.profiles.${index}.username`)} />
          <Input placeholder="url" {...register(`basics.profiles.${index}.url`)} />
          {/* <Remove index={index} aria-label="remove basic profiles" /> */}
          <Button type="button" onClick={() => remove(index)}>Remove</Button>
        </div>
      ))}
      <Button
        type="button"
        onClick={() => append(basicProfilesDefaultValue)}
        aria-label="append basic profiles"
      >
        ADD
      </Button>
    </>
  )
}

export default Basics
