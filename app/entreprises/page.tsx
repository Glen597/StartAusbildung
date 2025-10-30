'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Card } from '@/Components/ui/card'
import { Building, Search } from 'lucide-react'
import { z } from 'zod'

import companies from '@/data/Companies.json'
import { partnerArraySchema } from '@/partnerSchema'
import PartnerCard from '@/Components/partnerCard'

// --- Schemas
const FilterSchema = z.object({
  company: z.string().trim().optional().default(''),
  sector: z.string().trim().optional().default(''),
})

export default function Entreprises() {
  const [visibleCount, setVisibleCount] = useState(6)

  const t = useTranslations('entreprise')
  const tFilter = useTranslations('filter')
  const s = useTranslations('secteurs')

  const sp = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // Parse & validate data coming from the JSON file
  const partners = partnerArraySchema.parse(companies)

  // Query params (case-insensitive)
  const companyQ = (sp.get('company') ?? '').toLowerCase()
  const sectorQ = (sp.get('sector') ?? '').toLowerCase()

  const filteredPartners = partners.filter((p) => {
    const company = p.company?.toLowerCase() ?? ''
    const sector = p.sector?.toLowerCase() ?? ''
    return company.includes(companyQ) && sector.includes(sectorQ)
  })

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const fd = new FormData(e.currentTarget)
    const data = {
      company: (fd.get('company') as string) ?? '',
      sector: (fd.get('sector') as string) ?? '',
    }

    const result = FilterSchema.safeParse(data)
    if (!result.success) {
      console.error('Invalid filter data:', result.error.format())
      alert('Some entries are invalid!')
      return
    }

    const next = new URLSearchParams(sp.toString())
    const fields = ['company', 'sector'] as const
    for (const k of fields) {
      const v = (fd.get(k) as string) ?? ''
      if (v) next.set(k, v)
      else next.delete(k)
    }

    router.replace(`${pathname}?${next.toString()}`)
    setVisibleCount(6) // reset pagination after new search
  }

  const handleVoirPlus = () => setVisibleCount((prev) => prev + 6)
  const visibleOffres = filteredPartners.slice(0, visibleCount)

  return (
    <div className="mt-[70px] max-w-[1420px] mx-auto flex flex-col gap-[30px]">
      <div>
        <p className="font-bold text-[40px]">{t('en-tête')}</p>
        <p className="whitespace-pre-line text-gray-500">{t('texte')}</p>
      </div>

      <Card className="p-3">
        <form id="filter" onSubmit={onSubmit} className="flex w-full gap-2">
          <label className="flex items-center w-1/2 rounded-[5px] h-[40px] border px-2">
            <Search className="w-[20px] mr-[6px] text-gray-400" />
            <input
              name="company"
              placeholder={tFilter('recherche')}
              defaultValue={sp.get('company') ?? ''}
              className="w-full outline-none bg-transparent"
            />
          </label>

          <div className="flex items-center w-1/2 rounded-[5px] h-[40px] border px-2">
            <Building className="w-[20px] mr-[6px] text-gray-400" />
            <select
              name="sector"
              defaultValue={sp.get('sector') ?? ''}
              className="h-[28px] w-full outline-none bg-transparent"
            >
              <option value="">{s('tous')}</option>
              <option value="Gesundheit">{s('Gesundheit')}</option>
              <option value="Bank / Finanzen">{s('Bank / Finanzen')}</option>
              <option value="Automobil">{s('Automobil')}</option>
            </select>
          </div>

          <button type="submit" className="hidden">
            Search
          </button>
        </form>
      </Card>

      <div className="mt-6">
        {filteredPartners.length === 0 ? (
          <p className="text-gray-500">{t('aucun-resultat')}</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleOffres.map((p) => (
                <PartnerCard key={`${p.company}-${p.sector}-${p.id ?? ''}`} partner={p} />
              ))}
            </div>

            {visibleOffres.length < filteredPartners.length && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleVoirPlus}
                  className="px-4 py-2 rounded-lg border hover:shadow"
                >
                  Voir plus
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
