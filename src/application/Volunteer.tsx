import { volunteerDefaultValue } from '../model/defaultValues'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import useFieldArrayUtils from '../service/useFieldArrayUtils'
import { Title } from '@/components/ui/title'
import { Input } from '@/components/ui/input'
import FieldContainer from '@/components/ui/field-container'

function HighLights({ index }: { index: number }) {
  const { setValue, getValues } = useFormContext()
  const [fields, setFields] = useState<string[]>([''])

  const handleAppend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setFields(['', ...fields])
  }

  const handleChangeHighlight = (e: React.ChangeEvent<HTMLInputElement>, highlightIndex: number) => {
    const value = e.target.value
    const highlights = getValues(`volunteer.${index}.highlights`) || []
    highlights[highlightIndex] = value
    setValue(`volunteer.${index}.highlights`, highlights)
  }

  return (
    <>
      {fields.map((field: string, index: number) => (
        <div key={index}>
          <Input placeholder="highlights" onChange={(e) => handleChangeHighlight(e, index)} />
        </div>
      ))}
      <button onClick={handleAppend}>+</button>
    </>
  )
}

function Volunteer() {
  const { register } = useFormContext()
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'volunteer' })

  return (
    <>
      <Title>Volunteer</Title>
      {fields.map((field: any, index: number) => (
        <FieldContainer key={field.id}>
          <Remove index={index} />
          <Input placeholder="organization" {...register(`volunteer.${index}.organization`)} />
          <Input placeholder="position" {...register(`volunteer.${index}.position`)} />
          <Input placeholder="url" {...register(`volunteer.${index}.url`)} />
          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="startDate" {...register(`volunteer.${index}.startDate`)} />
            <Input placeholder="endDate" {...register(`volunteer.${index}.endDate`)} />
          </div>
          <Input placeholder="summary" {...register(`volunteer.${index}.summary`)} />
          <Input type="hidden" {...register(`volunteer.${index}.highlights`)} />
          <HighLights index={index} />
        </FieldContainer>
      ))}

      <Append defaultValue={volunteerDefaultValue} />
    </>
  )
}

export default Volunteer
