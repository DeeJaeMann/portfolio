import React from "react";

interface PortfolioItemProps {
  title: string;
  imgUrl: string;
  stack: string[];
  link: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title = "Missing",
  imgUrl = "",
  stack = ["None"],
  link = "",
}) => {
  return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-stone-900 rounded-md overflow-hidden dark:border-white"
      >
        <img
          src={imgUrl}
          alt={title}
          className="h-full h-36 object-cover cursor-pointer md:h-48"
        />
        <div className="w-full p-4">
          <h3 className="text-lg mb-2 font-semibold md:text-xl md:mb-3 dark:text-white">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
            {stack.map((item) => (
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md dark:border-white">
                {item}
              </span>
            ))}
          </p>
        </div>
      </a>
  );
};

export default PortfolioItem;
