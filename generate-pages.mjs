import { writeFileSync } from "fs";
import { CATS, shell, PHONE, PHONE_TEL, WA } from "./generate-categories.mjs";

const AREAS = ["Yıldırım", "Osmangazi", "Nilüfer", "Gemlik", "Mudanya", "Gürsu", "Kestel", "İnegöl", "Orhangazi", "Karacabey", "Mustafakemalpaşa", "İznik", "Yenişehir", "Orhaneli", "Keles", "Büyükorhan", "Harmancık"];

function page(slug, title, desc, keywords, content, active) {
  const html = shell({ title, desc, keywords, slug, content, active });
  writeFileSync(`${slug}.html`, html, "utf8");
  console.log("yazıldı:", `${slug}.html`);
}

// ===== HİZMETLERİMİZ =====
page(
  "hizmetlerimiz",
  "Hizmetlerimiz",
  "Elit Hurdacılık'ın Bursa Yıldırım'da sunduğu hurda alım hizmetlerinin tamamı: demir-çelik, bakır, alüminyum, kablo, beyaz eşya, klima ve akü hurdası.",
  "hurda hizmetleri Yıldırım, hurda alım Bursa, adrese gelen hurdacı",
  `
<section class="page-hero">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">Anasayfa</a> / Hizmetlerimiz</div>
    <h1>Hizmetlerimiz</h1>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Kapsamlı Hizmet</span>
      <h2>Her Tür Hurda İçin Tek Adres</h2>
      <p>Yıldırım Sakarya Mahallesi merkezli ekibimiz, aşağıdaki hurda kategorilerinin tamamında adresinize gelerek hizmet verir.</p>
    </div>
    <div class="cat-grid">
      ${CATS.map((c) => `
      <a href="${c.slug}.html" class="cat-card">
        <span class="cat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${c.icon}</svg></span>
        <h3>${c.title}</h3>
        <p>${c.desc.slice(0, 64)}…</p>
        <span class="go">İncele →</span>
      </a>`).join("")}
    </div>
  </div>
</section>
<section class="section section-soft">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Ek Hizmetler</span>
      <h2>Sadece Alım Değil, Çözüm Ortağıyız</h2>
    </div>
    <div class="why-strip">
      <div class="why-item"><div class="n">+</div><h3>Kablo Sıyırma</h3><p>Yüksek hacimli kablo çıkışlarında yerinde sıyırma hizmeti.</p></div>
      <div class="why-item"><div class="n">+</div><h3>Klima Söküm</h3><p>Split ve ticari klima söküm işini ekibimiz üstlenir.</p></div>
      <div class="why-item"><div class="n">+</div><h3>Toplu Boşaltma</h3><p>Site/apartman/fabrika boşaltmalarında tek seferde tam hizmet.</p></div>
      <div class="why-item"><div class="n">+</div><h3>Kurumsal Anlaşma</h3><p>Düzenli hurda çıkışı olan işletmelere periyodik alım sözleşmesi.</p></div>
    </div>
  </div>
</section>`,
  "hizmetler"
);

