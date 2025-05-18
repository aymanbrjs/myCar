import { FaTimes } from 'react-icons/fa';
import { useSidebar } from '../context/SidebarContext';
import sort from '../assets/sort.png';
import car from '../assets/car.png';
import fuel from '../assets/fuel.png';
import color from '../assets/color.png';
import Star from '../assets/Star.png';
import location from '../assets/location.png';
import transmission from '../assets/transmission.png';
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import Brands from './home/Brands';
import { useEffect } from "react";
import YearRangeSlider from './filters/SpeedRangeSlider';
import SpeedRangeSlider from './filters/YearRangeSlider';
import Button from './filters/Button';
import BodyTypes from './filters/BodyTypes';
import compact from '../assets/compact.png';
import crossover from '../assets/crossover.png';
import sport from '../assets/sport.png';
import suv from '../assets/suv.png';
import ColorPicker from './filters/ColorPicker';
import HorsepowerSlider from './filters/HorsepowerSlider';
import PriceSlider from './filters/PriceSlider';
import Button2 from './Button';

const Sidebar = () => {
    const bodyTypeData = [
        { src: compact, name: "compact" },
        { src: crossover, name: "crossover" },
        { src: sport, name: "sport" },
        { src: suv, name: "suv" },
    ]
    const { sidebarOpen, toggleSidebar } = useSidebar();
    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [sidebarOpen]);

    return (
        <>
            <div
                className={`sidebar-scroll overflow-hidden fixed top-0 right-0 h-full w-96 bg-[#121212] text-white shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className="p-4 flex justify-between items-center border-b border-gray-700">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-300 hover:text-Myprimary text-lg transition"
                    >
                        <FaTimes size={18} />
                    </button>
                </div>
                <div className="p-4 space-y-4">

                    {/* Sort */}
                    <div className='w-full flex flex-col border-b border-white/35 pb-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-6 bg-Mycard rounded-full p-1'>
                                <img src={sort} className='w-full h-full' />
                            </div>
                            <p className='text-1xl'>Sort</p>
                        </div>
                        <RadioGroup defaultValue="buy" className="flex gap-5 pt-5">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="buy"
                                    id="buy"
                                    className="border-white text-white data-[state=checked]:border-transparent data-[state=checked]:bg-Myprimary data-[state=checked]:ring-0  data-[state=checked]:after:bg-yellow-400"
                                />
                                <label htmlFor="buy" className="text-white">Buy</label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="rental"
                                    id="rental"
                                    className="border-white text-white data-[state=checked]:border-transparent data-[state=checked]:bg-Myprimary data-[state=checked]:ring-0  data-[state=checked]:after:bg-yellow-400"
                                />
                                <label htmlFor="rental" className="text-white">Rental</label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Type */}
                    <div className='w-full flex flex-col border-b border-white/35 pb-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-6 bg-Mycard rounded-full p-1'>
                                <img src={sort} className='w-full h-full' />
                            </div>
                            <p className='text-1xl'>Type</p>
                        </div>
                        <RadioGroup defaultValue="newest" className=" flex flex-wrap gap-5 pt-5">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="newest"
                                    id="newest"
                                    className="border-white text-white data-[state=checked]:border-transparent data-[state=checked]:bg-Myprimary data-[state=checked]:ring-0  data-[state=checked]:after:bg-yellow-400"
                                />
                                <label htmlFor="newest" className="text-white">Newest</label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="name"
                                    id="name"
                                    className="border-white text-white data-[state=checked]:border-transparent data-[state=checked]:bg-Myprimary data-[state=checked]:ring-0  data-[state=checked]:after:bg-yellow-400"
                                />
                                <label htmlFor="name" className="text-white">Name (A-Z)</label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="price-lowest"
                                    id="price-lowest"
                                    className="border-white text-white data-[state=checked]:border-transparent data-[state=checked]:bg-Myprimary data-[state=checked]:ring-0  data-[state=checked]:after:bg-yellow-400"
                                />
                                <label htmlFor="price-lowest" className="text-white">Price: lowest to high</label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="price-highest"
                                    id="price-highest"
                                    className="border-white text-white data-[state=checked]:border-transparent data-[state=checked]:bg-Myprimary data-[state=checked]:ring-0  data-[state=checked]:after:bg-yellow-400"
                                />
                                <label htmlFor="price-highest" className="text-white">Price: highest to low</label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Car make/model */}
                    <div className='w-full flex flex-col border-b border-white/35 pb-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-6 bg-Mycard rounded-full p-1'>
                                <img src={car} className='w-full h-full' />
                            </div>
                            <p className='text-1xl'>Car make/model</p>
                        </div>
                        <div>
                            <Brands containerClassName="gap-2" iconSize='w-14' />
                        </div>
                    </div>

                    {/* Year */}
                    <div className='w-full flex flex-col border-b border-white/35 pb-3'>
                        <div className='flex items-center gap-2'>
                            <YearRangeSlider />
                        </div>
                    </div>

                    {/* Speed */}
                    <div className='w-full flex flex-col border-b border-white/35 pb-3'>
                        <div className='flex items-center gap-2'>
                            <SpeedRangeSlider />
                        </div>
                    </div>

                    {/* Transmission */}
                    <div className='w-full flex flex-col border-b border-white/35 pb-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-6 bg-Mycard rounded-full p-1'>
                                <img src={transmission} className='w-full h-full' />
                            </div>
                            <p className='text-1xl'>Transmission</p>
                        </div>
                        <div className='pt-5 flex flex-wrap gap-4'>
                            <Button title="Automatic"/>
                            <Button title="Manual" />

                        </div>
                    </div>

                    {/* Fuel Type */}
                    <div className='w-full flex flex-col border-b border-white/35 pb-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-6 bg-Mycard rounded-full p-1'>
                                <img src={fuel} className='w-full h-full' />
                            </div>
                            <p className='text-1xl'>Fuel Type</p>
                        </div>
                        <div className='pt-5 flex flex-wrap gap-4'>
                            <Button title="Petrol" />
                            <Button title="Diesel" />
                            <Button title="Electric" />
                        </div>
                    </div>

                    {/* Body Types */}
                    <div className='w-full flex flex-col border-b border-white/35 pb-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-6 bg-Mycard rounded-full p-1'>
                                <img src={car} className='w-full h-full' />
                            </div>
                            <p className='text-1xl'>Body Types</p>
                        </div>
                        <div className='pt-5 flex flex-wrap gap-4'>
                            {
                                bodyTypeData.map((item, index) => {
                                    return (
                                        <BodyTypes key={index} src={item.src} name={item.name} />
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* Body Color */}
                    <div className='w-full flex flex-col border-b border-white/35 pb-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-6 bg-Mycard rounded-full p-1'>
                                <img src={color} className='w-full h-full' />
                            </div>
                            <p className='text-1xl'>Body Color</p>
                        </div>
                        <div className='pt-5 flex flex-wrap gap-4'>
                            <ColorPicker />
                        </div>
                    </div>

                    {/* Horsepower */}
                    <div className='w-full flex flex-col border-b border-white/35 pb-3'>
                        <div className='flex items-center gap-2'>
                            <HorsepowerSlider />
                        </div>
                    </div>

                    {/* Features */}
                    <div className='w-full flex flex-col border-b border-white/35 pb-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-6 bg-Mycard rounded-full p-1'>
                                <img src={Star} className='w-full h-full' />
                            </div>
                            <p className='text-1xl'>Features</p>
                        </div>
                        <div className='pt-5 flex flex-wrap gap-4'>
                            <Button title="Navigation" />
                            <Button title="Sun Roof" />
                            <Button title="2 doors" />
                            <Button title="7 seater" />
                        </div>
                    </div>

                    {/* Price */}
                    <div className='w-full flex flex-col border-b border-white/35 pb-3'>
                        <div className='flex items-center gap-2'>
                            <PriceSlider />
                        </div>
                    </div>

                    {/* City */}
                    <div className='w-full flex flex-col border-b border-white/35 pb-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-6 bg-Mycard rounded-full p-1'>
                                <img src={location} className='w-full h-full' />
                            </div>
                            <p className='text-1xl'>City</p>
                        </div>
                        <div className='pt-5 flex flex-wrap gap-4'>
                            <Button title="Damas" />
                        </div>
                    </div>

                    <div className='flex justify-center py-3'>
                        <Button2 title="Show Results" />
                    </div>
                </div>
            </div>

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
};

export default Sidebar;
