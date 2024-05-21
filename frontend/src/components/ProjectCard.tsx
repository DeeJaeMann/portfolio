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
  details: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title = "Missing",
  imgUrl = "assets/blank.png",
  stack = ["None"],
  link = "",
  details = "",
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
        </CardHeader>
        <CardContent>
          <center>

          <img
            src={imgUrl}
            alt={title}
            className="w-full max-h-64 object-cover cursor-pointer rounded-md"
            />
            </center>
          <CardDescription className="mt-2 mx-2">{details}</CardDescription>
        </CardContent>
        <CardFooter className="flex-wrap justify-around mx-2 md:text-sm">
          {stack.map((item, index) => (
            <Badge key={index} variant="outline" className="px-2 py-1 my-1">
              {item}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProjectCard;
