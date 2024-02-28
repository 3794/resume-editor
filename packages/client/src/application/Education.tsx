import { ChangeEvent, MouseEvent, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { educationDefaultValue } from '../model/defaultValues'
import useFieldArrayUtils from '../service/useFieldArrayUtils'

function HighLights ({ index }: {index: number }) {
  const { setValue, getValues } = useFormContext()
  const [fields, setFields] = useState<string[]>([''])

  const handleAppend = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setFields(['', ...fields])
  }

  const handleChangeHighlight = (e: ChangeEvent<HTMLInputElement>, highlightIndex: number) => {
    const value = e.target.value
    const courses = getValues(`education.${index}.courses`) || []
    courses[highlightIndex] = value
    setValue(`education.${index}.courses`, courses)
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

function Education () {
  const { register } = useFormContext()
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'education' })

  return (
    <>
      <h2>Education</h2>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>

          <Remove index={index} />

          <input placeholder="institution" {...register(`education.${index}.institution`)} />
          <input placeholder="url" {...register(`education.${index}.url`)} />
          <input placeholder="area" {...register(`education.${index}.area`)} />
          <input placeholder="studyType" {...register(`education.${index}.studyType`)} />
          <input placeholder="startDate" {...register(`education.${index}.startDate`)} />
          <input placeholder="endDate" {...register(`education.${index}.endDate`)} />
          <input placeholder="score" {...register(`education.${index}.score`)} />
          <HighLights index={index} />
        </div>
      ))}

      <Append defaultValue={educationDefaultValue}/>
    </>
  )
}

export default Education
