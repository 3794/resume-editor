import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import typesetting from '../service/typesetting'
import usePdfMake from '../service/usePdfMake'
import Certificates from './Certificates'
import Education from './Education'
import Basics from './Basics'
import Work from './Work'
import Viewer from './Viewer'
import Volunteer from './Volunteer'
import Awards from './Awards'
import Publications from './Publications'
import Skills from './Skills'
import Languages from './Languages'
import Interests from './Interests'
import References from './References'
import Projects from './Projects'
import './App.css'
import { resumeDefaultValues } from '../model/defaultValues'
import { IResume } from '../model/interface'

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
          <div className="flex-end">
            <button type="submit">
              Download PDF
            </button>
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
