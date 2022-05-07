import { useFormContext } from "react-hook-form";
import useFieldArrayUtils from "../service/useFieldArrayUtils";

function Interests(){
  const { register } = useFormContext();
  const { fields, Remove, Append } = useFieldArrayUtils({ name: 'interests.keywords' });
  const profilesDefaultValue = {
    keywords: ''
  };

  return (
    <>
      <h2>Interests</h2>
      <input placeholder="Name" {...register(`interests.name`)} />

      {fields.map((field: any, index: number) => (
        <div key={field.id}>

          <Remove index={index} />

          <input placeholder="keywords" {...register(`interests.${index}.keywords`)} />
        </div>
      ))}

      <Append defaultValue={profilesDefaultValue}/>
    </>
  )
}

export default Interests;
