import { parseCookies, setCookie } from "@tanstack/start/server";
import { createServerClient } from "@supabase/ssr";

export function getSupabaseServerClient() {
  return createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
    {
      cookies: {
        // @ts-ignore Wait till Supabase overload works
        getAll() {
          return Object.entries(parseCookies()).map(([name, value]) => ({
            name,
            value,
          }));
        },
        setAll(cookies) {
          cookies.forEach((cookie) => {
            setCookie(cookie.name, cookie.value);
          });
        },
      },
    }
  );
}
