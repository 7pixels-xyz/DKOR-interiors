'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Props {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, title }: Props) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl group select-none">
      {/* After Image */}
      <Image src={afterImage} alt={`${title} After`} fill className="object-cover" />

      {/* Before Image Overlay */}
      <div
        className="absolute top-0 bottom-0 left-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <Image
          src={beforeImage}
          alt={`${title} Before`}
          fill
          className="object-cover max-w-none"
          style={{ width: '100%' }}
        />
      </div>

      {/* Slider Line Controls */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
      />

      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-20 pointer-events-none shadow-lg"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-xs font-bold text-[#161513]">
          ↔
        </div>
      </div>
    </div>
  );
}
