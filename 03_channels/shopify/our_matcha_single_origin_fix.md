# Our Matchaページ — single-origin 整合化 修正手順書

**対象ページ**: https://shizunematcha.com/pages/our-matcha
**ページID**: `gid://shopify/Page/153070469430`
**作成日**: 2026-06-20
**対応者**: Hikaruさん（Shopifyテーマエディタで実施）

---

## 背景

Matcha Guideページで「**single-origin（産地ごとに単一・現在の抹茶は静岡産）**」という透明性メッセージを打ち出した。
一方でOur Matchaページは **4産地（Shizuoka / Uji / Kagoshima / Izumo）** を併記しており、矛盾が生じている。

- **事実**: 現在の取扱は **静岡（Shizuoka）の単一産地のみ**
- **将来**: **宇治（Uji）・鹿児島（Kagoshima）は今後商品化予定**。出雲（Izumo）は予定なし
- **方針**: 産地アコーディオンは Shizuoka / Uji / Kagoshima を残し、**Izumo のみ削除**。「将来構想」の注記は入れない

> 注: Our Matchaページの本文は Shopify の `body` フィールドが空。
> 4産地アコーディオン等はテーマのセクション側にハードコードされているため、
> APIの `pageUpdate` では編集不可。**テーマエディタ（カスタマイズ画面）での手動編集が必要**。

---

## 修正項目（3点）

### ① 産地アコーディオン（最重要）

| 項目 | 内容 |
|---|---|
| 現状 | Shizuoka / Uji / Kagoshima / Izumo の **4ブロック** |
| 修正 | **Izumo（出雲）のブロックのみ削除**。Shizuoka / Uji / Kagoshima の3ブロックを残す |
| 理由 | Uji（宇治）・Kagoshima（鹿児島）は今後商品化予定のため残す。Izumo は予定がないため削除し、実態と乖離しないようにする |

**テーマエディタ手順（目安）**:
1. Shopify管理画面 → オンラインストア → テーマ → カスタマイズ
2. 上部のページ選択で「ページ → Our Matcha」を開く
3. 産地アコーディオン（または「コラージュ」「マルチカラム」等）のセクションを選択
4. **Izumo, Shimane** のブロックを選び「ブロックを削除」（または非表示）
5. Shizuoka / Uji / Kagoshima の3ブロックを残す

---

### ② 動画セクションのテキスト（B案採用）

| 項目 | 内容 |
|---|---|
| 現状 | "from the refined smoothness of **Uji** to the vibrant aroma of **Okabe**" |
| 問題 | Uji・Okabe は実際に扱っていない産地。記述と取扱が不一致 |
| 修正（B案） | **"From Japan's finest tea fields to the bowl in your hands — single-origin, never mixed."** |

> B案は産地名を限定せず、「single-origin / never mixed（混ぜない）」という透明性メッセージに置き換える表現。

---

### ③ 動画セクション見出し（複数形のままでOK）

| 項目 | 内容 |
|---|---|
| 現状 | "Sourced from Japan's Finest Tea **Regions**"（複数形） |
| 判断 | アコーディオンに Shizuoka / Uji / Kagoshima の **複数産地が残る**ため、複数形 "Regions" は**そのままで問題なし**。変更不要 |

> ※当初は静岡1つに絞る想定で単数形化を検討していたが、宇治・鹿児島を残す方針に変更したため、見出しは現状維持でよい。

---

## 修正後の整合チェックリスト

- [ ] 産地アコーディオン = Shizuoka / Uji / Kagoshima（Izumo を削除）
- [ ] 動画セクション本文 = B案（single-origin, never mixed）に差し替え
- [ ] 動画セクション見出し = 単数形（Region）に変更
- [ ] ページ内の他テキストに Izumo / Okabe の言及が残っていないか確認
- [ ] Matcha Guideページ（/pages/matcha-guide）の "single-origin / current matcha is grown in Shizuoka" と矛盾しないか確認

---

## 補足：将来、産地を追加するとき

複数産地の商品を出す段階になったら、
- 産地アコーディオンに新しい産地ブロックを追加
- 各産地は「商品ごとに単一産地（single-origin per product）」という枠組みを維持
- 「ブレンド（混合）」とは言わない（single-originの一貫性を保つ）

この方針なら、産地が増えてもブランドの透明性メッセージは崩れない。
