'use server';

import { revalidatePath } from 'next/cache';
import { createSupabaseServerClient } from '../lib/supabase/server';

export async function submitSellerApplication(formData) {
  const supabase = createSupabaseServerClient();

  const payload = {
    full_name: String(formData.get('full_name') || '').trim(),
    email: String(formData.get('email') || '').trim().toLowerCase(),
    seller_type: String(formData.get('seller_type') || '').trim(),
    categories: String(formData.get('categories') || '').trim(),
    message: String(formData.get('message') || '').trim(),
    status: 'pending',
  };

  if (!payload.full_name || !payload.email || !payload.seller_type || !payload.message) {
    throw new Error('Please complete your name, email, seller type, and item details.');
  }

  if (!supabase) {
    throw new Error('Supabase is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
  }

  const { error } = await supabase.from('seller_applications').insert(payload);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath('/');
}
