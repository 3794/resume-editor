import { languagesDefaultValues } from "../model/defaultValues";
import { FieldArrayWithId, useFormContext } from "react-hook-form";
import useFieldArrayUtils from "../service/useFieldArrayUtils";
import { Title } from "@/components/ui/title";
import FieldContainer from "@/components/ui/field-container";
import { Input } from "@/components/ui/input";
import { ILanguages } from "@/model/interface";

function Languages() {
  const { register } = useFormContext();
  const { fields, Remove, Append } = useFieldArrayUtils({ name: "languages" });

  return (
    <>
      <Title>Languages</Title>
      {fields.map((field: FieldArrayWithId<ILanguages>, index: number) => (
        <FieldContainer key={field.id}>
          <Remove index={index} />
          <Input
            placeholder="language"
            {...register(`languages.${index}.language`)}
          />
          <Input
            placeholder="fluency"
            {...register(`languages.${index}.fluency`)}
          />
        </FieldContainer>
      ))}

      <Append defaultValue={languagesDefaultValues} />
    </>
  );
}

export default Languages;
