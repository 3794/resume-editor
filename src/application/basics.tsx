import { basicProfilesDefaultValue } from '../model/defaultValues'
import { useFormContext } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import useFieldArrayUtils from '@/service/useFieldArrayUtils'
import { Title } from '@/components/ui/title'
import FieldContainer from '@/components/ui/field-container'

function Basics() {
  const { register } = useFormContext()

  return (
    <>
      <Title>Basics</Title>

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
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'basics.profiles' })


  return (
    <>
      {fields.map((field: any, index: number) => (
        <FieldContainer key={field.id}>
          <Input placeholder="network" {...register(`basics.profiles.${index}.network`)} />
          <Input placeholder="username" {...register(`basics.profiles.${index}.username`)} />
          <Input placeholder="url" {...register(`basics.profiles.${index}.url`)} />
          <Remove index={index} aria-label="remove basic profiles" />
        </FieldContainer>
      ))}
      <Append defaultValue={basicProfilesDefaultValue} aria-label="append basic profiles" />
    </>
  )
}

export default Basics
