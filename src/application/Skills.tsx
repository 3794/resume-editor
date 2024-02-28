import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { volunteerDefaultValue } from '../model/defaultValues'
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
    const keywords = getValues(`skills.${index}.keywords`) || []
    keywords[highlightIndex] = value
    setValue(`skills.${index}.keywords`, keywords)
  }

  return (
    <>
      {fields.map((field: string, index: number) => (
        <div key={index}>
          <input placeholder="keywords" onChange={(e) => handleChangeHighlight(e, index)} />
        </div>
      ))}
      <button onClick={handleAppend}>+</button>
    </>
  )
}

function Skills() {
  const { register } = useFormContext()
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'skills' })

  return (
    <>
      <h2>Skills</h2>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <Remove index={index} />
          <input placeholder="name" {...register(`skills.${index}.name`)} />
          <input placeholder="level" {...register(`skills.${index}.level`)} />
          <input type="hidden" {...register(`skills.${index}.keywords`)} />
          <HighLights index={index} />
        </div>
      ))}

      <Append defaultValue={volunteerDefaultValue} />
    </>
  )
}

export default Skills
