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

      {/* Main container */}
      <div className="relative w-full">
        {/* Heading with custom yellow highlight on first letter */}
        <div className="absolute top-[117.58px] left-[614.27px]">
          <h1 className="font-['Plus_Jakarta_Sans'] font-semibold text-[35px] leading-[140%] relative inline-block">
            {/* Custom yellow highlight rectangle */}
            <span 
              className="absolute"
              style={{
                width: '132.17px',
                height: '20px',
                backgroundColor: '#FCD60B',
                top: '50%',
                left: '0',
                transform: 'translateY(-50%)',
                zIndex: -1
              }}
            />
            Diff Checker
          </h1>
        </div>

        {/* Rest of your content remains unchanged */}
        <div className="absolute top-[152.58px] left-[465px] w-[550px]">
          <p className="font-['Inter'] font-normal text-[20px] leading-[30px] text-center">
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
        
      </div>

      {showDiff && canCompare && (
        <>
          <OutputSection original={original} modified={modified} />
          <RatingsReviews />
        </>
      )}
    </>
  );
}