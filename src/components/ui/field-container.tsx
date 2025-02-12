import React from "react";

type Props = {
  children: React.ReactNode;
};
const FieldContainer = ({ children }: Props) => {
  return <div className="grid gap-2">{children}</div>;
};

export default FieldContainer;
