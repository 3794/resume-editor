import { useFormContext, FieldArrayWithId } from "react-hook-form";
import useFieldArrayUtils from "../service/useFieldArrayUtils";
import { Title } from "@/components/ui/title";
import { Input } from "@/components/ui/input";
import { IActivity } from "@/model/interface";
import { activitiesDefaultValues } from "@/model/defaultValues";

export default function Activities() {
  const { register } = useFormContext();
  const { fields, Remove, Append } = useFieldArrayUtils({
    name: "activities",
  });

  return (
    <>
      <Title>Activities</Title>
      {fields.map((field: FieldArrayWithId<IActivity>, index: number) => (
        <div key={field.id}>
          <Remove index={index} />
          <Input
            placeholder="summary"
            {...register(`activities.${index}.summary`)}
          />
          <Input placeholder="url" {...register(`activities.${index}.url`)} />
        </div>
      ))}

      <Append defaultValue={activitiesDefaultValues} />
    </>
  );
}
