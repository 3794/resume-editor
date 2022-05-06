import { Values } from "./interface";

export default function typesetting(values: Values) {
  const {
    name,
    email,
    phone,
    site,
    description,
    job,
    school,
    schoolMajor,
    schoolPeriod,
    schoolContent,
    certificate,
    language,
  } = values;

  const jobs = job.reduce((prev: any[], { company, role, description, period }) => {
    return [
      ...prev,
      { text: role, style: 'h3' },
      {
        stack: [
          { text: company, style: 'h4' },
          period,
          { text: '', style: 'br' },
          description,
        ],
        style: 'superMargin'
      }
    ];
  }, []);

  const certificates = certificate.reduce((prev: any[], { name, period }) => {
    return [...prev, name, period, { text: '', style: 'br' }];
  }, []);

  return [
    { text: name, style: 'h1' },
    email,
    phone,
    site,
    { text: '', style: 'br' },
    description,
    { text: '', style: 'br' },
    { text: '경력', style: 'h2' },
    jobs,
    { text: '학력', style: 'h2' },
    school,
    schoolMajor,
    schoolPeriod,
    schoolContent,
    { text: '', style: 'br' },
    { text: '자격증', style: 'h2' },
    certificates,
    { text: '기타', style: 'h2' },
    language,
  ];
}
