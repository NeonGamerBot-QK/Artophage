import postgres from "postgres";

export function usePostgres() {
  if (!process.env.NUXT_POSTGRES_URL) {
    throw createError("Missing `NUXT_POSTGRES_URL` environment variable");
  }

  return postgres(process.env.NUXT_POSTGRES_URL as string);
}
