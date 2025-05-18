import * as SliderPrimitive from "@radix-ui/react-slider";
import { useState } from "react";
import distance from '../../assets/distance.png';

const MIN = 0;
const MAX = 200;

export default function SpeedRangeSlider() {
    const [range, setRange] = useState([10, 30]);

    return (
        <div className="text-white rounded-xl w-full max-w-lg mx-auto">
            <div className="flex items-center justify-between mb-10">
                <div className='flex items-center gap-2'>
                    <div className='w-6 bg-Mycard rounded-full p-1'>
                        <img src={distance} className='w-full h-full' alt="speed icon" />
                    </div>
                    <p className='text-1xl'>Speed</p>
                </div>
                <span className="text-lg">
                    {range[0]} - {range[1]} km
                </span>
            </div>

            <SliderPrimitive.Root
                className="relative p-4 flex items-center select-none touch-none w-full h-5"
                min={MIN}
                max={MAX}
                step={1}
                value={range}
                onValueChange={setRange}
                aria-label="Speed range"
            >
                {/* الخلفية */}
                <SliderPrimitive.Track className="bg-backgroundGray relative grow rounded-full h-[0.35rem]">
                    {/* الشريط بين القيمتين */}
                    <SliderPrimitive.Range className="absolute bg-Myprimary rounded-full h-full transition-all duration-500 ease-in-out" />
                </SliderPrimitive.Track>

                {/* المقابض (Thumbs) */}
                {range.map((val, i) => (
                    <SliderPrimitive.Thumb
                        key={i}
                        className="
                            block w-5 h-5 bg-Myprimary rounded-full cursor-pointer 
                            focus:outline-none focus:ring-0 active:outline-none active:ring-0 border-0
                            transition-transform duration-500 ease-in-out
                            hover:scale-110 hover:shadow-lg"
                        aria-label={i === 0 ? "Minimum speed" : "Maximum speed"}
                        style={{ willChange: "transform" }}
                    />
                ))}

                {/* Tooltips */}
                {range.map((val, i) => (
                    <div
                        key={"tooltip-" + i}
                        className="absolute -top-8 text-sm px-2 py-1 bg-gray-800 rounded transform -translate-x-1/2"
                        style={{
                            left: `${((val - MIN) / (MAX - MIN)) * 100}%`,
                        }}
                    >
                        {val} km
                    </div>
                ))}
            </SliderPrimitive.Root>
        </div>
    );
}
