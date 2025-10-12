import React from "react";
import Link from "next/link";
import {useTranslations} from "next-intl";
import { Bell } from 'lucide-react';



const Navbar = () =>{
    const t = useTranslations('navbar');
    return (
        <div className="bg-[#FFFFFF]  w-[100%] fixed top-0 z-50">
            <nav className=" h-[50px]  mx-auto flex items-center justify-around gap-x-9   w-[100%] border-b border-gray-200 ">
                {/* Icons Selectors*/}
                <div className="hidden md:flex  items-center gap-x-12 text-[15px] font-semibold text-gray-500 ">
                       <p className="ml-2 text-2xl font-semibold tracking-wide text-blue-600 ">StartAusbildung</p>
                    <Link href="/services" className=" hover:text-gray-900 ">{t('Offres')}</Link>
                    <Link href="/" className="hover:text-gray-900">{t('Entreprises')}</Link>
                    <Link href="/about" className=" hover:text-gray-900">{t('Conseils')}</Link>
                    <Link href="/projects" className="hover:text-gray-900 ">{t('À propos')}</Link>
                </div>
               
                 {/* Buttons*/}
                <div className="flex items-center gap-[10px]  font-semibold ml-[100px]  justify-end-safe">
                    <Bell />
                    <button className="bg-blue-600 text-white  h-[29px] w-[90px] rounded-md mt-[-1px] text-[10px] ">{t('connexion')}</button>
                    <button className="bg-[#F3F4F8] text-gray-500 h-[30px] h-[30px] w-[70px] rounded-md mt-[-1px] text-[11px]">{t('Inscription')}</button>
                </div>
            </nav>
            

        </div>
    )
}
export default Navbar;