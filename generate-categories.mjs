import { writeFileSync, existsSync } from "fs";

const PHONE = "0539 846 89 35";
const PHONE_TEL = "05398468935";
const WA = "905398468935";

const ICONS = {
  demir: `<path d="M4 20V10l8-6 8 6v10M9 20v-6h6v6"/>`,
  bakir: `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>`,
  aluminyum: `<path d="M3 17l9-13 9 13H3z"/>`,
  kablo: `<path d="M4 12a4 4 0 014-4h8a4 4 0 014 4 4 4 0 01-4 4H8a4 4 0 01-4-4z"/><circle cx="8" cy="12" r="1.2" fill="currentColor"/><circle cx="16" cy="12" r="1.2" fill="currentColor"/>`,
  beyaz: `<rect x="4" y="7" width="16" height="12" rx="2"/><path d="M9 7V4h6v3"/>`,
  klima: `<rect x="3" y="5" width="18" height="9" rx="2"/><path d="M7 18v2M12 18v2M17 18v2"/>`,
  aku: `<rect x="3" y="9" width="18" height="10" rx="2"/><path d="M7 9V6a2 2 0 012-2h6a2 2 0 012 2v3"/>`,
};

const CATS = [
  {
    slug: "demir-celik-hurda", title: "Demir-Çelik Hurda", icon: ICONS.demir,
    desc: "İnşaat demiri, sac, profil, boru ve her türlü makine parçasından oluşan demir-çelik hurdanızı kalibreli baskülümüzle tartıp günün fiyatından değerlendiriyoruz.",
    keywords: "demir hurda Yıldırım, çelik hurda Bursa, hurda demir alım",
    items: ["İnşaat demiri ve donatı artıkları", "Sac, levha ve profil parçaları", "Makine ve ekipman gövdeleri", "Boru, lama, kütük hurdası", "Fabrika/şantiye söküm demiri"],
    note: "Şantiye ve fabrika söküm işlerinde toplu demir hurdası için özel kurumsal fiyat ve düzenli alım anlaşması sunuyoruz.",
  },
  {
    slug: "bakir-hurda", title: "Bakır Hurda", icon: ICONS.bakir,
    desc: "Kablo bakırı, boru, levha ve elektrik motoru sargılarından oluşan bakır hurdanız, temizlik derecesine göre en yüksek güncel fiyattan değerlendirilir.",
    keywords: "bakır hurda Yıldırım, bakır alım Bursa, elektrik motoru hurdası",
    items: ["Temiz kablo bakırı (soyulmuş)", "Bakır boru ve tesisat parçaları", "Elektrik motoru sargı bakırı", "Bakır levha ve şerit", "Trafo ve jeneratör bakırı"],
    note: "Bakırın temizlik oranı fiyatı doğrudan etkiler — isterseniz kablo sıyırma hizmetimizden de faydalanabilirsiniz.",
  },
  {
    slug: "aluminyum-hurda", title: "Alüminyum Hurda", icon: ICONS.aluminyum,
    desc: "Profil, jant, kasa ve döküm alüminyum parçalarını türüne göre ayrıştırarak en doğru fiyat üzerinden satın alıyoruz.",
    keywords: "alüminyum hurda Yıldırım, jant hurdası Bursa, alüminyum profil hurda",
    items: ["Doğrama ve profil alüminyum", "Araç jantı ve döküm parçalar", "Alüminyum kasa ve gövde", "Mutfak/beyaz eşya alüminyumu", "Fabrika talaş ve döküm artığı"],
    note: "Alüminyum türleri (profil, döküm, talaş) ayrı fiyatlandırılır — tartım öncesi ayrıştırma yapmanız işinizi hızlandırır.",
  },
  {
    slug: "kablo-hurda", title: "Kablo Hurdası", icon: ICONS.kablo,
    desc: "NYA, NYM ve enerji kablolarından oluşan kablo hurdanızı; ister sıyırma hizmetimizle ister olduğu gibi tartarak değerlendiriyoruz.",
    keywords: "kablo hurdası Yıldırım, NYA kablo alım, enerji kablosu hurda Bursa",
    items: ["NYA ve NYM ev tesisatı kabloları", "Enerji ve orta gerilim kabloları", "Telefon ve data kabloları", "Trafo/pano çıkışı kablo demetleri", "Kablo sıyırma hizmeti (talep üzerine)"],
    note: "Büyük hacimli kablo çıkışlarında (bina/fabrika tadilatı) yerinde sıyırma hizmeti de sunabiliyoruz.",
  },
  {
    slug: "beyaz-esya-hurdasi", title: "Beyaz Eşya Hurdası", icon: ICONS.beyaz,
    desc: "Buzdolabı, çamaşır makinesi ve bulaşık makinesi gibi ömrünü tamamlamış beyaz eşyalarınızı adresinizden alıp çevre dostu şekilde ayrıştırıyoruz.",
    keywords: "beyaz eşya hurdası Yıldırım, buzdolabı hurda Bursa, çamaşır makinesi hurda alım",
    items: ["Buzdolabı ve derin dondurucu", "Çamaşır ve bulaşık makinesi", "Fırın ve ocak", "Klima dışı beyaz eşya motoru", "Toplu daire/apartman boşaltma"],
    note: "Site ve apartman boşaltmalarında birden fazla beyaz eşyayı tek seferde, aynı gün adresinizden alabiliyoruz.",
  },
  {
    slug: "klima-hurdasi", title: "Klima Hurdası", icon: ICONS.klima,
    desc: "Split klima iç-dış ünitelerinden çıkan kompresör, bakır serpantin ve alüminyum kanat gibi parçaları ayrıştırarak değerlendiriyoruz.",
    keywords: "klima hurdası Yıldırım, split klima hurda Bursa, klima kompresör alım",
    items: ["Split klima iç/dış ünite", "Klima kompresörü", "Bakır serpantin ve boru", "Alüminyum kanat/gövde", "Ticari/endüstriyel klima söküm"],
    note: "Klima söküm işini de talep üzerine ekibimiz üstlenebilir, ayrıca sökme ücreti gerekmeden hurda değerinden mahsup edilir.",
  },
  {
    slug: "aku-hurdasi", title: "Akü Hurdası", icon: ICONS.aku,
    desc: "Araç aküsünden endüstriyel akülere kadar her tür kurşun asit aküyü mevzuata uygun şekilde teslim alıyor, çevreye zarar vermeden değerlendiriyoruz.",
    keywords: "akü hurdası Yıldırım, araç aküsü alım Bursa, endüstriyel akü hurda",
    items: ["Binek araç aküsü", "Ticari araç/iş makinesi aküsü", "UPS ve kesintisiz güç aküsü", "Endüstriyel kuru tip akü", "Toplu akü çıkışı (servis/filo)"],
    note: "Oto servisi ve filo işletmelerine düzenli akü toplama hizmeti sunuyoruz — birikimli akülerinizi periyodik alabiliriz.",
  },
];

