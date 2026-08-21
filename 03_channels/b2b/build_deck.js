const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
pres.author = "Traverse Asia";
pres.company = "Traverse Asia";
pres.title = "SHIZUNE MATCHA — Wholesale & Partnership";

// ---- palette ----
const INK   = "232B23"; // deep ink-green (dark bg)
const INK2  = "2E382C"; // panel on dark
const MATCHA= "5E7A3C";
const MATCHAD="47602D";
const SAGE  = "9DAE86";
const PAPER = "F6F4EC";
const CARD  = "FFFFFF";
const LINE  = "E2DFD4";
const TXT   = "2C332A";
const MUTED = "70776B";
const GOLD  = "B4924E";
const WHITE = "FFFFFF";

const HEAD = "Cambria";
const BODY = "Calibri";
const W = 13.333, H = 7.5, M = 0.7;

// ---- helpers ----
function bg(slide, color){ slide.background = { color }; }

function footer(slide, dark){
  const c = dark ? SAGE : MUTED;
  slide.addText("SHIZUNE MATCHA  ·  Traverse Asia", { x:M, y:H-0.5, w:6, h:0.3, fontFace:BODY, fontSize:9, color:c, align:"left" });
  slide.addText("shizunematcha.com", { x:W-M-3, y:H-0.5, w:3, h:0.3, fontFace:BODY, fontSize:9, color:c, align:"right" });
}
function pageNo(slide, n, dark){
  slide.addText(String(n).padStart(2,"0"), { x:W-M-0.8, y:M-0.15, w:0.8, h:0.3, fontFace:BODY, fontSize:10, color: dark?SAGE:SAGE, align:"right", bold:true });
}
// small filled circle section marker + kicker label
function kicker(slide, text, x, y, dark){
  slide.addShape(pres.ShapeType.ellipse, { x:x, y:y+0.03, w:0.12, h:0.12, fill:{color:MATCHA} });
  slide.addText(text.toUpperCase(), { x:x+0.22, y:y-0.04, w:6, h:0.28, fontFace:BODY, fontSize:11, bold:true, charSpacing:2, color: dark?SAGE:MATCHA, align:"left" });
}
// outline circle (enso-ish) — fill matches bg so only stroke shows
function ensoCircle(slide, x, y, d, bgc, strokeColor, width){
  slide.addShape(pres.ShapeType.ellipse, { x, y, w:d, h:d, fill:{color:bgc}, line:{ color:strokeColor, width } });
}

// ================= P01 — COVER =================
(() => {
  const s = pres.addSlide(); bg(s, INK);
  // enso motif (two concentric outline circles, offset right)
  ensoCircle(s, 8.6, 0.9, 5.6, INK, MATCHAD, 2.25);
  ensoCircle(s, 9.5, 1.8, 3.8, INK, INK2, 8);
  s.addText("SHIZUNE MATCHA", { x:M, y:1.5, w:8, h:0.4, fontFace:BODY, fontSize:15, bold:true, charSpacing:4, color:SAGE });
  s.addText("A Moment\nof Serenity", { x:M, y:2.05, w:8.2, h:2.2, fontFace:HEAD, fontSize:62, italic:true, color:WHITE, lineSpacingMultiple:0.98 });
  s.addText("Fine Japanese Matcha  ·  Single-Origin, Shizuoka", { x:M, y:4.35, w:8.5, h:0.4, fontFace:BODY, fontSize:16, color:SAGE });
  // pill
  s.addShape(pres.ShapeType.roundRect, { x:M, y:5.15, w:4.05, h:0.62, rectRadius:0.31, fill:{color:MATCHA} });
  s.addText("Wholesale & Partnership Program", { x:M, y:5.15, w:4.05, h:0.62, fontFace:BODY, fontSize:13, bold:true, color:WHITE, align:"center" });
  s.addText("Traverse Asia   ·   shizunematcha.com", { x:M, y:H-0.6, w:8, h:0.3, fontFace:BODY, fontSize:11, color:SAGE });
  s.addNotes("Cover. Tagline: A Moment of Serenity. Premium wholesale intro for cafés and specialty retail. Key visual to be added behind the enso motif.");
})();

