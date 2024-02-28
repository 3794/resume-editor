import { projectsDefaultValues } from '../model/defaultValues'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import useFieldArrayUtils from '../service/useFieldArrayUtils'
import { Title } from '@/components/ui/title'
import FieldContainer from '@/components/ui/field-container'
import { Input } from '@/components/ui/input'

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

function Projects() {
  const { register } = useFormContext()
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'projects' })

  return (
    <>
      <Title>Projects</Title>
      {fields.map((field: any, index: number) => (
        <FieldContainer key={field.id}>
          <Remove index={index} />
          <Input placeholder="name" {...register(`projects.${index}.name`)} />
          <Input placeholder="description" {...register(`projects.${index}.description`)} />
          <HighLights index={index} />
          <HighLights index={index} />
          <Input placeholder="startDate" {...register(`projects.${index}.startDate`)} />
          <Input placeholder="endDate" {...register(`projects.${index}.endDate`)} />
          <Input placeholder="url" {...register(`projects.${index}.url`)} />
          <HighLights index={index} />
          <Input placeholder="entity" {...register(`projects.${index}.entity`)} />
          <Input placeholder="type" {...register(`projects.${index}.type`)} />

          <Input type="hidden" {...register(`projects.${index}.highlights`)} />
          <Input type="hidden" {...register(`projects.${index}.keywords`)} />
          <Input type="hidden" {...register(`projects.${index}.roles`)} />
        </FieldContainer>
      ))}

      <Append defaultValue={projectsDefaultValues} />
    </>
  )
}

export default Projects