// ===== HAKKIMIZDA =====
page(
  "hakkimizda",
  "Hakkımızda",
  "Elit Hurdacılık, Bursa Yıldırım Sakarya Mahallesi merkezli, şeffaf tartım ve elden ödeme prensibiyle çalışan yerel bir hurda alım işletmesidir.",
  "elit hurdacılık hakkında, Yıldırım hurdacı firması, Bursa hurda şirketi",
  `
<section class="page-hero">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">Anasayfa</a> / Hakkımızda</div>
    <h1>Hakkımızda</h1>
  </div>
</section>
<section class="section">
  <div class="container detail-grid">
    <div class="detail-body">
      <div class="cat-photo"><img src="img/hakkimizda.avif" alt="Elit Hurdacılık hurda sahamız" width="900" height="675" loading="lazy"></div>
      <p style="font-size:18px;color:var(--text-soft)">Elit Hurdacılık, Bursa Yıldırım'ın Sakarya Mahallesi'nde konumlanan, bölge halkına ve işletmelerine adrese gelerek hurda alım hizmeti veren yerel bir işletmedir.</p>
      <h2>Nasıl Çalışırız</h2>
      <p>İşimizin temelinde şeffaflık var: hurdanız kalibreli baskülümüzle gözünüzün önünde tartılır, fiyat güncel metal borsası verilerine göre belirlenir ve ödeme tartım biter bitmez elden yapılır. Ne fiyat pazarlığında belirsizlik, ne ödeme konusunda bekleme.</p>
      <h2>Kimlere Hizmet Veriyoruz</h2>
      <ul>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 13l4 4L19 7"/></svg>Ev ve işyeri sahiplerine küçük-orta ölçekli hurda alımı</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 13l4 4L19 7"/></svg>Şantiye ve inşaat firmalarına söküm demiri alımı</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 13l4 4L19 7"/></svg>Fabrikalara düzenli/periyodik hurda toplama anlaşması</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 13l4 4L19 7"/></svg>Oto servislerine akü ve metal parça alımı</li>
      </ul>
      <h2>Neden Elit Hurdacılık</h2>
      <p>Sakarya Mahallesi'ndeki merkezi konumumuz sayesinde Yıldırım'a hızlı ulaşım sağlıyor, Osmangazi, Nilüfer, Gemlik, İnegöl başta olmak üzere Bursa'nın tüm ilçelerine talep üzerine hizmet veriyoruz. Amacımız, hurdanızı en doğru fiyattan, en az zahmetle değerlendirmenizi sağlamak.</p>
    </div>
    <aside>
      <div class="side-cta">
        <h3>Bizi Arayın</h3>
        <p>Sorularınız için hemen ulaşın.</p>
        <a href="tel:${PHONE_TEL}" class="btn btn-yellow" style="width:100%;justify-content:center;margin-top:14px">📞 ${PHONE}</a>
      </div>
      <div class="side-card" style="margin-top:20px">
        <h3>Adresimiz</h3>
        <p style="font-size:14.5px;color:var(--text-soft);margin:0">Sakarya Mahallesi<br>Hekimbaşı Sokak No:25<br>Yıldırım / Bursa</p>
      </div>
    </aside>
  </div>
</section>`,
  "hakkimizda"
);

// ===== İLETİŞİM =====
page(
  "iletisim",
  "İletişim",
  "Elit Hurdacılık'a ulaşın: 0539 846 89 35. Sakarya Mahallesi, Hekimbaşı Sokak No:25, Yıldırım/Bursa.",
  "elit hurdacılık iletişim, Yıldırım hurdacı telefon, Bursa hurda alım numarası",
  `
<section class="page-hero">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">Anasayfa</a> / İletişim</div>
    <h1>İletişim</h1>
  </div>
</section>
<section class="section">
  <div class="container detail-grid">
    <div class="detail-body">
      <h2>Bize Ulaşın</h2>
      <p>Hurdanızın türünü ve tahmini miktarını belirtirseniz size daha hızlı dönüş yapabiliriz.</p>
      <form onsubmit="event.preventDefault();alert('Teşekkürler! En kısa sürede size dönüş yapacağız.');this.reset();">
        <div class="qf-grid">
          <div class="qf-field"><label for="c-ad">Ad Soyad</label><input id="c-ad" type="text" required></div>
          <div class="qf-field"><label for="c-tel">Telefon</label><input id="c-tel" type="tel" required></div>
          <div class="qf-field full"><label for="c-adres">Adres / Mahalle</label><input id="c-adres" type="text"></div>
          <div class="qf-field full"><label for="c-mesaj">Mesajınız</label><textarea id="c-mesaj" rows="4"></textarea></div>
        </div>
        <button type="submit" class="btn btn-navy">Mesaj Gönder</button>
      </form>
    </div>
    <aside>
      <div class="side-card">
        <h3>İletişim Bilgileri</h3>
        <p style="font-size:14.5px;color:var(--text-soft)">📞 <a href="tel:${PHONE_TEL}">${PHONE}</a><br>📍 Sakarya Mah. Hekimbaşı Sk. No:25, Yıldırım/Bursa<br>🕗 Hafta içi & Cumartesi 08:00–20:00</p>
      </div>
      <div class="side-cta" style="margin-top:20px">
        <h3>Hızlı Ulaşım</h3>
        <a href="tel:${PHONE_TEL}" class="btn btn-yellow" style="width:100%;justify-content:center;margin-top:14px">📞 Hemen Ara</a>
        <a href="https://wa.me/${WA}" class="btn btn-outline" style="width:100%;justify-content:center;margin-top:10px">WhatsApp'tan Yaz</a>
      </div>
    </aside>
  </div>
</section>`,
  "iletisim"
);

