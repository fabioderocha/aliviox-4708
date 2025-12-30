"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BookOpen, 
  CheckCircle2, 
  Download,
  Heart,
  ArrowLeft,
  Star,
  Sparkles,
  FileText,
  Clock,
  Users
} from "lucide-react"
import Link from "next/link"

export default function EbookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Aqui você pode integrar com sua API de email marketing
    console.log("Dados do formulário:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-medium">Voltar</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Rede Vida
            </span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 px-4 py-2 text-sm border border-emerald-500/30">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                E-book Gratuito
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Guia Completo para
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Viver Sem Dor nas Costas
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Descubra os segredos para aliviar dores lombares crônicas com exercícios simples, 
                técnicas comprovadas e hábitos saudáveis que transformarão sua qualidade de vida.
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300 text-lg">
                    <strong className="text-white">15 exercícios ilustrados</strong> para fortalecer sua lombar
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300 text-lg">
                    <strong className="text-white">Técnicas de postura</strong> para o dia a dia
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300 text-lg">
                    <strong className="text-white">Plano de 30 dias</strong> para recuperação progressiva
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300 text-lg">
                    <strong className="text-white">Dicas de especialistas</strong> em fisioterapia
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-400" />
                  <span className="text-slate-300 font-medium">45 páginas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <span className="text-slate-300 font-medium">Leitura: 30 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-400" />
                  <span className="text-slate-300 font-medium">+2.500 downloads</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-2 border-emerald-500/30 shadow-2xl">
                {!submitted ? (
                  <>
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        Baixe Grátis Agora
                      </h2>
                      <p className="text-slate-300">
                        Preencha os dados abaixo e receba o e-book no seu email
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                          Nome completo
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Seu nome"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12 border-2 border-slate-600 bg-slate-900 text-white placeholder:text-slate-500 focus:border-emerald-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                          E-mail
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12 border-2 border-slate-600 bg-slate-900 text-white placeholder:text-slate-500 focus:border-emerald-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                          WhatsApp
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(00) 00000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="h-12 border-2 border-slate-600 bg-slate-900 text-white placeholder:text-slate-500 focus:border-emerald-500"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-14 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-lg font-semibold"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Baixar E-book Grátis
                      </Button>

                      <p className="text-xs text-slate-400 text-center">
                        Ao baixar, você concorda em receber emails com conteúdos exclusivos. 
                        Seus dados estão seguros conosco.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Sucesso! 🎉
                    </h2>
                    <p className="text-xl text-slate-300 mb-6">
                      Enviamos o e-book para <strong className="text-emerald-400">{formData.email}</strong>
                    </p>
                    <p className="text-slate-400 mb-8">
                      Verifique sua caixa de entrada (e spam, por precaução). 
                      O download também está disponível abaixo:
                    </p>
                    <Button
                      className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Baixar Novamente
                    </Button>
                  </div>
                )}
              </Card>

              {/* Trust Badges */}
              <div className="mt-6 flex items-center justify-center gap-4 text-slate-400 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>4.9/5</span>
                </div>
                <span>•</span>
                <span>100% Gratuito</span>
                <span>•</span>
                <span>Sem Spam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 px-4 sm:px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              O que você vai aprender
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Conteúdo completo e prático para transformar sua saúde
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Chapter 1 */}
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-emerald-400 font-bold text-sm mb-2">CAPÍTULO 1</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Entendendo a Dor Lombar
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Causas comuns, tipos de dor e quando procurar ajuda profissional.
              </p>
            </Card>

            {/* Chapter 2 */}
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-emerald-400 font-bold text-sm mb-2">CAPÍTULO 2</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Exercícios de Fortalecimento
              </h3>
              <p className="text-slate-300 leading-relaxed">
                15 exercícios ilustrados para fortalecer a região lombar e core.
              </p>
            </Card>

            {/* Chapter 3 */}
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-emerald-400 font-bold text-sm mb-2">CAPÍTULO 3</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Postura no Dia a Dia
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Como sentar, levantar e dormir corretamente para evitar dores.
              </p>
            </Card>

            {/* Chapter 4 */}
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-emerald-400 font-bold text-sm mb-2">CAPÍTULO 4</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Alongamentos Terapêuticos
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Rotina de alongamentos para aliviar tensões e melhorar flexibilidade.
              </p>
            </Card>

            {/* Chapter 5 */}
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-emerald-400 font-bold text-sm mb-2">CAPÍTULO 5</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Plano de 30 Dias
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Programa progressivo para recuperação e prevenção de dores.
              </p>
            </Card>

            {/* Chapter 6 */}
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-emerald-400 font-bold text-sm mb-2">CAPÍTULO 6</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Hábitos Saudáveis
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Nutrição, hidratação e lifestyle para uma coluna saudável.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              O que dizem sobre o e-book
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">
                "Conteúdo incrível! Os exercícios são simples e realmente funcionam. 
                Em 2 semanas já senti diferença."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  C
                </div>
                <div>
                  <p className="font-semibold text-white">Carlos Mendes</p>
                  <p className="text-sm text-slate-400">Contador</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">
                "Finalmente entendi a causa das minhas dores. O plano de 30 dias 
                mudou minha rotina completamente!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div>
                  <p className="font-semibold text-white">Paula Oliveira</p>
                  <p className="text-sm text-slate-400">Arquiteta</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">
                "Material completo e bem explicado. As ilustrações ajudam muito 
                a fazer os exercícios corretamente."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <p className="font-semibold text-white">Roberto Lima</p>
                  <p className="text-sm text-slate-400">Professor</p>
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
            Comece sua transformação hoje
          </h2>
          <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
            Baixe o e-book gratuito e dê o primeiro passo para uma vida sem dor nas costas.
          </p>
          
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="h-16 px-12 bg-white text-emerald-600 hover:bg-emerald-50 text-xl font-bold shadow-2xl"
          >
            <Download className="w-6 h-6 mr-3" />
            Baixar E-book Grátis
          </Button>

          <p className="mt-8 text-emerald-100 text-sm">
            🔒 100% gratuito. Sem pegadinhas. Seus dados estão seguros.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 bg-slate-950 text-slate-400">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Rede Vida
              </span>
            </div>
            
            <p className="text-center">
              © 2024 Rede Vida. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-6">
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Início
              </Link>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Termos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
