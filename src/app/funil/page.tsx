"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  CheckCircle2, 
  ArrowRight,
  Star,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Award,
  Target,
  Sparkles,
  Gift,
  AlertCircle
} from "lucide-react"

type FunnelStep = 'awareness' | 'interest' | 'decision' | 'action'

export default function FunnelPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<FunnelStep>('awareness')
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [painLevel, setPainLevel] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  // ETAPA 1: CONSCIÊNCIA - Captura inicial
  const AwarenessStep = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full text-center space-y-8">
        <Badge className="bg-red-500/20 text-red-300 hover:bg-red-500/30 px-4 py-2 text-sm border border-red-500/30">
          <AlertCircle className="w-4 h-4 mr-2 inline" />
          Você está perdendo qualidade de vida
        </Badge>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
          Dor nas costas está
          <br />
          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            roubando seus melhores momentos?
          </span>
        </h1>

        <p className="text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Descubra como milhares de pessoas estão eliminando dores crônicas 
          em apenas 15 minutos por dia, sem remédios ou cirurgias.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            onClick={() => setCurrentStep('interest')}
            className="h-16 px-12 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xl font-bold shadow-2xl"
          >
            Sim, quero viver sem dor
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-slate-400">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span>4.9/5 (1.200+ avaliações)</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-400" />
            <span>+5.000 pessoas transformadas</span>
          </div>
        </div>
      </div>
    </div>
  )

  // ETAPA 2: INTERESSE - Qualificação e educação
  const InterestStep = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 px-4 py-2 text-sm border border-emerald-500/30 mb-6">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Método Cientificamente Comprovado
          </Badge>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Como funciona o método que já ajudou
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              mais de 5.000 pessoas
            </span>
          </h2>
        </div>

        {/* Problema vs Solução */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Problema */}
          <Card className="p-8 bg-red-900/20 border-2 border-red-500/30">
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              Sem o método certo
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span>Dor constante que limita suas atividades</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span>Dependência de remédios e analgésicos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span>Noites mal dormidas e cansaço crônico</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span>Perda de produtividade no trabalho</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span>Impossibilidade de aproveitar momentos com família</span>
              </li>
            </ul>
          </Card>

          {/* Solução */}
          <Card className="p-8 bg-emerald-900/20 border-2 border-emerald-500/30">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              Com o Rede Vida
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Alívio progressivo da dor em 7-14 dias</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Exercícios personalizados de 15 minutos/dia</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Acompanhamento diário e lembretes inteligentes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Recuperação da qualidade de vida</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Volte a fazer o que você ama sem limitações</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Resultados Comprovados */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-slate-800/50 border-2 border-slate-700 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">87%</div>
            <p className="text-slate-300">Redução da dor em 30 dias</p>
          </Card>
          <Card className="p-6 bg-slate-800/50 border-2 border-slate-700 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">15min</div>
            <p className="text-slate-300">Exercícios por dia</p>
          </Card>
          <Card className="p-6 bg-slate-800/50 border-2 border-slate-700 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">5.000+</div>
            <p className="text-slate-300">Vidas transformadas</p>
          </Card>
        </div>

        {/* Quiz de Qualificação */}
        <Card className="p-8 bg-slate-800/50 border-2 border-emerald-500/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Qual é o seu nível de dor atual?
          </h3>
          <p className="text-slate-300 text-center mb-8">
            Isso nos ajuda a personalizar sua experiência
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
            {[1, 2, 3, 4, 5].map((level) => (
              <button
                key={level}
                onClick={() => setPainLevel(level)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  painLevel === level
                    ? 'bg-emerald-500/20 border-emerald-500'
                    : 'bg-slate-700/50 border-slate-600 hover:border-emerald-500/50'
                }`}
              >
                <div className="text-3xl font-bold text-white mb-2">{level}</div>
                <div className="text-xs text-slate-300">
                  {level === 1 && 'Leve'}
                  {level === 2 && 'Moderada'}
                  {level === 3 && 'Média'}
                  {level === 4 && 'Forte'}
                  {level === 5 && 'Intensa'}
                </div>
              </button>
            ))}
          </div>

          <Button
            onClick={() => setCurrentStep('decision')}
            disabled={painLevel === null}
            className="w-full h-14 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-lg font-semibold disabled:opacity-50"
          >
            Continuar
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Card>
      </div>
    </div>
  )

  // ETAPA 3: DECISÃO - Prova social e urgência
  const DecisionStep = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30 px-4 py-2 text-sm border border-yellow-500/30 mb-6">
            <Gift className="w-4 h-4 mr-2 inline" />
            Oferta Especial de Lançamento
          </Badge>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Junte-se a milhares de pessoas que
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              já transformaram suas vidas
            </span>
          </h2>
        </div>

        {/* Depoimentos em Destaque */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 bg-slate-800/50 border-2 border-slate-700">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              "Em 3 semanas minha dor reduziu 80%. Voltei a correr e brincar com meus filhos!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Maria Silva</p>
                <p className="text-xs text-slate-400">Professora, 42 anos</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-slate-800/50 border-2 border-slate-700">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              "Parei de tomar remédios para dor. O método é simples e realmente funciona!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                J
              </div>
              <div>
                <p className="font-semibold text-white text-sm">João Santos</p>
                <p className="text-xs text-slate-400">Engenheiro, 38 anos</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-slate-800/50 border-2 border-slate-700">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              "Melhor investimento que fiz na minha saúde. Minha qualidade de vida mudou!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Ana Costa</p>
                <p className="text-xs text-slate-400">Designer, 35 anos</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Garantias e Benefícios */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-slate-800/50 border-2 border-emerald-500/30 text-center">
            <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Garantia de 7 dias</h3>
            <p className="text-sm text-slate-300">
              Não gostou? Devolvemos 100% do seu dinheiro
            </p>
          </Card>

          <Card className="p-6 bg-slate-800/50 border-2 border-emerald-500/30 text-center">
            <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Método aprovado</h3>
            <p className="text-sm text-slate-300">
              Desenvolvido por fisioterapeutas especializados
            </p>
          </Card>

          <Card className="p-6 bg-slate-800/50 border-2 border-emerald-500/30 text-center">
            <Target className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Resultados reais</h3>
            <p className="text-sm text-slate-300">
              87% dos usuários sentem melhora em 30 dias
            </p>
          </Card>
        </div>

        {/* Urgência */}
        <Card className="p-8 bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-2 border-yellow-500/30 mb-8">
          <div className="flex items-start gap-4">
            <Clock className="w-8 h-8 text-yellow-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                ⏰ Oferta por tempo limitado
              </h3>
              <p className="text-slate-300 text-lg mb-4">
                Garanta <strong className="text-yellow-400">50% de desconto</strong> no plano anual. 
                Apenas para os primeiros 100 inscritos desta semana!
              </p>
              <div className="flex items-center gap-2 text-yellow-400">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Restam apenas 23 vagas</span>
              </div>
            </div>
          </div>
        </Card>

        <Button
          onClick={() => setCurrentStep('action')}
          className="w-full h-16 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xl font-bold shadow-2xl"
        >
          Quero garantir minha vaga agora
          <ArrowRight className="w-6 h-6 ml-3" />
        </Button>

        <p className="text-center text-slate-400 mt-6 text-sm">
          🔒 Pagamento 100% seguro. Cancele quando quiser.
        </p>
      </div>
    </div>
  )

  // ETAPA 4: AÇÃO - Captura final e conversão
  const ActionStep = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4 py-20">
      <div className="max-w-2xl mx-auto">
        {!submitted ? (
          <Card className="p-8 bg-slate-800/50 border-2 border-emerald-500/30">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Último passo para sua transformação
              </h2>
              <p className="text-slate-300 text-lg">
                Preencha os dados abaixo e comece hoje mesmo
              </p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
              // Aqui você integraria com sua API
              console.log({ name, email, painLevel })
            }} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Nome completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-14 border-2 border-slate-600 bg-slate-900 text-white placeholder:text-slate-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-14 border-2 border-slate-600 bg-slate-900 text-white placeholder:text-slate-500 focus:border-emerald-500"
                />
              </div>

              {/* Resumo do Plano */}
              <Card className="p-6 bg-emerald-900/20 border-2 border-emerald-500/30">
                <h3 className="text-lg font-bold text-white mb-4">Seu plano selecionado:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Plano Anual Premium</span>
                    <span className="text-white font-bold">R$ 197,00</span>
                  </div>
                  <div className="flex justify-between items-center text-emerald-400">
                    <span>Desconto de lançamento (50%)</span>
                    <span className="font-bold">- R$ 98,50</span>
                  </div>
                  <div className="border-t border-slate-600 pt-3 flex justify-between items-center">
                    <span className="text-white font-bold text-lg">Total hoje</span>
                    <span className="text-emerald-400 font-bold text-2xl">R$ 98,50</span>
                  </div>
                  <p className="text-xs text-slate-400 text-center">
                    Ou 12x de R$ 8,21 sem juros
                  </p>
                </div>
              </Card>

              <Button
                type="submit"
                className="w-full h-16 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xl font-bold shadow-2xl"
              >
                Finalizar e começar agora
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>

              <div className="space-y-2 text-center">
                <p className="text-sm text-slate-400">
                  🔒 Pagamento 100% seguro via Stripe
                </p>
                <p className="text-sm text-slate-400">
                  ✅ Garantia de 7 dias ou seu dinheiro de volta
                </p>
              </div>
            </form>
          </Card>
        ) : (
          <Card className="p-12 bg-slate-800/50 border-2 border-emerald-500/50 text-center">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-emerald-400" />
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">
              Parabéns, {name}! 🎉
            </h2>
            
            <p className="text-xl text-slate-300 mb-8">
              Você está a um clique de transformar sua vida!
            </p>

            <div className="bg-slate-900/50 rounded-lg p-6 mb-8">
              <p className="text-slate-300 mb-4">
                Enviamos um link de pagamento para <strong className="text-emerald-400">{email}</strong>
              </p>
              <p className="text-sm text-slate-400">
                Complete o pagamento para liberar acesso imediato ao app.
              </p>
            </div>

            <Button
              onClick={() => router.push('/checkout')}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 h-14 text-lg"
            >
              Ir para o pagamento
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        )}
      </div>
    </div>
  )

  // Renderização baseada na etapa atual
  return (
    <>
      {currentStep === 'awareness' && <AwarenessStep />}
      {currentStep === 'interest' && <InterestStep />}
      {currentStep === 'decision' && <DecisionStep />}
      {currentStep === 'action' && <ActionStep />}
    </>
  )
}
