import { workDefaultValue } from '../model/defaultValues'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import useFieldArrayUtils from '../service/useFieldArrayUtils'
import { Input } from '@/components/ui/input'
import { Title } from '@/components/ui/title'
import FieldContainer from '@/components/ui/field-container'

function WorkHeights({ index }: { index: number }) {
  const { setValue, getValues } = useFormContext()
  const [fields, setFields] = useState<string[]>([''])

  const handleAppend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setFields(['', ...fields])
  }

  const handleChangeHighlight = (e: React.ChangeEvent<HTMLInputElement>, highlightIndex: number) => {
    const value = e.target.value
    const highlights = getValues(`work.${index}.highlights`) || []
    highlights[highlightIndex] = value
    setValue(`work.${index}.highlights`, highlights)
  }

  return (
    <>
      {fields.map((field: string, index: number) => (
        <div key={index} className="">
          <Input placeholder="highlights" onChange={(e) => handleChangeHighlight(e, index)} />
        </div>
      ))}
      <button onClick={handleAppend}>+</button>
    </>
  )
}

function Work() {
  const { register } = useFormContext()
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'work' })

  return (
    <>
      <Title>Work</Title>
      {fields.map((field: any, index: number) => (
        <FieldContainer key={field.id}>
          <Remove index={index} aria-label="remove work" />
          <Input placeholder="name" {...register(`work.${index}.name`)} />
          <Input placeholder="position" {...register(`work.${index}.position`)} />
          <Input placeholder="url" {...register(`work.${index}.url`)} />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Input placeholder="startDate" {...register(`work.${index}.startDate`)} />
            </div>
            <div>
              <Input placeholder="endDate" {...register(`work.${index}.endDate`)} />
            </div>
          </div>
          <Input placeholder="summary" {...register(`work.${index}.summary`)} />
          <Input type="hidden" {...register(`work.${index}.highlights`)} />
          <WorkHeights index={index} />
        </FieldContainer>
      ))}

      <Append defaultValue={workDefaultValue} aria-label="append work" />
    </>
  )
}

export default Work