// ===== SSS =====
const FAQS = [
  ["Hurda fiyatlarını nasıl belirliyorsunuz?", "Güncel metal borsası verilerini takip ederek, hurdanın türüne ve temizliğine göre günün geçerli fiyatını sunuyoruz. Fiyat, tartım sırasında sizinle birlikte netleşir."],
  ["Minimum miktar şartı var mı?", "Hayır, küçük ev hurdalarından fabrika çıkışı büyük partilere kadar her miktarı değerlendiriyoruz."],
  ["Aynı gün adresime gelebilir misiniz?", "Yıldırım ve çevresinde çoğunlukla aynı gün içinde randevu veriyoruz. Bursa'nın diğer ilçelerinde de yoğunluğa göre en kısa sürede adresinize ulaşırız."],
  ["Ödemeyi nasıl alıyorum?", "Tartım tamamlandıktan hemen sonra, hesaplanan tutarı elden nakit olarak ödüyoruz. Kurumsal müşterilerimiz için fatura karşılığı ödeme de mümkündür."],
  ["Kablo sıyırma hizmeti veriyor musunuz?", "Evet, yüksek hacimli kablo çıkışlarında talep üzerine yerinde sıyırma hizmeti sunuyoruz."],
  ["Fabrika veya şantiyeler için düzenli anlaşma yapıyor musunuz?", "Evet, düzenli hurda çıkışı olan işletmelere periyodik alım anlaşması ve kurumsal fiyatlandırma sağlıyoruz."],
  ["Tartı aletiniz kalibreli mi?", "Evet, kullandığımız dijital baskül düzenli olarak kalibre edilir ve tartım işlemi tamamen gözünüzün önünde yapılır."],
  ["Bursa'nın her ilçesine geliyor musunuz?", "Merkezimiz Yıldırım'da olsa da, talep ve miktara göre Bursa'nın diğer ilçelerine de hizmet veriyoruz."],
];
page(
  "sss",
  "Sıkça Sorulan Sorular",
  "Elit Hurdacılık hakkında merak edilenler: fiyatlandırma, minimum miktar, ödeme şekli ve hizmet bölgeleri.",
  "hurdacı sss, hurda alım soruları, elit hurdacılık sorular",
  `
<section class="page-hero">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">Anasayfa</a> / S.S.S.</div>
    <h1>Sıkça Sorulan Sorular</h1>
  </div>
</section>
<section class="section">
  <div class="container">
    <div style="max-width:760px;margin:0 auto">
      ${FAQS.map(([q, a], i) => `
      <div class="faq-item${i === 0 ? " open" : ""}">
        <div class="faq-q">${q}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></div>
        <div class="faq-a"><p>${a}</p></div>
      </div>`).join("")}
    </div>
  </div>
</section>
<script>document.querySelectorAll('.faq-item .faq-q').forEach(q=>{q.addEventListener('click',()=>{const item=q.closest('.faq-item');const wasOpen=item.classList.contains('open');item.parentElement.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));if(!wasOpen)item.classList.add('open');});});</script>`,
  "sss"
);

// ===== HİZMET BÖLGELERİMİZ =====
page(
  "hizmet-bolgelerimiz",
  "Hizmet Bölgelerimiz",
  "Elit Hurdacılık, Yıldırım merkezli ekibiyle Osmangazi, Nilüfer, Gemlik, İnegöl dahil Bursa'nın tüm ilçelerine hurda alım hizmeti verir.",
  "Bursa hurda alım bölgeleri, ilçe hurdacı Bursa, Yıldırım Osmangazi Nilüfer hurda",
  `
<section class="page-hero">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">Anasayfa</a> / Hizmet Bölgeleri</div>
    <h1>Hizmet Bölgelerimiz</h1>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Kapsama Alanı</span>
      <h2>Yıldırım Merkezli, Bursa'nın Tüm İlçelerinde</h2>
      <p>Merkezimiz Yıldırım Sakarya Mahallesi'nde olup, aşağıdaki ilçeler başta olmak üzere Bursa'nın tamamına adrese giderek hizmet veriyoruz.</p>
    </div>
    <div class="area-grid">
      ${AREAS.map((a) => `<a href="tel:${PHONE_TEL}" class="area-chip">${a}</a>`).join("\n      ")}
    </div>
  </div>
</section>
<section class="section section-soft">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Nasıl Planlıyoruz</span>
      <h2>İlçenize Göre Randevu Ayarlıyoruz</h2>
      <p>Yıldırım, Osmangazi ve Nilüfer'de çoğunlukla aynı gün içinde adresinize ulaşıyoruz. Daha uzak ilçelerde (İnegöl, Gemlik, Orhangazi gibi) miktara göre planlama yaparak en kısa sürede geliyoruz.</p>
    </div>
    <div style="text-align:center">
      <a href="tel:${PHONE_TEL}" class="btn btn-yellow">📞 ${PHONE}</a>
    </div>
  </div>
</section>`,
  "bolgeler"
);

