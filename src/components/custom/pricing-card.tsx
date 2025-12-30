"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Zap } from "lucide-react"
import { PricingPlan } from "@/lib/stripe"

interface PricingCardProps {
  plan: PricingPlan
  onSelect: (plan: PricingPlan) => void
  loading?: boolean
}

export function PricingCard({ plan, onSelect, loading }: PricingCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <Card 
      className={`relative p-8 transition-all duration-300 ${
        plan.popular 
          ? 'border-4 border-emerald-500 shadow-2xl scale-105 bg-slate-800/70' 
          : 'border-2 border-slate-700 hover:border-emerald-500/50 bg-slate-800/50'
      } backdrop-blur-sm`}
    >
      {plan.popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1 text-sm font-semibold">
          <Zap className="w-4 h-4 mr-1 inline" />
          Mais Popular
        </Badge>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-slate-400 text-sm">{plan.description}</p>
      </div>

      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl font-bold text-white">
            {formatPrice(plan.price)}
          </span>
          <span className="text-slate-400">
            /{plan.interval === 'month' ? 'mês' : 'ano'}
          </span>
        </div>
        {plan.interval === 'year' && (
          <p className="text-emerald-400 text-sm mt-2 font-medium">
            Economize 30% no plano anual
          </p>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        onClick={() => onSelect(plan)}
        disabled={loading}
        className={`w-full h-12 text-lg font-semibold transition-all duration-300 ${
          plan.popular
            ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white'
            : 'bg-slate-700 hover:bg-slate-600 text-white'
        }`}
      >
        {loading ? 'Processando...' : 'Escolher Plano'}
      </Button>
    </Card>
  )
}
