"use client";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-[1440px] h-[60px] bg-white border-b border-[#E5E5E5]">
      {/* Logo Section */}
      <div className="absolute top-[13px] left-[25px] w-[169.2px] h-[31px] flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={31} height={31} />
        <span className="text-[30px] font-['Poppins'] font-normal leading-[100%]w-[132.2px]h-[22.64px]">
          dragdrop<span className="font-bold">do</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="absolute top-[20px] left-[252px] w-[704px] h-[20px] flex gap-[25px] text-[13px] text-[#222] font-normal leading-none">
        {[
          { label: "PDF", icon: "pdf" },
          { label: "Image", icon: "image" },
          { label: "Audio", icon: "audio" },
          { label: "Video", icon: "video" },
          { label: "Archive", icon: "archive" },
          { label: "Font", icon: "font" },
          { label: "Document", icon: "document" },
        ].map(({ label, icon }) => (
          <span key={label} className="flex items-center h-[20px]">
            <Image
              src={`/icons/${icon}.svg`}
              alt={label}
              width={20}
              height={20}
              className="mr-[5px]"
            />
            <span className="flex items-center gap-[4px]">
              {label}
              <ChevronDownIcon className="w-5 h-5 text-[#222]" />
            </span>
          </span>
        ))}
      </nav>

      {/* Pricing Button */}
      <button className="absolute top-[8px] left-[1085px] w-[82px] h-[43px] border border-[#BFBFBF] text-[#222] text-[16px] font-normal rounded-[5px] px-[15px] py-[12px] leading-[100%] text-center">
        <span className="inline-block w-[52px] h-[19px]">Pricing</span>
      </button>

      {/* Request Feature Button */}
      <button className="absolute top-[8px] left-[1183px] w-[164px] h-[43px] border border-[#07C994] text-[#07C994] text-[16px] font-normal rounded-[5px] px-[20px] py-[12px] leading-[100%] text-center">
        <span className="inline-block w-[124px] h-[19px]">Request Feature</span>
      </button>
    </header>
  );
}
