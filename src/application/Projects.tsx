import { projectsDefaultValues } from '../model/defaultValues'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import useFieldArrayUtils from '../service/useFieldArrayUtils'

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
          <input placeholder="highlights" onChange={(e) => handleChangeHighlight(e, index)} />
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
      <h2>Projects</h2>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <Remove index={index} />
          <input placeholder="name" {...register(`projects.${index}.name`)} />
          <input placeholder="description" {...register(`projects.${index}.description`)} />
          <HighLights index={index} />
          <HighLights index={index} />
          <input placeholder="startDate" {...register(`projects.${index}.startDate`)} />
          <input placeholder="endDate" {...register(`projects.${index}.endDate`)} />
          <input placeholder="url" {...register(`projects.${index}.url`)} />
          <HighLights index={index} />
          <input placeholder="entity" {...register(`projects.${index}.entity`)} />
          <input placeholder="type" {...register(`projects.${index}.type`)} />

          <input type="hidden" {...register(`projects.${index}.highlights`)} />
          <input type="hidden" {...register(`projects.${index}.keywords`)} />
          <input type="hidden" {...register(`projects.${index}.roles`)} />
        </div>
      ))}

      <Append defaultValue={projectsDefaultValues} />
    </>
  )
}

export default Projects
