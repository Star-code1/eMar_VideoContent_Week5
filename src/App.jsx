import { useEffect, useState } from "react";

// SEO meta tags injected into document head
function SEOMeta() {
  useEffect(() => {
    document.title = "iPhone XS Max Giá Bao Nhiêu? Dưới 15 Triệu, Mượt Như Mới";

    const setMeta = (name, content, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };

    setMeta("description", "iPhone XS Max cũ giá bao nhiêu năm 2026? Chỉ từ 8–14 triệu, máy zin, pin từ 85%, bảo hành 6 tháng, đổi 1-1 trong 7 ngày. Xem bảng giá và tư vấn miễn phí ngay!");
    setMeta("keywords", "iPhone XS Max giá bao nhiêu, iPhone XS Max cũ, iPhone XS Max dưới 15 triệu, mua iPhone XS Max");
    setMeta("og:title", "iPhone XS Max Giá Bao Nhiêu? Dưới 15 Triệu, Mượt Như Mới", true);
    setMeta("og:description", "iPhone XS Max cũ giá bao nhiêu năm 2026? Chỉ từ 8–14 triệu, máy zin, pin từ 85%, bảo hành 6 tháng. Xem bảng giá ngay!", true);
    setMeta("og:type", "article", true);

    // Schema: Article
    const schemaArticle = document.createElement("script");
    schemaArticle.type = "application/ld+json";
    schemaArticle.id = "schema-article";
    if (!document.getElementById("schema-article")) {
      schemaArticle.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Sở Hữu Ngay iPhone XS Max Dưới 15 Triệu, Mượt Như Mới",
        "description": "iPhone XS Max cũ giá bao nhiêu năm 2026? Chỉ từ 8–14 triệu, máy zin, pin từ 85%, bảo hành 6 tháng, đổi 1-1 trong 7 ngày.",
        "author": { "@type": "Organization", "name": "Phone Cũ Sài Gòn" },
        "publisher": { "@type": "Organization", "name": "Phone Cũ Sài Gòn" },
        "datePublished": "2026-03-19",
        "dateModified": "2026-03-19"
      });
      document.head.appendChild(schemaArticle);
    }

    // Schema: FAQ
    const schemaFaq = document.createElement("script");
    schemaFaq.type = "application/ld+json";
    schemaFaq.id = "schema-faq";
    if (!document.getElementById("schema-faq")) {
      schemaFaq.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "iPhone XS Max giá bao nhiêu năm 2026?", "acceptedAnswer": { "@type": "Answer", "text": "iPhone XS Max cũ hiện có giá từ 8–14 triệu đồng tùy dung lượng và tình trạng máy, tất cả đều dưới 15 triệu." } },
          { "@type": "Question", "name": "iPhone XS Max cũ có còn dùng tốt không?", "acceptedAnswer": { "@type": "Answer", "text": "Hoàn toàn tốt. Chip A12 Bionic, màn hình OLED và camera kép vẫn đáp ứng tốt nhu cầu năm 2026." } },
          { "@type": "Question", "name": "Mua iPhone XS Max cũ cần kiểm tra gì?", "acceptedAnswer": { "@type": "Answer", "text": "Cần kiểm tra: phần trăm pin (từ 85% trở lên), Face ID, màn hình, loa, iCloud đã đăng xuất, và xác nhận máy chưa thay linh kiện." } },
          { "@type": "Question", "name": "iPhone XS Max 64GB và 128GB khác nhau thế nào?", "acceptedAnswer": { "@type": "Answer", "text": "Hiệu năng như nhau, chỉ khác dung lượng lưu trữ. 128GB là lựa chọn cân bằng nhất cho đa số người dùng." } },
          { "@type": "Question", "name": "Mua iPhone XS Max cũ ở đâu uy tín tại TP.HCM?", "acceptedAnswer": { "@type": "Answer", "text": "Phone Cũ Sài Gòn tại 1769 QL1A, Tân Thới Hiệp, Quận 12 — cam kết máy zin, pin từ 85%, bảo hành 6 tháng, đổi 1-1 trong 7 ngày." } }
        ]
      });
      document.head.appendChild(schemaFaq);
    }
  }, []);
  return null;
}

function ReadingProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const s = el.scrollTop || document.body.scrollTop;
      const h = el.scrollHeight - el.clientHeight;
      setWidth(h > 0 ? (s / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div style={{ position: "fixed", top: 0, left: 0, height: "2px", background: "#c0392b", width: `${width}%`, zIndex: 200, transition: "width 0.1s linear" }} />;
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: "1px solid #e8e3da", borderRadius: 3, background: "#fff", overflow: "hidden", marginBottom: 2 }}>
      <div
        onClick={() => setOpen(!open)}
        style={{ padding: "18px 22px", fontSize: 15.5, fontWeight: 600, color: "#1c1917", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, userSelect: "none", background: open ? "#f2efe8" : "#fff" }}
      >
        <span>{q}</span>
        <span style={{ fontSize: 20, color: "#c0392b", flexShrink: 0, transform: open ? "rotate(45deg)" : "none", transition: "transform 0.2s", display: "inline-block", fontWeight: 300 }}>+</span>
      </div>
      {open && <p style={{ padding: "0 22px 18px", fontSize: 14.5, color: "#7a7268", lineHeight: 1.75, fontWeight: 300 }}>{a}</p>}
    </div>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Source+Sans+3:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #1c1917; --paper: #faf9f6; --warm-mid: #e8e3da;
    --warm-light: #f2efe8; --accent: #c0392b; --muted: #7a7268;
    --subtle: #b0a898; --dark-bg: #141210;
  }

  html { scroll-behavior: smooth; }
  body { font-family: 'Source Sans 3', sans-serif; background: var(--paper); color: var(--ink); line-height: 1.65; }

  .topbar { border-bottom: 1px solid var(--warm-mid); padding: 12px 0; background: rgba(250,249,246,0.92); backdrop-filter: blur(10px); position: sticky; top: 0; z-index: 50; }
  .topbar-inner { max-width: 780px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; }
  .site-name { font-family: 'Lora', serif; font-size: 16px; font-weight: 700; color: var(--ink); text-decoration: none; }
  .topbar-meta { font-size: 12px; color: var(--subtle); letter-spacing: 0.06em; text-transform: uppercase; }

  .breadcrumb { max-width: 780px; margin: 0 auto; padding: 14px 24px 0; font-size: 12px; color: var(--subtle); display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
  .breadcrumb a { color: var(--subtle); text-decoration: none; }
  .breadcrumb a:hover { color: var(--accent); }
  .breadcrumb-sep { color: var(--warm-mid); }
  .breadcrumb-current { color: var(--muted); }

  .article { max-width: 780px; margin: 0 auto; padding: 0 24px; }

  .article-header { padding: 40px 0 44px; border-bottom: 1px solid var(--warm-mid); margin-bottom: 44px; }
  .article-category { display: inline-block; font-size: 11px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent); margin-bottom: 20px; }

  h1.article-title { font-family: 'Lora', serif; font-size: clamp(30px, 5vw, 50px); font-weight: 700; line-height: 1.12; letter-spacing: -0.01em; color: var(--ink); margin-bottom: 18px; }

  .article-deck { font-size: 18px; font-weight: 300; color: var(--muted); line-height: 1.7; margin-bottom: 28px; }
  .article-byline { display: flex; align-items: center; gap: 14px; padding-top: 20px; border-top: 1px solid var(--warm-mid); flex-wrap: wrap; }
  .byline-author { font-size: 13px; font-weight: 600; color: var(--ink); }
  .byline-sep { width: 1px; height: 14px; background: var(--warm-mid); }
  .byline-date { font-size: 13px; color: var(--subtle); }
  .byline-read { font-size: 12px; color: var(--subtle); font-style: italic; }

  .toc { background: var(--warm-light); border: 1px solid var(--warm-mid); border-radius: 3px; padding: 22px 26px; margin-bottom: 44px; }
  .toc-label { font-size: 10px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; }
  .toc ol { list-style: decimal; padding-left: 18px; display: flex; flex-direction: column; gap: 8px; }
  .toc ol li { font-size: 14.5px; }
  .toc ol li a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .toc ol li a:hover { text-decoration: underline; }

  .lead-image { width: 100%; aspect-ratio: 16/8; background: var(--dark-bg); border-radius: 4px; margin-bottom: 12px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
  .lead-glow { position: absolute; width: 320px; height: 320px; border-radius: 50%; background: radial-gradient(circle, rgba(192,57,43,0.18) 0%, transparent 65%); top: 50%; left: 50%; transform: translate(-50%,-50%); pointer-events: none; }
  .lead-inner { text-align: center; position: relative; z-index: 1; }
  .lead-sublabel { font-size: 10px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(250,249,246,0.22); display: block; margin-bottom: 10px; }
  .lead-title-img { font-family: 'Lora', serif; font-size: clamp(18px, 3vw, 30px); font-weight: 700; color: rgba(250,249,246,0.5); }
  .lead-caption { font-size: 12px; color: var(--subtle); font-style: italic; margin-bottom: 44px; line-height: 1.6; }

  .article-body { font-size: 17px; color: #2d2926; line-height: 1.85; }
  .article-body p { margin-bottom: 24px; }
  .article-body p.dropcap::first-letter { font-family: 'Lora', serif; font-size: 66px; font-weight: 700; float: left; line-height: 0.82; margin-right: 10px; margin-top: 8px; color: var(--ink); }

  .article-body h2 { font-family: 'Lora', serif; font-size: clamp(21px, 3vw, 27px); font-weight: 700; color: var(--ink); line-height: 1.25; margin: 52px 0 16px; padding-top: 32px; border-top: 1px solid var(--warm-mid); scroll-margin-top: 80px; }
  .article-body h3 { font-family: 'Lora', serif; font-size: 19px; font-weight: 600; color: var(--ink); font-style: italic; margin: 28px 0 12px; line-height: 1.3; }

  .pullquote { border-left: 3px solid var(--accent); margin: 40px 0; padding: 8px 0 8px 28px; }
  .pullquote p { font-family: 'Lora', serif; font-size: 20px; font-weight: 600; color: var(--ink); line-height: 1.5; font-style: italic; }

  .risk-list { list-style: none; border: 1px solid var(--warm-mid); border-radius: 3px; overflow: hidden; margin: 20px 0 28px; }
  .risk-list li { padding: 15px 22px; border-bottom: 1px solid var(--warm-mid); font-size: 15px; color: #3d3a35; background: #fff; line-height: 1.6; display: grid; grid-template-columns: 22px 1fr; gap: 12px; align-items: start; }
  .risk-list li:last-child { border-bottom: none; }
  .risk-num { font-family: 'Lora', serif; font-size: 13px; font-weight: 700; color: var(--subtle); margin-top: 2px; }
  .risk-title { display: block; margin-bottom: 2px; font-weight: 600; font-size: 15px; }
  .risk-desc { font-size: 13px; color: var(--muted); font-weight: 300; }

  .plain-list { list-style: none; border: 1px solid var(--warm-mid); border-radius: 3px; overflow: hidden; margin: 16px 0 28px; }
  .plain-list li { padding: 14px 22px; border-bottom: 1px solid var(--warm-mid); font-size: 15px; color: #2d2926; background: #fff; line-height: 1.6; }
  .plain-list li:last-child { border-bottom: none; }

  .guarantee-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 16px 0 28px; }
  @media (max-width: 500px) { .guarantee-grid { grid-template-columns: 1fr; } }
  .gc { background: #fff; border: 1px solid var(--warm-mid); border-radius: 3px; padding: 16px 18px; }
  .gc-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--subtle); margin-bottom: 6px; }
  .gc-value { font-family: 'Lora', serif; font-size: 17px; font-weight: 700; color: var(--ink); margin-bottom: 3px; }
  .gc-note { font-size: 12.5px; color: var(--muted); font-weight: 300; line-height: 1.5; }

  .video-embed { margin: 36px 0; }
  .video-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--subtle); margin-bottom: 10px; }
  .video-block { aspect-ratio: 16/9; background: var(--dark-bg); border-radius: 3px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; border: 1px solid #2a2820; }
  .video-play { width: 52px; height: 52px; border-radius: 50%; border: 1px solid rgba(250,249,246,0.15); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: border-color 0.2s; }
  .video-play:hover { border-color: rgba(250,249,246,0.4); }
  .video-play-arrow { width: 0; height: 0; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-left: 13px solid rgba(250,249,246,0.35); margin-left: 3px; }
  .video-caption-text { font-size: 12px; letter-spacing: 0.08em; color: rgba(250,249,246,0.2); text-transform: uppercase; font-weight: 500; }
  .video-sub { font-size: 12px; color: var(--subtle); font-style: italic; margin-top: 8px; line-height: 1.6; }

  .pricing-table { border: 1px solid var(--warm-mid); border-radius: 3px; overflow: hidden; margin: 16px 0 10px; }
  .pricing-table-head { display: grid; grid-template-columns: 1fr 1fr auto; gap: 16px; padding: 11px 22px; background: var(--ink); font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--subtle); }
  .pricing-table-row { display: grid; grid-template-columns: 1fr 1fr auto; gap: 16px; padding: 17px 22px; border-bottom: 1px solid var(--warm-mid); align-items: center; background: #fff; transition: background 0.15s; }
  .pricing-table-row:last-child { border-bottom: none; }
  .pricing-table-row:hover { background: var(--warm-light); }
  .ptr-model { font-family: 'Lora', serif; font-size: 15.5px; font-weight: 700; color: var(--ink); }
  .ptr-desc { font-size: 13px; color: var(--muted); font-weight: 300; }
  .ptr-link { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.15s; white-space: nowrap; }
  .ptr-link:hover { border-color: var(--accent); }
  @media (max-width: 600px) {
    .pricing-table-head, .pricing-table-row { grid-template-columns: 1fr auto; }
    .pricing-table-head span:nth-child(2), .ptr-desc { display: none; }
  }

  .feature-list { list-style: none; display: flex; flex-direction: column; margin: 16px 0 28px; }
  .feature-list li { padding: 15px 0; border-bottom: 1px solid var(--warm-mid); font-size: 15.5px; color: #2d2926; }
  .feature-list li:last-child { border-bottom: none; }
  .feat-title { font-weight: 600; display: block; margin-bottom: 3px; }
  .feat-desc { font-size: 13.5px; color: var(--muted); font-weight: 300; line-height: 1.6; }

  .urgency-box { border: 1px solid #e8d5d3; border-radius: 3px; padding: 20px 24px; margin: 32px 0; background: #fdf5f4; }
  .urgency-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; }
  .urgency-text { font-size: 15px; color: #3d2020; line-height: 1.7; }

  .cta-box { background: var(--dark-bg); border-radius: 4px; padding: 36px 32px; margin: 48px 0 36px; display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: center; }
  @media (max-width: 520px) { .cta-box { grid-template-columns: 1fr; } }
  .cta-box-label { font-size: 10px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #5a5548; margin-bottom: 8px; }
  .cta-box-title { font-family: 'Lora', serif; font-size: 21px; font-weight: 700; color: var(--paper); line-height: 1.25; margin-bottom: 8px; }
  .cta-box-sub { font-size: 13.5px; color: #5a5548; font-weight: 300; line-height: 1.65; }
  .cta-box-btn { display: inline-block; background: var(--paper); color: var(--ink); font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; padding: 13px 26px; border-radius: 2px; text-decoration: none; white-space: nowrap; transition: background 0.2s, color 0.2s; }
  .cta-box-btn:hover { background: var(--accent); color: #fff; }

  .article-footer { border-top: 1px solid var(--warm-mid); margin-top: 64px; padding: 36px 0 56px; }
  .footer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; }
  @media (max-width: 500px) { .footer-grid { grid-template-columns: 1fr; } }
  .contact-card { background: #fff; border: 1px solid var(--warm-mid); border-radius: 3px; padding: 18px 20px; }
  .cc-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--subtle); margin-bottom: 6px; }
  .cc-value { font-family: 'Lora', serif; font-size: 19px; font-weight: 700; color: var(--ink); }
  .cc-phone { color: #1a56c4; }
  .footer-cta-row { text-align: center; margin-top: 22px; margin-bottom: 28px; }
  .footer-cta-btn { display: inline-block; background: var(--ink); color: var(--paper); font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; padding: 14px 34px; border-radius: 2px; text-decoration: none; transition: background 0.2s; }
  .footer-cta-btn:hover { background: var(--accent); }
  .article-copy { font-size: 12px; color: var(--subtle); letter-spacing: 0.1em; text-transform: uppercase; text-align: center; }
`;

const risks = [
  { title: "Máy không rõ nguồn gốc", desc: "Không có lý lịch rõ ràng, không biết máy đã qua tay bao nhiêu người hay từng bị khóa iCloud." },
  { title: "Đã qua sửa chữa, thay linh kiện", desc: "Màn hình, camera hoặc main thay thế làm giảm hiệu năng và độ bền lâu dài của máy." },
  { title: "Pin chai nhanh, hiệu năng kém", desc: "Pin dưới 80% khiến Apple tự động giới hạn tốc độ chip, máy chạy chậm và hao pin bất thường." },
  { title: "Dễ phát sinh lỗi sau thời gian ngắn", desc: "Các lỗi tiềm ẩn không xuất hiện ngay khi kiểm tra ban đầu, chỉ lộ ra sau vài tuần sử dụng." },
];

const guarantees = [
  { label: "Dung lượng pin", value: "Từ 85% trở lên", note: "Hiệu năng ổn định mỗi ngày, không bị Apple giới hạn chip" },
  { label: "Tình trạng máy", value: "Zin, chưa sửa chữa", note: "Không thay linh kiện phần cứng, máy nguyên bản 100%" },
  { label: "Kiểm định", value: "Test full chức năng", note: "Camera, loa, micro, cảm biến, Face ID đều được kiểm tra" },
  { label: "Bảo hành", value: "6 tháng", note: "Hỗ trợ phần cứng trực tiếp tại cửa hàng" },
  { label: "Đổi trả", value: "1 đổi 1 trong 7 ngày", note: "Không hài lòng đổi ngay, không hỏi lý do" },
];

const pricing = [
  { cap: "64GB", desc: "Nhu cầu cơ bản, giá thấp nhất" },
  { cap: "128GB", desc: "Lựa chọn cân bằng, phổ biến nhất" },
  { cap: "256GB", desc: "Lưu ảnh, video 4K thoải mái" },
  { cap: "512GB", desc: "Dung lượng lớn, công việc chuyên nghiệp" },
];

const features = [
  { title: "Màn hình OLED 6.5 inch sắc nét", desc: "Super Retina Display với độ tương phản vô cực, màu sắc sống động ở mọi điều kiện ánh sáng." },
  { title: "Camera kép chụp ảnh chuyên nghiệp", desc: "Portrait Mode với bokeh tự nhiên, Smart HDR, chụp đẹp từ ban ngày đến ban đêm." },
  { title: "Face ID nhanh và chính xác", desc: "Nhận diện khuôn mặt 3D trong dưới 0.4 giây, bảo mật cao hơn cảm biến vân tay thông thường." },
  { title: "Chip A12 Bionic vẫn rất mạnh", desc: "Xử lý mượt mà ứng dụng nặng, game đồ họa cao và video 4K mà không lo giật lag." },
];

const faqs = [
  { q: "iPhone XS Max giá bao nhiêu tiền năm 2026?", a: "Hiện nay iPhone XS Max cũ có giá dao động từ 8–14 triệu đồng tùy theo dung lượng (64GB, 128GB, 256GB, 512GB) và tình trạng ngoại hình. Tất cả phiên bản đều nằm trong tầm dưới 15 triệu đồng." },
  { q: "iPhone XS Max cũ có còn dùng tốt không?", a: "Hoàn toàn tốt. Chip A12 Bionic xử lý mượt mọi tác vụ thông thường, iOS vẫn được hỗ trợ cập nhật, màn hình OLED và camera kép vẫn đáp ứng tốt nhu cầu hàng ngày trong năm 2026." },
  { q: "Mua iPhone XS Max cũ cần kiểm tra những gì?", a: "Cần kiểm tra: phần trăm pin (từ 85% trở lên), tình trạng màn hình không có điểm chết, Face ID hoạt động bình thường, loa và micro, iCloud đã đăng xuất hoàn toàn, và xác nhận máy zin chưa thay linh kiện phần cứng." },
  { q: "iPhone XS Max 64GB và 128GB khác nhau thế nào?", a: "Về hiệu năng hoàn toàn như nhau — chỉ khác dung lượng lưu trữ. 64GB phù hợp nhu cầu cơ bản, 128GB là lựa chọn cân bằng nhất được đa số người dùng ưa thích." },
  { q: "Mua iPhone XS Max cũ ở đâu uy tín tại TP.HCM?", a: "Phone Cũ Sài Gòn tại 1769 QL1A, Tân Thới Hiệp, Quận 12 — cam kết máy zin, pin từ 85%, test full chức năng, bảo hành 6 tháng và đổi 1-1 trong 7 ngày không hỏi lý do." },
];

const PRODUCT_URL = "https://www.phonecusaigon.com/products/Aiasdfhiidsafasdfasdfadsfwdiasnd";

export default function App() {
  return (
    <>
      <style>{styles}</style>
      <SEOMeta />
      <ReadingProgress />

      {/* NAV */}
      <header className="topbar">
        <div className="topbar-inner">
          <a href="https://www.phonecusaigon.com" className="site-name">Phone Cũ Sài Gòn</a>
          <span className="topbar-meta">Tư vấn mua máy</span>
        </div>
      </header>

      {/* BREADCRUMB */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="https://www.phonecusaigon.com">Trang chủ</a>
        <span className="breadcrumb-sep">/</span>
        <a href="#">iPhone cũ</a>
        <span className="breadcrumb-sep">/</span>
        <a href="#">iPhone XS Max</a>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">iPhone XS Max giá bao nhiêu</span>
      </nav>

      <main className="article">

        {/* HEADER */}
        <div className="article-header">
          <span className="article-category">Cập nhật thị trường 2026</span>
          <h1 className="article-title">Sở hữu ngay iPhone XS Max dưới 15 triệu, mượt như mới</h1>
          <p className="article-deck">
            Bạn có tin rằng chỉ với dưới 15 triệu, bạn vẫn có thể sở hữu một chiếc iPhone XS Max
            mượt mà, sang trọng không thua gì máy mới?
          </p>
          <div className="article-byline">
            <span className="byline-author">Phone Cũ Sài Gòn</span>
            <span className="byline-sep" />
            <span className="byline-date">Tháng 3, 2026</span>
            <span className="byline-sep" />
            <span className="byline-read">7 phút đọc</span>
          </div>
        </div>

        {/* TOC */}
        <nav className="toc" aria-label="Mục lục bài viết">
          <p className="toc-label">Mục lục</p>
          <ol>
            <li><a href="#van-de">Rủi ro khi mua iPhone XS Max cũ</a></li>
            <li><a href="#kiem-tra">Cách kiểm tra trước khi mua</a></li>
            <li><a href="#cam-ket">Cam kết chất lượng tại cửa hàng</a></li>
            <li><a href="#gia">iPhone XS Max giá bao nhiêu?</a></li>
            <li><a href="#vi-sao">Vì sao vẫn đáng mua năm 2026?</a></li>
            <li><a href="#faq">Câu hỏi thường gặp (FAQ)</a></li>
          </ol>
        </nav>

        {/* LEAD IMAGE */}
        <div className="lead-image" role="img" aria-label="iPhone XS Max cũ giá tốt tại TP.HCM">
          <div className="lead-glow" />
          <div className="lead-inner">
            <span className="lead-sublabel">Apple iPhone</span>
            <p className="lead-title-img">XS Max — Dưới 15 triệu, mượt như mới</p>
          </div>
        </div>
        <p className="lead-caption">iPhone XS Max cũ vẫn là lựa chọn cân bằng nhất giữa hiệu năng và chi phí trong năm 2026.</p>

        <article className="article-body">

          <p className="dropcap">
            Trong khi nhiều người đang bỏ ra 20–30 triệu cho điện thoại mới, thì không ít người đã lựa chọn{" "}
            <strong>iPhone XS Max cũ</strong> như một giải pháp thông minh để tiết kiệm chi phí nhưng vẫn có
            trải nghiệm cao cấp.
          </p>

          <p>
            Nhưng vấn đề là: <strong>iPhone XS Max giá bao nhiêu là hợp lý</strong> và làm sao để không mua
            nhầm máy lỗi? Thực tế, thị trường <strong>iPhone XS Max cũ</strong> hiện nay rất đa dạng, nhưng
            cũng tiềm ẩn nhiều rủi ro mà người mua cần nắm rõ trước khi xuống tiền.
          </p>

          {/* SECTION 1 */}
          <h2 id="van-de">Những rủi ro cần biết khi mua iPhone XS Max cũ</h2>
          <p>Thị trường máy cũ không thiếu hàng đẹp, nhưng cũng không thiếu hàng kém chất lượng được che giấu khéo léo. Dưới đây là bốn vấn đề phổ biến nhất người mua thường gặp:</p>
          <ul className="risk-list">
            {risks.map((r, i) => (
              <li key={i}>
                <span className="risk-num">0{i + 1}</span>
                <div><span className="risk-title">{r.title}</span><span className="risk-desc">{r.desc}</span></div>
              </li>
            ))}
          </ul>
          <p>Nhiều người mua vì giá rẻ nhưng sau đó lại phải tốn thêm tiền sửa chữa, thậm chí phải đổi máy mới. Đây chính là lý do khiến nhiều người vẫn còn e ngại khi chọn mua <strong>iPhone XS Max cũ giá rẻ</strong>.</p>

          <div className="pullquote">
            <p>Tin tốt là bạn hoàn toàn có thể sở hữu iPhone XS Max giá tốt mà vẫn đảm bảo chất lượng — nếu chọn đúng nơi mua.</p>
          </div>

          {/* SECTION 2 */}
          <h2 id="kiem-tra">Video: Cách kiểm tra iPhone XS Max cũ trước khi mua</h2>
          <p>Trước khi quyết định mua bất kỳ chiếc <strong>iPhone XS Max cũ</strong> nào, bạn nên biết cách kiểm tra cơ bản để tránh mua phải máy lỗi. Các điểm quan trọng cần kiểm tra: phần trăm pin (vào Cài đặt &gt; Pin &gt; Tình trạng pin), Face ID, màn hình không có điểm chết, loa và micro, và xác nhận iCloud đã đăng xuất hoàn toàn.</p>

          <div className="video-embed">
            <p className="video-label">Video hướng dẫn</p>
            <div className="video-block">
              <div className="video-play"><div className="video-play-arrow" /></div>
              <p className="video-caption-text">Cách kiểm tra iPhone XS Max cũ trước khi mua</p>
            </div>
            <p className="video-sub">Xem video để biết cách kiểm tra nhanh một chiếc iPhone XS Max cũ, giúp bạn tránh những rủi ro không đáng có.</p>
          </div>

          <p>Các dòng <strong>iPhone XS Max cũ giá rẻ</strong> hiện nay vẫn nằm trong phân khúc dưới 15 triệu nhưng vẫn đáp ứng cực tốt nhu cầu sử dụng hàng ngày:</p>
          <ul className="plain-list">
            <li>Lướt web, xem phim mượt mà</li>
            <li>Chơi game ổn định, không giật lag</li>
            <li>Chụp ảnh đẹp, sắc nét cả ngày lẫn đêm</li>
          </ul>

          {/* SECTION 3 */}
          <h2 id="cam-ket">Cam kết chất lượng khi mua tại cửa hàng</h2>
          <p>Không chỉ đảm bảo máy chất lượng, khi mua tại cửa hàng uy tín bạn còn được cam kết rõ ràng từng hạng mục — giúp giảm rủi ro gần như về 0:</p>
          <div className="guarantee-grid">
            {guarantees.map((g, i) => (
              <div className="gc" key={i}>
                <p className="gc-label">{g.label}</p>
                <p className="gc-value">{g.value}</p>
                <p className="gc-note">{g.note}</p>
              </div>
            ))}
          </div>

          {/* SECTION 4 */}
          <h2 id="gia">iPhone XS Max giá bao nhiêu năm 2026?</h2>
          <p>Hiện nay, <strong>iPhone XS Max giá bao nhiêu</strong> sẽ phụ thuộc vào dung lượng bộ nhớ và tình trạng ngoại hình máy. Nhìn chung, tất cả phiên bản đều nằm trong tầm dưới 15 triệu đồng — cực kỳ đáng mua so với hiệu năng mang lại.</p>
          <div className="pricing-table">
            <div className="pricing-table-head">
              <span>Phiên bản</span><span>Phù hợp với</span><span>Giá</span>
            </div>
            {pricing.map((p, i) => (
              <div className="pricing-table-row" key={i}>
                <span className="ptr-model">iPhone XS Max {p.cap}</span>
                <span className="ptr-desc">{p.desc}</span>
                <a className="ptr-link" href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">Xem giá</a>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: "var(--muted)", fontStyle: "italic", marginTop: -8 }}>Giá cuối phụ thuộc vào tình trạng ngoại hình cụ thể của từng máy. Liên hệ hotline để được báo giá chính xác nhất.</p>

          {/* SECTION 5 */}
          <h2 id="vi-sao">Vì sao iPhone XS Max vẫn đáng mua trong năm 2026?</h2>
          <p>Dù ra mắt từ năm 2018, <strong>iPhone XS Max cũ</strong> vẫn sở hữu phần cứng đủ mạnh để đáp ứng tốt nhu cầu học tập, làm việc và giải trí. Apple thiết kế phần cứng với vòng đời dài, và chip A12 Bionic là minh chứng rõ nhất — vẫn đang vượt qua nhiều chip Android ra mắt năm 2023–2024 về hiệu năng đơn luồng.</p>
          <ul className="feature-list">
            {features.map((f, i) => (
              <li key={i}>
                <span className="feat-title">{f.title}</span>
                <span className="feat-desc">{f.desc}</span>
              </li>
            ))}
          </ul>

          <div className="video-embed">
            <p className="video-label">Video test thực tế</p>
            <div className="video-block">
              <div className="video-play"><div className="video-play-arrow" /></div>
              <p className="video-caption-text">Test thực tế iPhone XS Max năm 2026</p>
            </div>
            <p className="video-sub">Video thực tế cho thấy iPhone XS Max vẫn hoạt động rất mượt trong các tác vụ hằng ngày.</p>
          </div>

          {/* SECTION 6: FAQ */}
          <h2 id="faq">Câu hỏi thường gặp về iPhone XS Max</h2>
          <div style={{ marginTop: 16 }}>
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>

          <div className="urgency-box" style={{ marginTop: 32 }}>
            <p className="urgency-label">Lưu ý quan trọng</p>
            <p className="urgency-text">Nếu bạn đang tìm một chiếc <strong>iPhone XS Max dưới 15 triệu</strong>, đây chính là thời điểm tốt nhất để sở hữu. Số lượng máy đẹp không nhiều — bán rất nhanh mỗi ngày.</p>
          </div>

          <div className="cta-box">
            <div>
              <p className="cta-box-label">Liên hệ ngay hôm nay</p>
              <p className="cta-box-title">Được tư vấn và giữ máy tốt nhất</p>
              <p className="cta-box-sub">Hotline: 0966 888 212<br />1769 QL1A, Tân Thới Hiệp, Quận 12, TP.HCM</p>
            </div>
            <a className="cta-box-btn" href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">Xem chi tiết</a>
          </div>

        </article>

        {/* FOOTER */}
        <div className="article-footer">
          <div className="footer-grid">
            <div className="contact-card">
              <p className="cc-label">Hotline tư vấn</p>
              <p className={`cc-value cc-phone`}>0966 888 212</p>
            </div>
            <div className="contact-card">
              <p className="cc-label">Địa chỉ cửa hàng</p>
              <p className="cc-value" style={{ fontSize: 15 }}>1769 QL1A, Tân Thới Hiệp, Quận 12, TP.HCM</p>
            </div>
          </div>
          <div className="footer-cta-row">
            <a className="footer-cta-btn" href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">Xem chi tiết sản phẩm</a>
          </div>
          <p className="article-copy">© 2026 Phone Cũ Sài Gòn. All Rights Reserved.</p>
        </div>

      </main>
    </>
  );
}