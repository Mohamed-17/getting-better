import AuthSection from "@/components/AuthSection";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
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
      <Suspense fallback={<SkeletonCard />}>
        <Projects params={searchParams} />
      </Suspense>
      <AuthSection />
    </main>
  );
}

export default HomePage;
