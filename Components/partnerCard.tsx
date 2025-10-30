import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Globe, Mail, MapPin, Phone, Users } from "lucide-react";


interface Partner {
     id:string;
    company: string;
    city: string;
    sector: string;
    employee: string;
 webpage: string;
    contact: string;
    mail:string;
    description: string;
}

interface  PartnerCardProps{
    partner:Partner
}



const PartnerCard = ({partner}: PartnerCardProps)=>{
    const getSectorStyle = (sector:string)=>{
        switch(sector){
                case "Technologie":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800"
        }

    }
    return(<div>
        <Card className="flex flex-col w-80 h-70">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle className="font-bold text-gray-600 ">{partner.company}</CardTitle>
                    <p className={` px-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 `}>{partner.sector}</p>
                </div>
            </CardHeader>
            <div className=" flex flex-col text-sm text-gray-500 gap-[2px] pl-[23px] ">
                <div className=" flex  items-center ">
                     <MapPin className="w-[15px] mr-[5px]" />
                     <p>{partner.city}</p>
                </div>
                <div className=" flex  items-center">
                     <Users className="w-[15px] mr-[5px] " />
                     <p>{partner.employee}</p>
                </div>
                <div className=" flex items-center ">
                     < Globe className="w-[15px] mr-[5px] "/>
                     <a href={`https://${partner.webpage}`} target="_blank" className="text-blue-500">{partner.webpage}</a>
                </div>
                <p className="">
                    Entreprise innovante spécialisée dans le développement d'applications web et mobiles. Forte culture d'apprentissage
                </p>
            </div>
            <div className="border-t w-60 mx-auto flex justify-between text-[11px] text-gray-500 pt-[7px]">
             <div className="flex items-center gap-[3px] text-[11px]">
                <Mail  size ={11} />
                <a href={`mailto:${partner.mail}`} className="text-blue-500"> {partner.mail}</a>
             </div>
             <div className="flex items-center gap-[3px] text-[11px]">
                <Phone size ={11} />
                <a href={`tel:${partner.contact}`}>{partner.contact}</a>
             </div>
            </div>
        </Card>

    </div>)
}
export default PartnerCard;