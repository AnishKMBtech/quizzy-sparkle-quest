// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://uhbhwuczdtuykmeythsq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoYmh3dWN6ZHR1eWttZXl0aHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxNjc3MTEsImV4cCI6MjA1Mzc0MzcxMX0.2MunXafsiCzq8_g7HKZWTHLSfFuCAYL1xH4w0yQDW-s";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);