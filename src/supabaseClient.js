import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rsbpalfbxrgstubkqubk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);