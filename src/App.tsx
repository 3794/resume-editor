import usePdfMake from './service/usePdfMake';
import typesetting from './service/typesetting';
import './App.css';
import { Values } from './model/interface';
import { FormProvider, SubmitHandler, useFieldArray, useForm, useFormContext } from "react-hook-form";

function Jobs(){
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({ name: 'job' });

  return (
    <>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <div style={{ float: 'right' }}>
            <button
              type="button"
              onClick={() => remove(index)}
            >
              X
            </button>
          </div>
          <label>회사명</label>
          <input placeholder="회사명" {...register(`job.${index}.company`)} />
          <label>직무</label>
          <input placeholder="직무" {...register(`job.${index}.role`)} />
          <label>기간</label>
          <input placeholder="YYYY.MM - YYYY.MM" {...register(`job.${index}.period`)} />
          <label>상세 업무 및 성과</label>
          <textarea placeholder="상세 업무 및 성과" {...register(`job.${index}.description`)} />
        </div>
      ))}
      <div className="flex-center">
        <button
          type="button"
          onClick={() => append(1)}
        >
          +
        </button>
      </div>
    </>
  )
}

function Certificates(){
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({ name: 'certificate' });

  return (
    <>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <div style={{ float: 'right' }}>
            <button
              type="button"
              onClick={() => remove(index)}
            >
              X
            </button>
          </div>
          <label>자격증</label>
          <input placeholder="자격증" {...register(`certificate.${index}.name`)} />

          <label>기간</label>
          <input placeholder="YYYY.MM - YYYY.MM" {...register(`certificate.${index}.period`)} />
        </div>
      ))}
      <div className="flex-center">
        <button
          type="button"
          onClick={() => append(1)}
        >
          +
        </button>
      </div>
    </>
  )
}


function App() {
  const pdf = usePdfMake();

  const methods = useForm<Values>({
    defaultValues:{
      job: [{ company: '', role: '', description: '', period: '' }],
      certificate: [{ name: '', period: '' }],
    },
  });

  const { register, handleSubmit, watch, formState: { errors } } = methods
  const onSubmit: SubmitHandler<Values> = data => {
    pdf
      .createPdf(typesetting(data))
      .download();  
  }

  return (
    <div className="App">
      <FormProvider {...methods} >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex-end">
            <button type="submit">
              PDF 다운로드
            </button>
          </div>

          <h2>기본 정보</h2>
          <input placeholder="이름" {...register("name")} />
          <input placeholder="이메일" {...register("email")} />
          <input placeholder="연락처" {...register("phone")} />
          <input placeholder="블로그/웹사이트" {...register("site")} />
          <textarea placeholder="소개" {...register("description")} />
          
          <h2>경력</h2>
          <Jobs />
            
          <h2>학력</h2>
          <input placeholder="학교명" {...register("school")} />
          <input placeholder="전공 및 학위" {...register("schoolMajor")} />
          <input aria-label='기간' placeholder="YYYY.MM - YYYY.MM" {...register("schoolPeriod")} />
          <textarea placeholder="연구내용" {...register("schoolContent")} />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button>+</button>
          </div>

          <h2>수상/자격증</h2>
          <Certificates />
          
          <h2>기타</h2>
          <input placeholder="기타" {...register("language")} />
        </form>
      </FormProvider>
    </div >
  );
}

export default App;
