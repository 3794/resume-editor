import { resumeStore } from "@/store/resumeStore";
import { useSyncExternalStore } from "react";
import { Button } from "./ui/button";

export default function JSONEditor() {
  const resumeData = useSyncExternalStore(
    resumeStore.subscribe,
    resumeStore.getSnapshot
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    resumeStore.updateText(e.target.value);
  };

  const handleDownload = () => {
    const jsonString = JSON.stringify(resumeData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "resume.json";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex-1 flex flex-col p-10">
      <div className="flex justify-end">
        <Button onClick={handleDownload}>Download JSON</Button>
      </div>
      <textarea
        defaultValue={JSON.stringify(resumeData, null, 2)}
        onChange={handleChange}
        className="flex-1 w-full border border-gray-300"
      />
    </div>
  );
}
