import usePdfMake from './service/usePdfMake';
import { Field, FieldArray, Form, Formik } from 'formik';
import { PersistFormikValues } from 'formik-persist-values';
import typesetting from './service/typesetting';
import './App.css';
import { Values } from './model/interface';

function App() {
  const pdf = usePdfMake();

  const handleSubmit = (values: Values) => {
    pdf
      .createPdf(typesetting(values))
      .download();
  };

  return (
    <div className="App">
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          site: '',
          description: '',
          school: '',
          schoolMajor: '',
          schoolPeriod: '',
          schoolContent: '',
          job: [{ 
            company: '',
            role: '', 
            description: '', 
            period: '', 
          }],
          certificate: [{ 
            name: '',
            period: '', 
          }],
          language: '',
        }}
        onSubmit={handleSubmit}
        render={({ values }) => (
          <Form autoComplete="off">
            <div className="flex-end">
              <button type="submit">
                PDF 다운로드
              </button>
            </div>
            <h2>기본 정보</h2>
            <Field type="text" name="name" label="이름" placeholder="이름" />
            <Field type="text" name="email" label="이메일" placeholder="이메일" />
            <Field type="text" name="phone" label="연락처" placeholder="연락처" />
            <Field type="text" name="site" label="블로그/웹사이트" placeholder="블로그/웹사이트" />
            <Field type="text" name="description" label="소개" placeholder="소개" as="textarea" />
            <h2>경력</h2>
            <FieldArray
              name="job"
              render={arrayHelpers => (
                <div>
                  {values.job.map((job, index) => (
                    <div key={index}>
                      <div style={{ float: 'right' }}>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          X
                        </button>
                      </div>
                      <Field type="text" name={`job.${index}.company`} label="회사명" placeholder="회사명" />
                      <Field type="text" name={`job.${index}.role`} label="직무" placeholder="직무" />
                      <Field type="text" name={`job.${index}.period`} label="기간" placeholder="YYYY.MM - YYYY.MM" />
                      <Field type="text" name={`job.${index}.description`} label="상세 업무 및 성과" placeholder="상세 업무 및 성과" as="textarea" />
                    </div>
                  ))}
                  <div className="flex-center">
                    <button
                      type="button"
                      onClick={() => arrayHelpers.push({ company: '' })}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            />
            <h2>학력</h2>
            <Field type="text" name="school" label="학교명" placeholder="학교명" />
            <Field type="text" name="schoolMajor" label="전공 및 학위" placeholder="전공 및 학위" />
            <Field type="text" name="schoolPeriod" label="기간" placeholder="YYYY.MM - YYYY.MM" />
            <Field type="text" name="schoolContent" label="연구내용" placeholder="연구내용" as="textarea" />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button>+</button>
            </div>
            {/* <h2>개인 프로젝트</h2> */}
            <h2>수상/자격증</h2>
            <FieldArray
              name="certificate"
              render={arrayHelpers => (
                <div>
                  {values.certificate.map((certificate, index) => (
                    <div key={index}>
                      <div style={{ float: 'right' }}>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          X
                        </button>
                      </div>
                      <Field type="text" name={`certificate.${index}.name`} label="자격증" placeholder="자격증" />
                      <Field type="text" name={`certificate.${index}.period`} label="기간" placeholder="YYYY.MM - YYYY.MM" />
                    </div>
                  ))}
                  <div className="flex-center">
                    <button
                      type="button"
                      onClick={() => arrayHelpers.push({ name: '' })}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            />
            <h2>기타</h2>
            <Field type="text" name="language" label="기타" placeholder="기타" />
            <PersistFormikValues name="resume-form" />
          </Form>
        )}
      />
    </div >
  );
}

export default App;
