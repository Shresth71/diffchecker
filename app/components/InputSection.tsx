type Props = {
  original: string;
  modified: string;
  setOriginal: (val: string) => void;
  setModified: (val: string) => void;
  canCompare: boolean;
  onCompare: () => void;
};

export default function InputSection({
  original,
  modified,
  setOriginal,
  setModified,
  canCompare,
  onCompare,
}: Props) {
  return (
    <>
      {/* Original Text Block */}
      <div className="absolute top-[178.5px] left-[96.21px] w-[600px] h-[251.02px]">
        <div className="flex justify-between mb-1">
          <p className="font-['Inter'] font-medium text-[13px] leading-[20px] w-[76px]h-[20px]top-[202.52px]left-[96.21px]">Original text</p>
          <button className="w-[149.21px] h-[40px] text-[14px] font-normal font-['Roboto'] leading-[100%] border border-[#E5E5E5] rounded-[4px]">
            Upload File & Image
          </button>
        </div>
        <textarea
          className="text-sm p-3 resize-none overflow-y-auto overflow-x-hidden focus:outline-none 
                     w-[600px] h-[200px] border border-[#E5E5E5] rounded-[2px] custom-vertical-scrollbar"
          value={original}
          onChange={(e) => setOriginal(e.target.value)}
        />
      </div>

      {/* Modified Text Block */}
      <div className="absolute top-[178.5px] left-[750.88px] w-[600.33px] h-[251.02px]">
        <div className="flex justify-between mb-1">
          <p className="font-['Inter'] font-medium text-[13px] leading-[20px] w-[79px]h-[20px]">Modified text</p>
          <button className="w-[149.21px] h-[40px] text-[14px] font-normal font-['Roboto'] leading-[100%] border border-[#E5E5E5] rounded-[4px]">
            Upload File & Image
          </button>
        </div>
        <textarea
          className="text-sm p-3 resize-none overflow-y-auto overflow-x-hidden focus:outline-none 
                     w-[600px] h-[200px] border border-[#E5E5E5] rounded-[2px] custom-vertical-scrollbar"
          value={modified}
          onChange={(e) => setModified(e.target.value)}
        />
      </div>

      {/* Compare Button */}
      <button
        className={`absolute top-[452.91px] left-[640.21px] w-[167px] h-[54px] text-[16px] font-medium rounded-[10px] px-[25px] py-[16px] ${
          canCompare
            ? "bg-[#07C994] text-white hover:bg-[#06b385] cursor-pointer"
            : "bg-[#07C994]/30 text-[#fff] cursor-not-allowed"
        }`}
        disabled={!canCompare}
        onClick={onCompare}
      >
        Find difference
      </button>
    </>
  );
}