import AuthSection from "@/components/AuthSection";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SelectCategory from "@/components/SelectCategory";
import { SkeletonCard } from "@/components/Skelton";
import React, { Suspense } from "react";
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
async function HomePage({ searchParams }: Props) {
  "use memo";
  return (
    <main className="py-20">
      <Hero />
      <section className="mt-20 space-y-10">
        <h1 className="text-2xl font-semibold">
          Using in This section{" "}
          <span className="text-blue-500">
            (Prisma + MongoDB + cache component + Partial Prerendering (PPR) )
          </span>
        </h1>
        <div className="flex justify-between items-center flex-wrap gap-5 ">
          <SelectCategory />
        </div>
        <Suspense fallback={<SkeletonCard />}>
          <Projects params={searchParams} />
        </Suspense>
      </section>
      <AuthSection />
    </main>
  );
}

export default HomePage;
