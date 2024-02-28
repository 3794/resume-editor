import { publicationsDefaultValues } from '../model/defaultValues'
import { useFormContext } from 'react-hook-form'
import useFieldArrayUtils from '../service/useFieldArrayUtils'
import { Title } from '@/components/ui/title'
import { Input } from '@/components/ui/input'

function Publications() {
  const { register } = useFormContext()
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'publications' })

  return (
    <>
      <Title>Publications</Title>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <Remove index={index} />
          <Input placeholder="name" {...register(`publications.${index}.name`)} />
          <Input placeholder="publisher" {...register(`publications.${index}.publisher`)} />
          <Input placeholder="releaseDate" {...register(`publications.${index}.releaseDate`)} />
          <Input placeholder="url" {...register(`publications.${index}.url`)} />
          <Input placeholder="summary" {...register(`publications.${index}.summary`)} />
        </div>
      ))}

      <Append defaultValue={publicationsDefaultValues} />
    </>
  )
}

export default Publications
