import React from "react";

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return <h2 className="text-2xl">{children}</h2>;
};
Title.displayName = "Title";

export { Title };
