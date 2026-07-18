"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";

interface Props {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt = "Before",
  afterAlt  = "After",
}: Props) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={before}
            alt={beforeAlt}
            style={{ objectFit: "cover" }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={after}
            alt={afterAlt}
            style={{ objectFit: "cover" }}
          />
        }
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              background: "#1B2A4A",
              border: "2px solid #F3F5F7",
              color: "#F3F5F7",
              boxShadow: "0 2px 12px rgba(0,0,0,0.35)",
              backdropFilter: undefined,
              width: 40,
              height: 40,
            }}
            linesStyle={{
              background: "#1B2A4A",
              opacity: 0.85,
              width: 2,
            }}
          />
        }
        style={{ height: "420px" }}
      />

      {/* Side labels — fixed to each half, pointer-events-none so they don't block dragging */}
      <span
        className="absolute top-3 left-3 z-10 bg-navy text-paper text-xs font-mono font-medium px-2.5 py-1 rounded pointer-events-none select-none"
        aria-hidden="true"
      >
        Before
      </span>
      <span
        className="absolute top-3 right-3 z-10 bg-navy text-paper text-xs font-mono font-medium px-2.5 py-1 rounded pointer-events-none select-none"
        aria-hidden="true"
      >
        After
      </span>
    </div>
  );
}
