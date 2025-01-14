import { certificatesDefaultValue } from "../model/defaultValues";
import { FieldArrayWithId, useFormContext } from "react-hook-form";
import useFieldArrayUtils from "../service/useFieldArrayUtils";
import { Title } from "@/components/ui/title";
import FieldContainer from "@/components/ui/field-container";
import { Input } from "@/components/ui/input";
import { ICertificates } from "@/model/interface";

function Certificates() {
  const { register } = useFormContext();
  const { fields, Remove, Append } = useFieldArrayUtils({
    name: "certificates",
  });

  return (
    <>
      <Title>Certificates</Title>
      {fields.map((field: FieldArrayWithId<ICertificates>, index: number) => (
        <FieldContainer key={field.id}>
          <Remove index={index} />
          <Input
            placeholder="name"
            {...register(`certificates.${index}.name`)}
          />
          <Input
            placeholder="date"
            {...register(`certificates.${index}.date`)}
          />
          <Input
            placeholder="issuer"
            {...register(`certificates.${index}.issuer`)}
          />
          <Input placeholder="url" {...register(`certificates.${index}.url`)} />
        </FieldContainer>
      ))}

      <Append defaultValue={certificatesDefaultValue} />
    </>
  );
}

export default Certificates;
