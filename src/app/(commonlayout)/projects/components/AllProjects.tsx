"use client";

import React, { useEffect, useState, useMemo } from "react";
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
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import LoadingUI from "../../shared/Loading/LoadingUI";
import Link from "next/link";

const AllProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");

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

  const categories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    [projects]
  );

  const types = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.type))],
    [projects]
  );

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const matchType = selectedType === "All" || p.type === selectedType;
      return matchCategory && matchType;
    });
  }, [projects, selectedCategory, selectedType]);

  if (loading)
    return (
      <div>
        <LoadingUI />
      </div>
    );
  if (error) return <p className="text-red-500 mt-4">{error}</p>;

  return (
    <section className="scroll-mt-[100px] md:scroll-mt-[60px] my-6" id="projects">
      <h1 className="text-3xl font-semibold text-center mb-8 text-text">
        All <span className="text-hovertext">Projects</span>
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 mx-2">
        <div>
          <label className="text-sm font-medium mr-2 text-text mb-2">Filter by Category</label>
          <br />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border text-xs bg-background text-text rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-hovertext"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium mr-2 text-text mb-2">Filter by Type</label>
            <br />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
           className="border text-xs bg-background text-text rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-hovertext"
          >
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <Table className="border rounded-lg overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Image</TableHead>
            <TableHead className="text-center">Title</TableHead>
            {/* <TableHead className="text-center">Subtitle</TableHead> */}
            <TableHead className="text-center">Category</TableHead>
            <TableHead className="text-center">Technologies</TableHead>
            <TableHead className="text-center">Type</TableHead>
            <TableHead className="text-center">Website</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <TableRow
                key={project._id}
                className="cursor-pointer hover:bg-muted/50 transition"
              >
                <TableCell>
                  {project.imageArray && project.imageArray.length > 0 ? (
                    <div className="relative w-[100px] h-[60px]"   onClick={() => router.push(`/projects/${project._id}`)} title="Click to View Details">
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

                <TableCell className="font-semibold"  onClick={() => router.push(`/projects/${project._id}`)} title="Click to View Details">{project.title}</TableCell>
                {/* <TableCell>{project.subTitle || "-"}</TableCell> */}
                <TableCell className="text-center text-xs">{project.category}</TableCell>
  <TableCell className="text-center text-xs">{project.type}</TableCell>
                <TableCell>
                  {project.technologies && project.technologies.length > 0 ? (
                    <div className="grid md:grid-cols-4 gap-1 text-center">
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

              

                <TableCell className="text-hovertext text-xs">
                    {project.urls && project.urls.length > 0 && project.urls[0]?.website ? (
                    <Link
                    href={project.urls[0]?.website || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex justify-center items-center bg-secondary/10 text-hovertext rounded-full p-2  text-center hover:bg-hovertext/10">
                        Visit 
                        <ArrowUpRight size={14} />
                      </div>
                    </Link>
                  ) : (
                    <span className="text-secondary italic">No link</span>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                No projects found for the selected filters.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
};

export default AllProjects;
