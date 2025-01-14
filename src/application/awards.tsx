import { awardsDefaultValue } from "../model/defaultValues";
import { FieldArrayWithId, useFormContext } from "react-hook-form";
import useFieldArrayUtils from "../service/useFieldArrayUtils";
import FieldContainer from "@/components/ui/field-container";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import { IAwards } from "@/model/interface";

function Awards() {
  const { register } = useFormContext();
  const { fields, Remove, Append } = useFieldArrayUtils({ name: "awards" });

  return (
    <>
      <Title>Awards</Title>
      {fields.map((field: FieldArrayWithId<IAwards>, index: number) => (
        <FieldContainer key={field.id}>
          <Remove index={index} />
          <Input placeholder="title" {...register(`awards.${index}.title`)} />
          <Input placeholder="date" {...register(`awards.${index}.date`)} />
          <Input
            placeholder="awarder"
            {...register(`awards.${index}.awarder`)}
          />
          <Input
            placeholder="summary"
            {...register(`awards.${index}.summary`)}
          />
        </FieldContainer>
      ))}

      <Append defaultValue={awardsDefaultValue} />
    </>
  );
}

export default Awards;
