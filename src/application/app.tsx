import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import typesetting from '../service/typesetting'
import usePdfMake from '../service/usePdfMake'
import Certificates from './certificates'
import Education from './education'
import Basics from './basics'
import Work from './work'
import Viewer from './viewer'
import Volunteer from './volunteer'
import Awards from './awards'
import Publications from './publications'
import Skills from './skills'
import Languages from './languages'
import Interests from './interests'
import References from './references'
import Projects from './projects'
import './app.css'
import { resumeDefaultValues } from '../model/defaultValues'
import { IResume } from '../model/interface'
import { Button } from '@/components/ui/button'

function App() {
  const pdf = usePdfMake()

  const methods = useForm<IResume>({
    defaultValues: resumeDefaultValues
  })

  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<IResume> = data => {
    fetch('/api/save', {
      method: 'PUT', // 또는 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('성공:', data)
      })
      .catch((error) => {
        console.error('실패:', error)
      })

    pdf
      .createPdf(typesetting(data))
      .download()
  }

  return (
    <div className="App">
      <FormProvider {...methods} >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-end">
            <Button type="submit">Download PDF</Button>
          </div>

          <Basics />
          <Work />
          <Volunteer />
          <Education />
          <Awards />
          <Certificates />
          <Publications />
          <Skills />
          <Languages />
          <Interests />
          <References />
          <Projects />

        </form>
        <Viewer />
      </FormProvider>
    </div >
  )
}

export default App
