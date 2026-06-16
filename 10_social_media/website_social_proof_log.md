# ウェブサイト ソーシャルプルーフ実装ログ

shizunematcha.com トップページに、Instagram連携とお客様の声（testimonials）を追加した記録。

---

## 1. Instagramフィード（Instafeed アプリ）

- **目的**：NAOKI MATCHA の UGC/Instagramギャラリーを参考に、実際の顧客・自社の抹茶コンテンツをサイトに表示
- **アプリ**：Instafeed（Shopify App Store）
- **連携アカウント**：[@shizunematcha](https://www.instagram.com/shizunematcha/)
- **設定**
  - 表示する投稿：自身の投稿・リール
  - デザイン：スライダー（静的・1つの投稿を回転）
  - フォーマット：3:4
  - ポストの間隔：小さい
- **配置**：トップページ Recipes と Newsletter の間
- **ブランド方針**：賑やかなグリッドより、静かに少数を見せる構成でトーンを担保

---

## 2. お客様の声セクション（Trusted by matcha lovers）

- **目的**：NAOKI の "TRUSTED BY PEOPLE WHO KNOW TEA" を参考に、実在レビューで信頼性を訴求
- **見出し**
  - 小見出し：From Japan, with care
  - 大見出し：Trusted by matcha lovers
- **実装**：テーマ「Palo Alto」→ トップページ → カスタムコード（Custom code）セクションにHTML貼り付け
- **デザイン**：5列横並び・丸アイコン・ニュートラルカラー・レスポンシブ（PC5列/タブレット2列/スマホ1列）
- **コードドラフト**：`03_channels/shopify/testimonials_section_draft.md`

### 収録レビュー（5名・要約版／実在の顧客の声）

| # | 名前 | 媒体/属性 | 画像 |
|---|------|-----------|------|
| 1 | Kristina | Fit & Funny Mom Life | あり |
| 2 | Cheryl | NYC Creator | あり |
| 3 | Helen | Sober Runner | あり |
| 4 | Alisa | High Protein Recipes & Fitness | あり |
| 5 | Michael M. | 一般顧客 | あり |

- ターゲット（US／健康・ライフスタイル層）に合うインフルエンサー/顧客の声で構成
- レビュー#4は元の「Essential Grade表記への指摘」を含む全文ではなく、ポジティブ部分（エナジーバイツ活用）を掲載
- アイコン画像はすべて Shopify CDN 上にホスト

---

## 今後の検討事項
- レビュー掲載の許諾管理（インフルエンサー投稿の再掲載は事前許可を継続確認）
- Instagram運用の継続（フィードが空にならないよう定期投稿）
- 将来的にレビュー件数が増えたら、専用ページ化 or 商品ページへの展開を検討
