import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para o banco de dados
export interface WaitlistEntry {
  id?: string
  email: string
  created_at?: string
}

export interface OnboardingData {
  id?: string
  email?: string
  body_part: string
  duration: string
  goals: string[]
  created_at?: string
}