function shell({ title, desc, keywords, slug, content, active }) {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} | Elit Hurdacılık Yıldırım Bursa</title>
<meta name="description" content="${desc}">
<meta name="keywords" content="${keywords}">
<link rel="canonical" href="https://elithurdacilik.com.tr/${slug}.html">
<meta name="robots" content="index, follow">
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2218%22 fill=%22%23121826%22/><text x=%2250%22 y=%2268%22 font-size=%2260%22 text-anchor=%22middle%22 fill=%22%23f5b400%22 font-family=%22Arial%22 font-weight=%22bold%22>E</text></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap" rel="stylesheet">
<link rel="preload" href="css/style.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="css/style.css"></noscript>
</head>
<body>
<div class="topbar">
  <div class="container">
    <div class="topbar-links">
      <a href="tel:${PHONE_TEL}">📞 ${PHONE}</a>
      <span>Sakarya Mah. Hekimbaşı Sk. No:25, Yıldırım/Bursa</span>
    </div>
    <div class="topbar-hide"><span>Hafta içi & Cumartesi 08:00–20:00</span></div>
  </div>
</div>
<header class="header">
  <div class="container nav">
    <a href="index.html" class="logo" aria-label="Elit Hurdacılık ana sayfa">
      <span class="logo-mark"><img src="img/logo.avif" alt="Elit Hurdacılık logo" width="300" height="280"></span>
      <span class="logo-text"><b>Elit Hurdacılık</b><span>Yıldırım · Bursa</span></span>
    </a>
    <ul class="menu">
      <li><a href="index.html"${active === "anasayfa" ? ' class="active"' : ""}>Anasayfa</a></li>
      <li><a href="hizmetlerimiz.html"${active === "hizmetler" ? ' class="active"' : ""}>Hizmetler</a></li>
      <li><a href="hakkimizda.html"${active === "hakkimizda" ? ' class="active"' : ""}>Kurumsal</a></li>
      <li><a href="hizmet-bolgelerimiz.html"${active === "bolgeler" ? ' class="active"' : ""}>Bölgeler</a></li>
      <li><a href="sss.html"${active === "sss" ? ' class="active"' : ""}>S.S.S.</a></li>
      <li><a href="iletisim.html"${active === "iletisim" ? ' class="active"' : ""}>İletişim</a></li>
    </ul>
    <div class="nav-cta">
      <a href="tel:${PHONE_TEL}" class="nav-phone"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.5c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02L6.6 10.8z"/></svg>${PHONE}</a>
      <button class="burger" id="burgerBtn" aria-label="Menü"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>
    </div>
  </div>
