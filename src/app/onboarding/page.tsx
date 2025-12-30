"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { 
  ArrowRight, 
  ArrowLeft, 
  Heart,
  User,
  Calendar,
  MapPin,
  AlertCircle,
  Target,
  CheckCircle2
} from "lucide-react"

interface OnboardingData {
  name: string
  age: string
  birthDate: string
  painLocation: string[]
  painIntensity: string
  painDuration: string
  painDescription: string
  goals: string[]
  lifestyle: string
}

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<OnboardingData>({
    name: "",
    age: "",
    birthDate: "",
    painLocation: [],
    painIntensity: "",
    painDuration: "",
    painDescription: "",
    goals: [],
    lifestyle: ""
  })

  const totalSteps = 6

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleComplete = () => {
    console.log("Dados do onboarding:", data)
    // Aqui você pode salvar os dados ou redirecionar
    alert("Onboarding completo! Bem-vindo ao Rede Vida 🎉")
  }

  const toggleArrayItem = (array: string[], item: string) => {
    if (array.includes(item)) {
      return array.filter(i => i !== item)
    }
    return [...array, item]
  }

  const progressPercentage = (step / totalSteps) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Rede Vida
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Vamos conhecer você melhor
          </h1>
          <p className="text-slate-300">
            Etapa {step} de {totalSteps}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <Card className="p-6 sm:p-8 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700">
          {/* Step 1: Informações Básicas */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Informações Básicas</h2>
                  <p className="text-slate-400">Conte-nos um pouco sobre você</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">
                    Qual é o seu nome completo?
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ex: Maria Silva Santos"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <Label htmlFor="birthDate" className="text-white mb-2 block">
                    Data de nascimento
                  </Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={data.birthDate}
                    onChange={(e) => setData({ ...data, birthDate: e.target.value })}
                    className="h-12 bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="age" className="text-white mb-2 block">
                    Qual é a sua idade?
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Ex: 35"
                    value={data.age}
                    onChange={(e) => setData({ ...data, age: e.target.value })}
                    className="h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Localização da Dor */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Onde você sente dor?</h2>
                  <p className="text-slate-400">Selecione todas as áreas que se aplicam</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Lombar (parte baixa)",
                  "Torácica (meio das costas)",
                  "Cervical (pescoço)",
                  "Ombros",
                  "Região sacral",
                  "Toda a coluna"
                ].map((location) => (
                  <button
                    key={location}
                    onClick={() => setData({ 
                      ...data, 
                      painLocation: toggleArrayItem(data.painLocation, location) 
                    })}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      data.painLocation.includes(location)
                        ? "bg-emerald-500/20 border-emerald-500 text-white"
                        : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{location}</span>
                      {data.painLocation.includes(location) && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Intensidade e Duração */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Intensidade da Dor</h2>
                  <p className="text-slate-400">Como você classificaria sua dor?</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="text-white mb-3 block">
                    Nível de dor (0 = sem dor, 10 = dor insuportável)
                  </Label>
                  <div className="grid grid-cols-11 gap-2">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                      <button
                        key={level}
                        onClick={() => setData({ ...data, painIntensity: level.toString() })}
                        className={`aspect-square rounded-lg border-2 transition-all duration-300 font-bold ${
                          data.painIntensity === level.toString()
                            ? "bg-emerald-500 border-emerald-400 text-white scale-110"
                            : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-slate-500"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-white mb-3 block">
                    Há quanto tempo você sente essa dor?
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Menos de 1 mês",
                      "1-3 meses",
                      "3-6 meses",
                      "6 meses - 1 ano",
                      "1-2 anos",
                      "Mais de 2 anos"
                    ].map((duration) => (
                      <button
                        key={duration}
                        onClick={() => setData({ ...data, painDuration: duration })}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          data.painDuration === duration
                            ? "bg-emerald-500/20 border-emerald-500 text-white"
                            : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-slate-500"
                        }`}
                      >
                        <span className="font-medium">{duration}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Descrição da Dor */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Conte mais sobre sua dor</h2>
                  <p className="text-slate-400">Descreva como você se sente</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="painDescription" className="text-white mb-2 block">
                    Descreva sua dor e o que a piora ou melhora
                  </Label>
                  <Textarea
                    id="painDescription"
                    placeholder="Ex: Sinto uma dor constante na lombar que piora quando fico muito tempo sentado. Melhora quando faço alongamentos..."
                    value={data.painDescription}
                    onChange={(e) => setData({ ...data, painDescription: e.target.value })}
                    className="min-h-[150px] bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                  <p className="text-sm text-slate-400 mt-2">
                    Seja o mais detalhado possível. Isso nos ajuda a criar um plano personalizado para você.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Objetivos */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Seus Objetivos</h2>
                  <p className="text-slate-400">O que você espera alcançar?</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  "Reduzir a dor no dia a dia",
                  "Melhorar a postura",
                  "Voltar a fazer atividades físicas",
                  "Dormir melhor",
                  "Ter mais qualidade de vida",
                  "Evitar cirurgia",
                  "Reduzir uso de medicamentos",
                  "Prevenir piora da condição"
                ].map((goal) => (
                  <button
                    key={goal}
                    onClick={() => setData({ 
                      ...data, 
                      goals: toggleArrayItem(data.goals, goal) 
                    })}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      data.goals.includes(goal)
                        ? "bg-emerald-500/20 border-emerald-500 text-white"
                        : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{goal}</span>
                      {data.goals.includes(goal) && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Estilo de Vida */}
          {step === 6 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Seu Estilo de Vida</h2>
                  <p className="text-slate-400">Como é sua rotina?</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-white mb-3 block">
                    Qual descreve melhor sua rotina?
                  </Label>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "Muito sedentário (trabalho sentado, pouco movimento)",
                      "Moderadamente ativo (caminho um pouco, faço tarefas domésticas)",
                      "Ativo (pratico exercícios regularmente)",
                      "Muito ativo (trabalho físico ou atleta)"
                    ].map((lifestyle) => (
                      <button
                        key={lifestyle}
                        onClick={() => setData({ ...data, lifestyle })}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                          data.lifestyle === lifestyle
                            ? "bg-emerald-500/20 border-emerald-500 text-white"
                            : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-slate-500"
                        }`}
                      >
                        <span className="font-medium">{lifestyle}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-xl p-6 mt-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Quase lá!</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Com base nas suas respostas, vamos criar um plano personalizado de exercícios e acompanhamento para ajudar você a viver sem dor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex-1 h-12 border-2 border-slate-600 text-white hover:bg-slate-700"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar
              </Button>
            )}
            
            {step < totalSteps ? (
              <Button
                onClick={handleNext}
                className="flex-1 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
              >
                Próximo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleComplete}
                className="flex-1 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
              >
                Finalizar
                <CheckCircle2 className="w-5 h-5 ml-2" />
              </Button>
            )}
          </div>
        </Card>

        {/* Help Text */}
        <p className="text-center text-slate-400 text-sm mt-6">
          🔒 Suas informações são confidenciais e seguras
        </p>
      </div>
    </div>
  )
}
