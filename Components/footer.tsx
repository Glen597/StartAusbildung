'use client'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Card } from "./ui/card";

const Footer = ()=>{
    const t = useTranslations('footer');
     const router = useRouter();
    return(
       
        <div className=" flex flex-col text-xs">
            <div className="flex items-center justify-around  py-[20px] border-b border-gray-500    ">
                 <div className="flex flex-col items-center">
                    <p className="text-white font-bold">{t('ausbildung')}</p>
                    <div className="flex text-gray-500  whitespace-pre-line mt-[10px] flex-col">
                        {t('motivation')}
                        <div className="flex  justify-start gap-[20px] mt-[20px]">
                        <Facebook />
                        <Twitter />
                        <Linkedin />
                        <Instagram />
                        <Youtube />
                        </div>
                    </div>
                    
                 </div>
                 <div className="flex flex-col items-center gap-[5px]">
                    <p className="text-white font-bold">{t('navigation')}</p>
                    <div className="flex flex-col gap-[15px]">
                        <button className="text-gray-500 " type="button" onClick={() => router.push('/app')}>{t('offres')}</button>
                           <button className="text-gray-500 " type="button" onClick={() => router.push('/entreprises')}>{t('partenaires')}</button>
                              <button className="text-gray-500 " type="button" onClick={() => router.push('/conseils')}>{t('conseils')}</button>
                                 <button className="text-gray-500 " type="button" onClick={() => router.push('/about')}>{t('about')}</button>
                    </div>
                 </div>
                 <div className="flex flex-col items-center gap-[5px]">
                    <p className="text-white font-bold">{t('ressources')}</p>
                      <div className="flex flex-col gap-[15px]">
                        <button className="text-gray-500 " type="button" onClick={() => router.push('/app')}>{t('FAQ')}</button>
                           <button className="text-gray-500 " type="button" onClick={() => router.push('/about')}>{t('aide')}</button>
                              <button className="text-gray-500 " type="button" onClick={() => router.push('/about')}>{t('testimonies')}</button>
                                 <button className="text-gray-500 " type="button" onClick={() => router.push('/about')}>{t('stat')}</button>
                    </div>
                 </div>
                 <div className="flex flex-col  justify-start gap-[10px] ">
                    <p className="text-white font-bold">{t('contact')}</p>
                    <p className="text-gray-500  whitespace-pre-line flex gap-[5px] "><MapPin />{t('adresse')}</p>
                     <p className="text-gray-500 flex gap-[5px]"><Mail />{t('nummer')}</p>
                     <p className="text-gray-500 flex gap-[5px] "><Phone />{t('email')}</p>
                    
                 </div>
            </div>
            <div className="text-gray-500 flex justify-around pt-[10px]">
                <p>{t('droits')}</p>
                <div className="flex gap-[10px]">
                    <p>{t('légale')}</p>
                     <p>{t('sécurité')}</p>
                      <p>{t('condition')}</p>
                       <p>{t('cookies')}</p>
                </div>
            </div>
           



        </div>
    )
}

export default Footer;