</header>
<div class="mmenu" id="mmenu">
  <div class="mmenu-top">
    <span class="logo-text"><b style="color:#fff">Elit Hurdacılık</b></span>
    <button class="mmenu-close" id="mmenuClose" aria-label="Kapat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
  </div>
  <ul>
    <li><a href="index.html">Anasayfa</a></li>
    <li><a href="hizmetlerimiz.html">Hizmetlerimiz</a></li>
    <li><a href="hakkimizda.html">Kurumsal</a></li>
    <li><a href="hizmet-bolgelerimiz.html">Hizmet Bölgeleri</a></li>
    <li><a href="sss.html">Sıkça Sorulanlar</a></li>
    <li><a href="iletisim.html">İletişim</a></li>
  </ul>
  <div class="mmenu-cta">
    <a href="tel:${PHONE_TEL}" class="btn btn-yellow">📞 Hemen Ara</a>
    <a href="https://wa.me/${WA}" class="btn btn-outline">WhatsApp'tan Yaz</a>
  </div>
</div>
${content}
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <span class="logo-mark" style="width:36px;height:36px"><img src="img/logo.avif" alt="Elit Hurdacılık logo" width="300" height="280"></span>
          <b>Elit Hurdacılık</b>
        </div>
        <p>Sakarya Mahallesi, Hekimbaşı Sokak No:25<br>Yıldırım / Bursa</p>
        <p>Bursa genelinde adrese gelerek hurda alım hizmeti veren, şeffaf tartım ve elden ödeme prensibiyle çalışan yerel bir işletmeyiz.</p>
      </div>
      <div>
        <h4>Kategoriler</h4>
        <ul>
          <li><a href="demir-celik-hurda.html">Demir-Çelik Hurda</a></li>
          <li><a href="bakir-hurda.html">Bakır Hurda</a></li>
          <li><a href="aluminyum-hurda.html">Alüminyum Hurda</a></li>
          <li><a href="kablo-hurda.html">Kablo Hurdası</a></li>
          <li><a href="beyaz-esya-hurdasi.html">Beyaz Eşya</a></li>
        </ul>
      </div>
      <div>
        <h4>Kurumsal</h4>
        <ul>
          <li><a href="hakkimizda.html">Hakkımızda</a></li>
          <li><a href="hizmet-bolgelerimiz.html">Hizmet Bölgeleri</a></li>
          <li><a href="sss.html">Sıkça Sorulanlar</a></li>
          <li><a href="iletisim.html">İletişim</a></li>
          <li><a href="gizlilik-politikasi.html">Gizlilik Politikası</a></li>
        </ul>
      </div>
      <div>
        <h4>İletişim</h4>
        <p>📞 <a href="tel:${PHONE_TEL}">${PHONE}</a></p>
        <p>📍 Sakarya Mah. Hekimbaşı Sk. No:25, Yıldırım/Bursa</p>
        <p>🕗 Hafta içi & Cumartesi 08:00–20:00</p>
        <a href="https://wa.me/${WA}" class="btn btn-yellow" style="margin-top:10px">WhatsApp'tan Yaz</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="year"></span> Elit Hurdacılık — Tüm hakları saklıdır.</span>
      <span><a href="kullanim-sartlari.html">Kullanım Şartları</a> · <a href="cerez-politikasi.html">Çerez Politikası</a></span>
    </div>
  </div>
