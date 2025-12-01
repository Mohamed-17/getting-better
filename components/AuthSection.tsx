import React, { Suspense } from "react";
import SignForm from "./SignForm";

function AuthSection() {
  return (
    <section id="authentication" className="mt-30">
      <h1 className="text-2xl font-semibold">
        Using in This section{" "}
        <span className="text-blue-500">
          (NextAuth + Server Actions + Suspense Boundaries )
        </span>
      </h1>
      <Suspense>
        <SignForm />
      </Suspense>
    </section>
  );
}

export default AuthSection;
