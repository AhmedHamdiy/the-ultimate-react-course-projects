import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "/https:aufjdvtioiirmsaicyxy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1ZmpkdnRpb2lpcm1zYWljeXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3OTU2MjYsImV4cCI6MjA0MjM3MTYyNn0.QUltxpGngVr60wi96k4wriKi_o-KQaXqGpKmrYovwtw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
