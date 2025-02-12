import React, { useState } from "react";
import { FieldArrayWithId, useFormContext } from "react-hook-form";
import { volunteerDefaultValue } from "../model/defaultValues";
import useFieldArrayUtils from "../service/useFieldArrayUtils";
import { Title } from "@/components/ui/title";
import FieldContainer from "@/components/ui/field-container";
import { Input } from "@/components/ui/input";
import { ISkills } from "@/model/interface";

function HighLights({ index }: { index: number }) {
  const { setValue, getValues } = useFormContext();
  const [fields, setFields] = useState<string[]>([""]);

  const handleAppend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFields(["", ...fields]);
  };

  const handleChangeHighlight = (
    e: React.ChangeEvent<HTMLInputElement>,
    highlightIndex: number
  ) => {
    const value = e.target.value;
    const keywords = getValues(`skills.${index}.keywords`) || [];
    keywords[highlightIndex] = value;
    setValue(`skills.${index}.keywords`, keywords);
  };

  return (
    <>
      {fields.map((_: string, index: number) => (
        <div key={index}>
          <Input
            placeholder="keywords"
            onChange={(e) => handleChangeHighlight(e, index)}
          />
        </div>
      ))}
      <button onClick={handleAppend}>+</button>
    </>
  );
}

function Skills() {
  const { register } = useFormContext();
  const { fields, Remove, Append } = useFieldArrayUtils({ name: "skills" });

  return (
    <>
      <Title>Skills</Title>
      {fields.map((field: FieldArrayWithId<ISkills>, index: number) => (
        <FieldContainer key={field.id}>
          <Remove index={index} />
          <Input placeholder="name" {...register(`skills.${index}.name`)} />
          <Input placeholder="level" {...register(`skills.${index}.level`)} />
          <Input type="hidden" {...register(`skills.${index}.keywords`)} />
          <HighLights index={index} />
        </FieldContainer>
      ))}

      <Append defaultValue={volunteerDefaultValue} />
    </>
  );
}

export default Skills;
