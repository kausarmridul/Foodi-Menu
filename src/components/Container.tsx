import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};
const Container = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`xl:w-355 container mx-auto px-3 xl:px-0 sm:px-2 ${className} `}
    >
      {children}
    </div>
  );
};

export default Container;
