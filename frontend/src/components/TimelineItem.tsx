import React from "react";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  year: string;
  title: string;
  duration: string;
  details: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year = "Today",
  title = "",
  duration = "",
  details = "There is no entry",
}) => {
  return (
    <ol className="flex flex-col relative border-l border-stone-200 md:flex-row dark:border-stone-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:bg-stone-700 dark:border-stone-900" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <Badge>{year}</Badge>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
          {details}
        </p>
      </li>
    </ol>
  );
};

export default TimelineItem;
