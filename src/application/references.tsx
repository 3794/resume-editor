import { referencesDefaultValues } from "../model/defaultValues";
import { FieldArrayWithId, useFormContext } from "react-hook-form";
import useFieldArrayUtils from "../service/useFieldArrayUtils";
import { Title } from "@/components/ui/title";
import FieldContainer from "@/components/ui/field-container";
import { Input } from "@/components/ui/input";
import { IReferences } from "@/model/interface";

function References() {
  const { register } = useFormContext();
  const { fields, Remove, Append } = useFieldArrayUtils({ name: "references" });

  return (
    <>
      <Title>References</Title>
      {fields.map((field: FieldArrayWithId<IReferences>, index: number) => (
        <FieldContainer key={field.id}>
          <Remove index={index} />
          <Input placeholder="name" {...register(`references.${index}.name`)} />
          <Input
            placeholder="reference"
            {...register(`references.${index}.reference`)}
          />
        </FieldContainer>
      ))}

      <Append defaultValue={referencesDefaultValues} />
    </>
  );
}

export default References;
