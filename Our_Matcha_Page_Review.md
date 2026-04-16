# Our Matchaページ レビュー

**調査日**: 2026年3月20日
**対象URL**: https://shizunematcha.com/pages/our-matcha
**調査環境**: デスクトップ（日本からのアクセス）

---

## ページ構成（上から順）

| # | セクション | タイプ | 内容概要 |
|---|----------|--------|---------|
| 1 | ヒーローバナー | 全幅画像+テキスト | 茶畑写真 +「A Journey from the Fields of Japan」 |
| 2 | 動画セクション | 動画埋め込み+テキスト | 「Sourced from Japan's Finest Tea Regions」 |
| 3 | 産地アコーディオン | 画像4枚+テキスト | Shizuoka / Uji / Kagoshima / Izumo |
| 4 | 製法バナー | 全幅画像+テキスト | 「Matcha, Carefully Made」茶葉の手摘み写真 |
| 5 | 関係性バナー | 全幅画像+テキスト+CTA | 「Built on Trust and Shared Values」+ SHOP ALL |
| — | フッター | — | — |

---

## 🔴 重大な問題

### 1. H1タグが存在しない

ページにH1見出しが**一つも設定されていない**。「A Journey from the Fields of Japan」がバナーテキスト扱いで、HTMLのH1タグになっていない。

**SEOへの影響**: Googleはページの主題をH1から判断する。H1がないとインデックス・ランキングに不利。

**対処**: 「A Journey from the Fields of Japan」または「Our Matcha」をH1タグに設定する。

---

### 2. H2タグの構造が壊れている

現在のH2は産地アコーディオンの「地域名＋説明文の全文」がすべてH2に入っている。

例: `<h2>Shizuoka | Japan's leading tea region, blessed with mountain slopes, river mists, and rich soil. Known for its clean, balanced flavor — a harmony of umami and subtle bitterness.</h2>`

**問題点**: 見出しタグに長文を入れるのはHTMLのセマンティクス違反であり、スクリーンリーダーやSEOボットに悪影響。

**対処**: H2は地域名のみ（「Shizuoka」「Uji, Kyoto」等）にし、説明文は`<p>`タグに分離する。

---

### 3. 産地アコーディオンの画像が全て観光地写真

前回のレビューでも指摘したが、改めて整理する。

| 産地 | 現在の画像 | 問題 |
|------|-----------|------|
| Shizuoka | 富士山の遠景 | △ 静岡のシンボルだが茶との関連が薄い |
| Uji, Kyoto | 京都の三重塔と市街地の夕景 | ✗ 観光写真。茶との接点ゼロ |
| Kagoshima | 桜島の風景 | ✗ 火山の観光写真。茶との接点ゼロ |
| Izumo, Shimane | 出雲大社のしめ縄 | ✗ 神社の観光写真。茶との接点ゼロ |

「産地を紹介するセクション」なのに、その土地の**茶**が一切見えない。訪問者は「この会社は本当にこれらの産地から仕入れているのか？」と疑問を持つ。

**対処**: 各産地の茶畑・茶の製造工程の画像に差し替え。短期的にはフリー素材、中期的にはオリジナル撮影。

---

## 🟠 構成・コンテンツの問題

### 4. ページの目的が曖昧 — 「ブランドストーリー」と「商品の説明」が混在

このページのタイトルは「Our Matcha」だが、実際には「抹茶そのもの」の情報がほぼない。
訪問者が知りたい情報（グレード、製法の詳細、味の特徴、栄養成分など）が欠けている。

**現状のコンテンツ**: ブランドの価値観・産地の概要・関係性の話
**訪問者が期待する内容**: 抹茶の品質・グレード・使い方・選び方

**提案**: ページの役割を明確にする。2つのアプローチが考えられる。

- **A案**: 「Our Matcha」= 抹茶の品質・グレード・製法の詳細を中心にし、ブランドストーリーは「About」に集約
- **B案**: 「Our Matcha」= 産地から製法、品質まで一気通貫で伝える長めのストーリーページ。ただしその場合、現在の抽象的な文章を具体的な情報に書き換える必要がある

---

### 5. テキストが抽象的すぎる — 具体性が足りない

全セクションを通じて、表現が「感じのいい言葉」に留まっており、具体的な事実が少ない。

**例1（ヒーロー）**:
> "From the misty hills of Japan's finest tea regions, each batch of Shizune Matcha begins with intention."

→ 「intention」とは具体的に何か？ どの茶園と、どういう基準で選んでいるか？

**例2（動画セクション）**:
> "from the refined smoothness of Uji to the vibrant aroma of Okabe"

→ Okabe（岡部）はアコーディオンの4産地に含まれていない。**テキストとUI構成の不整合**。

**例3（製法セクション）**:
> "Some blends use traditional stone milling. Others rely on refined modern techniques."

→ Shizuneの抹茶は具体的にどちらなのか？ 両方なのか？ これでは顧客に何も伝わらない。

**例4（関係性セクション）**:
> "We work directly with small-scale producers who share our values"

→ どの生産者と、何年の関係なのか？ 名前や顔は出せなくても、もう少し具体的にできる。

**対処**: 各セクションに最低1つの**具体的な事実**を入れる。産地名、製法の名称、数字、茶園の特徴など。

---

### 6. 動画セクションの動画が未設定（グレー背景のみ）

「Sourced from Japan's Finest Tea Regions」のセクションに再生ボタンはあるが、背景がグレー一色で動画サムネイルが表示されていない。非常にチープな印象を与える。