// ================= P02 — THE BRAND =================
(() => {
  const s = pres.addSlide(); bg(s, PAPER);
  kicker(s, "The Brand", M, M, false); pageNo(s,2,false);
  s.addText("A contemporary Japanese\nmatcha brand — built on\nstillness, not noise.", { x:M, y:1.25, w:7.1, h:2.1, fontFace:HEAD, fontSize:33, color:TXT, lineSpacingMultiple:1.02 });
  s.addText([
    { text:"SHIZUNE (静音) means “the sound of silence.” We make matcha for the modern moment of pause — the quiet ritual within a busy day.\n\n", options:{ fontSize:14, color:MUTED, paraSpaceAfter:6 } },
  ], { x:M, y:3.55, w:6.6, h:1.1, fontFace:BODY });
  const bullets = [
    ["Not a souvenir. Not a commodity.","A considered, contemporary Japanese premium brand."],
    ["Made for discerning customers","Who value quality, provenance, and a calm, elevated everyday."],
    ["A brand to display with pride","One your customers connect with — and come back to."],
  ];
  let by = 4.55;
  bullets.forEach(b => {
    s.addShape(pres.ShapeType.ellipse, { x:M, y:by+0.05, w:0.14, h:0.14, fill:{color:MATCHA} });
    s.addText([
      { text:b[0]+"  ", options:{ bold:true, color:TXT } },
      { text:b[1], options:{ color:MUTED } },
    ], { x:M+0.3, y:by-0.08, w:6.4, h:0.5, fontFace:BODY, fontSize:12.5, valign:"top" });
    by += 0.62;
  });
  // right visual panel
  s.addShape(pres.ShapeType.roundRect, { x:8.5, y:1.25, w:4.15, h:5.1, rectRadius:0.1, fill:{color:INK} });
  ensoCircle(s, 9.1, 2.35, 3.0, INK, MATCHA, 2.25);
  s.addText("静", { x:8.5, y:3.0, w:4.15, h:1.7, fontFace:HEAD, fontSize:96, color:WHITE, align:"center" });
  s.addText("shizuka — stillness", { x:8.5, y:5.55, w:4.15, h:0.4, fontFace:BODY, italic:true, fontSize:13, color:SAGE, align:"center" });
  footer(s,false);
})();

// ================= P03 — SINGLE-ORIGIN =================
(() => {
  const s = pres.addSlide(); bg(s, WHITE);
  kicker(s, "Provenance", M, M, false); pageNo(s,3,false);
  s.addText("One origin. One standard. Shizuoka.", { x:M, y:1.2, w:11.5, h:0.7, fontFace:HEAD, fontSize:34, color:TXT });
  s.addText("Unlike blended matcha of mixed or unnamed origin, SHIZUNE is sourced from a single region — Shizuoka, one of Japan’s most respected tea terroirs.", { x:M, y:2.0, w:10.5, h:0.7, fontFace:BODY, fontSize:14.5, color:MUTED });
  const cards = [
    ["Traceable","One origin, one supply chain — consistent from lot to lot."],
    ["Consistent","The same flavour profile and colour your menu and shelf can rely on."],
    ["Authentic","Genuinely Japanese — not a generic “Japanese-style” product."],
  ];
  const cw = (W - 2*M - 2*0.4)/3;
  cards.forEach((c,i) => {
    const x = M + i*(cw+0.4);
    s.addShape(pres.ShapeType.roundRect, { x, y:3.15, w:cw, h:3.1, rectRadius:0.08, fill:{color:PAPER}, line:{color:LINE,width:1} });
    s.addShape(pres.ShapeType.ellipse, { x:x+0.4, y:3.55, w:0.7, h:0.7, fill:{color:MATCHA} });
    s.addText(String(i+1), { x:x+0.4, y:3.55, w:0.7, h:0.7, fontFace:HEAD, fontSize:24, bold:true, color:WHITE, align:"center" });
    s.addText(c[0], { x:x+0.4, y:4.5, w:cw-0.8, h:0.5, fontFace:HEAD, fontSize:21, color:TXT });
    s.addText(c[1], { x:x+0.4, y:5.1, w:cw-0.8, h:1.0, fontFace:BODY, fontSize:13, color:MUTED });
  });
  footer(s,false);
})();

