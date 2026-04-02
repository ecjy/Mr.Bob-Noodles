/* ===========================================
   MR.BOB NOODLES — Main Application Script
   =========================================== */

// ===========================
// TRANSLATIONS
// ===========================
const i18n = {
  en: {
    nav_home:            "Home",
    nav_about:           "About Us",
    nav_products:        "Products",
    nav_contact:         "Contact",
    nav_factory:         "VPP Factory",
    hero_eyebrow:        "Est. 2018 &nbsp;&middot;&nbsp; Kalasin, Thailand",
    hero_heading:        "Premium Dried<br>Noodles",
    hero_sub:            "Thailand's first parabolic dome solar-dried noodle producer — clean, certified, and built for global markets.",
    hero_cta_primary:    "Explore Products",
    hero_cta_secondary:  "Contact Us",
    cert_title:          "Certified &amp; Trusted",
    cert_fda:            "FDA Approved",
    cert_gmp:            "GMP Certified",
    cert_halal:          "Halal Certified",
    cert_otop:           "OTOP Recognized",
    cert_export:         "Export Ready",
    innovation_eyebrow:  "Our Technology",
    innovation_heading:  "The First &amp; Only Solar Parabolic Dome Drying in Thailand",
    innovation_body:     "Developed in collaboration with Thailand's Department of Alternative Energy Development and Conservation and Silpakorn University's Physics Department, our solar parabolic dome system produces noodles free from smoke, insects, and pollution — powered entirely by clean, renewable energy.",
    innovation_stat1_num:   "2018",
    innovation_stat1_label: "Founded",
    innovation_stat2_num:   "#1",
    innovation_stat2_label: "in Thailand",
    innovation_stat3_num:   "100%",
    innovation_stat3_label: "Solar Powered",
    placeholder_dome:    "Solar Dome Technology",
    products_eyebrow:    "Products",
    products_heading:    "Our Dried Noodle Range",
    products_sub:        "Available for retail, wholesale, OEM, and export",
    prod1_tag:           "Retail &amp; Wholesale",
    prod1_name:          "Classic Dried Vermicelli",
    prod1_desc:          "Traditional Thai rice vermicelli, solar-dried for clean flavor and extended shelf life.",
    prod1_img_label:     "Product Image",
    prod2_tag:           "Export Grade",
    prod2_name:          "Premium Fine Strand",
    prod2_desc:          "Delicate fine-strand vermicelli crafted for premium packaging and international distribution.",
    prod2_img_label:     "Product Image",
    prod3_tag:           "Custom Orders",
    prod3_name:          "OEM &amp; Private Label",
    prod3_desc:          "We produce to your brand specification. Full support for distributors and brand owners.",
    prod3_img_label:     "Custom Orders",
    prod_cta:            "Learn More &#8594;",
    why_eyebrow:         "Why Mr.Bob",
    why_heading:         "Quality You Can Trust",
    why1_title:          "Solar Innovation",
    why1_desc:           "Our patented parabolic dome technology ensures smoke-free, pollution-free noodle production.",
    why2_title:          "Full Certifications",
    why2_desc:           "FDA, GMP, Halal certified and OTOP recognized — trusted in local and international markets.",
    why3_title:          "Export Ready",
    why3_desc:           "We meet international food safety standards with proven experience serving global buyers.",
    why4_title:          "Partner Growth",
    why4_desc:           "From OEM production to brand-building — we grow alongside our partners.",
    partners_title:      "Supported By",
    footer_tagline:      "Premium dried noodles from the heart of Kalasin, Thailand.",
    footer_nav:          "Navigation",
    footer_contact_title:"Contact",
    footer_company:      "VPP Thai Dried Vermicelli Co., Ltd.",
    footer_address:      "247/1 Moo 2, Samoedej, Kalasin 46150, Thailand",
    footer_phone:        "081 262 3273",
    footer_line:         "mrbobvpp",
    footer_copyright:    "&copy; 2024 VPP Thai Dried Vermicelli Co., Ltd. All rights reserved."
  },

  th: {
    nav_home:            "หน้าหลัก",
    nav_about:           "เกี่ยวกับเรา",
    nav_products:        "สินค้า",
    nav_contact:         "ติดต่อ",
    nav_factory:         "โรงงาน VPP",
    hero_eyebrow:        "ก่อตั้ง 2561 &nbsp;&middot;&nbsp; กาฬสินธุ์ ประเทศไทย",
    hero_heading:        "เส้นก๋วยเตี๋ยว<br>อบแห้งพรีเมียม",
    hero_sub:            "ผู้ผลิตขนมจีนอบแห้งด้วยโดมพาราโบลาพลังงานแสงอาทิตย์รายแรกในประเทศไทย — สะอาด ได้รับการรับรอง และพร้อมสู่ตลาดโลก",
    hero_cta_primary:    "ดูสินค้าของเรา",
    hero_cta_secondary:  "ติดต่อเรา",
    cert_title:          "รับรองและน่าเชื่อถือ",
    cert_fda:            "รับรอง อย.",
    cert_gmp:            "มาตรฐาน GMP",
    cert_halal:          "รับรองฮาลาล",
    cert_otop:           "สินค้า OTOP",
    cert_export:         "พร้อมส่งออก",
    innovation_eyebrow:  "เทคโนโลยีของเรา",
    innovation_heading:  "เทคโนโลยีการอบแห้งด้วยโดมพาราโบลาพลังงานแสงอาทิตย์<br>รายแรกและรายเดียวในประเทศไทย",
    innovation_body:     "ร่วมพัฒนากับกรมพัฒนาพลังงานทดแทนและอนุรักษ์พลังงาน และภาควิชาฟิสิกส์ มหาวิทยาลัยศิลปากร เราบุกเบิกระบบการอบแห้งด้วยโดมพาราโบลาพลังงานแสงอาทิตย์ — ปราศจากควัน แมลง และมลพิษ ขับเคลื่อนด้วยพลังงานสะอาดทั้งสิ้น",
    innovation_stat1_num:   "2561",
    innovation_stat1_label: "ก่อตั้ง",
    innovation_stat2_num:   "#1",
    innovation_stat2_label: "รายแรกในไทย",
    innovation_stat3_num:   "100%",
    innovation_stat3_label: "พลังงานแสงอาทิตย์",
    placeholder_dome:    "เทคโนโลยีโดมพลังงานแสงอาทิตย์",
    products_eyebrow:    "สินค้า",
    products_heading:    "เส้นก๋วยเตี๋ยวอบแห้งของเรา",
    products_sub:        "จำหน่ายปลีก ส่ง รับผลิต OEM และส่งออก",
    prod1_tag:           "ปลีก &amp; ส่ง",
    prod1_name:          "ขนมจีนอบแห้งคลาสสิค",
    prod1_desc:          "ขนมจีนข้าวไทยดั้งเดิม อบแห้งด้วยพลังงานแสงอาทิตย์ รสชาติสะอาด เก็บได้นาน",
    prod1_img_label:     "รูปภาพสินค้า",
    prod2_tag:           "เกรดส่งออก",
    prod2_name:          "เส้นพรีเมียมเส้นเล็ก",
    prod2_desc:          "ขนมจีนเส้นเล็กบอบบาง เหมาะสำหรับบรรจุภัณฑ์พรีเมียมและตลาดต่างประเทศ",
    prod2_img_label:     "รูปภาพสินค้า",
    prod3_tag:           "รับสั่งทำพิเศษ",
    prod3_name:          "OEM &amp; เลเบลส่วนตัว",
    prod3_desc:          "เราผลิตตามข้อกำหนดแบรนด์ของคุณ รองรับผู้จัดจำหน่ายและเจ้าของแบรนด์อย่างครบถ้วน",
    prod3_img_label:     "รับสั่งพิเศษ",
    prod_cta:            "ดูเพิ่มเติม &#8594;",
    why_eyebrow:         "ทำไมต้องมร.บ็อบ",
    why_heading:         "คุณภาพที่คุณไว้วางใจได้",
    why1_title:          "นวัตกรรมพลังงานแสงอาทิตย์",
    why1_desc:           "เทคโนโลยีโดมพาราโบลาของเราช่วยให้การผลิตปราศจากควันและมลพิษ",
    why2_title:          "การรับรองครบถ้วน",
    why2_desc:           "ได้รับการรับรอง อย., GMP, ฮาลาล และ OTOP — วางใจได้ทั้งในและต่างประเทศ",
    why3_title:          "ศักยภาพการส่งออก",
    why3_desc:           "เราผ่านมาตรฐานความปลอดภัยอาหารสากลและมีประสบการณ์ให้บริการลูกค้าทั่วโลก",
    why4_title:          "การเติบโตร่วมกัน",
    why4_desc:           "ตั้งแต่การรับผลิต OEM จนถึงการสร้างแบรนด์ — เราเติบโตไปพร้อมกับพาร์ทเนอร์",
    partners_title:      "ได้รับการสนับสนุนจาก",
    footer_tagline:      "เส้นก๋วยเตี๋ยวอบแห้งพรีเมียมจากใจกลางจังหวัดกาฬสินธุ์ ประเทศไทย",
    footer_nav:          "เมนู",
    footer_contact_title:"ติดต่อ",
    footer_company:      "บริษัท วีพีพี ไทย เส้นหมี่อบแห้ง จำกัด",
    footer_address:      "247/1 หมู่ 2 ต.สาเมี่ย อ.สาเมี่ย กาฬสินธุ์ 46150",
    footer_phone:        "081 262 3273",
    footer_line:         "mrbobvpp",
    footer_copyright:    "&copy; 2567 บริษัท วีพีพี ไทย เส้นหมี่อบแห้ง จำกัด สงวนลิขสิทธิ์"
  },

  zh: {
    nav_home:            "首页",
    nav_about:           "关于我们",
    nav_products:        "产品",
    nav_contact:         "联系我们",
    nav_factory:         "VPP工厂",
    hero_eyebrow:        "成立于2018年 &nbsp;&middot;&nbsp; 泰国甲色信府",
    hero_heading:        "优质干燥<br>米粉",
    hero_sub:            "泰国首家抛物线穹顶太阳能干燥米粉生产商 — 清洁、经过认证，面向全球市场。",
    hero_cta_primary:    "探索产品",
    hero_cta_secondary:  "联系我们",
    cert_title:          "认证与信赖",
    cert_fda:            "FDA认证",
    cert_gmp:            "GMP认证",
    cert_halal:          "清真认证",
    cert_otop:           "OTOP认证",
    cert_export:         "出口就绪",
    innovation_eyebrow:  "我们的技术",
    innovation_heading:  "泰国首创且唯一的<br>太阳能抛物线穹顶干燥技术",
    innovation_body:     "与泰国替代能源开发和节能部及西巴空大学物理系合作，我们率先开创了太阳能抛物线穹顶干燥系统 — 无烟、无虫、无污染，完全由清洁可再生能源驱动。",
    innovation_stat1_num:   "2018",
    innovation_stat1_label: "成立年份",
    innovation_stat2_num:   "#1",
    innovation_stat2_label: "泰国首创",
    innovation_stat3_num:   "100%",
    innovation_stat3_label: "太阳能驱动",
    placeholder_dome:    "太阳能穹顶技术",
    products_eyebrow:    "产品",
    products_heading:    "我们的干面条系列",
    products_sub:        "适用于零售、批发、OEM及出口",
    prod1_tag:           "零售 &amp; 批发",
    prod1_name:          "经典干米粉",
    prod1_desc:          "传统泰国大米米粉，经太阳能干燥，口感纯净，保质期长。",
    prod1_img_label:     "产品图片",
    prod2_tag:           "出口级",
    prod2_name:          "优质细丝米粉",
    prod2_desc:          "精制细丝米粉，专为优质包装和国际市场而制作。",
    prod2_img_label:     "产品图片",
    prod3_tag:           "定制订单",
    prod3_name:          "OEM &amp; 自有品牌",
    prod3_desc:          "我们按照您的品牌规格生产，全面支持经销商和品牌所有者。",
    prod3_img_label:     "定制订单",
    prod_cta:            "了解更多 &#8594;",
    why_eyebrow:         "为何选择Mr.Bob",
    why_heading:         "值得信赖的品质",
    why1_title:          "太阳能干燥创新",
    why1_desc:           "我们的专利抛物线穹顶技术确保无烟、无污染的生产过程。",
    why2_title:          "完整认证",
    why2_desc:           "获FDA、GMP、清真认证，OTOP认可 — 在本地和国际市场均获信赖。",
    why3_title:          "出口能力",
    why3_desc:           "我们符合国际食品安全标准，具备服务全球采购商的丰富经验。",
    why4_title:          "共同成长",
    why4_desc:           "从OEM生产到品牌建设 — 我们与合作伙伴共同成长。",
    partners_title:      "合作支持",
    footer_tagline:      "来自泰国甲色信府中心的优质干面条。",
    footer_nav:          "导航",
    footer_contact_title:"联系方式",
    footer_company:      "VPP泰国干米粉有限公司",
    footer_address:      "247/1 第2村, 萨莫戴, 甲色信府 46150, 泰国",
    footer_phone:        "081 262 3273",
    footer_line:         "mrbobvpp",
    footer_copyright:    "&copy; 2024 VPP泰国干米粉有限公司 版权所有"
  },

  ms: {
    nav_home:            "Laman Utama",
    nav_about:           "Tentang Kami",
    nav_products:        "Produk",
    nav_contact:         "Hubungi",
    nav_factory:         "Kilang VPP",
    hero_eyebrow:        "Ditubuhkan 2018 &nbsp;&middot;&nbsp; Kalasin, Thailand",
    hero_heading:        "Mi Vermicelli<br>Kering Premium",
    hero_sub:            "Pengeluar mi vermicelli kering dengan teknologi kubah parabolik solar pertama di Thailand — bersih, bersijil, dan bersedia untuk pasaran global.",
    hero_cta_primary:    "Jelajahi Produk",
    hero_cta_secondary:  "Hubungi Kami",
    cert_title:          "Bersijil &amp; Dipercayai",
    cert_fda:            "Diluluskan FDA",
    cert_gmp:            "Disijilkan GMP",
    cert_halal:          "Disijilkan Halal",
    cert_otop:           "Diiktiraf OTOP",
    cert_export:         "Sedia Eksport",
    innovation_eyebrow:  "Teknologi Kami",
    innovation_heading:  "Teknologi Pengeringan Kubah Parabolik Solar Pertama &amp; Satu-Satunya di Thailand",
    innovation_body:     "Dengan kerjasama Jabatan Pembangunan Tenaga Alternatif dan Pemuliharaan Tenaga Thailand serta Jabatan Fizik Universiti Silpakorn, kami mempelopori sistem pengeringan kubah parabolik solar — bebas asap, bebas serangga, bebas pencemaran, dikuasakan sepenuhnya oleh tenaga bersih.",
    innovation_stat1_num:   "2018",
    innovation_stat1_label: "Ditubuhkan",
    innovation_stat2_num:   "#1",
    innovation_stat2_label: "Pertama di Thailand",
    innovation_stat3_num:   "100%",
    innovation_stat3_label: "Tenaga Solar",
    placeholder_dome:    "Teknologi Kubah Solar",
    products_eyebrow:    "Produk",
    products_heading:    "Rangkaian Mi Kering Kami",
    products_sub:        "Tersedia untuk runcit, borong, OEM, dan eksport",
    prod1_tag:           "Runcit &amp; Borong",
    prod1_name:          "Vermicelli Kering Klasik",
    prod1_desc:          "Vermicelli beras Thai tradisional, dikeringkan dengan solar untuk rasa bersih dan jangka hayat yang panjang.",
    prod1_img_label:     "Gambar Produk",
    prod2_tag:           "Gred Eksport",
    prod2_name:          "Benang Halus Premium",
    prod2_desc:          "Vermicelli benang halus yang halus untuk pembungkusan premium dan pasaran antarabangsa.",
    prod2_img_label:     "Gambar Produk",
    prod3_tag:           "Pesanan Khas",
    prod3_name:          "OEM &amp; Label Peribadi",
    prod3_desc:          "Kami menghasilkan mengikut spesifikasi jenama anda. Sokongan penuh untuk pengedar dan pemilik jenama.",
    prod3_img_label:     "Pesanan Khas",
    prod_cta:            "Ketahui Lebih &#8594;",
    why_eyebrow:         "Kenapa Mr.Bob",
    why_heading:         "Kualiti Yang Boleh Dipercayai",
    why1_title:          "Inovasi Pengeringan Solar",
    why1_desc:           "Teknologi kubah parabolik kami memastikan pengeluaran bebas asap dan bebas pencemaran.",
    why2_title:          "Pensijilan Lengkap",
    why2_desc:           "Disijilkan FDA, GMP, Halal dan diiktiraf OTOP — dipercayai di pasaran tempatan dan antarabangsa.",
    why3_title:          "Keupayaan Eksport",
    why3_desc:           "Kami memenuhi standard keselamatan makanan antarabangsa dengan pengalaman melayani pembeli global.",
    why4_title:          "Pertumbuhan Bersama",
    why4_desc:           "Dari pengeluaran OEM hingga pembinaan jenama — kami berkembang bersama rakan kongsi.",
    partners_title:      "Disokong Oleh",
    footer_tagline:      "Mi kering premium dari jantung Kalasin, Thailand.",
    footer_nav:          "Navigasi",
    footer_contact_title:"Hubungi",
    footer_company:      "VPP Thai Dried Vermicelli Co., Ltd.",
    footer_address:      "247/1 Moo 2, Samoedej, Kalasin 46150, Thailand",
    footer_phone:        "081 262 3273",
    footer_line:         "mrbobvpp",
    footer_copyright:    "&copy; 2024 VPP Thai Dried Vermicelli Co., Ltd. Hak cipta terpelihara."
  }
};

// ===========================
// LANGUAGE SWITCHER
// ===========================
let currentLang = 'en';

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;

  document.documentElement.lang = lang;
  document.body.className = 'lang-' + lang;

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) {
      el.innerHTML = i18n[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  try { localStorage.setItem('mrbobnoodle_lang', lang); } catch(e) {}
}

function initLanguage() {
  var saved = 'en';
  try { saved = localStorage.getItem('mrbobnoodle_lang') || 'en'; } catch(e) {}
  if (!i18n[saved]) saved = 'en';
  setLanguage(saved);
}

// ===========================
// MOBILE NAV
// ===========================
function initMobileNav() {
  var toggle   = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');

  toggle.addEventListener('click', function() {
    var open = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  navLinks.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===========================
// SCROLL EFFECTS
// ===========================
function initScrollEffects() {
  var navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(function(el) {
    observer.observe(el);
  });
}

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', function() {
  initLanguage();
  initMobileNav();
  initScrollEffects();

  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      setLanguage(btn.dataset.lang);
    });
  });
});
