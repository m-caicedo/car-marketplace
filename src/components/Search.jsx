import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from './Shared/Data';

function Search() {
  return (
    <div>
        <div className="p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center  md:max">
          <Select>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
              <SelectValue placeholder="Carros" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nuevo">Nuevo</SelectItem>
              <SelectItem value="usado">usado</SelectItem>
            </SelectContent>
          </Select>
          <Separator orientation="vertical" className="hidden md:block" />
          <Select>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
              <SelectValue placeholder="Marca" />
            </SelectTrigger>
            <SelectContent>
              {Data.CarMakes.map((maker, index) => (
                <SelectItem value={maker.name}>{maker.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Separator orientation="vertical" className="hidden md:block" />
          <Select>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
              <SelectValue placeholder="Rango de Precio" />
            </SelectTrigger>
            <SelectContent>
              {Data.Princing.map((maker, index) => (
                <SelectItem value={maker.amount}>{maker.amount}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div>
            <CiSearch className="text-[45px] text-white bg-[#405ef2] rounded-full p-3 hover:scale-105 transition-all cursor-pointer" />
          </div>
        </div>
    </div>
  )
}

export default Search