// ================= P04 — WHERE IS SHIZUOKA? =================
(() => {
  const s = pres.addSlide(); bg(s, WHITE);
  kicker(s, "The Region", M, M, false); pageNo(s,4,false);
  s.addText("Where is Shizuoka?", { x:M, y:1.15, w:11.5, h:0.7, fontFace:HEAD, fontSize:34, color:TXT });
  s.addText("Japan’s most celebrated tea region — at the foot of Mt. Fuji.", { x:M, y:1.95, w:11.5, h:0.4, fontFace:BODY, fontSize:14.5, color:MUTED });

  // ---- left: stylized locator (placeholder for map image) ----
  const cardX=M, cardY=2.55, cardW=5.7, cardH=3.95;
  s.addShape(pres.ShapeType.roundRect, { x:cardX, y:cardY, w:cardW, h:cardH, rectRadius:0.08, fill:{color:PAPER}, line:{color:LINE,width:1} });
  s.addText("JAPAN", { x:cardX+0.35, y:cardY+0.25, w:2, h:0.3, fontFace:BODY, fontSize:11, bold:true, charSpacing:3, color:SAGE });
  // Mt. Fuji
  s.addShape(pres.ShapeType.triangle, { x:cardX+1.75, y:cardY+0.85, w:1.9, h:1.35, fill:{color:SAGE} });
  s.addShape(pres.ShapeType.triangle, { x:cardX+2.42, y:cardY+0.85, w:0.56, h:0.42, fill:{color:WHITE} });
  // Shizuoka marker (concentric rings) at foot of Fuji
  const mx=cardX+2.55, my=cardY+2.35;
  s.addShape(pres.ShapeType.ellipse, { x:mx-0.02, y:my-0.02, w:0.78, h:0.78, fill:{color:PAPER}, line:{color:MATCHA,width:1.5} });
  s.addShape(pres.ShapeType.ellipse, { x:mx+0.23, y:my+0.23, w:0.32, h:0.32, fill:{color:MATCHA} });
  s.addText("Shizuoka", { x:mx+0.9, y:my+0.05, w:2.3, h:0.4, fontFace:BODY, fontSize:14, bold:true, color:MATCHAD, valign:"middle" });
  // reference dots
  s.addShape(pres.ShapeType.ellipse, { x:cardX+4.55, y:cardY+1.35, w:0.16, h:0.16, fill:{color:MUTED} });
  s.addText("Tokyo", { x:cardX+4.05, y:cardY+1.05, w:1.3, h:0.28, fontFace:BODY, fontSize:10.5, color:MUTED, align:"center" });
  s.addShape(pres.ShapeType.ellipse, { x:cardX+0.85, y:cardY+2.75, w:0.16, h:0.16, fill:{color:MUTED} });
  s.addText("Kyoto", { x:cardX+0.35, y:cardY+2.45, w:1.3, h:0.28, fontFace:BODY, fontSize:10.5, color:MUTED, align:"center" });
  s.addText("Pacific coast  ·  Central Japan", { x:cardX+0.35, y:cardY+cardH-0.5, w:cardW-0.7, h:0.3, fontFace:BODY, italic:true, fontSize:11, color:MUTED });

  // ---- right: fact rows ----
  const fx=7.05, fw=W-M-fx;
  const facts=[
    ["Central Japan, Pacific coast","Between Tokyo and Kyoto, at the foot of Mt. Fuji — about 1.5 hours from Tokyo."],
    ["A heritage of tea","One of Japan’s oldest and most renowned tea-growing regions, cultivated for centuries."],
    ["Ideal terroir","Misty mountain slopes, a mild maritime climate, and well-drained volcanic soil."],
    ["A name buyers trust","In Japan, “Shizuoka” is synonymous with quality tea."],
  ];
  let fy=2.55;
  facts.forEach(f=>{
    s.addShape(pres.ShapeType.ellipse, { x:fx, y:fy+0.04, w:0.44, h:0.44, fill:{color:MATCHA} });
    s.addText(f[0], { x:fx+0.65, y:fy-0.05, w:fw-0.65, h:0.35, fontFace:HEAD, fontSize:16, color:TXT });
    s.addText(f[1], { x:fx+0.65, y:fy+0.34, w:fw-0.7, h:0.65, fontFace:BODY, fontSize:12.5, color:MUTED, valign:"top" });
    fy+=1.0;
  });
  footer(s,false);
})();

