import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

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
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>Description</CardDescription>
            </CardHeader>
            <CardContent>
                <img
                    src={imgUrl}
                    alt={title}
                    className="w-full object-cover cursor-pointer"
                />
            </CardContent>
            <CardFooter>
                {stack.map((item) => (
                    <span>
                        {item}
                    </span>
                ))}
            </CardFooter>
        </Card>
    )
}

export default ProjectCard;