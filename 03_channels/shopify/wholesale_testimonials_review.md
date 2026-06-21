# Wholesale / Testimonials 文言レビュー（single-origin整合化の一環）

**レビュー日**: 2026-06-20
**目的**: Matcha Guide公開に伴うサイト全体のsingle-origin整合チェック
**対象**: Wholesaleページ、レビュー収集ページ

---

## 1. Wholesale & Partnerships ページ

| 項目 | 内容 |
|---|---|
| URL | https://shizunematcha.com/pages/wholesale |
| ページID | `gid://shopify/Page/161591918902` |
| ステータス | 公開済み（published） |

### 判定：**修正不要 ✅**

single-origin方針と矛盾なし。むしろ強く整合している。

| 箇所 | 文言 | 評価 |
|---|---|---|
| イントロ | "Single-origin from Shizuoka. Pure leaf, nothing else." | ✅ 完全整合 |
| Why SHIZUNE | "100% Shizuoka Origin — Single-region sourcing, never blended with unknown origins." | ✅ 完全整合 |
| Why SHIZUNE | "Real Matcha, Never Mixed — No sencha, no fillers, no cutting corners." | ✅ Matcha Guideと一貫 |
| イントロ | "never blended with sencha or fillers, the way some labels quietly do." | ✅ 透明性メッセージと一貫 |

### 将来の産地拡大時の申し送り（今は対応不要）

宇治・鹿児島を商品化した段階では、以下の**断定表現の見直し**が必要になる：

- "Single-origin from Shizuoka"
- "100% Shizuoka Origin"
- Meta description: "Authentic Shizuoka-origin matcha..."

→ 産地が増えたら **「Single-origin, per product（商品ごとに単一産地）」** という枠組みに更新する。
　「ブレンド（混合）」とは言わない方針を維持すれば、single-originの透明性は保てる。
　※現状は静岡のみのため、現時点では事実通りで**修正しない**。

---

## 2. レビュー収集ページ（別タスクに切り出し）

| 項目 | 内容 |
|---|---|
| タイトル | Leave a Review & Get 50% Off |
| URL | https://shizunematcha.com/pages/leave-a-review-get-50-off |
| ページID | `gid://shopify/Page/159484608822` |
| ステータス | 公開済み（published） |

### 判定：**今回の範囲外（single-origin矛盾ではない）／ただしリスクあり ⚠️**

single-origin整合の問題ではないため、今回の修正対象からは**切り出して別タスク化**する。
ただし、以下のコンプライアンス上のリスクを記録として残す。

**現状の仕組み**:
> Amazonにレビュー投稿 → 注文確認とレビューのスクショ → Instagram DM送付 → 50%オフクーポン付与

**懸念点**:

| 観点 | リスク内容 |
|---|---|
| Amazon規約 | 割引・特典と引き換えのレビュー依頼は **Amazonコミュニティガイドライン違反**。アカウント停止・レビュー削除のリスク |
| FTC（米国） | 対価提供のレビューは **開示義務**あり。開示なしの有償レビュー誘導はFTCガイドラインに抵触の恐れ |

**→ 別タスクとして、規約に沿った安全な設計（例：購入特典クーポンとレビュー依頼を切り離す／自社サイトレビューに誘導／開示文の追加 等）を後日検討する。**

---

## まとめ

| 対象 | 判定 | アクション |
|---|---|---|
| Wholesaleページ | ✅ 整合・修正不要 | 将来の産地拡大時に断定表現を見直す（申し送りのみ） |
| レビュー収集ページ | ⚠️ 範囲外・別タスク | Amazon規約 / FTC リスクを記録。安全設計は後日別途検討 |
