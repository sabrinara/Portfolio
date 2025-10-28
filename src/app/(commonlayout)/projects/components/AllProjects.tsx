"use client";

import React, { useEffect, useState } from "react";
import { getProjects } from "@/services/projects";
import { Project } from "@/types/projects";
import Image from "next/image";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import LoadingUI from "../../shared/Loading/LoadingUI";

const AllProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const data = await getProjects();
                setProjects(data);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch projects.");
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading)
        return (
            <div>
                <LoadingUI />
            </div>
        )
    if (error) return <p className="text-red-500 mt-4">{error}</p>;

    return (
        <section className="scroll-mt-[100px] md:scroll-mt-[60px] my-6" id="projects">
             <h1 className="text-3xl font-semibold text-center mb-8 text-text">
                All <span className="text-hovertext">Projects</span>
            </h1>

            <Table className="border rounded-lg overflow-hidden">
                <TableHeader>
                    <TableRow >
                        <TableHead className="w-[120px]">Image</TableHead>
                        <TableHead className="text-center">Title</TableHead>
                        <TableHead className="text-center">Subtitle</TableHead>
                        <TableHead className="text-center">Category</TableHead>
                        <TableHead className="text-center">Technologies</TableHead>
                        <TableHead className="text-center">Type</TableHead>
                        <TableHead className="text-center">Details</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {projects.map((project) => (
                        <TableRow
                            key={project._id}
                            className="cursor-pointer hover:bg-muted/50 transition"

                        >
                            <TableCell>
                                {project.imageArray && project.imageArray.length > 0 ? (
                                    <div className="relative w-[100px] h-[60px]">
                                        <Image
                                            src={project.imageArray[0]}
                                            alt={project.title}
                                            fill
                                            className="w-full h-full rounded-sm shadow-lg object-cover object-top ease-in-out duration-[8s] hover:object-bottom"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-[100px] h-[60px] bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded">
                                        No Image
                                    </div>
                                )}
                            </TableCell>
                            <TableCell className="font-semibold">{project.title}</TableCell>
                            <TableCell>{project.subTitle || "-"}</TableCell>
                            {/* <TableCell className="text-sm max-w-[200px] md:max-w-[300px] overflow-hidden">
  {project.description?.slice(0,100) || "-"}
</TableCell> */}
                            <TableCell className="">{project.category}</TableCell>
                            <TableCell>
                                {project.technologies && project.technologies.length > 0 ? (
                                    <div className="grid md:grid-cols-5 gap-1 text-center">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-secondary/10 text-hovertext hover:text-primary px-2 py-[2px] rounded-full text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    "-"
                                )}
                            </TableCell>
                            <TableCell className="">{project.type}</TableCell>
                            <TableCell className="text-hovertext text-xs" onClick={() => router.push(`/projects/${project._id}`)}><div className="flex items-center bg-secondary/10 py-1 px-2 rounded-full hover:bg-hovertext/10">View <ArrowUpRight size={14} /></div> </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>


        </section>
    );
};

export default AllProjects;
