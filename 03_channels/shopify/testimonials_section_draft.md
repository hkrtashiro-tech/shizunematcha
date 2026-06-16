# お客様の声セクション — TRUSTED BY MATCHA LOVERS（ドラフト）

NAOKI MATCHA の "TRUSTED BY PEOPLE WHO KNOW TEA" を参考に、SHIZUNE のブランドトーン（静けさ・余白・ニュートラル・ナチュラルライト）に合わせた testimonials（お客様の声）セクション。

## 設置場所
- トップページ（Palo Alto テーマ）
- Instagram フィードの近く（Recipes と Instagram フィードの間 or フィード直下）
- テーマエディタ →「セクション追加」→「カスタム Liquid」に下記HTMLを貼り付け

## 見出し
- 小見出し：FROM JAPAN, WITH CARE
- 大見出し：TRUSTED BY MATCHA LOVERS

## 収録レビュー（5件・要約済み）

| # | 名前 | レビュー |
|---|------|---------|
| 1 | Kristina \| Fit & Funny Mom Life | Switching to SHIZUNE = calm mom energy... |
| 2 | Cheryl \| NYC Creator | You can immediately tell this isn't your average matcha... |
| 3 | Helen \| Sober Runner | This matcha really impressed me... |
| 4 | Alisa \| High Protein Recipes & Fitness | A matcha latte in cookie dough form... |
| 5 | Michael M. | I really love this matcha — great quality... |

## プロフィール画像
- 現時点では未定 → イニシャルを丸で表示（プレースホルダー）
- 後で画像URLが用意できれば、各 `.shizune-tst-avatar` を `<img>` に差し替え

---

## 実装HTML（カスタムLiquidに貼り付け）

```html
<style>
.shizune-testimonials {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4.5rem 1.5rem;
  font-family: inherit;
  color: #2f3a33;
}
.shizune-testimonials .tst-eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #8a948c;
  margin: 0 0 0.8rem;
}
.shizune-testimonials .tst-heading {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 0 0 3rem;
  color: #2f3a33;
}
.shizune-testimonials .tst-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
}
.shizune-testimonials .tst-card {
  display: flex;
  flex-direction: column;
}
.shizune-testimonials .tst-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #eef1ee;
  color: #6b766d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  margin-bottom: 1.2rem;
  overflow: hidden;
}
.shizune-testimonials .tst-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.shizune-testimonials .tst-name {
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2f3a33;
  margin: 0 0 1rem;
  font-weight: 600;
}
.shizune-testimonials .tst-body {
  font-size: 0.92rem;
  line-height: 1.7;
  color: #4a544c;
  margin: 0;
}
@media (max-width: 990px) {
  .shizune-testimonials .tst-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem 2rem;
  }
}
@media (max-width: 560px) {
  .shizune-testimonials .tst-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>

<section class="shizune-testimonials">
  <p class="tst-eyebrow">From Japan, with care</p>
  <h2 class="tst-heading">Trusted by matcha lovers</h2>

  <div class="tst-grid">
    <div class="tst-card">
      <div class="tst-avatar"><img src="https://cdn.shopify.com/s/files/1/0922/8310/9686/files/Kristina.jpg?v=1781569471" alt="Kristina"></div>
      <p class="tst-name">Kristina · Fit &amp; Funny Mom Life</p>
      <p class="tst-body">Switching to SHIZUNE = calm mom energy. Coffee used to make me just as chaotic as my mornings. Not saying my kids behave better… but at least I do. 💛</p>
    </div>

    <div class="tst-card">
      <div class="tst-avatar"><img src="https://cdn.shopify.com/s/files/1/0922/8310/9686/files/Chheryl.jpg?v=1781569471" alt="Cheryl"></div>
      <p class="tst-name">Cheryl · NYC Creator</p>
      <p class="tst-body">You can immediately tell this isn't your average matcha — vibrant color, smooth flavor, calming aroma. Sourced straight from Shizuoka, every cup feels a little more special.</p>
    </div>

    <div class="tst-card">
      <div class="tst-avatar"><img src="https://cdn.shopify.com/s/files/1/0922/8310/9686/files/Helen.jpg?v=1781569470" alt="Helen"></div>
      <p class="tst-name">Helen · Sober Runner</p>
      <p class="tst-body">This matcha really impressed me. The fresh, clean aroma was the first thing I noticed. Smooth and well balanced, no harsh bitterness — you can tell the care that went into selecting the leaves.</p>
    </div>

    <div class="tst-card">
      <div class="tst-avatar"><img src="https://cdn.shopify.com/s/files/1/0922/8310/9686/files/Alisa.jpg?v=1781569471" alt="Alisa"></div>
      <p class="tst-name">Alisa · High Protein Recipes &amp; Fitness</p>
      <p class="tst-body">A matcha latte in cookie dough form 🍵 My white chocolate coconut matcha energy bites are packed with natural energy and L-theanine from the purest SHIZUNE. Some of the freshest I've ever had — and not grassy at all!</p>
    </div>

    <div class="tst-card">
      <div class="tst-avatar"><img src="https://cdn.shopify.com/s/files/1/0922/8310/9686/files/Michael_M.png?v=1781569715" alt="Michael M."></div>
      <p class="tst-name">Michael M.</p>
      <p class="tst-body">I really love this matcha — great quality, sourced straight from Japan. Vibrant color, smooth flavor, calming aroma. It mixes easily and has a nice texture. Simple and tastes good. Next time I'm making one with strawberries.</p>
    </div>
  </div>
</section>
```

## 画像差し替え方法（後日）
各 `<div class="tst-avatar">K</div>` を、画像が用意できたら以下に置き換え：
```html
<div class="tst-avatar"><img src="【Shopify CDN画像URL】" alt="Kristina"></div>
```
