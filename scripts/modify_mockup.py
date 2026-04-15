import json

# Define new CSS block (v3 hero-layout)
css_new = """
    /* ============================================
       HERO SECTION (LUXURY DARK SPLIT)
       ============================================ */
    .hero-new {
      display: flex;
      height: 600px;
      max-height: 100vh;
      background: var(--brown-900, #1A0A00); /* Very dark brown */
    }
    .hero-new__content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 40px;
      padding-right: 32px;
      position: relative;
      z-index: 2;
    }
    .hero-new__img {
      width: 70%;
      flex-shrink: 0;
      position: relative;
      overflow: hidden;
    }
    .hero-new__img-inner {
      width: 100%; height: 100%;
      background: url('./assets/ảnh yến/IMG_7596.jpeg') center/cover no-repeat;
      transition: transform 0.6s ease;
    }
    .hero-new:hover .hero-new__img-inner { transform: scale(1.04); }
    
    .hero-new__img::before {
      content: '';
      position: absolute;
      left: -1px; top: 0; bottom: 0; width: 150px;
      background: linear-gradient(to left, transparent, var(--brown-900, #1A0A00));
      z-index: 1;
    }

    .hero-new__img::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.15); /* subtle dark overlay */
      z-index: 1;
    }
    
    .hero-new__label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--gold-500, #D4A843);
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .hero-new__label::after,
    .hero-new__label::before {
      content: '';
      width: 32px; height: 1px;
      background: var(--gold-500, #D4A843);
      display: inline-block;
    }
    .hero-new__title {
      font-family: var(--font-heading, 'Playfair Display', serif);
      font-size: clamp(32px, 4vw, 40px);
      font-weight: 700;
      color: #FFFFFF;
      line-height: 1.15;
      margin-bottom: 16px;
    }
    .hero-new__title em {
      font-style: italic;
      color: var(--gold-500, #D4A843);
    }
    .hero-new__slogan {
      font-family: var(--font-heading, 'Playfair Display', serif);
      font-size: 18px;
      font-style: italic;
      color: var(--gold-500, #D4A843);
      margin-bottom: 32px;
      line-height: 1.5;
    }
    .hero-new__slogan span {
      display: block;
      font-size: 0.9em;
      margin-top: 2px;
      opacity: 0.85;
    }

    .hero-new__btns { display: flex; flex-direction: column; gap: 12px; align-items: center; }
    .hero-new__btns .btn-gold {
      padding: 14px 28px;
      background: linear-gradient(135deg, var(--gold-500, #B8860B), var(--gold-400, #D4A843));
      color: #1a0f0a; 
      border-radius: 50px;
      font-size: 14px;
      font-weight: 700;
      border: none;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      width: 100%;
      text-decoration: none;
    }
    .hero-new__btns .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(184,134,11,0.4); }
    
    .hero-new__btns .btn-outline-gold {
      padding: 14px 28px;
      background: transparent;
      color: var(--gold-400, #D4A843);
      border-radius: 50px;
      font-size: 14px;
      font-weight: 600;
      border: 2px solid var(--gold-400, #D4A843);
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      width: 100%;
      text-decoration: none;
    }
    .hero-new__btns .btn-outline-gold:hover { background: var(--gold-400, #D4A843); color: #1a0f0a; }

    .hero-new__stats {
      display: flex;
      gap: 20px;
      justify-content: center;
      margin-top: 40px;
      padding-top: 32px;
      border-top: 1px solid rgba(212,168,67,0.25);
      width: 100%;
    }
    .hero-new__stat-mini-num {
      font-family: var(--font-heading, 'Playfair Display', serif);
      font-size: 24px;
      font-weight: 700;
      color: #FFFFFF;
      display: block;
      margin-bottom: 4px;
    }
    .hero-new__stat-mini-lbl {
      font-size: 11px;
      color: var(--gold-400, #D4A843);
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-weight: 600;
    }

    @media (max-width: 900px) {
      .hero-new { flex-direction: column-reverse; height: auto; }
      .hero-new__img { width: 100%; height: 350px; }
      .hero-new__img::before {
        left: 0; right: 0; top: -1px; bottom: auto; width: 100%; height: 80px;
        background: linear-gradient(to bottom, var(--brown-900, #1A0A00), transparent);
      }
      .hero-new__content { padding: 40px 24px; }
      .hero-new__btns { display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; width: 100%; }
      .hero-new__btns a { width: auto; }
    }
"""

# Define new HTML block
html_new = """
  <section class="hero-new" id="hero">
    <div class="hero-new__content">
      <div class="hero-new__label">Hơn 20 Năm Uy Tín</div>
      <h1 class="hero-new__title">Yến Sào<br/><em>Ngọc Thảo</em></h1>
      <div class="hero-new__slogan">
        Thành Ý Gửi Trao
        <span>— Tâm Giao Nhân Khắp</span>
      </div>
      
      <div class="hero-new__btns">
        <a href="#products" class="btn-gold">Xem Sản Phẩm</a>
        <a href="#contact" class="btn-outline-gold">Liên Hệ Ngay</a>
      </div>
      <div class="hero-new__stats">
        <div class="stat-mini"><span class="hero-new__stat-mini-num">20+</span><span class="hero-new__stat-mini-lbl">Năm</span></div>
        <div class="stat-mini"><span class="hero-new__stat-mini-num">100%</span><span class="hero-new__stat-mini-lbl">Tự nhiên</span></div>
        <div class="stat-mini"><span class="hero-new__stat-mini-num">1000+</span><span class="hero-new__stat-mini-lbl">Khách hàng</span></div>
      </div>
    </div>
    <div class="hero-new__img">
      <div class="hero-new__img-inner"></div>
    </div>
  </section>
"""

file_path = "c:/VanMinh/side-project/LP-yen-sao/mockup.html"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

css_start = -1
css_end = -1
html_start = -1
html_end = -1

for i, line in enumerate(lines):
    if "/* ============================================" in line and "HERO SECTION" in lines[i+1]:
        css_start = i
    if css_start != -1 and i > css_start and "/* ============================================" in line and "SECTION COMMON STYLES" in lines[i+1]:
        css_end = i
        break

for i, line in enumerate(lines):
    if "<!-- ========== HERO ========== -->" in line:
        html_start = i
    if html_start != -1 and i > html_start and "<!-- ========== ABOUT ========== -->" in line:
        html_end = i
        break

if css_start != -1 and css_end != -1 and html_start != -1 and html_end != -1:
    new_lines = lines[:css_start] + [line + "\\n" for line in css_new.split("\\n")] + lines[css_end:html_start+2] + [line + "\\n" for line in html_new.split("\\n")] + lines[html_end:]
    with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(new_lines)
    print("SUCCESS")
else:
    print(f"FAILED TO FIND BOUNDS: css({css_start},{css_end}) html({html_start},{html_end})")
