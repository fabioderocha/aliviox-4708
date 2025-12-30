"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { 
  Heart, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Target,
  TrendingUp
} from "lucide-react"

type QuizAnswers = {
  intensity: string
  duration: string
  treatments: string[]
  treatmentOther: string
  location: string
  symptoms: string[]
  symptomOther: string
  name: string
  email: string
  phone: string
}

export default function QuizPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>({
    intensity: "",
    duration: "",
    treatments: [],
    treatmentOther: "",
    location: "",
    symptoms: [],
    symptomOther: "",
    name: "",
    email: "",
    phone: ""
  })

  const totalSteps = 7

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const handleTreatmentChange = (treatment: string, checked: boolean) => {
    if (checked) {
      setAnswers({ ...answers, treatments: [...answers.treatments, treatment] })
    } else {
      setAnswers({ ...answers, treatments: answers.treatments.filter(t => t !== treatment) })
    }
  }

  const handleSymptomChange = (symptom: string, checked: boolean) => {
    if (checked) {
      setAnswers({ ...answers, symptoms: [...answers.symptoms, symptom] })
    } else {
      setAnswers({ ...answers, symptoms: answers.symptoms.filter(s => s !== symptom) })
    }
  }

  const getRecommendation = () => {
    const isLightAndRecent = answers.intensity === "Leve" && (answers.duration === "Menos de uma semana" || answers.duration === "1 a 3 meses")
    const isIntenseOrChronic = answers.intensity === "Intensa" || answers.intensity === "Crônica" || answers.duration === "Mais de 6 meses"

    if (isLightAndRecent) {
      return {
        title: "Recomendação Personalizada para Você",
        message: "Recomendamos o uso do AlivioX como um primeiro passo. Experimente!",
        icon: <Target className="w-12 h-12 text-green-500" />
      }
    } else if (isIntenseOrChronic) {
      return {
        title: "Recomendação Personalizada para Você",
        message: "Sugerimos que você consulte um especialista e use o AlivioX como parte do tratamento.",
        icon: <AlertCircle className="w-12 h-12 text-orange-500" />
      }
    } else {
      return {
        title: "Recomendação Personalizada para Você",
        message: "O AlivioX pode ajudar você a monitorar e tratar suas dores de forma eficaz!",
        icon: <TrendingUp className="w-12 h-12 text-blue-500" />
      }
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return answers.intensity !== ""
      case 2:
        return answers.duration !== ""
      case 3:
        return answers.treatments.length > 0
      case 4:
        return answers.location !== ""
      case 5:
        return answers.symptoms.length > 0
      case 6:
        return answers.name !== "" && answers.email !== ""
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
              AlivioX
            </span>
          </a>
        </nav>
      </header>

      {/* Progress Bar */}
      {step > 0 && step < totalSteps && (
        <div className="fixed top-[73px] w-full bg-slate-800/50 backdrop-blur-sm z-40">
          <div className="container mx-auto px-4 sm:px-6 py-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">
                Pergunta {step} de {totalSteps - 2}
              </span>
              <span className="text-sm text-slate-400">
                {Math.round((step / (totalSteps - 2)) * 100)}% completo
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-red-500 to-rose-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / (totalSteps - 2)) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          
          {/* Step 0: Introdução */}
          {step === 0 && (
            <Card className="p-8 sm:p-12 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Descubra o Melhor Alívio para Suas Dores nas Costas!
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Responda algumas perguntas rápidas e descubra como o AlivioX pode ajudar você a viver sem dores.
              </p>
              <Button 
                onClick={handleNext}
                className="h-14 px-8 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white text-lg font-semibold"
              >
                Começar Quiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="mt-6 text-sm text-slate-400">
                ⏱️ Leva apenas 2 minutos
              </p>
            </Card>
          )}

          {/* Step 1: Intensidade da dor */}
          {step === 1 && (
            <Card className="p-8 sm:p-12 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">
                Qual é a intensidade da sua dor nas costas?
              </h2>
              <RadioGroup value={answers.intensity} onValueChange={(value) => setAnswers({ ...answers, intensity: value })}>
                <div className="space-y-4">
                  {["Leve", "Moderada", "Intensa", "Crônica"].map((option) => (
                    <Label
                      key={option}
                      className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        answers.intensity === option
                          ? "border-red-500 bg-red-500/10"
                          : "border-slate-600 hover:border-slate-500"
                      }`}
                    >
                      <RadioGroupItem value={option} id={option} />
                      <span className="text-lg text-white">{option}</span>
                    </Label>
                  ))}
                </div>
              </RadioGroup>
              <div className="flex gap-4 mt-8">
                <Button 
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 h-12 border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Voltar
                </Button>
                <Button 
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex-1 h-12 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white disabled:opacity-50"
                >
                  Próxima
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Card>
          )}

          {/* Step 2: Duração da dor */}
          {step === 2 && (
            <Card className="p-8 sm:p-12 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">
                Há quanto tempo você sente dor nas costas?
              </h2>
              <RadioGroup value={answers.duration} onValueChange={(value) => setAnswers({ ...answers, duration: value })}>
                <div className="space-y-4">
                  {["Menos de uma semana", "1 a 3 meses", "3 a 6 meses", "Mais de 6 meses"].map((option) => (
                    <Label
                      key={option}
                      className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        answers.duration === option
                          ? "border-red-500 bg-red-500/10"
                          : "border-slate-600 hover:border-slate-500"
                      }`}
                    >
                      <RadioGroupItem value={option} id={option} />
                      <span className="text-lg text-white">{option}</span>
                    </Label>
                  ))}
                </div>
              </RadioGroup>
              <div className="flex gap-4 mt-8">
                <Button 
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 h-12 border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Voltar
                </Button>
                <Button 
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex-1 h-12 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white disabled:opacity-50"
                >
                  Próxima
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Card>
          )}

          {/* Step 3: Tratamentos tentados */}
          {step === 3 && (
            <Card className="p-8 sm:p-12 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">
                Você já tentou algum tratamento para suas dores?
              </h2>
              <p className="text-slate-400 mb-6">Marque todas as opções que se aplicam</p>
              <div className="space-y-4">
                {["Remédios", "Fisioterapia", "Massagens", "Nenhum"].map((option) => (
                  <Label
                    key={option}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      answers.treatments.includes(option)
                        ? "border-red-500 bg-red-500/10"
                        : "border-slate-600 hover:border-slate-500"
                    }`}
                  >
                    <Checkbox
                      checked={answers.treatments.includes(option)}
                      onCheckedChange={(checked) => handleTreatmentChange(option, checked as boolean)}
                    />
                    <span className="text-lg text-white">{option}</span>
                  </Label>
                ))}
                <div className="space-y-2">
                  <Label
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      answers.treatments.includes("Outros")
                        ? "border-red-500 bg-red-500/10"
                        : "border-slate-600 hover:border-slate-500"
                    }`}
                  >
                    <Checkbox
                      checked={answers.treatments.includes("Outros")}
                      onCheckedChange={(checked) => handleTreatmentChange("Outros", checked as boolean)}
                    />
                    <span className="text-lg text-white">Outros</span>
                  </Label>
                  {answers.treatments.includes("Outros") && (
                    <Input
                      placeholder="Especifique..."
                      value={answers.treatmentOther}
                      onChange={(e) => setAnswers({ ...answers, treatmentOther: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  )}
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button 
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 h-12 border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Voltar
                </Button>
                <Button 
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex-1 h-12 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white disabled:opacity-50"
                >
                  Próxima
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Card>
          )}

          {/* Step 4: Localização da dor */}
          {step === 4 && (
            <Card className="p-8 sm:p-12 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">
                Em qual parte das costas você sente mais dor?
              </h2>
              <RadioGroup value={answers.location} onValueChange={(value) => setAnswers({ ...answers, location: value })}>
                <div className="space-y-4">
                  {["Superior", "Inferior", "Lateral", "Todas as opções"].map((option) => (
                    <Label
                      key={option}
                      className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        answers.location === option
                          ? "border-red-500 bg-red-500/10"
                          : "border-slate-600 hover:border-slate-500"
                      }`}
                    >
                      <RadioGroupItem value={option} id={option} />
                      <span className="text-lg text-white">{option}</span>
                    </Label>
                  ))}
                </div>
              </RadioGroup>
              <div className="flex gap-4 mt-8">
                <Button 
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 h-12 border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Voltar
                </Button>
                <Button 
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex-1 h-12 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white disabled:opacity-50"
                >
                  Próxima
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Card>
          )}

          {/* Step 5: Sintomas associados */}
          {step === 5 && (
            <Card className="p-8 sm:p-12 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">
                Você costuma ter algum dos seguintes sintomas associados?
              </h2>
              <p className="text-slate-400 mb-6">Marque todas as opções que se aplicam</p>
              <div className="space-y-4">
                {["Irradiação para as pernas", "Dificuldade para se mover", "Rigidez ao acordar"].map((option) => (
                  <Label
                    key={option}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      answers.symptoms.includes(option)
                        ? "border-red-500 bg-red-500/10"
                        : "border-slate-600 hover:border-slate-500"
                    }`}
                  >
                    <Checkbox
                      checked={answers.symptoms.includes(option)}
                      onCheckedChange={(checked) => handleSymptomChange(option, checked as boolean)}
                    />
                    <span className="text-lg text-white">{option}</span>
                  </Label>
                ))}
                <div className="space-y-2">
                  <Label
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      answers.symptoms.includes("Outros")
                        ? "border-red-500 bg-red-500/10"
                        : "border-slate-600 hover:border-slate-500"
                    }`}
                  >
                    <Checkbox
                      checked={answers.symptoms.includes("Outros")}
                      onCheckedChange={(checked) => handleSymptomChange("Outros", checked as boolean)}
                    />
                    <span className="text-lg text-white">Outros</span>
                  </Label>
                  {answers.symptoms.includes("Outros") && (
                    <Input
                      placeholder="Especifique..."
                      value={answers.symptomOther}
                      onChange={(e) => setAnswers({ ...answers, symptomOther: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  )}
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button 
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 h-12 border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Voltar
                </Button>
                <Button 
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex-1 h-12 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white disabled:opacity-50"
                >
                  Ver Resultado
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Card>
          )}

          {/* Step 6: Resultado */}
          {step === 6 && (
            <Card className="p-8 sm:p-12 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 text-center">
              <div className="mb-6">
                {getRecommendation().icon}
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {getRecommendation().title}
              </h2>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                Com base nas suas respostas, vamos te dar uma recomendação personalizada!
              </p>
              <div className="bg-gradient-to-br from-red-500/20 to-rose-600/20 border-2 border-red-500/30 rounded-xl p-6 mb-6">
                <p className="text-lg text-white font-semibold">
                  {getRecommendation().message}
                </p>
              </div>
              <Button 
                onClick={handleNext}
                className="h-14 px-8 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white text-lg font-semibold mb-4"
              >
                Clique aqui para saber mais sobre o AlivioX e como ele pode mudar sua vida!
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-slate-400 text-sm">
                💡 Lembre-se, suas costas merecem cuidado! Fale com um especialista e conheça opções de alívio!
              </p>
            </Card>
          )}

          {/* Step 7: Formulário de Contato */}
          {step === 7 && (
            <Card className="p-8 sm:p-12 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Receba Informações Personalizadas
              </h2>
              <p className="text-slate-300 mb-8 text-center">
                Deixe seus dados para receber dicas exclusivas e informações sobre o AlivioX
              </p>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Nome *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={answers.name}
                    onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                    required
                    className="h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={answers.email}
                    onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                    required
                    className="h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Telefone (opcional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={answers.phone}
                    onChange={(e) => setAnswers({ ...answers, phone: e.target.value })}
                    className="h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="flex gap-4 mt-8">
                  <Button 
                    type="button"
                    onClick={handleBack}
                    variant="outline"
                    className="flex-1 h-12 border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Voltar
                  </Button>
                  <Button 
                    type="submit"
                    disabled={!canProceed()}
                    className="flex-1 h-12 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white disabled:opacity-50"
                  >
                    Enviar
                    <CheckCircle2 className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </form>
              <p className="mt-6 text-center text-sm text-slate-400">
                🔒 Seus dados estão seguros conosco
              </p>
            </Card>
          )}

          {/* Step 8: Agradecimento */}
          {step === 8 && (
            <Card className="p-8 sm:p-12 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Obrigado por participar!
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Em breve, você receberá informações sobre o AlivioX e dicas para aliviar suas dores.
              </p>
              <div className="bg-gradient-to-br from-red-500/20 to-rose-600/20 border-2 border-red-500/30 rounded-xl p-6 mb-8">
                <p className="text-lg text-white font-semibold mb-2">
                  📧 Verifique seu e-mail
                </p>
                <p className="text-slate-300">
                  Enviamos um e-mail para <strong className="text-white">{answers.email}</strong> com mais informações
                </p>
              </div>
              <Button 
                onClick={() => window.location.href = "/"}
                className="h-14 px-8 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white text-lg font-semibold"
              >
                Voltar para o Início
              </Button>
            </Card>
          )}

        </div>
      </div>
    </div>
  )
}