// ================= P05 — QUALITY & CRAFT =================
(() => {
  const s = pres.addSlide(); bg(s, PAPER);
  kicker(s, "Quality & Craft", M, M, false); pageNo(s,5,false);
  s.addText("Shade-grown leaves, finely\nmilled to a smooth matcha.", { x:M, y:1.2, w:11, h:1.3, fontFace:HEAD, fontSize:32, color:TXT, lineSpacingMultiple:1.02 });
  // 3-step process
  const steps = ["Shade-grown","Finely milled","Sealed for freshness"];
  const sx = M, sy = 3.25, gap = 3.55;
  steps.forEach((t,i) => {
    const x = sx + i*gap;
    s.addShape(pres.ShapeType.ellipse, { x, y:sy, w:1.15, h:1.15, fill:{color:WHITE}, line:{color:MATCHA,width:2} });
    s.addText(String(i+1), { x, y:sy, w:1.15, h:1.15, fontFace:HEAD, fontSize:30, bold:true, color:MATCHA, align:"center" });
    s.addText(t, { x:x-0.4, y:sy+1.25, w:1.95, h:0.6, fontFace:BODY, fontSize:13, bold:true, color:TXT, align:"center" });
    if(i<steps.length-1){
      s.addShape(pres.ShapeType.line, { x:x+1.15+0.35, y:sy+0.575, w:gap-1.15-0.7, h:0, line:{color:SAGE,width:1.5,dashType:"dash"} });
    }
  });
  // facts card
  s.addShape(pres.ShapeType.roundRect, { x:M, y:5.35, w:W-2*M, h:1.45, rectRadius:0.08, fill:{color:WHITE}, line:{color:LINE,width:1} });
  const facts = [
    ["Grade","Ceremonial-grade — smooth umami, clean finish"],
    ["Shelf life","12 months from production, sealed"],
    ["Certification","Origin documentation available on request"],
  ];
  const fw = (W-2*M)/3;
  facts.forEach((f,i)=>{
    const x = M + i*fw + 0.35;
    s.addText(f[0].toUpperCase(), { x, y:5.6, w:fw-0.6, h:0.3, fontFace:BODY, fontSize:10.5, bold:true, charSpacing:1.5, color:MATCHA });
    s.addText(f[1], { x, y:5.92, w:fw-0.6, h:0.75, fontFace:BODY, fontSize:12.5, color:TXT });
  });
  footer(s,false);
})();

// ================= P05 — PRODUCT LINEUP =================
(() => {
  const s = pres.addSlide(); bg(s, WHITE);
  kicker(s, "Product Lineup", M, M, false); pageNo(s,6,false);
  s.addText("Two formats. One standard of quality.", { x:M, y:1.2, w:11.5, h:0.7, fontFace:HEAD, fontSize:32, color:TXT });
  const colw = (W - 2*M - 0.5)/2;
  // Foodservice
  const x1 = M;
  s.addShape(pres.ShapeType.roundRect, { x:x1, y:2.25, w:colw, h:3.9, rectRadius:0.08, fill:{color:INK} });
  s.addText("FOR FOODSERVICE", { x:x1+0.45, y:2.6, w:colw-0.9, h:0.3, fontFace:BODY, fontSize:11, bold:true, charSpacing:2, color:SAGE });
  s.addText("Bulk Ceremonial", { x:x1+0.45, y:2.95, w:colw-0.9, h:0.6, fontFace:HEAD, fontSize:26, color:WHITE });
  [ "Loose matcha powder, sold by the kilogram",
    "Ideal for hot & iced lattes, desserts, seasonal specials",
    "A premium, single-origin story on your menu" ].forEach((t,i)=>{
    const y = 3.75 + i*0.62;
    s.addShape(pres.ShapeType.ellipse, { x:x1+0.5, y:y+0.05, w:0.12, h:0.12, fill:{color:MATCHA} });
    s.addText(t, { x:x1+0.8, y:y-0.1, w:colw-1.3, h:0.55, fontFace:BODY, fontSize:12.5, color:PAPER, valign:"top" });
  });
  // Retail
  const x2 = M + colw + 0.5;
  s.addShape(pres.ShapeType.roundRect, { x:x2, y:2.25, w:colw, h:3.9, rectRadius:0.08, fill:{color:PAPER}, line:{color:LINE,width:1} });
  s.addText("FOR RETAIL", { x:x2+0.45, y:2.6, w:colw-0.9, h:0.3, fontFace:BODY, fontSize:11, bold:true, charSpacing:2, color:MATCHA });
  s.addText("Finished SKUs", { x:x2+0.45, y:2.95, w:colw-0.9, h:0.6, fontFace:HEAD, fontSize:26, color:TXT });
  const skus = [["40g","Tin","Premium, gift-ready format"],["80g","Pouch","Everyday value format"]];
  skus.forEach((k,i)=>{
    const y = 3.75 + i*0.9;
    s.addShape(pres.ShapeType.ellipse, { x:x2+0.5, y:y, w:0.85, h:0.85, fill:{color:MATCHA} });
    s.addText(k[0], { x:x2+0.5, y:y+0.05, w:0.85, h:0.75, fontFace:HEAD, fontSize:17, bold:true, color:WHITE, align:"center" });
    s.addText([{text:k[1]+"  ",options:{bold:true,color:TXT}},{text:"— "+k[2],options:{color:MUTED}}], { x:x2+1.55, y:y+0.18, w:colw-2.1, h:0.5, fontFace:BODY, fontSize:13.5, valign:"top" });
  });
  s.addText("Upper grades and an organic line: in development.", { x:M, y:6.35, w:11.5, h:0.4, fontFace:BODY, italic:true, fontSize:12.5, color:MUTED });
  footer(s,false);
})();

