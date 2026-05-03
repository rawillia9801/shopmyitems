'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function submitSellerApplication(_, formData) {
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
    return {
      ok: false,
      message: 'Please complete your name, email, seller type, and item details.',
    };
  }

  if (!supabase) {
    return {
      ok: false,
      message: 'Supabase is not configured yet. Add your Supabase URL and anon key to environment variables.',
    };
  }

  const { error } = await supabase.from('seller_applications').insert(payload);

  if (error) {
    return {
      ok: false,
      message: error.message,
    };
  }

  return {
    ok: true,
    message: 'Application received. We will review your seller request and follow up by email.',
  };
}
