"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  User,
  MapPin,
  Clock,
  Target
} from "lucide-react"

interface OnboardingProps {
  onComplete?: () => void
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null)
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null)
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])

  const bodyParts = [
    { id: "lombar", name: "Lombar", position: "bottom-1/3 left-1/2 -translate-x-1/2" },
    { id: "cervical", name: "Cervical", position: "top-1/4 left-1/2 -translate-x-1/2" },
    { id: "trapezio", name: "Trapézio", position: "top-1/3 left-1/3" },
    { id: "escapulas", name: "Entre Escápulas", position: "top-1/2 left-1/2 -translate-x-1/2" },
    { id: "ciatico", name: "Ciático", position: "bottom-1/4 left-1/3" }
  ]

  const durations = [
    { id: "cronica", name: "Crônica", description: "Mais de 3 meses", icon: "🔴" },
    { id: "recente", name: "Recente", description: "Algumas semanas", icon: "🟡" },
    { id: "crise", name: "Crise", description: "Dor aguda agora", icon: "🔥" }
  ]

  const goals = [
    { id: "aliviar", name: "Aliviar dor", icon: "💊" },
    { id: "mobilidade", name: "Melhorar mobilidade", icon: "🤸" },
    { id: "cirurgia", name: "Evitar cirurgia", icon: "🚫" },
    { id: "trabalhar", name: "Trabalhar sem dor", icon: "💼" },
    { id: "dormir", name: "Dormir melhor", icon: "😴" }
  ]

  const handleGoalToggle = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    )
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete?.()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return true
      case 2:
        return selectedBodyPart !== null
      case 3:
        return selectedDuration !== null
      case 4:
        return selectedGoals.length > 0
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">
              Passo {currentStep} de 4
            </span>
            <span className="text-sm font-medium text-blue-600">
              {Math.round((currentStep / 4) * 100)}% completo
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Tela 1 - Bem-vindo ao AliviX */}
        {currentStep === 1 && (
          <Card className="p-8 sm:p-12 bg-white border-2 border-blue-100 rounded-3xl shadow-xl text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Heart className="w-10 h-10 text-white" />
            </div>
            
            <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-sm border border-blue-200 rounded-full mb-6">
              <User className="w-4 h-4 mr-2 inline" />
              Personalização
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Bem-vindo ao AliviX
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Vamos aliviar sua dor juntos?
            </p>

            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Em apenas 4 passos rápidos, vamos criar um plano personalizado para você. 
              Leva menos de 2 minutos! ⏱️
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleNext}
                className="h-14 px-8 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white text-lg font-semibold rounded-full shadow-lg"
              >
                Vamos começar
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Rápido</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Acolhedor</span>
              </div>
            </div>
          </Card>
        )}

        {/* Tela 2 - Onde dói? */}
        {currentStep === 2 && (
          <Card className="p-8 sm:p-12 bg-white border-2 border-blue-100 rounded-3xl shadow-xl">
            <div className="text-center mb-8">
              <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-sm border border-blue-200 rounded-full mb-4">
                <MapPin className="w-4 h-4 mr-2 inline" />
                Localização da Dor
              </Badge>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Onde dói?
              </h2>
              
              <p className="text-lg text-gray-600">
                Toque na área do corpo onde você sente mais dor
              </p>
            </div>

            {/* Mapa do Corpo Simplificado */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative bg-gradient-to-b from-blue-50 to-green-50 rounded-3xl p-8 border-2 border-blue-200">
                {/* Silhueta do corpo (representação simplificada) */}
                <div className="relative w-full h-96 mx-auto">
                  {/* Cabeça */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-200 rounded-full"></div>
                  
                  {/* Pescoço */}
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-200 rounded-lg"></div>
                  
                  {/* Tronco */}
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-48 bg-blue-200 rounded-3xl"></div>
                  
                  {/* Pernas */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
                    <div className="w-12 h-32 bg-blue-200 rounded-2xl"></div>
                    <div className="w-12 h-32 bg-blue-200 rounded-2xl"></div>
                  </div>

                  {/* Pontos de dor clicáveis */}
                  {bodyParts.map((part) => (
                    <button
                      key={part.id}
                      onClick={() => setSelectedBodyPart(part.id)}
                      className={`absolute ${part.position} w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        selectedBodyPart === part.id
                          ? "bg-red-500 text-white scale-125 shadow-xl"
                          : "bg-white/80 hover:bg-red-100 text-red-500 border-2 border-red-300 hover:scale-110"
                      }`}
                    >
                      <span className="text-2xl">📍</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Lista de áreas selecionáveis */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {bodyParts.map((part) => (
                  <Button
                    key={part.id}
                    onClick={() => setSelectedBodyPart(part.id)}
                    className={`h-auto py-4 rounded-2xl transition-all ${
                      selectedBodyPart === part.id
                        ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105"
                        : "bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-300"
                    }`}
                  >
                    <div className="text-center">
                      <p className="font-semibold">{part.name}</p>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Navegação */}
            <div className="flex gap-4 justify-between">
              <Button
                onClick={handleBack}
                variant="outline"
                className="h-12 px-6 border-2 border-gray-300 rounded-full"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="h-12 px-8 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        )}

        {/* Tela 3 - Há quanto tempo? */}
        {currentStep === 3 && (
          <Card className="p-8 sm:p-12 bg-white border-2 border-blue-100 rounded-3xl shadow-xl">
            <div className="text-center mb-8">
              <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-sm border border-blue-200 rounded-full mb-4">
                <Clock className="w-4 h-4 mr-2 inline" />
                Duração da Dor
              </Badge>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Há quanto tempo você sente essa dor?
              </h2>
              
              <p className="text-lg text-gray-600">
                Isso nos ajuda a criar o melhor plano para você
              </p>
            </div>

            {/* Opções de duração */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {durations.map((duration) => (
                <button
                  key={duration.id}
                  onClick={() => setSelectedDuration(duration.id)}
                  className={`p-8 rounded-3xl border-2 transition-all duration-300 ${
                    selectedDuration === duration.id
                      ? "bg-gradient-to-br from-blue-500 to-green-500 border-blue-500 text-white shadow-xl scale-105"
                      : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg"
                  }`}
                >
                  <div className="text-5xl mb-4">{duration.icon}</div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    selectedDuration === duration.id ? "text-white" : "text-gray-900"
                  }`}>
                    {duration.name}
                  </h3>
                  <p className={`text-sm ${
                    selectedDuration === duration.id ? "text-blue-100" : "text-gray-600"
                  }`}>
                    {duration.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Info adicional */}
            {selectedDuration && (
              <div className="max-w-2xl mx-auto mb-8">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 rounded-2xl">
                  <p className="text-gray-700 text-center">
                    {selectedDuration === "cronica" && "Vamos focar em exercícios de longo prazo e fortalecimento gradual."}
                    {selectedDuration === "recente" && "Perfeito! Vamos trabalhar para evitar que se torne crônica."}
                    {selectedDuration === "crise" && "Entendido. Vamos começar com exercícios de alívio imediato."}
                  </p>
                </Card>
              </div>
            )}

            {/* Navegação */}
            <div className="flex gap-4 justify-between">
              <Button
                onClick={handleBack}
                variant="outline"
                className="h-12 px-6 border-2 border-gray-300 rounded-full"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="h-12 px-8 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        )}

        {/* Tela 4 - O que você busca? */}
        {currentStep === 4 && (
          <Card className="p-8 sm:p-12 bg-white border-2 border-blue-100 rounded-3xl shadow-xl">
            <div className="text-center mb-8">
              <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-sm border border-blue-200 rounded-full mb-4">
                <Target className="w-4 h-4 mr-2 inline" />
                Seus Objetivos
              </Badge>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                O que você busca?
              </h2>
              
              <p className="text-lg text-gray-600">
                Selecione todos os objetivos que fazem sentido para você
              </p>
            </div>

            {/* Opções de objetivos */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
              {goals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => handleGoalToggle(goal.id)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${
                    selectedGoals.includes(goal.id)
                      ? "bg-gradient-to-r from-blue-500 to-green-500 border-blue-500 text-white shadow-lg scale-105"
                      : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    {goal.icon}
                  </div>
                  
                  <div className="flex-1 text-left">
                    <p className={`text-lg font-semibold ${
                      selectedGoals.includes(goal.id) ? "text-white" : "text-gray-900"
                    }`}>
                      {goal.name}
                    </p>
                  </div>

                  {selectedGoals.includes(goal.id) && (
                    <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>

            {/* Contador de objetivos selecionados */}
            {selectedGoals.length > 0 && (
              <div className="text-center mb-8">
                <Badge className="bg-green-100 text-green-700 px-4 py-2 border border-green-200 rounded-full">
                  <CheckCircle2 className="w-4 h-4 mr-2 inline" />
                  {selectedGoals.length} objetivo{selectedGoals.length > 1 ? "s" : ""} selecionado{selectedGoals.length > 1 ? "s" : ""}
                </Badge>
              </div>
            )}

            {/* Navegação */}
            <div className="flex gap-4 justify-between">
              <Button
                onClick={handleBack}
                variant="outline"
                className="h-12 px-6 border-2 border-gray-300 rounded-full"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="h-12 px-8 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Finalizar
                <CheckCircle2 className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
