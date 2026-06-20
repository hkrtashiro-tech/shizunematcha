# SHIZUNE MATCHA — Matcha Guide Page 実装HTML（デザイン済み）

**作成日**: 2026-06-16
**用途**: Shopify Page `/pages/matcha-guide` の本文（body_html）
**実装方法**: デザイン済みカスタムHTML/CSS（インラインstyle同梱）。Shopify `pageCreate` の `body` に投入。
**配色**: testimonialsセクション準拠（`#2f3a33` / `#8a948c` / `#eef1ee` / `#4a544c`）
**画像**: Hikaruさん手配の7枚をShopify CDN URLで配置済み（2026-06-17）。No.5/No.7はHEIC形式のため一部ブラウザで非表示の可能性あり（後日JPG/WebPへ差し替え検討）。
**ステータス**: 公開済み（published / 2026-06-17）

---

## 注意（実装時）

- H1は本文先頭の「Matcha, made simple」。ページタイトル（Matcha Guide）とは別に本文内へH1を持たせ、Our MatchaページのH1欠落問題を回避。
- 画像は `.mg-figure` のグレー枠がプレースホルダー。画像URLが用意でき次第、各ブロックを `<img>` に差し替え（差し替え方法は末尾参照）。
- カラー・余白・大文字使い・フォントはtestimonialsと統一しブランドトーンを維持。

---

## 実装HTML（pageCreate の body に投入）

