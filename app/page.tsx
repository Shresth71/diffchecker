"use client";
import { useState } from "react";
import Header from "@/app/components/Header";
import InputSection from "@/app/components/InputSection";
import OutputSection from "@/app/components/OutputSection";
import RatingsReviews from "@/app/components/RatingsReviews";

export default function HomePage() {
  const [original, setOriginal] = useState("");
  const [modified, setModified] = useState("");
  const [showDiff, setShowDiff] = useState(false);
  const canCompare = original.trim() && modified.trim();

  return (
    <>
      <Header />
      <main className="w-[1440px] mx-auto relative bg-white">
        <div className="absolute top-[85.26px] left-[465px] w-[510px] h-[70px]">
          <h1 className="font-['Plus_Jakarta_Sans'] font-semibold text-[26px] leading-[140%] text-center tracking-[0] w-[158px] h-[36px] absolute top-0 left-[176px]">
            Diff Checker
          </h1>
          <p className="font-['Inter'] font-normal text-[20px] leading-[30px] tracking-[0] text-center w-[510px] h-[30px] absolute top-[40px] left-0">
            This tool will help you compare text, files, and images.
          </p>
        </div>
        <InputSection
          original={original}
          modified={modified}
          setOriginal={setOriginal}
          setModified={setModified}
          canCompare={!!canCompare}
          onCompare={() => setShowDiff(true)}
        />
        
        {showDiff && canCompare && (
          <>
            <OutputSection original={original} modified={modified} />
            <div className="absolute bg-white  top-[840.91px] left-[76.21px] w-[1255.79px] h-[309px]">
              {" "}

              <RatingsReviews />
            </div>
          </>
        )}
      </main>
    </>
  );
}
