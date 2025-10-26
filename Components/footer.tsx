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
            <div className="flex items-center justify-around  py-[20px]  ">
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
            <div className="flex flex-col border-b border-t border-gray-500 items-center gap-[15px] w-[1500px] w-1/2 mx-auto py-[20px]">
                <p className="text-white font-bold">{t('nouvelles')}</p>
                <p className="text-gray-500">{t('inscription')}</p>
                <form className="text-gray-400"
                onSubmit={(e: React.FormEvent<HTMLFormElement>)=>{
                    e.preventDefault(); // Empêche que la page se recharge
                   // On récupère le formulaire typé
                const form = e.currentTarget;
                const formData = new FormData(form);
    // Récupère la valeur de l'input 'email'
    const email = formData.get('email') as string;
    console.log('Nouvel email reçu :', email);
                }}>
                    <input
                    className="bg-[#1F2937] w-[250px] h-[35px] rounded-lg  border border-gray-500 px-3"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="    Email"
                    required />
                      <button 
                      type="submit"
                       className="bg-blue-600 text-white  h-[35px] w-[90px] rounded-md ml-[5px] text-[13px] ">{t('abonnement')}</button>
                </form>
           
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