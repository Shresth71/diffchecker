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
    <div className="relative">
      {/* Header */}
      <Header className="relative z-30 w-[1440px] h-[60px]" />

      {/* Background Layer */}
      <div className="absolute top-[60px] left-0 w-full h-[607px] z-0">
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover" />
        <div className="absolute inset-0 bg-white opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-20">
        
        <div className="absolute top-[117.58px] left-[614.27px]">
          <h1 className="font-['Plus_Jakarta_Sans'] font-semibold text-[35px] leading-[140%] relative inline-block">
            <span
              className="absolute"
              style={{
                width: "132.17px",
                height: "20px",
                backgroundColor: "#FCD60B",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                zIndex: -1,
              }}
            />
            Diff Checker
          </h1>
        </div>


        <div className="absolute top-[162.58px] left-[465px] w-[550px]">
          <p className="font-['Inter'] font-normal text-[20px] leading-[30px] text-center">
            This tool will help you compare text, files, and images.
          </p>
        </div>

        {/* Input Section */}
        <InputSection
          original={original}
          modified={modified}
          setOriginal={setOriginal}
          setModified={setModified}
          canCompare={!!canCompare}
          onCompare={() => setShowDiff(true)}
        />
      </div>

     
      {showDiff && canCompare && (
        <>
          <OutputSection original={original} modified={modified} />
          <RatingsReviews />
        </>
      )}
    </div>
  );
}
