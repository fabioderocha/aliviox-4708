"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  Activity, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Calendar,
  BookOpen,
  Bell,
  ArrowRight,
  Star,
  Zap,
  Shield
} from "lucide-react"

export default function Home() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
      {/* Header/Navbar */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-emerald-100 z-50">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              AlivioX
            </span>
          </div>
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
            Entrar na Lista
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-4 py-2 text-sm">
              <Zap className="w-4 h-4 mr-2 inline" />
              Lançamento em breve
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
              Viva sem dor,
              <br />
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                viva melhor
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              O aplicativo que ajuda você a gerenciar dores crônicas nas costas com exercícios personalizados, acompanhamento diário e conteúdo educativo.
            </p>

            {/* CTA Form */}
            <div className="max-w-md mx-auto mt-12">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-14 px-6 text-lg border-2 border-emerald-200 focus:border-emerald-500"
                />
                <Button 
                  type="submit"
                  className="h-14 px-8 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-lg font-semibold"
                >
                  {submitted ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <>
                      Quero participar
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
              {submitted && (
                <p className="mt-4 text-emerald-600 font-medium animate-fade-in">
                  ✨ Obrigado! Você está na lista de espera!
                </p>
              )}
              <p className="mt-4 text-sm text-gray-500">
                Junte-se a <strong>+500 pessoas</strong> na lista de espera
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-gray-700 font-medium">4.9/5 avaliação</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700 font-medium">+1.000 usuários</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700 font-medium">Dados protegidos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Funcionalidades pensadas para tornar sua jornada de recuperação simples e eficaz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200 bg-white">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Plano Diário Personalizado
              </h3>
              <p className="text-gray-600 leading-relaxed">
                3 exercícios por dia adaptados ao seu nível de dor, com vídeos e instruções passo a passo.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200 bg-white">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Diário da Dor
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Registre sua dor diariamente e acompanhe sua evolução com gráficos simples e claros.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200 bg-white">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Bell className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Lembretes Inteligentes
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Notificações diárias para fazer exercícios e registrar sua dor, criando uma rotina saudável.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200 bg-white">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Conteúdo Educativo
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Artigos e dicas sobre dor crônica, postura e exercícios para você entender seu corpo.
              </p>
            </Card>

            {/* Feature 5 */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200 bg-white">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Histórico Completo
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Veja sua jornada completa: exercícios realizados, níveis de dor e progresso ao longo do tempo.
              </p>
            </Card>

            {/* Feature 6 */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200 bg-white">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Onboarding Simples
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Questionário rápido para entender sua dor e criar um perfil personalizado em minutos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Como funciona
            </h2>
            <p className="text-xl text-gray-600">
              Simples, rápido e eficaz em 3 passos
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                1
              </div>
              <Card className="flex-1 p-8 bg-white border-2 border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Conte sua história
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Responda um questionário rápido sobre sua dor: onde dói, intensidade, há quanto tempo e seus objetivos.
                </p>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                2
              </div>
              <Card className="flex-1 p-8 bg-white border-2 border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Receba seu plano
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Tenha acesso a exercícios personalizados, lembretes e conteúdo educativo adaptado ao seu perfil.
                </p>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                3
              </div>
              <Card className="flex-1 p-8 bg-white border-2 border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Acompanhe sua evolução
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Registre sua dor diariamente e veja seu progresso em gráficos claros. Celebre cada conquista!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              O que as pessoas dizem
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de quem está transformando sua vida
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-8 bg-white border-2 border-emerald-100 hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Depois de anos convivendo com dor nas costas, finalmente encontrei algo que funciona. Os exercícios são simples e cabem na minha rotina."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maria Silva</p>
                  <p className="text-sm text-gray-500">Professora, 42 anos</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-8 bg-white border-2 border-emerald-100 hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "O diário da dor me ajudou a entender o que piora e melhora minha condição. Agora consigo prevenir crises antes que aconteçam."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div>
                  <p className="font-semibold text-gray-900">João Santos</p>
                  <p className="text-sm text-gray-500">Engenheiro, 38 anos</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-8 bg-white border-2 border-emerald-100 hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Achei que nunca conseguiria criar uma rotina de exercícios. Os lembretes e o plano diário tornaram tudo muito mais fácil!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ana Costa</p>
                  <p className="text-sm text-gray-500">Designer, 35 anos</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-emerald-500 to-teal-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Pronto para viver sem dor?
          </h2>
          <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
            Entre na lista de espera e seja um dos primeiros a experimentar o Rede Vida quando lançarmos.
          </p>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-6 text-lg bg-white border-2 border-white"
              />
              <Button 
                type="submit"
                className="h-14 px-8 bg-white text-emerald-600 hover:bg-emerald-50 text-lg font-semibold"
              >
                {submitted ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <>
                    Garantir minha vaga
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          <p className="mt-8 text-emerald-100 text-sm">
            🔒 Seus dados estão seguros conosco. Sem spam, prometemos.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 bg-gray-900 text-gray-400">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                AlivioX
              </span>
            </div>
            
            <p className="text-center">
              © 2024 Rede Vida. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
