import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jnwuzlcbyjkqlehzxpwo.supabase.co'
const supabaseKey = 'sb_publishable_8GdCeWU0ICOhL30O7pF-GQ_3Oqhwh99'

export const supabase = createClient(supabaseUrl, supabaseKey)