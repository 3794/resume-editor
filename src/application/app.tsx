import { useState, useSyncExternalStore } from "react";
import JSONEditor from "../components/JSONEditor";
import Form from "./form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MyDocument } from "@/service/typesetting";
import { resumeStore } from "@/store/resumeStore";
import { PDFViewer } from "@react-pdf/renderer";

enum Tab {
  FORM,
  JSON,
}

export default function App() {
  return (
    <div className="relative h-full">
      <div className="w-1/2 p-4 overflow-auto h-full">
        <FormContainer />
      </div>
      <div className="fixed top-0 right-0 w-1/2 h-screen">
        <Preview />
      </div>
    </div>
  );
}

function Preview() {
  const resumeData = useSyncExternalStore(
    resumeStore.subscribe,
    resumeStore.getSnapshot
  );

  return (
    <PDFViewer showToolbar={false} width="100%" height="100%">
      <MyDocument {...resumeData} />
    </PDFViewer>
  );
}

function FormContainer() {
  const [tab, setTab] = useState(Tab.FORM);

  return (
    <div className="h-full flex flex-col">
      <div className="flex">
        <Tabs defaultValue="FORM" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="FORM" onClick={() => setTab(Tab.FORM)}>
              Form
            </TabsTrigger>
            <TabsTrigger value="JSON" onClick={() => setTab(Tab.JSON)}>
              JSON
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {tab === Tab.FORM ? <Form /> : <JSONEditor />}
    </div>
  );
}
