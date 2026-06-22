# SHIZUNE MATCHA — Shipping Policy (Draft)

**作成日**: 2026-06-22
**用途**: Shopify 正式ポリシー（`Settings > Policies > Shipping policy` → 公開URL `/policies/shipping-policy`）
**目的**: 発送元・対象国・配送日数・送料・関税の方針を明確化し、購入前の不安を解消。Amazon(US)＋日本郵便EMS(その他国) の二系統運用と整合。
**ターゲット**: 購入検討〜購入後のUS・シンガポール・フィリピン顧客
**トーン**: 静けさ・品・正直さ。法務文書として簡潔・明快に
**掲載形態**: Shopify標準のポリシー枠（rich text）。`shizune-guide` デザインは適用しない（チェックアウト・フッターから自動リンクされる正式ポリシーのため）

## 確定した方針（Hikaruさん承認済み）

| 項目 | 内容 |
|------|------|
| 発送元（US） | Amazon倉庫（FBA） |
| 発送元（その他の国） | 日本の倉庫 → **日本郵便 EMS** |
| 対象国 | **US / シンガポール / フィリピン** |
| 発送までの日数（handling time） | **3〜4営業日** |
| 配送日数（transit time） | US: **5〜7日** ／ SG: **4日〜2週間** ／ PH: **約3週間** |
| 送料 | 国・配送方法（Standard / Express）で変動 → **チェックアウトで自動計算** |
| 送料無料 | **$50（現地通貨換算）以上の注文で Standard 配送が無料**（Express は対象外） |
| 関税・輸入税 | **顧客負担** |
| 追跡番号 | あり（EMS・Amazon とも追跡可） |

---

## 英文ポリシー本文（Shopifyポリシー枠に貼り付け）

> 以下をそのまま Shopify `Settings > Policies > Shipping policy` の本文に貼り付け。HTMLは編集画面の `<>`（HTML表示）で貼り付け可能。

```html
<p>Thank you for choosing SHIZUNE. We take great care in packing and shipping your matcha so it reaches you in perfect condition. Please read the details below.</p>

<h2>Where we ship</h2>
<p>We currently ship to the <strong>United States</strong>, <strong>Singapore</strong>, and the <strong>Philippines</strong>. If your country is not listed, please contact us at <a href="mailto:info@shizunematcha.com">info@shizunematcha.com</a> and we will do our best to help.</p>

<h2>Processing time</h2>
<p>Orders are prepared and dispatched within <strong>3–4 business days</strong> of your order being placed. You will receive a confirmation email with tracking details once your order has shipped.</p>

<h2>Delivery times</h2>
<p>Once shipped, estimated delivery times are:</p>
<ul>
  <li><strong>United States:</strong> 5–7 days</li>
  <li><strong>Singapore:</strong> 4 days–2 weeks</li>
  <li><strong>Philippines:</strong> approximately 3 weeks</li>
</ul>
<p>These are estimates and not guaranteed. Delivery may take longer due to customs processing, public holidays, or circumstances beyond our control.</p>

<h2>Shipping costs</h2>
<p>Shipping costs are calculated automatically at checkout based on your destination and the shipping method you select (Standard or Express).</p>
<p>We are pleased to offer <strong>free Standard shipping on orders over $50</strong> (or the equivalent in your local currency). Express shipping is not included in this offer and will be charged at checkout.</p>

<h2>Tracking your order</h2>
<p>Every order is sent with a tracking number. Once your order ships, we will email you the tracking information so you can follow your parcel to your door.</p>

<h2>Customs, duties, and import taxes</h2>
<p>For international orders, any customs duties, import taxes, or fees levied by your destination country are the <strong>responsibility of the customer</strong>. These charges are not included in the product price or shipping cost, and are determined by your local customs authority. Please check with your local customs office if you have questions before ordering.</p>

<h2>Lost, delayed, or damaged shipments</h2>
<p>If your order is significantly delayed, lost in transit, or arrives damaged, please contact us at <a href="mailto:info@shizunematcha.com">info@shizunematcha.com</a> within 7 days of the expected or actual delivery date. Please include your order number and, for damaged items, a clear photo. We will work with you to resolve the issue. (For returns and refunds, please see our Refund Policy.)</p>

<h2>Questions</h2>
<p>If you have any questions about shipping, you can always reach us at <a href="mailto:info@shizunematcha.com">info@shizunematcha.com</a>.</p>
```

---

## 設計判断・補足（記録）

| 判断ポイント | 採用方針 | 理由 |
|-------------|---------|------|
| 発送元の明記 | 本文では発送元（Amazon/日本倉庫）を**あえて明記しない** | 顧客には不要な情報・運用変更時の柔軟性確保。配送日数で十分 |
| 送料 | **チェックアウト自動計算**と案内（具体額は本文に書かない） | 国×方法で変動するため、固定額の記載は誤解の元 |
| 送料無料 | **$50以上・Standardのみ**（Express除外）を明記 | Hikaruさん確定（プランB） |
| 関税 | **顧客負担**を明記 | Hikaruさん確定・国際EC標準 |
| 破損・遅延・紛失 | 連絡先＋7日以内＋写真。詳細は返品ポリシーへ誘導 | 返品ポリシーと役割分担・重複回避 |

---

## 未確定・要確認事項

1. ⏳ **送料無料ラインの通貨基準** — 「$50」は USD 基準。SG・PH は「現地通貨換算（equivalent）」と記載。Shopify側の送料設定で国別の無料閾値を別途設定する場合は、本文の表現と整合させる必要あり。
2. ⏳ **Shopify送料設定（Shipping rates）との整合** — 本ポリシーは「自動計算」前提。実際の `Settings > Shipping and delivery` でゾーン（US/SG/PH）・Standard/Express・$50無料ラインが設定されていることが前提。未設定なら本文と矛盾するため要確認。

---

**ステータス**: ✅ 公開済み（2026-06-22・Shopify `/policies/shipping-policy` に Hikaruさんが反映完了）
