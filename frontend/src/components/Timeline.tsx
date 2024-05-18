import timeline from "@/data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

const Timeline = () => {
  return (
    <div className="flex flex-col justify-center my-20 md:flex-row">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timeline.map((item) => (
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
