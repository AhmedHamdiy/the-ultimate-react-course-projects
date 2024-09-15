import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lziahkdnwuytkycmyjxc.supabase.co'
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6aWFoa2Rud3V5dGt5Y215anhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxNzY5NjYsImV4cCI6MjA0MTc1Mjk2Nn0.0myoJORvLQjP9GryH4EUl3fonOsALx5wGdlaeKEmN7o'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
