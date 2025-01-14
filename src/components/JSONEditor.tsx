import { resumeStore } from "@/store/resumeStore";
import { useSyncExternalStore } from "react";

export default function JSONEditor() {
  const resumeData = useSyncExternalStore(
    resumeStore.subscribe,
    resumeStore.getSnapshot
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    resumeStore.updateText(e.target.value);
  };

  return (
    <textarea
      defaultValue={JSON.stringify(resumeData, null, 2)}
      onChange={handleChange}
      className="flex-1 w-full border border-gray-300"
    />
  );
}
