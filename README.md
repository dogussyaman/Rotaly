# ROTALY – Otel Rezervasyon Platformu

Otel, villa, pansiyon ve diğer konaklama türleri için rezervasyon platformu.

## Kurulum

1. Bağımlılıkları yükleyin: `npm install` veya `pnpm install`
2. Ortam değişkenlerini ayarlayın:
   - `npm run setup` veya `pnpm run setup` ile `.env.example` dosyası `.env.local` olarak kopyalanır
   - `.env.local` dosyasını düzenleyin ve aşağıdaki değerleri doldurun:
     - `NEXT_PUBLIC_SUPABASE_URL` – Supabase proje URL’i
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` – Supabase anon (public) key
     - (İsteğe bağlı) `NEXT_PUBLIC_APP_LOCALE` – Varsayılan dil (`tr` veya `en`)
3. Veritabanı şemasını Supabase’e uygulayın: `scripts/supabase-schema.sql` dosyasını Supabase SQL Editor’da çalıştırın
4. Geliştirme sunucusunu başlatın: `npm run dev` veya `pnpm dev`

## Canlıya Geçmeden Önce

- `.env.local` (veya canlı ortamda kullanılan env) içinde `NEXT_PUBLIC_SUPABASE_URL` ve `NEXT_PUBLIC_SUPABASE_ANON_KEY` mutlaka tanımlı olmalı
- Locale ve diğer ayarlar isteğe bağlı olarak env üzerinden verilebilir

## Özellikler

- **Genel:** Ana sayfa, arama, tesis detayı, rezervasyon akışı (bilgi → ödeme mock → başarı)
- **Auth:** Giriş, kayıt, şifremi unuttum, ilk girişte şifre değiştirme (otel)
- **Otel başvurusu:** İşletme başvuru formu; admin/support onay/red
- **Admin:** Dashboard, tesisler, rezervasyonlar, kullanıcılar, otel başvuruları, destek, analitik, ayarlar
- **Otel paneli:** Dashboard, tesislerim, odalar, rezervasyonlar, yorumlar, fiyatlandırma, raporlar, ayarlar
- **Destek:** Dashboard, talepler, otel başvuruları, atananlar, acil talepler, kullanıcılar, raporlar, ayarlar

Ödeme adımında gerçek ödeme alınmaz; rezervasyon kaydı oluşturulur ve otel ciro takibinde “ödendi” olarak görünür.
