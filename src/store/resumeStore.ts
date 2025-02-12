import { IResume } from "../model/interface";
import { resumeDefaultValues } from "../model/defaultValues";

type Listener = () => void;

const listeners = new Set<Listener>();
let resumeData: IResume = resumeDefaultValues;

export const resumeStore = {
  subscribe(listener: Listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot() {
    return resumeData;
  },
  update(data: IResume) {
    resumeData = data;
    listeners.forEach((listener) => listener());
  },
  updateText(text: string) {
    console.log("update", text);
    try {
      const newData: Partial<IResume> = JSON.parse(text);
      resumeData = {
        ...resumeDefaultValues, // 먼저 기본값으로 시작
        ...resumeData, // 현재 상태 유지
        ...newData, // 새로운 데이터로 덮어쓰기
      };

      listeners.forEach((listener) => listener());
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  },
};