// ===== LEGAL =====
function legal(slug, title, body) {
  page(slug, title, `Elit Hurdacılık ${title} sayfası.`, "", `
<section class="page-hero"><div class="container"><div class="breadcrumb"><a href="index.html">Anasayfa</a> / ${title}</div><h1>${title}</h1></div></section>
<section class="section"><div class="container" style="max-width:760px"><div class="detail-body">${body}</div></div></section>`, "");
}

legal("gizlilik-politikasi", "Gizlilik Politikası", `
<p>Elit Hurdacılık olarak ziyaretçilerimizin gizliliğine önem veriyoruz. Bu sayfada, sitemiz üzerinden toplanan bilgilerin nasıl kullanıldığı açıklanmaktadır.</p>
<h2>Toplanan Bilgiler</h2>
<p>İletişim formu üzerinden gönderdiğiniz ad, telefon ve mesaj bilgileri yalnızca size dönüş yapmak amacıyla kullanılır, üçüncü taraflarla paylaşılmaz.</p>
<h2>Çerezler</h2>
<p>Sitemiz, deneyiminizi iyileştirmek amacıyla temel çerezler kullanabilir. Detaylar için Çerez Politikası sayfamızı inceleyebilirsiniz.</p>
<h2>İletişim</h2>
<p>Gizlilik politikamızla ilgili sorularınız için ${PHONE} numaralı telefondan bize ulaşabilirsiniz.</p>`);

legal("cerez-politikasi", "Çerez Politikası", `
<p>Bu site, kullanıcı deneyimini geliştirmek amacıyla çerezler kullanmaktadır.</p>
<h2>Çerez Nedir</h2>
<p>Çerezler, ziyaret ettiğiniz sitelerin tarayıcınıza kaydettiği küçük metin dosyalarıdır.</p>
<h2>Kullandığımız Çerez Türleri</h2>
<p>Sitemizin düzgün çalışması için gerekli temel çerezler kullanılmaktadır. Reklam veya izleme amaçlı üçüncü taraf çerezleri kullanılmamaktadır.</p>
<h2>Tercihleriniz</h2>
<p>Tarayıcı ayarlarınızdan çerezleri istediğiniz zaman devre dışı bırakabilirsiniz.</p>`);

legal("kullanim-sartlari", "Kullanım Şartları", `
<p>Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız.</p>
<h2>İçerik</h2>
<p>Sitede yer alan bilgiler bilgilendirme amaçlıdır. Güncel fiyat ve hizmet detayları için lütfen bizimle iletişime geçin.</p>
<h2>Fikri Mülkiyet</h2>
<p>Sitedeki tüm içerik, tasarım ve görseller Elit Hurdacılık'a aittir, izinsiz kullanılamaz.</p>
<h2>Sorumluluk</h2>
<p>Sitede belirtilen bilgilerin doğruluğu için azami özen gösterilmekle birlikte, güncelleme gecikmelerinden kaynaklanan farklılıklardan sorumlu tutulamayız.</p>`);

// ===== 404 =====
page(
  "404",
  "Sayfa Bulunamadı",
  "Aradığınız sayfa bulunamadı.",
  "",
  `
<section class="section" style="padding:120px 0;text-align:center">
  <div class="container">
    <h1 style="font-size:80px;color:var(--yellow-line)">404</h1>
    <p style="font-size:18px;color:var(--text-soft);margin-bottom:24px">Aradığınız sayfa bulunamadı ya da taşınmış olabilir.</p>
    <a href="index.html" class="btn btn-navy">Anasayfaya Dön</a>
  </div>
</section>`,
  ""
);

console.log("\nTüm sayfalar oluşturuldu.");
