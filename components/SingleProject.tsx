import { Project } from "@/types/types";
import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { LayoutGroup } from "motion/react";
function SingleProject({ project }: { project: Project }) {
  return (
    <LayoutGroup>
      <motion.a
        whileHover={{
          scale: 0.9,
          opacity: 0.8,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        whileTap={{ scale: 0.8 }}
        layout
        href={`https://${project.link}`}
        target="_blank"
        className="w-full flex flex-col gap-5 cursor-pointer"
      >
        <Image
          src={project.image}
          alt={project.name || "project-image"}
          width={300}
          height={300}
          className="object-contain max-h-full w-auto inline-block  rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="flex flex-col gap-2">
          <p>{project.createDate}</p>
          <h2 className="text-2xl font-semibold capitalize italic">
            {project.name}
          </h2>
          <p className="text-gray-700 line-clamp-2">{project.description}</p>
        </div>
      </motion.a>
    </LayoutGroup>
  );
}

export default SingleProject;