</footer>
<div class="fab">
  <a href="https://wa.me/${WA}" class="wa" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"/></svg></a>
  <a href="tel:${PHONE_TEL}" class="call" aria-label="Ara"><svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.5c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02L6.6 10.8z"/></svg></a>
</div>
<div class="mbar">
  <a href="tel:${PHONE_TEL}" class="call">📞 Hemen Ara</a>
  <a href="https://wa.me/${WA}" class="wa">WhatsApp</a>
</div>
<div class="cookie" id="cookieBanner">
  <p>Bu sitede, deneyiminizi iyileştirmek için çerezler kullanılır. Detaylar için <a href="cerez-politikasi.html">Çerez Politikası</a>'nı inceleyebilirsiniz.</p>
  <div class="cookie-btns">
    <button class="cookie-accept" onclick="document.getElementById('cookieBanner').classList.remove('show');localStorage.setItem('cookieChoice','accepted')">Kabul Et</button>
    <button class="cookie-reject" onclick="document.getElementById('cookieBanner').classList.remove('show');localStorage.setItem('cookieChoice','rejected')">Reddet</button>
  </div>
</div>
<script src="js/main.js"></script>
</body>
</html>`;
}

for (const c of CATS) {
  const other = CATS.filter((x) => x.slug !== c.slug);
  const content = `
<section class="page-hero">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">Anasayfa</a> / ${c.title}</div>
    <h1>${c.title}</h1>
  </div>
</section>
<section class="section">
  <div class="container detail-grid">
    <div class="detail-body">
      ${existsSync(`img/photos/${c.slug}.avif`) ? `<div class="cat-photo"><img src="img/photos/${c.slug}.avif" alt="${c.title}" width="800" height="600" loading="lazy"></div>` : ""}
      <p style="font-size:18px;color:var(--text-soft)">${c.desc}</p>
      <h2>Değerlendirdiğimiz Parçalar</h2>
      <ul>
        ${c.items.map((it) => `<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 13l4 4L19 7"/></svg>${it}</li>`).join("\n        ")}
      </ul>
      <h2>Bilmeniz Gerekenler</h2>
      <p>${c.note}</p>
      <p>Yıldırım Sakarya Mahallesi'ndeki merkezimizden hareket eden ekibimiz, ${c.title.toLocaleLowerCase("tr")} için adresinize gelip kalibreli baskülle tartım yapar, sonucu sizinle birlikte teyit ettikten sonra ödemeyi elden gerçekleştirir. Fiyat, güncel metal borsası verilerine göre günlük olarak belirlenir.</p>
    </div>
    <aside>
      <div class="side-cta">
        <h3>Hemen Teklif Alın</h3>
        <p>${c.title.toLocaleLowerCase("tr")} için ücretsiz değerlendirme yapalım.</p>
        <a href="tel:${PHONE_TEL}" class="btn btn-yellow" style="width:100%;justify-content:center;margin-top:14px">📞 ${PHONE}</a>
        <a href="https://wa.me/${WA}" class="btn btn-outline" style="width:100%;justify-content:center;margin-top:10px">WhatsApp'tan Yaz</a>
      </div>
      <div class="side-card" style="margin-top:20px">
        <h3>Diğer Kategoriler</h3>
        <div class="side-list">
          ${other.map((o) => `<a href="${o.slug}.html">${o.title} <span>→</span></a>`).join("\n          ")}
        </div>
      </div>
    </aside>
  </div>
</section>`;
  const html = shell({ title: c.title, desc: c.desc, keywords: c.keywords, slug: c.slug, content, active: "" });
  writeFileSync(`${c.slug}.html`, html, "utf8");
  console.log("yazıldı:", `${c.slug}.html`);
}

export { CATS, shell, PHONE, PHONE_TEL, WA };
