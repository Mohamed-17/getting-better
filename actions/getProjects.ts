"use server";
import { prisma } from "@/lib/prisma";
import { cache } from "react";

export const getProjects = cache(async (category: string) => {
  const TAKE_PER_SECTION = 5;
  const projects = await prisma.project.findMany({
    where: {
      category: category === "all" ? undefined : category,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: TAKE_PER_SECTION,
  });

  return projects;
});
