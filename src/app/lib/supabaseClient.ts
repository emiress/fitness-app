
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pahqikavetqjjoqsgxsp.supabase.co' 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhaHFpa2F2ZXRxampvcXNneHNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MzIyMTQsImV4cCI6MjA2NTIwODIxNH0.iDUTY5v06cp66ET7fSMOCx5q-02JYRuALuhUJyEzgPw' 

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
