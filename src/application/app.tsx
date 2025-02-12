import { useState } from "react";
import JSONEditor from "../components/JSONEditor";
import Form from "./form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

enum Tab {
  FORM,
  JSON,
}

export default function App() {
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
