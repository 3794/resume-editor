// import { ContentElement, IResume } from "../model/interface";
import {
  Font,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { IResume } from "@/model/interface";

Font.register({
  // family: "SpoqaHanSans",
  // src: "https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansLight.ttf",

  family: "roboto",
  src: "https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf",
});

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "roboto",
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    textAlign: "left",
    lineHeight: 1.2,
  },
  title1: {
    fontSize: 22,
    marginBottom: 20,
  },
  title2: {
    fontSize: 18,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20,
  },
  title3: {
    fontSize: 16,
  },
  title4: {
    fontSize: 14,
  },
  section: {
    fontSize: 12,
    marginBottom: 20,
  },
  work: {
    marginBottom: 15,
    fontSize: 12,
  },
  url: {
    fontSize: 9,
  },
});

//   return [
//     { text: basics.name, style: "h1" },
//     { text: basics.email, style: "span" },
//     { text: basics.phone, style: "span" },
//     basics.url,
//     { text: "", style: "br" },
//     { text: basics.summary, style: "span" },
//     { text: "", style: "br" },
//     { text: "경력", style: "h2" },
//     works,
//     { text: "", style: "br" },
//     { text: "교육", style: "h2" },
//     educations,
//     { text: "", style: "br" },
//     { text: "자격증", style: "h2" },
//     _certificates,
//     { text: "", style: "br" },
//     { text: "활동", style: "h2" },
//     _activities,
//   ];
// }

export const MyDocument = (values: IResume) => {
  console.log(values);
  const { basics, work, certificates, education, activities } = values;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.title1}>
          <Text>{basics.name}</Text>
        </View>
        <View style={styles.section}>
          <Text>{basics.email}</Text>
          <Text>{basics.phone}</Text>
          <Text>{basics.url}</Text>
        </View>
        <View style={styles.section}>
          <Text>{basics.summary}</Text>
        </View>

        <Text style={styles.sectionTitle}>경력</Text>
        {work.map(
          ({ name, url, position, summary, startDate, endDate }, index) => {
            console.log(`${name}-${index}`);
            return (
              <View style={styles.work} key={`${name}-${index}`}>
                <Text style={styles.title3}>{position}</Text>

                <Text style={styles.title4}>{name}</Text>
                <Text style={styles.url}>{url}</Text>
                <Text>{`${startDate} ~ ${endDate}`}</Text>
                <View style={{ marginLeft: 10 }}>
                  {summary.split("\n").map((line) => (
                    <Text>{line}</Text>
                  ))}
                </View>
              </View>
            );
          }
        )}
        <Text style={styles.sectionTitle}>교육</Text>
        {education.map(
          ({ institution, area, studyType, startDate, endDate }, index) => {
            return (
              <View style={styles.section} key={`${institution}-${index}`}>
                <Text>{institution}</Text>
                <View>
                  <Text>{area}</Text>
                  <Text>{`${startDate} ~ ${endDate}`}</Text>
                </View>
              </View>
            );
          }
        )}
        <Text style={styles.sectionTitle}>자격증</Text>
        {certificates.map(({ name, date, issuer, url }, index) => {
          return (
            <View style={styles.section} key={`${name}-${index}`}>
              <Text>{name}</Text>
              <Text>{date}</Text>
            </View>
          );
        })}
        <Text style={styles.sectionTitle}>활동</Text>
        {activities.map(({ summary, url }, index) => {
          return (
            <View style={styles.section} key={`${summary}-${index}`}>
              <Text>{summary}</Text>
              <Text>{url}</Text>
            </View>
          );
        })}
      </Page>
    </Document>
  );
};

// export default function typesetting(values: IResume): ContentElement[] {
//   const { basics, work, certificates, education, activities } = values;

//   const educations = education.reduce(
//     (prev: any[], { institution, area, studyType, startDate, endDate }) => {
//       return [
//         ...prev,
//         { text: institution, style: "h3" },
//         {
//           stack: [
//             { text: `${area} ${studyType}`, style: "h4" },
//             { text: `${startDate} ~ ${endDate}`, style: "span" },
//             { text: "", style: "br" },
//           ],
//         },
//       ];
//     },
//     []
//   );

//   const works = work.reduce(
//     (prev: any[], { name, position, summary, startDate, endDate }) => {
//       console.log(summary.split("\n"));
//       return [
//         ...prev,
//         { text: position, style: "h3" },
//         {
//           stack: [
//             { text: name, style: "h4" },
//             { text: `${startDate} ~ ${endDate}`, style: "span" },
//             { text: "", style: "br" },
//             summary.split("\n").map((line) => ({ text: line, style: "span" })),
//           ],
//           style: "superMargin",
//         },
//       ];
//     },
//     []
//   );

//   const _certificates = certificates.reduce((prev: any[], { name, date }) => {
//     return [...prev, name, date, { text: "", style: "br" }];
//   }, []);

//   const _activities = activities.reduce((prev: any[], { summary, url }) => {
//     return [...prev, summary, url, { text: "", style: "br" }];
//   }, []);

//   return [
//     { text: basics.name, style: "h1" },
//     { text: basics.email, style: "span" },
//     { text: basics.phone, style: "span" },
//     basics.url,
//     { text: "", style: "br" },
//     { text: basics.summary, style: "span" },
//     { text: "", style: "br" },
//     { text: "경력", style: "h2" },
//     works,
//     { text: "", style: "br" },
//     { text: "교육", style: "h2" },
//     educations,
//     { text: "", style: "br" },
//     { text: "자격증", style: "h2" },
//     _certificates,
//     { text: "", style: "br" },
//     { text: "활동", style: "h2" },
//     _activities,
//   ];
// }
