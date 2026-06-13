# SHIZUNE MATCHA — B2B / Wholesale Page (Draft)

**作成日**: 2026-06-13
**用途**: Shopifyページ（直接作成予定）
**ターゲット**: 幅広いB2Bバイヤー（カフェ・レストラン / 小売・セレクトショップ / OEM・private label）
**主CTA**: 問い合わせ獲得（価格は非公開・商談ベース）
**トーン**: 静けさ・品・現代的日本性（Aesop / Blue Bottle 的ミニマル）
**ステータス**: ⏳ Hikaruさん承認待ち / Shopifyコネクタ認証待ち

---

## ページ設定（Shopify）

| 項目 | 内容 |
|------|------|
| Page title | Wholesale & Partnerships |
| URL handle | `/pages/wholesale` |
| Meta title | Wholesale Matcha — SHIZUNE MATCHA \| Shizuoka Origin |
| Meta description | Partner with SHIZUNE MATCHA. Authentic Shizuoka-origin matcha for cafés, retailers, and private label. Request wholesale pricing and samples. |

---

## ページ構成 & コピー（English）

### 1. ヒーロー（Hero）

> **Headline:** Partner with SHIZUNE
> **Subhead:** Authentic Shizuoka-origin matcha, crafted for cafés, retailers, and brands who value quiet quality.
> **CTA button:** Request Wholesale Information

---

### 2. イントロ（A quiet introduction）

> SHIZUNE MATCHA brings the stillness of Japanese tea culture to a modern table.
> Made in Japan, by Japanese hands, with real matcha — never blended with sencha or fillers, the way some labels quietly do.
> Single-origin from Shizuoka. Pure leaf, nothing else.
>
> Whether you run a café, a curated retail space, or a brand of your own, we work as a considered, reliable partner behind your product.

---

### 3. 取引タイプ（Who we partner with） — 3カラム

**Cafés & Restaurants**
> Service-grade matcha that performs in lattes, desserts, and signature menus. Consistent color, clean taste, dependable supply.

**Retail & Select Shops**
> A premium shelf presence with a contemporary Japanese identity your customers will return for. Retail-ready packaging and brand assets provided.

**OEM & Private Label**
> Build your own matcha line with a Japan-rooted supply partner. From sourcing to packaging, we support custom and private-label development.

---

### 4. 選ばれる理由（Why SHIZUNE） — アイコン横並び

- **Real Matcha, Never Mixed** — 100% pure matcha. No sencha, no fillers, no cutting corners.
- **Made in Japan** — Produced in Japan by Japanese makers who know the craft.
- **100% Shizuoka Origin** — Single-region sourcing, never blended with unknown origins.
- **Delivered Fresh** — Managed supply to keep color and aroma at their peak.

---

### 5. 取引の流れ（How it works） — 4ステップ

1. **Inquire** — Tell us about your business and what you're looking for.
2. **Sample** — We send samples and share wholesale terms.
3. **Align** — We confirm volumes, grades, and packaging together.
4. **Supply** — Reliable, recurring delivery on agreed terms.

> *Pricing and minimums are shared on inquiry, tailored to your channel and volume.*

---

### 6. 問い合わせフォーム（Inquiry form）

> **Section heading:** Let's talk
> **Lead-in:** Tell us a little about your business and we'll be in touch with pricing, samples, and next steps.

**フォーム項目案:**
- Name *(required)*
- Company / Business name *(required)*
- Email *(required)*
- Business type *(dropdown: Café / Restaurant / Retail / Online store / OEM・Private label / Other)*
- Country / Region
- Estimated monthly volume *(optional)*
- Message *(free text)*

> **Submit button:** Send Inquiry

※ Shopifyの標準フォーム（contact form）またはアプリ連携で実装。フォーム種別は実装時に確認。

---

### 7. クローズ（Closing line）

> Quiet quality, shared.
> We look forward to building something considered, together.

---

## 実装メモ

- Shopifyの「Pages」で新規作成 → テーマのページテンプレート or section追加で対応
- フォームは Shopify標準の `contact` form タグ、または既存アプリを利用（実装時に要確認）
- ヒーロー画像はブランドガイド準拠（鳥居・金閣寺・東南アジア風茶畑はNG）。暫定は商品カット or 静岡の茶畑・茶室内観
- 価格表は非公開（CTAは問い合わせ獲得のため、ページ上に卸価格は載せない）