// ================= P06 — WHY SHIZUNE =================
(() => {
  const s = pres.addSlide(); bg(s, INK);
  kicker(s, "Why SHIZUNE", M, M, true); pageNo(s,7,true);
  s.addText("Beyond commodity matcha.", { x:M, y:1.2, w:11, h:0.7, fontFace:HEAD, fontSize:34, color:WHITE });
  const rows = [
    ["","Commodity matcha","SHIZUNE"],
    ["Origin","Blended / unnamed","Single-origin Shizuoka"],
    ["Brand","Generic","Contemporary Japanese premium"],
    ["Story","None","A brand customers connect with"],
    ["Consistency","Varies batch to batch","Reliable lot to lot"],
    ["Best for","Competing on price","Premium positioning & margin"],
  ];
  const tX=M, tY=2.15, tW=W-2*M;
  const c0=2.2, c1=(tW-c0)/2, c2=(tW-c0)/2;
  const rh=0.62;
  rows.forEach((r,i)=>{
    const y = tY + i*rh;
    if(i===0){
      s.addText("", {x:tX,y,w:c0,h:rh});
      s.addShape(pres.ShapeType.roundRect,{x:tX+c0, y:y+0.05, w:c1-0.1, h:rh-0.1, rectRadius:0.05, fill:{color:INK2}});
      s.addText("Commodity matcha",{x:tX+c0,y,w:c1,h:rh,fontFace:BODY,fontSize:13,bold:true,color:SAGE,align:"center"});
      s.addShape(pres.ShapeType.roundRect,{x:tX+c0+c1, y:y+0.05, w:c2, h:rh-0.1, rectRadius:0.05, fill:{color:MATCHA}});
      s.addText("SHIZUNE",{x:tX+c0+c1,y,w:c2,h:rh,fontFace:BODY,fontSize:13,bold:true,color:WHITE,align:"center"});
    } else {
      s.addText(r[0],{x:tX+0.1,y,w:c0-0.1,h:rh,fontFace:BODY,fontSize:12.5,bold:true,color:SAGE,valign:"middle"});
      s.addText(r[1],{x:tX+c0,y,w:c1,h:rh,fontFace:BODY,fontSize:12.5,color:"C9CFC2",align:"center",valign:"middle"});
      s.addShape(pres.ShapeType.roundRect,{x:tX+c0+c1, y:y+0.04, w:c2, h:rh-0.08, rectRadius:0.05, fill:{color:INK2}});
      s.addText(r[2],{x:tX+c0+c1,y,w:c2,h:rh,fontFace:BODY,fontSize:12.5,bold:true,color:WHITE,align:"center",valign:"middle"});
    }
  });
  s.addText("SHIZUNE helps you sell matcha at a premium — not compete on price.", { x:M, y:6.55, w:11.5, h:0.4, fontFace:HEAD, italic:true, fontSize:15, color:SAGE });
})();

