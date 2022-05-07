import { IResume } from "../model/interface";

export default function typesetting(values: IResume) {
  const {
    basics,
    work,certificates
  } = values;

  const works = work.reduce((prev: any[], { name, position, summary, startDate, endDate }) => {
    return [
      ...prev,
      { text: position, style: 'h3' },
      {
        stack: [
          { text: name, style: 'h4' },
          startDate, endDate,
          { text: '', style: 'br' },
          summary,
        ],
        style: 'superMargin'
      }
    ];
  }, []);

  const _certificates = certificates.reduce((prev: any[], { name, date }) => {
    return [...prev, name, date, { text: '', style: 'br' }];
  }, []);

  return [
    { text: basics.name, style: 'h1' },
    basics.email,
    basics.phone,
    basics.url,
    { text: '', style: 'br' },
    basics.summary,
    { text: '', style: 'br' },
    { text: '경력', style: 'h2' },
    works,
    { text: '', style: 'br' },
    { text: '자격증', style: 'h2' },
    _certificates,
  ];
}
