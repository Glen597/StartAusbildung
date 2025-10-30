'use client'

import React from "react"


import { Building2, Euro, MapPin } from 'lucide-react';
import { Clock4 } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"



interface Offre {
  id: string;
  title: string;
  company: string;
  city: string;
  sector: string;
  salary: number;
  durationYears?: number;
  startDate?: string;
  status?: "Actif" | "Inactif" | string;
  description?: string;
}

interface OffreCardProps {
  offre: Offre;
}



const OffreCard = ({ offre }: OffreCardProps) => {
//Definition of Sector + Styling
const getSectorStyle = (sector: string) => {
  switch (sector){
    case "Technologie":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800"
  }
}

  return (
    <div>

      <Card className="bg-white w-180 h-80 border  border-gray-300 rounded-[11px] font-medium text-gray-500 mt-[10px] flex flex-col justify-around">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle className="font-semibold text-black">{offre.title}</CardTitle>
            <p className={`px-2 py-1 rounded-full text-sm font-medium ${getSectorStyle(offre.sector ?? "unknown")}`}>{offre.sector}</p>
          </div>
          <div className="flex  justify-between">
            <div className="flex"><Building2 />
              <p className="ml-[5px]">{offre.company}</p>
            </div>
            <p className="text-[15px]">
              <span
                className={`px-3 py-1 rounded-full text-gray-700 font-semibold text-sm  ${offre.status === "Actif" ? "bg-[#E1FCEB]" : "bg-[#DF9183]"
                  }`}
              >
                {offre.status}
              </span>
            </p>
          </div>
          <div className="flex font-normal">
            <MapPin className="w-[15px] mr-[5px]" />
            {offre.city}</div>
          <div className="flex w-100 justify-between font-normal">
            <div className="flex">
              <Euro className="w-[15px]  mr-[5px]" />
              <p>{offre.salary}/Monat</p>
            </div>
            <p className="flex justify-between"> <Clock4 className="w-[15px] mr-[5px]" />{offre.durationYears} Jahren</p>
          </div>
          <div className=" flex font-normal">
            <Calendar className="w-[15px] mr-[5px]" />
            <p className="">{offre.startDate}</p>

          </div>
          <CardDescription>{offre.description}</CardDescription>

        </CardHeader>
        <CardFooter className="flex justify-between">
          <button className="bg-blue-600 text-white  h-[29px] w-[90px] rounded-md mt-[-1px] text-[12px]">Postuler</button>
          <button className="text-blue-600 flex items-center">Voir détails <ChevronRight className="w-[14px]" /></button>
        </CardFooter>

      </Card>

    </div>)


}

export default OffreCard;