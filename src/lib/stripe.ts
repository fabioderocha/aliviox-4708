import { loadStripe } from '@stripe/stripe-js'

// Inicializa o Stripe com a chave pública
export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
)

// Tipos para os planos
export interface PricingPlan {
  id: string
  name: string
  description: string
  price: number
  interval: 'month' | 'year'
  features: string[]
  popular?: boolean
  stripePriceId?: string
}

// Planos disponíveis
export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Básico',
    description: 'Perfeito para começar sua jornada',
    price: 29.90,
    interval: 'month',
    features: [
      '3 exercícios personalizados por dia',
      'Diário da dor com gráficos',
      'Lembretes inteligentes',
      'Conteúdo educativo básico',
      'Suporte por e-mail'
    ],
    stripePriceId: 'price_basic_monthly'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Mais recursos para resultados rápidos',
    price: 49.90,
    interval: 'month',
    popular: true,
    features: [
      'Tudo do plano Básico',
      '5 exercícios personalizados por dia',
      'Vídeos em alta qualidade',
      'Consultas mensais com especialistas',
      'Planos de treino avançados',
      'Suporte prioritário 24/7'
    ],
    stripePriceId: 'price_premium_monthly'
  },
  {
    id: 'annual',
    name: 'Anual Premium',
    description: 'Economize 30% no plano anual',
    price: 419.90,
    interval: 'year',
    features: [
      'Tudo do plano Premium',
      '2 meses grátis (economize 30%)',
      'Acesso vitalício ao conteúdo',
      'Consultas ilimitadas',
      'Programa de recompensas',
      'Acesso antecipado a novidades'
    ],
    stripePriceId: 'price_annual_premium'
  }
]
