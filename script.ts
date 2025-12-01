import { prisma } from "./lib/prisma";
const data = [
  {
    name: "Shopper",
    createDate: "Sep 17, 2025",
    image: "/shopper.png",
    category: "ecommerce",
    description:
      "Full-stack E-commerce App with Next.js, Tailwind CSS, Clerk, Sanity, Stripe",
    link: "shopper-store-beta.vercel.app",
  },
  {
    name: "fincent online bookkeeping",
    createDate: "Oct 6, 2025",
    image: "/fincent.png",
    category: "design",
    description:
      "practice my styling skills using Tailwind CSS, Shadcn UI, and Clerk.",
    link: "fincent-online-bookkeeping.vercel.app",
  },
  {
    name: "Instrument Studio",
    createDate: "Oct 23, 2025",
    image: "/inst.png",
    category: "design",
    description:
      "Instrument Design Studio built with Next.js, Tailwind CSS and Motion.dev (Framer motion)",
    link: "instrument-studio-theta.vercel.app",
  },
  {
    name: "Blogs",
    createDate: "Sep 5, 2025",
    category: "portfolio",
    image: "/blogs.png",
    description:
      "this website is a responsive website that i use in daily routine to add my blogs and check it every weekend i used in this website (Nextjs 15 / CSS Modules style / quill library ) Check it out",
    link: "my-blogs1.vercel.app",
  },
  {
    name: "Portfolio",
    createDate: "Nov 30, 2025",
    category: "portfolio",
    image: "/portfolio.png",
    description:
      "My Portfolio website built with Next.js, Tailwind CSS and Motion.dev (Framer motion)",
    link: "moelmshaly.vercel.app",
  },
];
async function main() {
  await prisma.project.deleteMany();
  await prisma.project.createMany({
    data,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