```html
<style>
.shizune-guide {
  --ink: #2f3a33;
  --muted: #8a948c;
  --soft: #eef1ee;
  --body: #4a544c;
  --line: #dfe4df;
  max-width: 1080px;
  margin: 0 auto;
  padding: 1rem 1.5rem 4rem;
  color: var(--body);
  font-family: inherit;
}
.shizune-guide .mg-eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 0.9rem;
}
.shizune-guide h1.mg-h1 {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--ink);
  margin: 0 0 1.2rem;
  line-height: 1.15;
}
.shizune-guide .mg-hero {
  text-align: center;
  padding: 3rem 0 3.5rem;
}
.shizune-guide .mg-hero p {
  max-width: 620px;
  margin: 0 auto;
  font-size: 1.02rem;
  line-height: 1.8;
}
.shizune-guide h2.mg-h2 {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 500;
  letter-spacing: 0.03em;
  color: var(--ink);
  margin: 0 0 1.2rem;
}
.shizune-guide .mg-section {
  padding: 3rem 0;
  border-top: 1px solid var(--line);
}
.shizune-guide .mg-section > p {
  font-size: 1rem;
  line-height: 1.85;
  max-width: 760px;
  margin: 0 0 1.4rem;
}
.shizune-guide .mg-figure {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--soft);
  border-radius: 4px;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  overflow: hidden;
}
.shizune-guide .mg-figure img { width: 100%; height: 100%; object-fit: cover; }
.shizune-guide .mg-points {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 1.5rem 0 0;
}
.shizune-guide .mg-point h3 {
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink);
  margin: 0 0 0.5rem;
}
.shizune-guide .mg-point p { font-size: 0.92rem; line-height: 1.7; margin: 0; }
.shizune-guide table.mg-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 0.92rem;
}
.shizune-guide table.mg-table th,
.shizune-guide table.mg-table td {
  text-align: left;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--line);
  vertical-align: top;
  line-height: 1.6;
}
.shizune-guide table.mg-table th {
  color: var(--ink);
  font-weight: 600;
  letter-spacing: 0.04em;
}
.shizune-guide table.mg-table td:first-child {
  color: var(--muted);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
}
.shizune-guide .mg-note {
  background: var(--soft);
  border-radius: 4px;
  padding: 1.6rem 1.8rem;
  margin: 1.8rem 0;
}
.shizune-guide .mg-note .mg-note-title {
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink);
  font-weight: 600;
  margin: 0 0 0.8rem;
}
.shizune-guide .mg-note p { font-size: 0.94rem; line-height: 1.8; margin: 0 0 0.9rem; }
.shizune-guide .mg-note p:last-child { margin-bottom: 0; }
.shizune-guide ol.mg-steps { counter-reset: step; list-style: none; padding: 0; margin: 1.5rem 0 0; }
.shizune-guide ol.mg-steps li {
  position: relative;
  padding: 0 0 1.4rem 2.6rem;
  line-height: 1.75;
  font-size: 0.96rem;
}
.shizune-guide ol.mg-steps li::before {
  counter-increment: step;
  content: counter(step);
  position: absolute;
  left: 0; top: 0;
  width: 1.7rem; height: 1.7rem;
  border: 1px solid var(--ink);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.8rem; color: var(--ink);
}
.shizune-guide ol.mg-steps li strong { color: var(--ink); }
.shizune-guide ul.mg-list { list-style: none; padding: 0; margin: 1.5rem 0 0; }
.shizune-guide ul.mg-list li {
  padding: 0 0 1rem 1.3rem;
  position: relative;
  line-height: 1.75;
  font-size: 0.96rem;
}
.shizune-guide ul.mg-list li::before {
  content: "—"; position: absolute; left: 0; color: var(--muted);
}
.shizune-guide ul.mg-list li strong { color: var(--ink); }
.shizune-guide .mg-tip {
  font-size: 0.88rem;
  font-style: italic;
  color: var(--muted);
  border-left: 2px solid var(--line);
  padding-left: 1rem;
  margin: 1.4rem 0 0;
  line-height: 1.7;
}
.shizune-guide .mg-faq { margin-top: 1.5rem; }
.shizune-guide .mg-faq dt {
  color: var(--ink);
  font-weight: 600;
  font-size: 0.98rem;
  margin: 1.4rem 0 0.5rem;
}
.shizune-guide .mg-faq dd { margin: 0; font-size: 0.94rem; line-height: 1.75; }
.shizune-guide .mg-cta-link {
  display: inline-block;
  margin-top: 1.4rem;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 2px;
}
.shizune-guide .mg-closing {
  text-align: center;
  background: var(--soft);
  border-radius: 4px;
  padding: 3.5rem 1.5rem;
  margin-top: 3rem;
}
.shizune-guide .mg-closing h2 {
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  font-weight: 500;
  color: var(--ink);
  margin: 0 0 0.9rem;
}
.shizune-guide .mg-closing p { max-width: 520px; margin: 0 auto 1.8rem; line-height: 1.75; }
.shizune-guide .mg-btn {
  display: inline-block;
  background: var(--ink);
  color: #fff;
  text-decoration: none;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 0.95rem 2.4rem;
  border-radius: 2px;
}
@media (max-width: 760px) {
  .shizune-guide .mg-points { grid-template-columns: 1fr; gap: 1.2rem; }
}
</style>

<div class="shizune-guide">

  <!-- 1. Hero -->
  <header class="mg-hero">
    <p class="mg-eyebrow">A Quiet Guide</p>
    <h1 class="mg-h1">Matcha, made simple</h1>
    <p>Everything you need to choose, prepare, and enjoy real matcha at home — no ceremony required, just a quiet moment for yourself.</p>
  </header>
  <div class="mg-figure"><img src="https://cdn.shopify.com/s/files/1/0922/8310/9686/files/zed-can-vXivoEBxWIY-unsplash_1.jpg?v=1781621008" alt="A bowl of freshly whisked SHIZUNE matcha"></div>

  <!-- 2. What is matcha -->
  <section class="mg-section">
    <h2 class="mg-h2">What is matcha?</h2>
    <p>Matcha is finely stone-ground green tea, made from shade-grown leaves called <em>tencha</em>. Unlike steeped tea, you drink the whole leaf — which is why a single bowl carries a deep, vibrant flavor and a calm, lasting energy.</p>
    <p>The shading slows the leaves' growth and concentrates <em>L-theanine</em>, the amino acid behind matcha's smooth focus — alert, but never jittery.</p>
    <div class="mg-figure"><img src="https://cdn.shopify.com/s/files/1/0922/8310/9686/files/phuong-nguyen-DgW9B48pRb4-unsplash_1.jpg?v=1758025379" alt="Finely stone-ground matcha powder"></div>
    <div class="mg-points">
      <div class="mg-point"><h3>Whole leaf</h3><p>You drink the entire leaf, not just an infusion.</p></div>
      <div class="mg-point"><h3>Shade-grown</h3><p>Weeks under shade build umami and color.</p></div>
      <div class="mg-point"><h3>Stone-ground</h3><p>Slowly milled into a fine, silky powder.</p></div>
    </div>
  </section>

  <!-- 3. Grades -->
  <section class="mg-section">
    <h2 class="mg-h2">Understanding matcha grades</h2>
    <p>Not all matcha is made for the same moment. Choosing the right grade is the difference between a bowl you sip slowly and a latte you build your morning around.</p>
    <div class="mg-figure"><img src="https://cdn.shopify.com/s/files/1/0922/8310/9686/files/zed-can-BFeHprrF4Aw-unsplash_2.jpg?v=1781935077" alt="A bowl of usucha — thin matcha"></div>
    <table class="mg-table">
      <thead><tr><th></th><th>Ceremonial Grade</th><th>Culinary Grade</th></tr></thead>
      <tbody>
        <tr><td>Best for</td><td>Drinking on its own, with water</td><td>Lattes, smoothies, baking</td></tr>
        <tr><td>Taste</td><td>Smooth, sweet, delicate</td><td>Bolder, stands up to milk &amp; sugar</td></tr>
        <tr><td>Color</td><td>Vivid, bright green</td><td>Green, slightly deeper</td></tr>
        <tr><td>How to enjoy</td><td>Whisk with hot water (<em>usucha</em>)</td><td>Blend, shake, or bake</td></tr>
      </tbody>
    </table>
    <div class="mg-note">
      <p class="mg-note-title">A note from Japan — "ceremonial" is not one single thing</p>
      <p>Here's something most of the world's matcha labels won't tell you. Outside Japan, almost every drinking matcha is simply called <em>"ceremonial grade"</em> — as if it were one fixed level. In Japan, it isn't.</p>
      <p>Within what the West calls "ceremonial," there is a whole spectrum: from everyday lattes, to fine <em>usucha</em> (thin tea), all the way to <em>koicha</em> (thick tea) reserved for formal tea ceremony. Each step up means younger leaves, slower stone-milling, and a smoother, sweeter cup.</p>
      <p>As a Japanese-run brand, we grade our matcha the way it's understood at home — honestly, and by what's actually in the bowl, not by a marketing word.</p>
    </div>
    <div class="mg-note">
      <p class="mg-note-title">Where SHIZUNE sits</p>
      <p>Every SHIZUNE matcha is made to a drinking grade — smooth enough to whisk and sip on its own, never a culinary-only powder dressed up as more. Good in a quiet bowl, just as good in your morning latte. And whichever you choose, ours is always 100% pure matcha — never blended with sencha or fillers. Real leaf, nothing else.</p>
    </div>
    <a class="mg-cta-link" href="/collections/all">Shop SHIZUNE Matcha →</a>
  </section>

  <!-- 4. How to whisk -->
  <section class="mg-section">
    <h2 class="mg-h2">How to whisk a bowl</h2>
    <p>The traditional way (<em>usucha</em>) takes about a minute. No special skill — just a steady hand and a quiet moment.</p>
    <div class="mg-figure"><img src="https://cdn.shopify.com/s/files/1/0922/8310/9686/files/huy-phan-Ku-huM0VCak-unsplash_1.jpg?v=1781621237" alt="Whisking a bowl of SHIZUNE matcha"></div>
    <ol class="mg-steps">
      <li><strong>Sift</strong> — Sift 1–2 tsp (2g) of matcha into a bowl to remove clumps.</li>
      <li><strong>Add water</strong> — Pour ~2 oz (60ml) of hot water, just off the boil (~70–80°C / 160–175°F).</li>
      <li><strong>Whisk</strong> — Whisk briskly in a "W" or "M" motion until a fine, even foam forms.</li>
      <li><strong>Enjoy</strong> — Sip slowly, straight from the bowl. No sugar needed.</li>
    </ol>
    <p class="mg-tip">Tip: Water that's too hot can turn matcha bitter. Let a fresh boil rest for a minute first.</p>
  </section>

  <!-- 5. How to make a latte -->
  <section class="mg-section">
    <h2 class="mg-h2">How to make a matcha latte</h2>
    <p>The everyday way to enjoy matcha — iced or hot.</p>
    <div class="mg-figure"><img src="https://cdn.shopify.com/s/files/1/0922/8310/9686/files/IMG_2378.heic?v=1761444893" alt="An iced SHIZUNE matcha latte"></div>
    <ol class="mg-steps">
      <li><strong>Make a paste</strong> — Whisk 1–2 tsp matcha with a splash of hot water until smooth.</li>
      <li><strong>Add milk</strong> — Pour over ice (or warm milk) — dairy or oat, almond, your choice.</li>
      <li><strong>Sweeten to taste</strong> — A little honey or syrup, if you like. SHIZUNE is smooth enough to enjoy as-is.</li>
    </ol>
    <p class="mg-tip">No whisk? A small jar with a tight lid works — add matcha and water, shake well, then pour.</p>
  </section>

  <!-- 6. How to store -->
  <section class="mg-section">
    <h2 class="mg-h2">How to store matcha</h2>
    <p>Matcha is delicate. Light, air, heat, and moisture fade its color and aroma.</p>
    <div class="mg-figure"><img src="https://cdn.shopify.com/s/files/1/0922/8310/9686/files/Blog_image_1.png?v=1760960201" alt="Storing matcha to keep it fresh"></div>
    <ul class="mg-list">
      <li><strong>Seal it</strong> — Keep the bag or tin tightly closed after each use.</li>
      <li><strong>Keep it cool &amp; dark</strong> — Store away from sunlight and the stove; a cupboard or fridge is ideal.</li>
      <li><strong>Drink it fresh</strong> — Matcha is at its best within a few weeks of opening. Buy what you'll enjoy soon.</li>
    </ul>
  </section>

  <!-- 7. Why real matters -->
  <section class="mg-section">
    <h2 class="mg-h2">Why real matters — and how to spot it</h2>
    <p>Matcha's popularity has grown faster than Japan can grow the leaf. Demand far outpaces supply — and that gap is where shortcuts appear.</p>
    <p>Some labels quietly cut their matcha with cheaper green tea like <em>sencha</em> to stretch it. Others print a famous region such as "Uji" on the tin while sourcing the powder elsewhere. It's hard to see in a bright green photo — but you can taste it, and over time, you can tell.</p>
    <div class="mg-figure"><img src="https://cdn.shopify.com/s/files/1/0922/8310/9686/files/IMG_0572_2.heic?v=1757404964" alt="A Japanese tea field"></div>
    <ul class="mg-list">
      <li><strong>One leaf, nothing added</strong> — Pure stone-ground tencha. No sencha, no fillers, no bulking agents.</li>
      <li><strong>A named origin, not a borrowed name</strong> — Each matcha tied to a real region you can trust.</li>
      <li><strong>A maker who can answer</strong> — Someone who knows where the leaf came from, and will tell you.</li>
    </ul>
    <div class="mg-note">
      <p class="mg-note-title">The SHIZUNE difference</p>
      <p>We're a Japanese-run brand with a clear line back to the field. Every SHIZUNE matcha is tied to a single, named Japanese region — our current matcha is grown in Shizuoka — made in Japan by Japanese makers. Traceable by origin, and never mixed. When the leaf is honest, you don't need to hide behind a label.</p>
    </div>
    <a class="mg-cta-link" href="/pages/our-matcha">Read our sourcing story →</a>
  </section>

  <!-- 8. FAQ -->
  <section class="mg-section">
    <h2 class="mg-h2">Frequently asked</h2>
    <dl class="mg-faq">
      <dt>Does matcha have caffeine?</dt>
      <dd>Yes — about half a cup of coffee's worth, but paired with L-theanine for a calmer, steadier focus.</dd>
      <dt>Is matcha bitter?</dt>
      <dd>Quality matcha shouldn't be harshly bitter. SHIZUNE is smooth and balanced, with natural sweetness — bitterness usually comes from lower grades or water that's too hot.</dd>
      <dt>Do I need special tools?</dt>
      <dd>A bamboo whisk (<em>chasen</em>) gives the best foam, but a small frother or a sealed jar works to start.</dd>
      <dt>How much should I use?</dt>
      <dd>About 1–2 teaspoons (2g) per bowl or latte. Adjust to taste.</dd>
    </dl>
  </section>

  <!-- 9. Closing CTA -->
  <section class="mg-closing">
    <h2>Ready for your quiet moment?</h2>
    <p>Start with real matcha — a named Japanese origin, made in Japan, never mixed.</p>
    <a class="mg-btn" href="/collections/all">Shop SHIZUNE Matcha</a>
  </section>

</div>
```

---

## 画像差し替え方法（後日）

`.mg-figure` のプレースホルダーを、画像URLが用意でき次第以下に差し替え：

```html
<div class="mg-figure"><img src="【Shopify CDN画像URL】" alt="Whisking a bowl of SHIZUNE matcha"></div>
```

ヒーロー直下にもメイン画像を入れる場合は、`<header class="mg-hero">` の後に同様の `.mg-figure` ブロックを追加。

---

## CTAリンクの確認事項

- 「Shop SHIZUNE Matcha」のリンク先を `/collections/all` 仮置き。実際の商品コレクション/商品ページのURLに合わせて要調整。
- 「Read our sourcing story」は `/pages/our-matcha` にリンク。
