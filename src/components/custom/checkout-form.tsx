"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Lock, ArrowLeft } from "lucide-react"
import { PricingPlan } from "@/lib/stripe"

interface CheckoutFormProps {
  plan: PricingPlan
  onBack: () => void
  onSubmit: (data: CheckoutData) => void
}

export interface CheckoutData {
  name: string
  email: string
  cardNumber: string
  expiryDate: string
  cvv: string
  acceptTerms: boolean
}

export function CheckoutForm({ plan, onBack, onSubmit }: CheckoutFormProps) {
  const [formData, setFormData] = useState<CheckoutData>({
    name: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    acceptTerms: false
  })
  const [loading, setLoading] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned
    return formatted.slice(0, 19) // 16 dígitos + 3 espaços
  }

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4)
    }
    return cleaned
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simula processamento de pagamento
    setTimeout(() => {
      onSubmit(formData)
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Button
        onClick={onBack}
        variant="ghost"
        className="mb-6 text-slate-300 hover:text-white"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar aos planos
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Formulário de Pagamento */}
        <div>
          <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Pagamento</h2>
                <p className="text-sm text-slate-400">Preencha seus dados</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome Completo */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="João Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="joao@exemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>

              {/* Número do Cartão */}
              <div className="space-y-2">
                <Label htmlFor="cardNumber" className="text-slate-300">
                  Número do Cartão
                </Label>
                <Input
                  id="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    cardNumber: formatCardNumber(e.target.value) 
                  })}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>

              {/* Validade e CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate" className="text-slate-300">
                    Validade
                  </Label>
                  <Input
                    id="expiryDate"
                    type="text"
                    placeholder="MM/AA"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      expiryDate: formatExpiryDate(e.target.value) 
                    })}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv" className="text-slate-300">
                    CVV
                  </Label>
                  <Input
                    id="cvv"
                    type="text"
                    placeholder="123"
                    maxLength={3}
                    value={formData.cvv}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      cvv: e.target.value.replace(/\D/g, '') 
                    })}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Termos */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, acceptTerms: checked as boolean })
                  }
                  required
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm text-slate-300 leading-relaxed cursor-pointer">
                  Aceito os{' '}
                  <a href="#" className="text-emerald-400 hover:underline">
                    termos de uso
                  </a>{' '}
                  e{' '}
                  <a href="#" className="text-emerald-400 hover:underline">
                    política de privacidade
                  </a>
                </Label>
              </div>

              {/* Botão de Pagamento */}
              <Button
                type="submit"
                disabled={loading || !formData.acceptTerms}
                className="w-full h-14 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-lg font-semibold"
              >
                {loading ? (
                  'Processando...'
                ) : (
                  <>
                    <Lock className="w-5 h-5 mr-2" />
                    Finalizar Pagamento
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-slate-400">
                🔒 Pagamento 100% seguro e criptografado
              </p>
            </form>
          </Card>
        </div>

        {/* Resumo do Pedido */}
        <div>
          <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 sticky top-8">
            <h3 className="text-xl font-bold text-white mb-6">Resumo do Pedido</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-white">{plan.name}</p>
                  <p className="text-sm text-slate-400">
                    Cobrança {plan.interval === 'month' ? 'mensal' : 'anual'}
                  </p>
                </div>
                <p className="font-bold text-white">{formatPrice(plan.price)}</p>
              </div>

              <div className="border-t border-slate-700 pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Subtotal</span>
                  <span className="text-white">{formatPrice(plan.price)}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Desconto</span>
                  <span className="text-emerald-400">R$ 0,00</span>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Total</span>
                  <span className="text-2xl font-bold text-emerald-400">
                    {formatPrice(plan.price)}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  {plan.interval === 'month' 
                    ? 'Renovação automática mensal' 
                    : 'Renovação automática anual'}
                </p>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-4 space-y-2">
              <p className="text-sm font-semibold text-white mb-2">
                ✨ Incluído no seu plano:
              </p>
              {plan.features.slice(0, 4).map((feature, index) => (
                <p key={index} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  {feature}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
