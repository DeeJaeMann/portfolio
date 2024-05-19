import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  imgUrl: string;
  stack: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
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
        className="overflow-hidden"
    >
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src={imgUrl}
            alt={title}
            className="w-full object-cover cursor-pointer rounded-md"
          />
        </CardContent>
        <CardFooter className="flex-wrap justify-between mx-2 md:text-sm">
          {stack.map((item) => (
            <Badge 
                variant="outline"
                className="px-2 py-1 my-1"
            >
                {item}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProjectCard;
