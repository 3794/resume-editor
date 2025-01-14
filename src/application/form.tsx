import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import typesetting from "../service/typesetting";
import usePdfMake from "../service/usePdfMake";
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

export default function Form() {
  const pdf = usePdfMake();

  const resumeData = useSyncExternalStore(
    resumeStore.subscribe,
    resumeStore.getSnapshot
  );

  const methods = useForm<IResume>({
    defaultValues: resumeData,
  });

  const { handleSubmit, watch } = methods;

  // Subscribe to form changes and update store
  useEffect(() => {
    const subscription = watch((value) => {
      resumeStore.update(value as IResume);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<IResume> = (data) => {
    pdf.createPdf(typesetting(data)).download();
  };

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
