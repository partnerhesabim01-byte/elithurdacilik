import { writeFileSync } from "fs";
import { shell, CATS, PHONE, PHONE_TEL, WA } from "./generate-categories.mjs";

function slugify(s) {
  const map = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", İ: "i" };
  return s.replace(/[çğıöşüİ]/g, (ch) => map[ch]).toLowerCase().replace(/\s+/g, "-");
}

const AREAS = [
  { name: "Yıldırım", region: "Merkezimizin bulunduğu Sakarya Mahallesi'nin de içinde yer aldığı, firmamızın ana üssü olan ilçe" },
  { name: "Osmangazi", region: "Yıldırım'a bitişik, Bursa'nın tarihi merkez ilçesi" },
  { name: "Nilüfer", region: "Bursa'nın batısında, üniversite ve sanayi bölgeleriyle bilinen ilçe" },
  { name: "Gemlik", region: "Marmara kıyısında, liman ve sanayi bölgesiyle öne çıkan ilçe" },
  { name: "Mudanya", region: "Marmara kıyısında, tarihi dokusuyla bilinen sahil ilçesi" },
  { name: "Gürsu", region: "Yıldırım'a komşu, Bursa'nın doğusundaki ilçe" },
  { name: "Kestel", region: "Yıldırım'a komşu, Bursa'nın doğu yönündeki ilçe" },
  { name: "İnegöl", region: "Bursa'nın doğusunda, mobilya sanayisiyle bilinen büyük ilçe" },
  { name: "Orhangazi", region: "İznik Gölü ile Marmara arasında, kuzeydoğudaki ilçe" },
  { name: "Karacabey", region: "Bursa'nın batısında, tarım ve hayvancılıkla bilinen ilçe" },
  { name: "Mustafakemalpaşa", region: "Bursa'nın güneybatısında, tarım bölgesi olan ilçe" },
  { name: "İznik", region: "Tarihi İznik Gölü kıyısında, kuzeydoğudaki ilçe" },
  { name: "Yenişehir", region: "Bursa'nın kuzeydoğusunda, tarım ovasıyla bilinen ilçe" },
  { name: "Orhaneli", region: "Bursa'nın güneyinde, dağlık bölgede yer alan ilçe" },
  { name: "Keles", region: "Uludağ eteklerinde, Bursa'nın güneyindeki ilçe" },
  { name: "Büyükorhan", region: "Bursa'nın güneybatısında yer alan ilçe" },
  { name: "Harmancık", region: "Bursa'nın en güneyinde yer alan ilçe" },
];

for (const a of AREAS) {
  a.slug = slugify(a.name) + "-hurdaci";
}

for (const a of AREAS) {
  const other = AREAS.filter((x) => x.slug !== a.slug);
  const desc = `Elit Hurdacılık, ${a.name} içinde adresinize gelerek demir-çelik, bakır, alüminyum, kablo, beyaz eşya, klima ve akü hurdanızı kalibreli baskülle tartıp günün fiyatından elden öder.`;
  const content = `
<section class="page-hero">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">Anasayfa</a> / <a href="hizmet-bolgelerimiz.html">Hizmet Bölgelerimiz</a> / ${a.name}</div>
    <h1>${a.name} Hurdacı</h1>
  </div>
</section>
<section class="section">
  <div class="container detail-grid">
    <div class="detail-body">
      <p style="font-size:18px;color:var(--text-soft)">${a.region} olan ${a.name}'de, hurdanızı adresinizden alıp gözünüzün önünde tarttıktan sonra elden ödemesini yapıyoruz.</p>
      <h2>${a.name}'de Değerlendirdiğimiz Hurda Türleri</h2>
      <div class="cat-grid" style="margin-top:20px">
        ${CATS.map((c) => `
        <a href="${c.slug}.html" class="cat-card">
          <span class="cat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${c.icon}</svg></span>
          <h3>${c.title}</h3>
          <p>${c.desc.slice(0, 64)}…</p>
          <span class="go">İncele →</span>
        </a>`).join("")}
      </div>
      <h2>Nasıl Çalışıyoruz</h2>
      <p>Bizi arayın ya da WhatsApp'tan yazın, hurdanızın türünü ve tahmini miktarını belirtin. Ekibimiz ${a.name} içerisindeki adresinize randevulaşarak gelir, kalibreli baskülümüzle tartımı gözünüzün önünde yapar ve tutarı elden, nakit olarak öder. Fiyat, güncel metal borsası verilerine göre günlük olarak belirlenir.</p>
    </div>
    <aside>
      <div class="side-cta">
        <h3>Hemen Teklif Alın</h3>
        <p>${a.name} için ücretsiz değerlendirme yapalım.</p>
        <a href="tel:${PHONE_TEL}" class="btn btn-yellow" style="width:100%;justify-content:center;margin-top:14px">📞 ${PHONE}</a>
        <a href="https://wa.me/${WA}" class="btn btn-outline" style="width:100%;justify-content:center;margin-top:10px">WhatsApp'tan Yaz</a>
      </div>
      <div class="side-card" style="margin-top:20px">
        <h3>Diğer Bölgeler</h3>
        <div class="side-list">
          ${other.map((o) => `<a href="${o.slug}.html">${o.name} <span>→</span></a>`).join("\n          ")}
        </div>
      </div>
    </aside>
  </div>
</section>`;
  const html = shell({ title: `${a.name} Hurdacı`, desc, keywords: `${a.name} hurdacı, ${a.name} hurda alım, hurda alan yerler ${a.name}`, slug: a.slug, content, active: "" });
  writeFileSync(`${a.slug}.html`, html, "utf8");
  console.log("yazıldı:", `${a.slug}.html`);
}

export { AREAS };
