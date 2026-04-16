# SHIZUNE MATCHA — Claude Projects セットアップガイド

---

## 1. Claude Projectsの作成手順

### 前提
- **プラン:** Claude Pro（月$20）以上が必要
- **URL:** https://claude.ai にブラウザでログイン
- **場所:** 左サイドバーの「Projects」→「Create Project」

### 各Projectで設定する項目
1. **Project名** — 識別用の名前
2. **Custom Instructions** — そのエージェントの役割・行動指針（システムプロンプト）
3. **Knowledge** — 参照ファイルのアップロード（PDFやMarkdown等）

以下の順番で作成してください。

---

### Step 1: SHIZUNE PM（最優先）

1. **Project名:** `SHIZUNE PM`
2. **Custom Instructions:** `prompts/01_pm.md` の ```内のテキストを貼り付け
3. **Knowledge（ファイルアップロード）:**
   - `01_brand/handover_from_chatgpt.md`（引き継ぎ資料）
   - `09_tasks/fact_sheet.md`（ファクト整理表）
   - `09_tasks/priority_tasks.md`（優先タスクリスト）
   - `08_operations/ai_agent_organization.md`（組織設計書）

### Step 2: SHIZUNE Amazon & EC

1. **Project名:** `SHIZUNE Amazon & EC`
2. **Custom Instructions:** `prompts/02_amazon_ec.md` の ```内のテキストを貼り付け
3. **Knowledge:**
   - `03_channels/amazon/amazon_us_audit.md`（Amazon監査レポート）
   - `04_creative/creative_brief.md`（クリエイティブ要件書 — 画像改善に必要）

### Step 3: SHIZUNE Brand & Creative

1. **Project名:** `SHIZUNE Brand & Creative`
2. **Custom Instructions:** `prompts/03_brand_creative.md` の ```内のテキストを貼り付け
3. **Knowledge:**
   - `01_brand/handover_from_chatgpt.md`（ブランド思想の全体像）
   - `04_creative/creative_brief.md`（クリエイティブ要件書）

---

### Step 4〜6（Phase 2・3で追加）

| Project | プロンプトファイル | 主なKnowledge |
|---------|-----------------|--------------|
| SHIZUNE Content & SEO | `prompts/04_content_seo.md` | `05_content_seo/content_inventory.md` |
| SHIZUNE Market Intel | `prompts/05_market_intel.md` | （市場分析レポートを随時追加） |
| SHIZUNE Legal & Compliance | `prompts/06_legal_compliance.md` | （規制チェックリストを随時追加） |

---

## 2. 使い方の基本

### 日常のワークフロー

```
① まず SHIZUNE PM を開く
② やりたいことを伝える（例:「Amazon画像を改善したい」）
③ PMが作業指示を整理してくれる
④ 指示に従って、該当するAgent（例: Amazon & EC）のProjectを開く
⑤ そのProjectで具体的な作業を進める
⑥ 成果物ができたら、PMに戻って報告・確認
```

### 各Projectの使い分け

| やりたいこと | 使うProject |
|------------|------------|
| 全体の進捗確認・優先順位の相談 | SHIZUNE PM |
| Amazon商品ページの改善 | SHIZUNE Amazon & EC |
| 広告の分析・改善 | SHIZUNE Amazon & EC |
| Shopifyの改善 | SHIZUNE Amazon & EC |
| 撮影の方向性・ブランドガイドライン | SHIZUNE Brand & Creative |
| パッケージデザイン | SHIZUNE Brand & Creative |
| ブログ記事の執筆 | SHIZUNE Content & SEO |
| SEOキーワードの調査 | SHIZUNE Content & SEO |
| 競合の調査 | SHIZUNE Market Intel |
| シンガポール参入の検討 | SHIZUNE Market Intel |
| 商標・法務の確認 | SHIZUNE Legal & Compliance |
| Organic認証の調査 | SHIZUNE Legal & Compliance |

### 迷ったとき

→ **SHIZUNE PM** に聞けば、適切なAgentに振り分けてくれます。

---

## 3. Knowledgeファイルの更新ルール

- 各Projectに入れたKnowledgeファイルは、情報が更新されたら差し替える
- 特に `fact_sheet.md` と `priority_tasks.md` は定期的に更新する
- 新しいレポートや分析が完了したら、該当Projectに追加する

---

## 4. 注意事項

- 各Projectは独立しているため、他のProjectの会話内容は自動的には共有されない
- Agent間で情報を連携したい場合は、成果物をテキストでコピーするか、Knowledgeに追加する
- PMに定期的に進捗を報告することで、全体の一貫性を保つ
- ブランドの世界観に関する判断に迷ったら、Brand & Creative Agent に確認する
