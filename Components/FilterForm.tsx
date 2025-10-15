'use client'

import React from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Search, MapPin, Building, Euro } from 'lucide-react';
import z from "zod";
import { Card } from "./ui/card";

const FilterSchema = z.object({
  q: z.string().trim().optional(),
  city: z.string().trim().optional(),
  sector: z.string().trim().optional(),
  minSalary: z
    .string()
    .transform(v => v ? Number(v) : 0)
    .pipe(z.number().min(0).max(20000))
    .optional(),
});

type FilterValues = z.infer<typeof FilterSchema>;

const SearchForm = () => {
  const t = useTranslations('Offres');
  const titel = useTranslations('titres');
  const tFilter = useTranslations('filter');
  const s = useTranslations('secteurs');
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 🔥 empêche le rechargement

    const fd = new FormData(e.currentTarget);

    const data = {
      q: fd.get('q') as string,
      city: fd.get('city') as string,
      sector: fd.get('sector') as string,
      minSalary: fd.get('minSalary') as string,
    };

    const result = FilterSchema.safeParse(data);
    if (!result.success) {
      console.error("Invalid filter data:", result.error.format());
      alert("Some entries are invalid!");
      return;
    }

    const next = new URLSearchParams(sp.toString());
    const fields = ['q', 'city', 'sector', 'minSalary'] as const;
    for (const k of fields) {
      const v = (fd.get(k) as string) ?? '';
      if (v) next.set(k, v);
      else next.delete(k);
    }

    router.replace(`${pathname}?${next.toString()}`);
  };

  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex flex-col gap-[30px]">
        <p className="font-bold text-black text-3xl">{t('title')}</p>
        <p className="w-150 font-medium text-gray-500">{t('texte')}</p>
      </div>

      <Card className="flex flex-col bg-white h-[180px] border border-gray-300 rounded-[11px] justify-between pt-[50px] pb-[10px]  sticky  top-[80px]">
        {/* ✅ onSubmit ici */}
        <form id="filter" onSubmit={onSubmit} className="flex items-center justify-around ">
          <label className="flex flex-col text-gray-600 font-semibold ">
            {titel('recherche')}
            <div className="border border-gray-300 rounded-[5px] flex justify-around h-[28px] font-light">
              <Search className="w-[20px] mx-[5px] text-gray-400" />
              <input
                name="q"
                placeholder={tFilter('Métier')}
                defaultValue={sp.get('q') ?? ''}
                className="outline-none"
              />
            </div>
          </label>

          <label className="flex flex-col font-semibold text-gray-600">
            {titel('lieu')}
            <div className="border border-gray-300 rounded-[5px] flex justify-around h-[28px] font-light">
              <MapPin className="w-[20px] mx-[5px] text-gray-400"  />
              <input
                name="city"
                placeholder={tFilter('Ville')}
                defaultValue={sp.get('city') ?? ''}
                 className="outline-none"
              />
            </div>
          </label>

          <label className="flex flex-col font-semibold text-gray-600">
            {titel('secteur')}
            <div className="border border-gray-300 rounded-[5px] flex justify-around font-light">
              <Building className="w-[20px] mx-[5px] text-gray-400" />
              <select
                name="sector"
                defaultValue={sp.get('sector') ?? ''}
                className="h-[28px] w-[200px]"
              >
                <option value="">{s('tous')}</option>
                <option value="Abfallwirtschaft">{s('Abfallwirtschaft')}</option>