// ================= P07 — FOR CAFÉS =================
(() => {
  const s = pres.addSlide(); bg(s, WHITE);
  kicker(s, "For Cafés & Foodservice", M, M, false); pageNo(s,8,false);
  s.addText("A signature matcha menu,\nwith the margins to match.", { x:M, y:1.2, w:7, h:1.3, fontFace:HEAD, fontSize:30, color:TXT, lineSpacingMultiple:1.02 });
  [ ["Versatile","Hot & iced matcha lattes, desserts, seasonal specials"],
    ["A premium story","“Single-origin Shizuoka matcha” on your menu"],
    ["Attractive economics","A low per-cup cost supports healthy menu margins"] ].forEach((b,i)=>{
    const y=2.85+i*0.82;
    s.addShape(pres.ShapeType.ellipse,{x:M,y:y+0.03,w:0.14,h:0.14,fill:{color:MATCHA}});
    s.addText([{text:b[0]+"  ",options:{bold:true,color:TXT}},{text:"— "+b[1],options:{color:MUTED}}],{x:M+0.32,y:y-0.12,w:6.3,h:0.7,fontFace:BODY,fontSize:13,valign:"top"});
  });
  // cost per cup callout
  s.addShape(pres.ShapeType.roundRect,{x:M,y:5.5,w:6.5,h:1.25,rectRadius:0.08,fill:{color:PAPER},line:{color:LINE,width:1}});
  s.addText("≈ S$0.18–0.21",{x:M+0.3,y:5.65,w:3.1,h:0.7,fontFace:HEAD,fontSize:30,bold:true,color:MATCHAD});
  s.addText("illustrative cost per\nserving (2g / cup)",{x:M+3.5,y:5.72,w:2.9,h:0.9,fontFace:BODY,fontSize:11.5,color:MUTED});
  // pricing card
  const px=8.0, pw=W-M-px;
  s.addShape(pres.ShapeType.roundRect,{x:px,y:1.5,w:pw,h:5.25,rectRadius:0.1,fill:{color:INK}});
  s.addText("WHOLESALE — BULK CEREMONIAL",{x:px+0.4,y:1.85,w:pw-0.8,h:0.3,fontFace:BODY,fontSize:10.5,bold:true,charSpacing:1.5,color:SAGE});
  s.addText("Per kilogram (SGD)",{x:px+0.4,y:2.2,w:pw-0.8,h:0.4,fontFace:HEAD,fontSize:18,color:WHITE});
  const tiers=[["1 – 4 kg","S$105"],["5 – 19 kg","S$97"],["20 kg +","S$91"]];
  tiers.forEach((t,i)=>{
    const y=2.9+i*0.72;
    s.addText(t[0],{x:px+0.4,y,w:2.2,h:0.5,fontFace:BODY,fontSize:14,color:PAPER,valign:"middle"});
    s.addText(t[1],{x:px+pw-2.0,y,w:1.6,h:0.5,fontFace:HEAD,fontSize:22,bold:true,color:WHITE,align:"right",valign:"middle"});
    if(i<2) s.addShape(pres.ShapeType.line,{x:px+0.4,y:y+0.62,w:pw-0.8,h:0,line:{color:INK2,width:1}});
  });
  s.addText("MOQ 1 kg · price only, shipping not included · approx., subject to FX",{x:px+0.4,y:5.85,w:pw-0.8,h:0.7,fontFace:BODY,fontSize:10,italic:true,color:SAGE});
  footer(s,false);
})();

// ================= P08 — FOR RETAIL =================
(() => {
  const s = pres.addSlide(); bg(s, PAPER);
  kicker(s, "For Retail & Specialty", M, M, false); pageNo(s,9,false);
  s.addText("A shelf presence customers\nreach for — and remember.", { x:M, y:1.2, w:7, h:1.3, fontFace:HEAD, fontSize:30, color:TXT, lineSpacingMultiple:1.02 });
  [ ["Elevates your shelf","Design-led, premium packaging"],
    ["Story sells","Single-origin provenance, a modern Japanese brand"],
    ["Gifting-ready","The 40g tin is a natural premium gift"] ].forEach((b,i)=>{
    const y=2.85+i*0.82;
    s.addShape(pres.ShapeType.ellipse,{x:M,y:y+0.03,w:0.14,h:0.14,fill:{color:MATCHA}});
    s.addText([{text:b[0]+"  ",options:{bold:true,color:TXT}},{text:"— "+b[1],options:{color:MUTED}}],{x:M+0.32,y:y-0.12,w:6.3,h:0.7,fontFace:BODY,fontSize:13,valign:"top"});
  });
  // order terms
  s.addShape(pres.ShapeType.roundRect,{x:M,y:5.45,w:6.5,h:1.3,rectRadius:0.08,fill:{color:WHITE},line:{color:LINE,width:1}});
  s.addText("ORDER TERMS",{x:M+0.35,y:5.6,w:5.8,h:0.3,fontFace:BODY,fontSize:10,bold:true,charSpacing:1.5,color:MATCHA});
  s.addText([
    {text:"Case pack: ",options:{bold:true,color:TXT}},{text:"12 units / case\n",options:{color:MUTED}},
    {text:"Opening order: ",options:{bold:true,color:TXT}},{text:"from 3 cases (mixed OK) · reorder from 1 case",options:{color:MUTED}},
  ],{x:M+0.35,y:5.9,w:5.9,h:0.8,fontFace:BODY,fontSize:12,lineSpacingMultiple:1.1,valign:"top"});
  // pricing card
  const px=8.0, pw=W-M-px;
  s.addShape(pres.ShapeType.roundRect,{x:px,y:1.5,w:pw,h:5.25,rectRadius:0.1,fill:{color:INK}});
  s.addText("WHOLESALE — FINISHED SKUs",{x:px+0.4,y:1.85,w:pw-0.8,h:0.3,fontFace:BODY,fontSize:10.5,bold:true,charSpacing:1.5,color:SAGE});
  s.addText("Per unit (SGD)",{x:px+0.4,y:2.2,w:pw-0.8,h:0.4,fontFace:HEAD,fontSize:18,color:WHITE});
  const sk=[["40g Tin","S$19.5"],["80g Pouch","S$35.4"]];
  sk.forEach((t,i)=>{
    const y=3.0+i*0.95;
    s.addText(t[0],{x:px+0.4,y,w:2.6,h:0.5,fontFace:BODY,fontSize:14,color:PAPER,valign:"middle"});
    s.addText(t[1],{x:px+pw-2.1,y,w:1.7,h:0.5,fontFace:HEAD,fontSize:24,bold:true,color:WHITE,align:"right",valign:"middle"});
    if(i<1) s.addShape(pres.ShapeType.line,{x:px+0.4,y:y+0.72,w:pw-0.8,h:0,line:{color:INK2,width:1}});
  });
  s.addText("Prices in SGD, converted from JPY (S$1 ≈ ¥113) · subject to FX",{x:px+0.4,y:5.85,w:pw-0.8,h:0.7,fontFace:BODY,fontSize:10,italic:true,color:SAGE});
  footer(s,false);
})();

