# SHIZUNE MATCHA — Refund & Return Policy (Draft)

**作成日**: 2026-06-22
**用途**: Shopify 正式ポリシー（`Settings > Policies > Return and refund policy` → 公開URL `/policies/refund-policy`）
**目的**: 食品（生鮮・perishable goods）であることを前提に、**返品は原則不可**としつつ、破損・不良・誤配送には誠実に対応する方針を明確化。Amazon運用と整合。
**ターゲット**: 購入検討〜購入後のUS・シンガポール顧客
**トーン**: 静けさ・品・正直さ。法務文書として簡潔・明快に
**掲載形態**: Shopify標準のポリシー枠（rich text）。`shizune-guide` デザインは適用しない（チェックアウト・フッターから自動リンクされる正式ポリシーのため）

## 確定した方針（Hikaruさん承認済み）

| 項目 | 内容 |
|------|------|
| 基本スタンス | 食品のため **返品は原則不可**（perishable goods） |
| 例外（必ず対応） | 破損・不良・誤配送 → 写真確認の上、交換または返金 |
| 不良・破損の連絡期限 | **到着後 7日以内** |
| EU 14日クーリングオフ条項 | **削除**（US + シンガポール販売のみ） |
| 返金処理 | 承認後、元の支払方法へ **10営業日以内** |
| 連絡先 | info@shizunematcha.com |
| 返送先住所 | **[INSERT RETURN ADDRESS]** ← 要確定（破損品の返送が必要な場合のみ使用） |

---

## 英文ポリシー本文（Shopifyポリシー枠に貼り付け）

> 以下をそのまま Shopify `Settings > Policies > Return and refund policy` の本文に貼り付け。

```html
<p>Thank you for choosing SHIZUNE. Because our matcha is a food product, the health and safety standards around perishable goods shape this policy. Please read it carefully.</p>

<h2>Our policy on returns</h2>
<p>As a food product, SHIZUNE matcha is <strong>non-returnable and non-refundable</strong> once it has been delivered. For food safety and hygiene reasons, we are unable to accept returns of opened or unopened matcha. This is standard practice for consumable goods.</p>
<p>We want you to enjoy your matcha with confidence — so if something is wrong with your order, we will always make it right (see below).</p>

<h2>Damaged, defective, or incorrect items</h2>
<p>Please inspect your order as soon as it arrives. If your item is damaged, defective, or you have received the wrong product, contact us at <a href="mailto:info@shizunematcha.com">info@shizunematcha.com</a> <strong>within 7 days of delivery</strong>.</p>
<p>To help us resolve it quickly, please include your order number and a clear photo of the issue (and the packaging, if relevant). Once we have reviewed it, we will arrange a replacement or a refund. We may ask you to return the affected item — if so, we will send you a prepaid return shipping label and instructions.</p>

<h2>Non-returnable items</h2>
<p>The following cannot be returned or refunded:</p>
<ul>
  <li>Food and other perishable goods, including all SHIZUNE matcha</li>
  <li>Items on sale or purchased with a promotional discount</li>
  <li>Gift cards</li>
</ul>
<p>If you have a question about a specific item, please get in touch before ordering and we will be glad to help.</p>

<h2>Exchanges</h2>
<p>Because our products are food items, we do not offer exchanges. If there is a problem with your order, please contact us using the damaged-or-defective process above and we will resolve it.</p>

<h2>Refunds</h2>
<p>If a refund is approved (for a qualifying damaged, defective, or incorrect item), you will be refunded to your original payment method within <strong>10 business days</strong>. Please remember it can take additional time for your bank or credit card company to process and post the refund.</p>
<p>If more than 15 business days have passed since we approved your refund and you have not received it, please contact us at <a href="mailto:info@shizunematcha.com">info@shizunematcha.com</a>.</p>

<h2>Questions</h2>
<p>You can always reach us with any question about this policy at <a href="mailto:info@shizunematcha.com">info@shizunematcha.com</a>.</p>
```

---

## 元テンプレートからの主な変更点（記録）

| 元テンプレート | 本ポリシー | 理由 |
|---------------|-----------|------|
| 「30日返品OK」が前提 | **返品原則不可（食品）** | Hikaruさん方針・Amazon整合・食品安全 |
| Damages: 「immediately」 | **到着後7日以内**＋写真依頼 | 期限を明確化・対応効率化 |
| Exchanges: 「返品して再購入」 | **交換なし**（不良対応に一本化） | 食品で返品不可のため矛盾回避 |
| EU 14日クーリングオフ | **削除** | US + SG販売のみ |
| Refund: 10営業日 | 維持 | Hikaruさん確定 |
| 返送先住所 | [INSERT RETURN ADDRESS] のまま | **要確定**（破損返送時のみ） |

---

## 未確定・要確認事項

1. ⏳ **返送先住所** — 破損品の返送が必要になった場合の住所。現状 `[INSERT RETURN ADDRESS]`。
   - ※ 本ポリシーでは「必要な場合はこちらから着払いラベルを送る」運用なので、住所を**本文に明記しない**形にしてあります（プリペイドラベルで対応）。住所を明記したい場合は教えてください。
2. ⏳ Shopify反映は**API経由で設定可能か要確認**（ポリシーはshop設定。不可なら管理画面で手動貼り付けをご案内）。

---

**ステータス**: ✅ 公開済み（2026-06-22・Shopify `/policies/refund-policy` に Hikaruさんが反映完了）
