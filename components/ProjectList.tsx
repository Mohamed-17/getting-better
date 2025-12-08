import React from "react";
import SingleProject from "./SingleProject";
import * as motion from "motion/react-client";
import { Project } from "@prisma/client";

const parentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

async function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      className="mt-10 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {projects.map((project: Project) => (
        <motion.div key={project.id}>
          <SingleProject project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProjectList;