<option value="Agrarwesen">{s('Agrarwesen')}</option>
<option value="Architektur">{s('Architektur')}</option>
<option value="Automobil">{s('Automobil')}</option>
<option value="Bank / Finanzen">{s('Bank / Finanzen')}</option>
<option value="Baugewerbe / Architektur">{s('Baugewerbe / Architektur')}</option>
<option value="Beratung">{s('Beratung')}</option>
<option value="Bergbau">{s('Bergbau')}</option>
<option value="Bibliothekswesen">{s('Bibliothekswesen')}</option>
<option value="Bildung">{s('Bildung')}</option>
<option value="Biologie">{s('Biologie')}</option>
<option value="Büro">{s('Büro')}</option>
<option value="Design">{s('Design')}</option>
<option value="Dienstleistung">{s('Dienstleistung')}</option>
<option value="Druck / Papier / Verpackung">{s('Druck / Papier / Verpackung')}</option>
<option value="Einzelhandel">{s('Einzelhandel')}</option>
<option value="Elektro/Elektronik">{s('Elektro/Elektronik')}</option>
<option value="Energiewirtschaft">{s('Energiewirtschaft')}</option>
<option value="Eventbranche">{s('Eventbranche')}</option>
<option value="Fernsehen">{s('Fernsehen')}</option>
<option value="Finanzdienstleistung">{s('Finanzdienstleistung')}</option>
<option value="Finanzen">{s('Finanzen')}</option>
<option value="Forschung">{s('Forschung')}</option>
<option value="Gastronomie / Tourismus">{s('Gastronomie / Tourismus')}</option>
<option value="Gesundheit">{s('Gesundheit')}</option>
<option value="Handel / Gewerbe">{s('Handel / Gewerbe')}</option>
<option value="Handwerk">{s('Handwerk')}</option>
<option value="Hotel">{s('Hotel')}</option>
<option value="Immobilien / Facility Management">{s('Immobilien / Facility Management')}</option>
<option value="Industrietechnik">{s('Industrietechnik')}</option>
<option value="Informatik">{s('Informatik')}</option>
<option value="Ingenieurdienstleistungen">{s('Ingenieurdienstleistungen')}</option>
<option value="Internet / Multimedia">{s('Internet / Multimedia')}</option>
<option value="IT / EDV">{s('IT / EDV')}</option>
<option value="Journalismus">{s('Journalismus')}</option>
<option value="KFZ">{s('KFZ')}</option>
<option value="Konsumgüterindustrie">{s('Konsumgüterindustrie')}</option>
<option value="Kosmetik">{s('Kosmetik')}</option>
<option value="Kunst / Kultur / Freizeit">{s('Kunst / Kultur / Freizeit')}</option>
<option value="Kunststoffverarbeitung">{s('Kunststoffverarbeitung')}</option>
<option value="Lebensmittel">{s('Lebensmittel')}</option>
<option value="Logistik / Verkehr">{s('Logistik / Verkehr')}</option>
<option value="Luft- und Raumfahrt">{s('Luft- und Raumfahrt')}</option>
<option value="Management">{s('Management')}</option>
<option value="Marketing / Werbung / PR">{s('Marketing / Werbung / PR')}</option>
<option value="Maschinen- / Anlagenbau">{s('Maschinen- / Anlagenbau')}</option>
<option value="Medien">{s('Medien')}</option>
<option value="Medizin">{s('Medizin')}</option>
<option value="Metallverarbeitung">{s('Metallverarbeitung')}</option>
<option value="Mode">{s('Mode')}</option>
<option value="Öffentlicher Dienst">{s('Öffentlicher Dienst')}</option>
<option value="Personalwesen">{s('Personalwesen')}</option>
<option value="Pflege">{s('Pflege')}</option>
<option value="Pharma / Chemie">{s('Pharma / Chemie')}</option>
<option value="Rechts- / Steuerberatung">{s('Rechts- / Steuerberatung')}</option>
<option value="Service, Recycling und Wasser">{s('Service, Recycling und Wasser')}</option>
<option value="Sonstige Branchen">{s('Sonstige Branchen')}</option>
<option value="Sonstige Industrie">{s('Sonstige Industrie')}</option>
<option value="Soziales">{s('Soziales')}</option>
<option value="Sozialversicherung">{s('Sozialversicherung')}</option>
<option value="Sport">{s('Sport')}</option>
<option value="Sprache">{s('Sprache')}</option>
<option value="Systemgastronomie">{s('Systemgastronomie')}</option>
<option value="Telekommunikation">{s('Telekommunikation')}</option>
<option value="Textilbranche">{s('Textilbranche')}</option>
<option value="Tourismus">{s('Tourismus')}</option>
<option value="Umwelt">{s('Umwelt')}</option>
<option value="Verpackungsmittelbranche">{s('Verpackungsmittelbranche')}</option>
<option value="Versicherungen">{s('Versicherungen')}</option>
<option value="Vertrieb">{s('Vertrieb')}</option>
<option value="Werbung">{s('Werbung')}</option>
<option value="Wirtschaftswissenschaften">{s('Wirtschaftswissenschaften')}</option>
              </select>
            </div>
          </label>

          <label className="flex flex-col font-semibold text-gray-600">
            {titel('salaire')}
            <div className="border border-gray-300 rounded-[5px] flex justify-around font-light">
              <Euro className="w-[20px] mx-[5px] text-gray-400" />
              <input
                name="minSalary"
                type="number"
                step="50"
                placeholder={tFilter('salaire')}
                defaultValue={sp.get('minSalary') ?? ''}
                 className="outline-none"
              />
            </div>
          </label>
          <button type="submit" className="hidden">Search</button>
        </form>

        <div className="flex justify-between mx-[27px] text-[15px] text-gray-500 px-[10px]">
          <button
            className=""
            type="button"
            onClick={() => router.replace(pathname)}
          >
            {tFilter('reset')}
          </button>
          <p>{tFilter('texte')}</p>
        </div>
      </Card>
    </div>
  );
};

export default SearchForm;
