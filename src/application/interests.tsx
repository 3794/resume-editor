import { FieldArrayWithId, useFormContext } from "react-hook-form";
import useFieldArrayUtils from "../service/useFieldArrayUtils";
import { Title } from "@/components/ui/title";
import FieldContainer from "@/components/ui/field-container";
import { Input } from "@/components/ui/input";
import { IInterests } from "@/model/interface";

function Interests() {
  const { register } = useFormContext();
  const { fields, Remove, Append } = useFieldArrayUtils({
    name: "interests.keywords",
  });
  const profilesDefaultValue = {
    keywords: "",
  };

  return (
    <>
      <Title>Interests</Title>
      <Input placeholder="Name" {...register("interests.name")} />

      {fields.map((field: FieldArrayWithId<IInterests>, index: number) => (
        <FieldContainer key={field.id}>
          <Remove index={index} />

          <Input
            placeholder="keywords"
            {...register(`interests.${index}.keywords`)}
          />
        </FieldContainer>
      ))}

      <Append defaultValue={profilesDefaultValue} />
    </>
  );
}

export default Interests;
