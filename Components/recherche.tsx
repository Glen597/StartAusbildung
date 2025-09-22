import React from "react";
import {useTranslations} from "next-intl";

const Search = ()=>{
    const t = useTranslations('Offres');
    return(
        <div className="flex flex-col">
            <div className=" flex flex-col gap-[30px] ">
                <p className="font-bold text-black  text-4xl">{t('title')}</p>
                <p className="w-150 font-medium text-gray-500">{t('texte')}</p>
            </div>
            <div className="bg-white w-full h-[250px] mt-[50px] rounded-xl flex ">

            </div>
        </div>
    )
}
export default Search;