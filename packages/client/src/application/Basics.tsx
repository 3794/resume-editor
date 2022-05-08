import { ChangeEvent, MouseEvent, useState } from 'react'
import { useFormContext } from 'react-hook-form'

function Basics () {
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
      <HighLights />

    </>
  )
}

function HighLights () {
  const { setValue, getValues } = useFormContext()
  const [fields, setFields] = useState<string[]>([''])

  const handleAppend = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setFields(['', ...fields])
  }

  const handleChangeHighlight = (e: ChangeEvent<HTMLInputElement>, highlightIndex: number) => {
    const value = e.target.value
    const courses = getValues('basics.profiles') || []
    courses[highlightIndex] = value
    setValue('basics.profiles', courses)
  }

  return (
    <>
      {fields.map((field: string, index: number) => (
        <div key={index}>
          <input placeholder="courses" onChange={(e) => handleChangeHighlight(e, index)} />
        </div>
      ))}
      <button onClick={handleAppend}>+</button>
    </>
  )
}

export default Basics
