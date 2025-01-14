import { useState } from "react";
import JSONEditor from "../components/JSONEditor";
import { Button } from "@/components/ui/button";
import Form from "./form";

enum Tab {
  FORM,
  JSON,
}

export default function App() {
  const [tab, setTab] = useState(Tab.FORM);

  return (
    <div className="h-full flex flex-col">
      <div className="flex">
        <Button type="button" onClick={() => setTab(Tab.FORM)}>
          Form
        </Button>
        <Button type="button" onClick={() => setTab(Tab.JSON)}>
          JSON
        </Button>
      </div>
      {tab === Tab.FORM ? <Form /> : <JSONEditor />}
    </div>
  );
}
