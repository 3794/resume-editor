import { ChangeEvent, MouseEvent, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { educationDefaultValue } from '../model/defaultValues'
import useFieldArrayUtils from '../service/useFieldArrayUtils'
import { Input } from '@/components/ui/input'
import FieldContainer from '@/components/ui/field-container'
import { Title } from '@/components/ui/title'

function HighLights({ index }: { index: number }) {
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
          <Input placeholder="courses" onChange={(e) => handleChangeHighlight(e, index)} />
        </div>
      ))}
      <button onClick={handleAppend}>+</button>
    </>
  )
}

function Education() {
  const { register } = useFormContext()
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'education' })

  return (
    <>
      <Title>Education</Title>
      {fields.map((field: any, index: number) => (
        <FieldContainer key={field.id}>

          <Remove index={index} />

          <Input placeholder="institution" {...register(`education.${index}.institution`)} />
          <Input placeholder="url" {...register(`education.${index}.url`)} />
          <Input placeholder="area" {...register(`education.${index}.area`)} />
          <Input placeholder="studyType" {...register(`education.${index}.studyType`)} />
          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="startDate" {...register(`education.${index}.startDate`)} />
            <Input placeholder="endDate" {...register(`education.${index}.endDate`)} />
          </div>
          <Input placeholder="score" {...register(`education.${index}.score`)} />
          <HighLights index={index} />
        </FieldContainer>
      ))}

      <Append defaultValue={educationDefaultValue} />
    </>
  )
}

export default Education
