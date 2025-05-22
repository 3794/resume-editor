import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Certificates from "./certificates";
import Education from "./education";
import Basics from "./basics";
import Work from "./work";
import Volunteer from "./volunteer";
import Awards from "./awards";
import Publications from "./publications";
import Skills from "./skills";
import Languages from "./languages";
import Interests from "./interests";
import References from "./references";
import Projects from "./projects";
import { IResume } from "../model/interface";
import { Button } from "@/components/ui/button";
import { useEffect, useSyncExternalStore } from "react";
import { resumeStore } from "../store/resumeStore";
import Activities from "./activities";
import { usePDF } from "@react-pdf/renderer";
import { MyDocument } from "@/service/typesetting";

export default function Form() {
  const resumeData = useSyncExternalStore(
    resumeStore.subscribe,
    resumeStore.getSnapshot
  );

  const methods = useForm<IResume>({
    defaultValues: resumeData,
  });

  const { handleSubmit, watch } = methods;
  const [instance, update] = usePDF({
    document: <MyDocument {...resumeData} />,
  });

  const onSubmit: SubmitHandler<IResume> = () => {
    if (instance.url) {
      const link = document.createElement("a");
      link.href = instance.url;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Subscribe to form changes and update store
  useEffect(() => {
    const subscription = watch((value) => {
      const v = value as IResume;
      resumeStore.update(v);
      update(<MyDocument {...v} />);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="p-10">
      <FormProvider {...methods}>
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
          <Activities />
          <Skills />
          <Languages />
          <Interests />
          <References />
          <Projects />
        </form>
      </FormProvider>
    </div>
  );
}
