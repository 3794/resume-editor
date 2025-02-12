import { ContentElement, IResume } from "../model/interface";

export default function typesetting(values: IResume): ContentElement[] {
  const { basics, work, certificates, education } = values;

  const educations = education.reduce(
    (prev: any[], { institution, area, studyType, startDate, endDate }) => {
      return [
        ...prev,
        { text: institution, style: "h3" },
        {
          stack: [
            { text: `${area} ${studyType}`, style: "h4" },
            { text: `${startDate} ~ ${endDate}`, style: "span" },
            { text: "", style: "br" },
          ],
          style: "superMargin",
        },
      ];
    },
    []
  );

  const works = work.reduce(
    (prev: any[], { name, position, summary, startDate, endDate }) => {
      return [
        ...prev,
        { text: position, style: "h3" },
        {
          stack: [
            { text: name, style: "h4" },
            { text: `${startDate} ~ ${endDate}`, style: "span" },
            { text: "", style: "br" },
            summary,
          ],
          style: "superMargin",
        },
      ];
    },
    []
  );

  const _certificates = certificates.reduce((prev: any[], { name, date }) => {
    return [...prev, name, date, { text: "", style: "br" }];
  }, []);

  return [
    { text: basics.name, style: "h1" },
    basics.email,
    basics.phone,
    basics.url,
    { text: "", style: "br" },
    basics.summary,
    { text: "", style: "br" },
    { text: "경력", style: "h2" },
    works,
    { text: "", style: "br" },
    { text: "교육", style: "h2" },
    educations,
    { text: "", style: "br" },
    { text: "자격증", style: "h2" },
    _certificates,
  ];
}
