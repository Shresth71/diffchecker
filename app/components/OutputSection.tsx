type Props = {
  original: string;
  modified: string;
};

function getWordDiffStats(original: string, modified: string) {
  // Normalize text: lowercase, remove punctuation, filter empty strings
  const normalize = (text: string) =>
    text
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .split(/\s+/)
      .filter((word) => word.length > 0);

  const origWords = normalize(original);
  const modWords = normalize(modified);

  const origSet = new Set(origWords);
  const modSet = new Set(modWords);

  // Count occurrences for more accurate highlighting
  const origCounts = origWords.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const modCounts = modWords.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const common = [...modSet].filter((word) => origSet.has(word)).length;
  const added = [...modSet].filter((word) => !origSet.has(word)).length;
  const removed = [...origSet].filter((word) => !modSet.has(word)).length;

  return {
    common,
    added,
    removed,
    origCounts,
    modCounts,
  };
}

function highlightDiffText(
  source: string,
  targetCounts: Record<string, number>,
  highlightColor: string,
  baseColor: string
) {
  const words = source
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 0);

  return (
    <div style={{ backgroundColor: baseColor }} className="p-4 rounded">
      {words.map((word, i) => {
        const normalizedWord = word.toLowerCase();
        const shouldHighlight =
          !targetCounts[normalizedWord] || targetCounts[normalizedWord] <= 0;

        targetCounts[normalizedWord] = (targetCounts[normalizedWord] || 0) - 1;

        return (
          <span
            key={`${word}-${i}`}
            className={`inline-block px-1 py-0.5 rounded-sm mr-1 ${
              shouldHighlight ? "font-semibold" : ""
            }`}
            style={
              shouldHighlight
                ? {
                    backgroundColor: highlightColor,
                  }
                : {}
            }
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}

export default function OutputSection({ original, modified }: Props) {
  const { common, added, removed, origCounts, modCounts } = getWordDiffStats(
    original,
    modified
  );

  return (
    <>
      <div className="absolute top-[707.52px] left-[96.21px] w-[1255px] h-[381px] font-['Inter']">
        {/* Labels */}
        <div className="absolute top-0 left-0 w-[600.01px] h-[351px]">
          <p className="text-[16px] font-semibold text-[#141f39] leading-[20px]w-[95px]h-[20px] mb-1">
            Original text
          </p>
          <div className="w-[600px] h-[320px] border border-[#E5E5E5] overflow-y-auto font-mono text-[14px] rounded">
            {highlightDiffText(
              original,
              { ...modCounts },
              "#FFB6B6",
              "#FFE7E7"
            )}
          </div>
        </div>

        <div className="absolute top-0 left-[654.67px] w-[600px]">
          <p className="text-[16px] font-semibold leading-[20px]w-[99px]h-[20px] mb-1">
            Modified text
          </p>
          <div className="w-[600.33px] h-[320px] border border-[#E5E5E5] overflow-y-auto font-mono text-[14px] rounded">
            {highlightDiffText(
              modified,
              { ...origCounts },
              "#8CFFB6",
              "#E1FFEB"
            )}
          </div>
        </div>
        <div className="absolute  top-[362px]  flex gap-[15px]">
          <span className="text-[#222] font-['Inter'] font-medium text-[16px] leading-[100%] w-[110px]h-[19px]">
            Common: <strong>{common}</strong>
          </span>
          <span className="text-green-600 font-['Inter'] font-medium text-[16px] leading-[100%] w-[54px]h-[19px]">
            New: <strong>{added}</strong>
          </span>
          <span className="text-red-600 font-['Inter'] font-medium text-[16px] leading-[100%]">
            Removed: <strong>{removed}</strong>
          </span>
        </div>
      </div>
    </>
  );
}
