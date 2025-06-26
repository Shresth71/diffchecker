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
      <div className="absolute top-[198.52px] left-[96.21px] w-[1254.67px] h-[429.39px] ">
        {/* Original Text Block */}
        <div className="absolute w-[600px] h-[351px]">
          <div className="flex justify-between mb-1">
            <p className="font-['Inter'] font-semibold text-[16px] text-[#141F39] leading-[20px] w-[95px] h-[20px]">
              Original text
            </p>
          </div>
          <textarea
            className="text-sm p-3 resize-none overflow-y-auto overflow-x-hidden focus:outline-none 
                   w-[600px] h-[320px] border border-[#E5E5E5]"
            value={original}
            onChange={(e) => setOriginal(e.target.value)}
          />
        </div>

        {/* Modified Text Block */}
        <div className="absolute top-0 left-[654.67px] w-[600px] h-[351px]">
          <div className="flex justify-between mb-1">
            <p className="font-['Inter'] font-semibold text-[16px] text-[#141F39] leading-[20px] ">
              Modified text
            </p>
          </div>
          <textarea
            className="text-sm p-3 resize-none overflow-y-auto overflow-x-hidden focus:outline-none 
                   w-[600px] h-[320px] border border-[#E5E5E5]"
            value={modified}
            onChange={(e) => setModified(e.target.value)}
          />
        </div>

        {/* Compare Button */}
        <button
          className={`absolute top-[375px] left-[544px] w-[167px] h-[54px] text-[16px] font-semibold rounded-[10px] px-[25px] py-[16px] ${
            canCompare
              ? "bg-[#07C994] text-white hover:bg-[#06b385] cursor-pointer"
              : "bg-[#07C994]/30 text-[#fff] cursor-not-allowed"
          }`}
          disabled={!canCompare}
          onClick={onCompare}
        >
          Find difference
        </button>
      </div>
    </>
  );
}
