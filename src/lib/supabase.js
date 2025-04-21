import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://niwtidymzkjtgkrwrmgv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pd3RpZHltemtqdGdrcndybWd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3MzQyMzYsImV4cCI6MjA2MDMxMDIzNn0.M5KHXGkJVjh7HYqn2C2TLaH-A5d8yuESofrJQ7fmMVM'

export const supabase = createClient(supabaseUrl, supabaseKey) 