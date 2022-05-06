import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Values } from '../model/interface';
import typesetting from '../service/typesetting';
import usePdfMake from '../service/usePdfMake';
import Jobs from './Jobs';
import Certificates from './Certificates';
import './App.css';

function App() {
  const pdf = usePdfMake();

  const methods = useForm<Values>({
    defaultValues:{
      job: [{ company: '', role: '', description: '', period: '' }],
      certificate: [{ name: '', period: '' }],
    },
  });

  const { register, handleSubmit } = methods;

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