// ================= P09 — WHOLESALE TERMS =================
(() => {
  const s = pres.addSlide(); bg(s, WHITE);
  kicker(s, "Wholesale Terms", M, M, false); pageNo(s,10,false);
  s.addText("Simple terms to get started.", { x:M, y:1.2, w:11.5, h:0.7, fontFace:HEAD, fontSize:34, color:TXT });
  const items = [
    ["MOQ","Bulk: 1 kg   ·   Finished SKUs: 3 cases (opening order)"],
    ["Case pack","12 units per case"],
    ["Lead time","Finished SKUs: 10 days   ·   Bulk: 2–3 weeks (made to order)"],
    ["Shipping","Finished (Singapore): DDP, free over S$800   ·   Bulk: FOB Japan"],
    ["Payment","Advance payment (T/T) — production begins on confirmation"],
    ["Samples","Complimentary for qualified buyers"],
  ];
  const gw=(W-2*M-0.5)/2, gh=1.3, gapx=0.5, gapy=0.28;
  items.forEach((it,i)=>{
    const col=i%2, row=Math.floor(i/2);
    const x=M+col*(gw+gapx), y=2.1+row*(gh+gapy);
    s.addShape(pres.ShapeType.roundRect,{x,y,w:gw,h:gh,rectRadius:0.08,fill:{color:PAPER},line:{color:LINE,width:1}});
    s.addShape(pres.ShapeType.ellipse,{x:x+0.35,y:y+0.35,w:0.62,h:0.62,fill:{color:MATCHA}});
    s.addText(it[0][0],{x:x+0.35,y:y+0.35,w:0.62,h:0.62,fontFace:HEAD,fontSize:22,bold:true,color:WHITE,align:"center"});
    s.addText(it[0],{x:x+1.2,y:y+0.24,w:gw-1.4,h:0.35,fontFace:BODY,fontSize:12.5,bold:true,charSpacing:1,color:MATCHAD});
    s.addText(it[1],{x:x+1.2,y:y+0.6,w:gw-1.45,h:0.65,fontFace:BODY,fontSize:12,color:TXT,valign:"top"});
  });
  s.addText("All prices in SGD, subject to FX.",{x:M,y:6.62,w:11.5,h:0.3,fontFace:BODY,italic:true,fontSize:10.5,color:MUTED});
  footer(s,false);
})();

// ================= P10 — PROOF & TRACTION =================
(() => {
  const s = pres.addSlide(); bg(s, PAPER);
  kicker(s, "Proof & Traction", M, M, false); pageNo(s,11,false);
  s.addText("Already trusted by customers\nacross markets.", { x:M, y:1.2, w:11, h:1.3, fontFace:HEAD, fontSize:32, color:TXT, lineSpacingMultiple:1.02 });
  const stats = [
    ["Live","on Amazon US — selling to US consumers today"],
    ["D2C","direct-to-consumer at shizunematcha.com"],
    ["Traverse Asia","a Japan-focused brand company behind SHIZUNE"],
  ];
  const cw=(W-2*M-2*0.4)/3;
  stats.forEach((c,i)=>{
    const x=M+i*(cw+0.4);
    s.addShape(pres.ShapeType.roundRect,{x,y:3.2,w:cw,h:2.6,rectRadius:0.08,fill:{color:WHITE},line:{color:LINE,width:1}});
    s.addText(c[0],{x:x+0.35,y:3.5,w:cw-0.7,h:0.85,fontFace:HEAD,fontSize:30,bold:true,color:MATCHAD});
    s.addText(c[1],{x:x+0.35,y:4.45,w:cw-0.7,h:1.2,fontFace:BODY,fontSize:13,color:TXT,valign:"top"});
  });
  s.addText("Customer reviews & ratings available on request.",{x:M,y:6.15,w:11.5,h:0.4,fontFace:BODY,italic:true,fontSize:12,color:MUTED});
  footer(s,false);
})();

