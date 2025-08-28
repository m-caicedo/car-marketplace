
import { Separator } from "@/components/ui/separator"
import React from 'react'
import { BsFuelPump } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";

function CarItem({car}) {
  return (
    <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer'>
        <div className="absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white">New</div>
        <img src={car?.image} width={'auto'} height={250} alt="fotografias del auto" className='rounded-t-xl'/>
        <div className="p-4">
            <h2 className="font-bold text-black text-lg mb-2">{car?.name}</h2>
            <Separator className='my-2'/>
            <div className="grid grid-cols-3 mt-3">
                <div className='flex flex-col items-center'>
                    <BsFuelPump className='text-lg mb-1'/>
                    <h3>{car.miles}Miles</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <SlSpeedometer className='text-lg mb-1'/>
                    <h3>{car.fuelType}</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <GiGearStickPattern className='text-lg mb-1'/>
                    <h3>{car.gearType}</h3>
                </div>
            </div>
                <Separator className='my-2'/>
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-xl">${car.price}</h2>
                    <h2 className="text-x flex gap-2 items-center text-blue-800">Ver Detalles <MdOpenInNew /> </h2>
                </div>
        </div>
    </div>
  )
}

export default CarItem