**対処**:
- 動画がまだないなら、このセクションをテキスト+画像セクションに変更する
- またはサムネイル画像を設定して「動画準備中」の印象を避ける

---

### 7. CTA（購入誘導）がページ最下部に1つだけ

ページの最下部「Built on Trust and Shared Values」セクションにのみ「SHOP ALL」ボタンがある。ページの大部分はCTAがなく、離脱されるリスクが高い。

**対処**:
- ヒーローセクションにも「EXPLORE OUR MATCHA」的なCTAを追加
- 産地アコーディオンの後にも商品への導線を設置
- 製法セクションの後に「SHOP NOW」を入れる

---

## 🟡 テキスト・細部の問題

### 8. Okabe（岡部）とアコーディオンの不一致

動画セクションのテキストに「the vibrant aroma of Okabe」と記載されているが、その直下のアコーディオンでは Shizuoka / Uji / Kagoshima / Izumo の4産地が紹介されている。Okabeが含まれていない。

岡部は静岡県藤枝市の地区で、玉露で有名な産地。Shizuokaに含まれるとも言えるが、テキスト上で名前を出しておいてUIに出てこないのは混乱する。

**対処**: テキストからOkabeを削除するか、アコーディオンにOkabeを追加する。

---

### 9. 産地テキストの文体が不統一

| 産地 | 文のスタイル |
|------|------------|
| Shizuoka | 2文。形容詞中心。特徴は「clean, balanced flavor」 |
| Uji | 2文。「spiritual home」という感情的表現。特徴は「deep flavor and refined aroma」 |
| Kagoshima | 2文。「bold, smooth taste」「modern matcha profile」 |
| Izumo | 3文。他より明らかに長い。「small farms」「quality and sustainability」と他産地にない情報が入る |

Izumoだけ分量が多いのはバランスが悪い。また、全体的に味の描写が似通っていて差別化しきれていない（smooth / balanced / deep / bold…）。

**対処**: 各産地の特徴を1つに絞り、端的に差異がわかるよう書き分ける。文の長さも揃える。

---

### 10. メタディスクリプションがページ内容と微妙にずれている

現在の meta description:
> "Experience real Japanese matcha with Shizune. Smooth, flavorful, and 100% made in Japan. Perfect for lattes, tea, and mindful moments."

これは商品紹介ページ向きの文章で、「Our Matcha」ページ（産地・製法・ストーリー）の内容を反映していない。

**対処**: ページの実際の内容に合わせて書き直す。例:
"Learn how Shizune Matcha is sourced from Japan's finest tea regions — from Shizuoka to Uji — and carefully processed to deliver authentic flavor."

---

## 📐 デザイン・UXの問題

### 11. セクション間の過剰な余白（既知）

ヒーローと動画セクションの間、動画セクションとアコーディオンの間に大きな空白がある。これはサイト全体の既知の問題だが、このページでも同様。

---

### 12. ページの情報密度が低い

5セクションのうち3つが「全幅画像＋テキスト3行」のバナー形式で、伝えている情報量に対してスクロール量が多い。スクロールの「報酬」が少なく、離脱されやすい。

**対処**: バナーを減らし、テキスト+画像の横並びレイアウトなど、情報密度の高いセクションを増やす。

---

## ✅ 良い点

- ヒーロー画像の茶畑は本物の日本の茶畑に見え、ブランドトーンに合っている
- 「Matcha, Carefully Made」セクションの茶葉の手摘み写真は良質
- 「Not rushed, not industrial」というトーンはブランドの世界観に合致
- 産地アコーディオンのUIコンポーネント自体はインタラクティブで面白い
- ページのカラーパレット（アイボリー背景、ダークオーバーレイ）はガイドラインに沿っている

---

## 📋 改善の優先順位

| 優先度 | 項目 | 難易度 | 効果 |
|--------|------|--------|------|
| 🔴 最優先 | H1タグの設定 | 低 | 中 |
| 🔴 最優先 | H2タグの構造修正 | 低 | 中 |
| 🔴 最優先 | 産地アコーディオン画像の差し替え | 中 | 大 |
| 🔴 最優先 | 動画セクションのグレー背景を修正 | 低 | 中 |
| 🟠 早期 | テキストの具体性向上（全セクション） | 中 | 大 |
| 🟠 早期 | Okabe / 4産地のテキスト不整合修正 | 低 | 中 |
| 🟠 早期 | CTAの追加（ヒーロー・アコーディオン後） | 低 | 大 |
| 🟠 早期 | ページの目的・構成の再設計 | 高 | 大 |
| 🟡 中期 | 産地テキストの文体統一・書き分け | 中 | 中 |
| 🟡 中期 | meta descriptionの最適化 | 低 | 中 |
| 🟡 中期 | セクション間余白の調整 | 低 | 中 |

---

## 次のアクション

1. **即対応（Shopifyテーマエディタで対応可能）**:
   - H1タグの設定
   - 動画セクションのサムネイル設定 or セクション形式変更
   - CTAボタンの追加
   - Okabeの不整合修正

2. **テキスト改稿**: 全セクションの文章を具体的な事実ベースに書き直す（別途コピー案を作成可能）

3. **画像差し替え**: 産地アコーディオン4枚の差し替え候補を選定

4. **構成再設計**: ページの役割（ブランドストーリー vs 商品情報）を整理し、構成案を作成
