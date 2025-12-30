"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Heart, CheckCircle2 } from "lucide-react"
import { PricingCard } from "@/components/custom/pricing-card"
import { CheckoutForm, CheckoutData } from "@/components/custom/checkout-form"
import { pricingPlans, PricingPlan } from "@/lib/stripe"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const planId = searchParams.get('plan')
  
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(
    planId ? pricingPlans.find(p => p.id === planId) || null : null
  )
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan)
  }

  const handleCheckout = async (data: CheckoutData) => {
    setLoading(true)
    
    // Simula processamento de pagamento
    // Em produção, aqui você faria a chamada para a API do Stripe
    console.log('Processando pagamento:', { plan: selectedPlan, data })
    
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 2000)
  }

  const handleBackToPlans = () => {
    setSelectedPlan(null)
    setSuccess(false)
  }

  // Página de Sucesso
  if (success && selectedPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <Card className="max-w-2xl w-full p-12 bg-slate-800/50 backdrop-blur-sm border-2 border-emerald-500/50 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            Pagamento Confirmado! 🎉
          </h1>
          
          <p className="text-xl text-slate-300 mb-8">
            Bem-vindo ao <span className="text-emerald-400 font-semibold">Rede Vida {selectedPlan.name}</span>!
          </p>
          
          <div className="bg-slate-900/50 rounded-lg p-6 mb-8">
            <p className="text-slate-300 mb-4">
              Enviamos um e-mail de confirmação com todos os detalhes da sua assinatura.
            </p>
            <p className="text-sm text-slate-400">
              Você já pode começar a usar todos os recursos do seu plano!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => router.push('/')}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 h-12"
            >
              Começar Agora
            </Button>
            <Button
              onClick={() => router.push('/')}
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 h-12"
            >
              Voltar ao Início
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Rede Vida
            </span>
          </button>
          <Button
            onClick={() => router.push('/')}
            variant="ghost"
            className="text-slate-300 hover:text-white"
          >
            Voltar ao Início
          </Button>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          {!selectedPlan ? (
            // Seleção de Planos
            <>
              <div className="text-center mb-16">
                <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                  Escolha seu plano
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                  Comece a viver sem dor hoje mesmo. Cancele quando quiser.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {pricingPlans.map((plan) => (
                  <PricingCard
                    key={plan.id}
                    plan={plan}
                    onSelect={handleSelectPlan}
                    loading={loading}
                  />
                ))}
              </div>

              <div className="text-center">
                <p className="text-slate-400 mb-4">
                  💳 Aceitamos todas as principais bandeiras de cartão
                </p>
                <p className="text-sm text-slate-500">
                  Pagamento seguro processado por Stripe
                </p>
              </div>
            </>
          ) : (
            // Formulário de Checkout
            <CheckoutForm
              plan={selectedPlan}
              onBack={handleBackToPlans}
              onSubmit={handleCheckout}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 bg-slate-950 text-slate-400 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm">
            © 2024 Rede Vida. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
