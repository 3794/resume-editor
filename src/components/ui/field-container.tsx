import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function FieldContainer({ children }: Props) {
  return <div className="grid gap-2">{children}</div>;
}
