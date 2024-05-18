import React from "react";

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children}) => {
  return (
    <h2
      className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white"
    >
        {children}
    </h2>
  );
};

export default Title;
