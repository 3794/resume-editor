import { workDefaultValue } from 'model/defaultValues'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import useFieldArrayUtils from '../service/useFieldArrayUtils'

function WorkHeights ({ index }: {index: number }) {
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
        <div key={index}>
          <input placeholder="highlights" onChange={(e) => handleChangeHighlight(e, index)} />
        </div>
      ))}
      <button onClick={handleAppend}>+</button>
    </>
  )
}

function Work () {
  const { register } = useFormContext()
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'work' })

  return (
    <>
      <h2>Work</h2>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <Remove index={index} />
          <input placeholder="name" {...register(`work.${index}.name`)} />
          <input placeholder="position" {...register(`work.${index}.position`)} />
          <input placeholder="url" {...register(`work.${index}.url`)} />
          <input placeholder="startDate" {...register(`work.${index}.startDate`)} />
          <input placeholder="endDate" {...register(`work.${index}.endDate`)} />
          <input placeholder="summary" {...register(`work.${index}.summary`)} />
          <input type="hidden" {...register(`work.${index}.highlights`)} />
          <WorkHeights index={index} />
        </div>
      ))}

      <Append defaultValue={workDefaultValue} />
    </>
  )
}

export default Work
