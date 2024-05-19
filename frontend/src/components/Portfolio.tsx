import portfolio from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((project, index) => (
          <ProjectCard
            key={index}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
            details={project.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
