import { useFormContext } from 'react-hook-form'

function Viewer () {
  const { watch } = useFormContext()
  const data = watch()

  const _data = JSON.stringify(data)
  return (
    <div>
        {_data}
    </div>
  )
}

export default Viewer