// ================= P11 — PARTNERSHIP PROCESS =================
(() => {
  const s = pres.addSlide(); bg(s, WHITE);
  kicker(s, "Partnership Process", M, M, false); pageNo(s,12,false);
  s.addText("From first sample to first order — in four steps.", { x:M, y:1.2, w:11.5, h:0.7, fontFace:HEAD, fontSize:30, color:TXT });
  const steps=[
    ["Inquiry","Tell us your format (café or retail) and expected volume."],
    ["Sample","We send complimentary samples for you to evaluate."],
    ["Quote","We confirm pricing, terms, and lead time."],
    ["First Order","Prepay by T/T; we produce and ship (finished SKUs ≈ 10 days)."],
  ];
  const cw=(W-2*M-3*0.4)/4;
  steps.forEach((st,i)=>{
    const x=M+i*(cw+0.4);
    s.addShape(pres.ShapeType.roundRect,{x,y:2.6,w:cw,h:3.5,rectRadius:0.08,fill:{color:PAPER},line:{color:LINE,width:1}});
    s.addShape(pres.ShapeType.ellipse,{x:x+cw/2-0.55,y:2.95,w:1.1,h:1.1,fill:{color:i===3?MATCHA:INK}});
    s.addText(String(i+1),{x:x+cw/2-0.55,y:2.95,w:1.1,h:1.1,fontFace:HEAD,fontSize:34,bold:true,color:WHITE,align:"center"});
    s.addText(st[0],{x:x+0.2,y:4.25,w:cw-0.4,h:0.5,fontFace:HEAD,fontSize:18,color:TXT,align:"center"});
    s.addText(st[1],{x:x+0.28,y:4.8,w:cw-0.56,h:1.2,fontFace:BODY,fontSize:12,color:MUTED,align:"center",valign:"top"});
    if(i<3) s.addText("→",{x:x+cw+0.02,y:3.2,w:0.36,h:0.6,fontFace:BODY,fontSize:22,color:SAGE,align:"center"});
  });
  footer(s,false);
})();

// ================= P12 — CONTACT =================
(() => {
  const s = pres.addSlide(); bg(s, INK);
  ensoCircle(s, 8.9, 1.0, 5.4, INK, MATCHAD, 2.25);
  ensoCircle(s, 9.7, 1.8, 3.8, INK, INK2, 8);
  s.addText("Let’s build a quiet, premium\nmatcha offering together.", { x:M, y:1.5, w:8, h:1.7, fontFace:HEAD, fontSize:34, italic:true, color:WHITE, lineSpacingMultiple:1.02 });
  s.addText([
    { text:"SHIZUNE MATCHA", options:{ bold:true, color:WHITE } },
    { text:"  —  operated by Traverse Asia", options:{ color:SAGE } },
  ], { x:M, y:3.4, w:9, h:0.4, fontFace:BODY, fontSize:15 });
  s.addText("A Japan-based brand company building contemporary Japanese premium products for global markets.", { x:M, y:3.8, w:7.4, h:0.7, fontFace:BODY, fontSize:12.5, color:SAGE });
  // contact block
  s.addText("CONTACT", { x:M, y:4.75, w:6, h:0.3, fontFace:BODY, fontSize:11, bold:true, charSpacing:2, color:MATCHA });
  s.addText([
    { text:"Hikaru Tashiro", options:{ bold:true, color:WHITE, fontSize:15 } },
    { text:"  ·  Brand Owner\n", options:{ color:SAGE, fontSize:13 } },
    { text:"hikaru.tashiro@traverse-asia.com\n", options:{ color:PAPER, fontSize:14 } },
    { text:"shizunematcha.com  ·  traverse-asia.com", options:{ color:SAGE, fontSize:12.5 } },
  ], { x:M, y:5.1, w:8, h:1.2, fontFace:BODY, lineSpacingMultiple:1.25 });
  // CTA pill
  s.addShape(pres.ShapeType.roundRect,{x:M,y:6.5,w:2.7,h:0.6,rectRadius:0.3,fill:{color:MATCHA}});
  s.addText("Request samples",{x:M,y:6.5,w:2.7,h:0.6,fontFace:BODY,fontSize:13,bold:true,color:WHITE,align:"center"});
})();

const OUT = process.argv[2] || "SHIZUNE_MATCHA_B2B_Deck.pptx";
pres.writeFile({ fileName: OUT }).then(f => console.log("WROTE", f));
