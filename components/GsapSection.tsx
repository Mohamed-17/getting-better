"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { BBH_Sans_Bartle } from "next/font/google";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
const bbhSansBartle = BBH_Sans_Bartle({
  subsets: ["latin"],
  weight: ["400"],
});

function GsapSection() {
  useGSAP(() => {
    gsap.fromTo(
      "#textEffect-1",
      {
        y: -100,
      },
      {
        y: 100,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      "#textEffect-2",
      {
        y: -100,
      },
      {
        y: 100,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power2.inOut",
      }
    );
  });
  return (
    <section className="mt-20 pl-20">
      <div className="flex flex-col w-200 h-100 ">
        <div className="size-full flex justify-center items-center overflow-hidden relative ">
          <div className="absolute bottom-0 text-center left-1/2 w-full translate-y-1/2 -translate-x-1/2 textEffect-1">
            <h2
              id="textEffect-1"
              className="uppercase  text-[30px] gsapText1"
              style={{ fontFamily: bbhSansBartle.style.fontFamily }}
            >
              gsap
            </h2>
          </div>
        </div>
        <div className="border-t border-white size-full flex justify-center overflow-hidden relative ">
          <div className="absolute top-0 text-center left-1/2 w-full -translate-y-1/2 -translate-x-1/2 ">
            <h2
              id="textEffect-2"
              className="uppercase text-blue-400 blur-[1px] text-[30px]"
              style={{ fontFamily: bbhSansBartle.style.fontFamily }}
            >
              gsap
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GsapSection;
