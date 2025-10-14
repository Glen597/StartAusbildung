'use client'

import React, { useState } from "react";
import OffreCard from "./offresCard";
import { useTranslations } from "next-intl";
import { offresArraySchema } from "@/offresSchema";
import jobs from "@/data/jobs.json"
import { useSearchParams } from "next//navigation";
import { ChevronRight } from "lucide-react";





const Offres = ()=>{
    const t =useTranslations('titres')
    const sp = useSearchParams();

      const [visibleCount, setvisibleCount] = useState(6);

    const q = sp.get("q")?.toLowerCase() || "";
  const city = sp.get("city")?.toLowerCase() || "";
  const sector = sp.get("sector") || "";
  const minSalary = Number(sp.get("minSalary")) || 0; 

    const offres = offresArraySchema.parse(jobs);

    const filteredOffres = offres.filter((o) =>
    o.title.toLowerCase().includes(q) && // le titre contient la recherche
    o.city.toLowerCase().includes(city) && // la ville correspond
    (sector === "" || o.sector === sector) && // le secteur correspond ou est vide
    o.salary >= minSalary // le salaire est supérieur au minimum
  );

const handlevoirPlus = ()=>{
    setvisibleCount(prev=> prev + 6);
}
  const visibleOffres = filteredOffres.slice(0, visibleCount);
    return(
        <div className="flex justify-between mt-[30px] ">
            {/* 📦 Zone des offres */}
            <div className="">
                <p className="mb-[1px] font-semibold text-gray-500 "> {filteredOffres.length} {filteredOffres.length > 1 ? "offres" : "offre"} trouvée{filteredOffres.length > 1 ? "s" : ""}</p>
                 {visibleOffres.length > 0 ? (
          visibleOffres.map((offre) => (
            <OffreCard key={offre.id} offre={offre} />
          ))
        ) : (
          <p className="text-gray-500 italic">Aucune offre ne correspond à votre recherche.</p>
        )}
        {visibleCount < filteredOffres.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handlevoirPlus}
              className="text-blue-600 flex items-center hover:font-medium"
            >
              Voir plus
            </button>
            <ChevronRight className="w-[14px] text-blue-600" />
          </div>
        )}
            </div>
            <div className="bg-white w-[400px] h-[150px] flex flex-col items-start border  border-gray-300 rounded-[11px] font-medium text-gray-500  sticky  top-[5px]">
                <p className=" pl-[30px] pt-[30px] font-semibold text-gray-600">{t('sélection')}</p>
                <p className="pl-[30px] pt-[20px]">{t('texteSélection')}</p>

            </div>
                
        </div>
    )
}

export default Offres