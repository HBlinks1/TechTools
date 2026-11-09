// Fill in these two values, then upload this file with the others.
// Both are safe to be public: the key below is the "anon" (public) key, and the database refuses
// to hand over anything without a valid sign-in through the server function.
window.APP_CONFIG = {
  // Supabase: Project Settings > API > Project URL, then add /functions/v1/api on the end
  API_URL: "https://YOUR-PROJECT-REF.supabase.co/functions/v1/api",
  // Supabase: Project Settings > API Keys > the anon / publishable key (NOT the service or secret key)
  ANON_KEY: "YOUR-ANON-PUBLIC-KEY"
};
