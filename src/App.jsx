import React, { useEffect, useState } from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Source+Sans+3:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #1c1917;
    --paper: #faf9f6;
    --warm-mid: #e8e3da;
    --warm-light: #f2efe8;
    --accent: #c0392b;
    --muted: #7a7268;
    --subtle: #b0a898;
    --dark-bg: #141210;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Source Sans 3', sans-serif;
    background: var(--paper);
    color: var(--ink);
    line-height: 1.65;
  }

  .progress-bar {
    position: fixed;
    top: 0; left: 0;
    height: 2px;
    background: var(--accent);
    z-index: 200;
    transition: width 0.1s linear;
  }

  /* NAV */
  .topbar {
    border-bottom: 1px solid var(--warm-mid);
    padding: 12px 0;
    background: var(--paper);
    position: sticky;
    top: 0;
    z-index: 50;
  }
  .topbar-inner {
    max-width: 780px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .site-name {
    font-family: 'Lora', serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--ink);
  }
  .topbar-meta {
    font-size: 12px;
    color: var(--subtle);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  /* ARTICLE */
  .article {
    max-width: 780px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* HEADER */
  .article-header {
    padding: 64px 0 48px;
    border-bottom: 1px solid var(--warm-mid);
    margin-bottom: 48px;
  }
  .article-category {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 24px;
  }
  .article-title {
    font-family: 'Lora', serif;
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 700;
    line-height: 1.12;
    letter-spacing: -0.01em;
    color: var(--ink);
    margin-bottom: 20px;
  }
  .article-deck {
    font-size: 19px;
    font-weight: 300;
    color: var(--muted);
    line-height: 1.7;
    margin-bottom: 32px;
  }
  .article-byline {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-top: 24px;
    border-top: 1px solid var(--warm-mid);
    flex-wrap: wrap;
  }
  .byline-author { font-size: 13px; font-weight: 600; color: var(--ink); }
  .byline-sep { width: 1px; height: 14px; background: var(--warm-mid); }
  .byline-date { font-size: 13px; color: var(--subtle); }
  .byline-read { font-size: 12px; color: var(--subtle); font-style: italic; }

  /* LEAD IMAGE */
  .lead-image {
    width: 100%;
    aspect-ratio: 16/8;
    background: var(--dark-bg);
    border-radius: 4px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .lead-glow {
    position: absolute;
    width: 320px; height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(192,57,43,0.18) 0%, transparent 65%);
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
  .lead-inner { text-align: center; position: relative; z-index: 1; }
  .lead-sublabel {
    font-size: 10px; font-weight: 600; letter-spacing: 0.22em;
    text-transform: uppercase; color: rgba(250,249,246,0.22);
    display: block; margin-bottom: 10px;
  }
  .lead-title {
    font-family: 'Lora', serif;
    font-size: clamp(20px, 3vw, 32px);
    font-weight: 700;
    color: rgba(250,249,246,0.5);
  }
  .lead-caption {
    font-size: 12px; color: var(--subtle);
    font-style: italic; margin-bottom: 48px; line-height: 1.6;
  }

  /* BODY */
  .article-body { font-size: 17.5px; font-weight: 400; color: #2d2926; line-height: 1.85; }
  .article-body p { margin-bottom: 26px; }

  .article-body p.dropcap::first-letter {
    font-family: 'Lora', serif;
    font-size: 68px; font-weight: 700;
    float: left; line-height: 0.82;
    margin-right: 10px; margin-top: 8px;
    color: var(--ink);
  }

  .article-body h2 {
    font-family: 'Lora', serif;
    font-size: clamp(22px, 3vw, 28px);
    font-weight: 700; color: var(--ink);
    line-height: 1.25;
    margin: 52px 0 18px;
    padding-top: 36px;
    border-top: 1px solid var(--warm-mid);
  }

  /* PULLQUOTE */
  .pullquote {
    border-left: 3px solid var(--accent);
    margin: 44px 0;
    padding: 8px 0 8px 32px;
  }
  .pullquote p {
    font-family: 'Lora', serif;
    font-size: 21px; font-weight: 600;
    color: var(--ink); line-height: 1.5;
    font-style: italic; margin-bottom: 0 !important;
  }

  /* RISK LIST */
  .risk-list {
    list-style: none;
    border: 1px solid var(--warm-mid);
    border-radius: 3px; overflow: hidden;
    margin: 24px 0 32px;
  }
  .risk-list li {
    padding: 16px 24px;
    border-bottom: 1px solid var(--warm-mid);
    font-size: 15.5px; color: #3d3a35;
    background: #fff; line-height: 1.6;
    display: grid; grid-template-columns: 22px 1fr; gap: 14px; align-items: start;
  }
  .risk-list li:last-child { border-bottom: none; }
  .risk-num { font-family: 'Lora', serif; font-size: 13px; font-weight: 700; color: var(--subtle); margin-top: 2px; }
  .risk-list li div strong { display: block; margin-bottom: 3px; font-weight: 600; font-size: 15.5px; }
  .risk-list li div span { font-size: 13.5px; color: var(--muted); font-weight: 300; }

  /* BENEFIT LIST */
  .benefit-list {
    list-style: none;
    display: flex; flex-direction: column; gap: 0;
    border: 1px solid var(--warm-mid); border-radius: 3px; overflow: hidden;
    margin: 20px 0 32px;
  }
  .benefit-list li {
    padding: 15px 24px;
    border-bottom: 1px solid var(--warm-mid);
    font-size: 15.5px; color: #2d2926;
    background: #fff; line-height: 1.6; font-weight: 400;
  }
  .benefit-list li:last-child { border-bottom: none; }

  /* GUARANTEE GRID */
  .guarantee-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px; margin: 20px 0 32px;
  }
  @media (max-width: 520px) { .guarantee-grid { grid-template-columns: 1fr; } }
  .gc {
    background: #fff; border: 1px solid var(--warm-mid);
    border-radius: 3px; padding: 18px 20px;
  }
  .gc-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--subtle); margin-bottom: 8px; }
  .gc-value { font-family: 'Lora', serif; font-size: 18px; font-weight: 700; color: var(--ink); margin-bottom: 3px; }
  .gc-note { font-size: 13px; color: var(--muted); font-weight: 300; line-height: 1.55; }

  /* VIDEO */
  .video-embed { margin: 40px 0; }
  .video-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--subtle); margin-bottom: 12px; }
  .video-block {
    aspect-ratio: 16/9; background: var(--dark-bg);
    border-radius: 3px; display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 14px;
    border: 1px solid #2a2820;
  }
  .video-play {
    width: 56px; height: 56px; border-radius: 50%;
    border: 1px solid rgba(250,249,246,0.15);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: border-color 0.2s;
  }
  .video-play:hover { border-color: rgba(250,249,246,0.4); }
  .video-play-arrow { width: 0; height: 0; border-top: 9px solid transparent; border-bottom: 9px solid transparent; border-left: 14px solid rgba(250,249,246,0.35); margin-left: 3px; }
  .video-caption-text { font-size: 13px; letter-spacing: 0.08em; color: rgba(250,249,246,0.2); text-transform: uppercase; font-weight: 500; }
  .video-sub { font-size: 12px; color: var(--subtle); font-style: italic; margin-top: 10px; line-height: 1.6; }

  /* PRICING TABLE */
  .pricing-table {
    border: 1px solid var(--warm-mid); border-radius: 3px;
    overflow: hidden; margin: 20px 0 12px;
  }
  .pricing-table-head {
    display: grid; grid-template-columns: 1fr 1fr auto; gap: 16px;
    padding: 12px 24px; background: var(--ink);
    font-size: 10px; font-weight: 700; letter-spacing: 0.18em;
    text-transform: uppercase; color: var(--subtle);
  }
  .pricing-table-row {
    display: grid; grid-template-columns: 1fr 1fr auto; gap: 16px;
    padding: 18px 24px; border-bottom: 1px solid var(--warm-mid);
    align-items: center; background: #fff; transition: background 0.15s;
  }
  .pricing-table-row:last-child { border-bottom: none; }
  .pricing-table-row:hover { background: var(--warm-light); }
  .ptr-model { font-family: 'Lora', serif; font-size: 16px; font-weight: 700; color: var(--ink); }
  .ptr-desc { font-size: 13.5px; color: var(--muted); font-weight: 300; }
  .ptr-link {
    font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--accent);
    text-decoration: none; border-bottom: 1px solid transparent;
    transition: border-color 0.15s; white-space: nowrap;
  }
  .ptr-link:hover { border-color: var(--accent); }

  /* FEATURE LIST */
  .feature-list { list-style: none; display: flex; flex-direction: column; gap: 0; margin: 20px 0 32px; }
  .feature-list li { padding: 16px 0; border-bottom: 1px solid var(--warm-mid); font-size: 16px; color: #2d2926; }
  .feature-list li:last-child { border-bottom: none; }
  .feature-list li strong { font-weight: 600; display: block; margin-bottom: 3px; }
  .feature-list li span { font-size: 14px; color: var(--muted); font-weight: 300; line-height: 1.6; }

  /* INFOBOX */
  .infobox {
    background: var(--warm-light); border: 1px solid var(--warm-mid);
    border-radius: 3px; padding: 26px 28px; margin: 36px 0;
  }
  .infobox-label { font-size: 10px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
  .infobox-body { font-size: 15.5px; color: #3d3a35; line-height: 1.75; font-weight: 400; }

  /* URGENCY BOX */
  .urgency-box {
    border: 1px solid #e8d5d3; border-radius: 3px;
    padding: 22px 26px; margin: 36px 0;
    background: #fdf5f4;
  }
  .urgency-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px; }
  .urgency-text { font-size: 15.5px; color: #3d2020; line-height: 1.7; }

  /* CTA BOX */
  .cta-box {
    background: var(--dark-bg); border-radius: 4px;
    padding: 40px 36px; margin: 52px 0 40px;
    display: grid; grid-template-columns: 1fr auto;
    gap: 28px; align-items: center;
  }
  @media (max-width: 540px) { .cta-box { grid-template-columns: 1fr; } }
  .cta-box-label { font-size: 10px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #5a5548; margin-bottom: 10px; }
  .cta-box-title { font-family: 'Lora', serif; font-size: 22px; font-weight: 700; color: var(--paper); line-height: 1.25; margin-bottom: 8px; }
  .cta-box-sub { font-size: 14px; color: #5a5548; font-weight: 300; line-height: 1.65; }
  .cta-box-btn {
    display: inline-block; background: var(--paper); color: var(--ink);
    font-size: 11px; font-weight: 700; letter-spacing: 0.16em;
    text-transform: uppercase; padding: 14px 28px; border-radius: 2px;
    text-decoration: none; white-space: nowrap; transition: background 0.2s, color 0.2s;
  }
  .cta-box-btn:hover { background: var(--accent); color: #fff; }

  /* FOOTER */
  .article-footer {
    border-top: 1px solid var(--warm-mid);
    margin-top: 72px; padding: 40px 0 64px;
  }
  .footer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
  @media (max-width: 520px) { .footer-grid { grid-template-columns: 1fr; } }
  .contact-card { background: #fff; border: 1px solid var(--warm-mid); border-radius: 3px; padding: 20px 22px; }
  .cc-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--subtle); margin-bottom: 8px; }
  .cc-value { font-family: 'Lora', serif; font-size: 20px; font-weight: 700; color: var(--ink); }
  .cc-value.phone { color: #1a56c4; }
  .footer-cta-row { text-align: center; margin-top: 24px; margin-bottom: 32px; }
  .footer-cta-btn {
    display: inline-block; background: var(--ink); color: var(--paper);
    font-size: 11px; font-weight: 700; letter-spacing: 0.16em;
    text-transform: uppercase; padding: 15px 36px; border-radius: 2px;
    text-decoration: none; transition: background 0.2s;
  }
  .footer-cta-btn:hover { background: var(--accent); }
  .article-copy { font-size: 12px; color: var(--subtle); letter-spacing: 0.1em; text-transform: uppercase; text-align: center; }

  @media (max-width: 640px) {
    .pricing-table-head, .pricing-table-row { grid-template-columns: 1fr auto; }
    .pricing-table-head span:nth-child(2), .ptr-desc { display: none; }
  }
`;

function ReadingProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setWidth(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="progress-bar" style={{ width: `${width}%` }} />;
}

export default function App() {
  return (
    <>
      <style>{styles}</style>
      <ReadingProgress />

      <header className="topbar">
        <div className="topbar-inner">
          <span className="site-name">Phone Cũ Sài Gòn</span>
          <span className="topbar-meta">Tư vấn mua máy</span>
        </div>
      </header>

      <main className="article">

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
            <span className="byline-read">6 phút đọc</span>
          </div>
        </div>

        <div className="lead-image">
          <div className="lead-glow" />
          <div className="lead-inner">
            <span className="lead-sublabel">Apple iPhone</span>
            <p className="lead-title">XS Max — Dưới 15 triệu, mượt như mới</p>
          </div>
        </div>
        <p className="lead-caption">iPhone XS Max vẫn là lựa chọn cân bằng nhất giữa hiệu năng và chi phí trong năm 2026.</p>

        <div className="article-body">

          <p className="dropcap">
            Trong khi nhiều người đang bỏ ra 20–30 triệu cho điện thoại mới, thì không ít người đã
            lựa chọn iPhone XS Max cũ như một giải pháp thông minh để tiết kiệm chi phí nhưng vẫn
            có trải nghiệm cao cấp.
          </p>

          <p>
            Nhưng vấn đề là: iPhone XS Max giá bao nhiêu là hợp lý và làm sao để không mua nhầm máy lỗi?
          </p>

          <p>
            Thực tế, thị trường iPhone XS Max cũ hiện nay rất đa dạng, nhưng cũng tiềm ẩn nhiều rủi ro
            mà người mua cần biết trước.
          </p>

          <ul className="risk-list">
            {[
              ['Máy không rõ nguồn gốc', 'Không có lý lịch rõ ràng, không biết máy đã qua tay bao nhiêu người hay từng bị khóa iCloud.'],
              ['Đã qua sửa chữa, thay linh kiện', 'Màn hình, camera hoặc main thay thế làm giảm hiệu năng và độ bền theo thời gian.'],
              ['Pin chai nhanh, hiệu năng kém', 'Pin dưới 80% khiến Apple tự động giới hạn tốc độ chip, máy chạy chậm và hao pin bất thường.'],
              ['Dễ phát sinh lỗi sau thời gian ngắn', 'Các lỗi tiềm ẩn không xuất hiện ngay khi kiểm tra, chỉ lộ ra sau vài tuần sử dụng.'],
            ].map(([title, desc], i) => (
              <li key={i}>
                <span className="risk-num">0{i+1}</span>
                <div>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <p>
            Nhiều người mua vì giá rẻ nhưng sau đó lại phải tốn thêm tiền sửa chữa, thậm chí phải
            đổi máy mới. Đây chính là lý do khiến nhiều người vẫn còn e ngại khi chọn mua iPhone XS Max.
          </p>

          <div className="video-embed">
            <p className="video-label">Video hướng dẫn</p>
            <div className="video-block">
              <div className="video-play"><div className="video-play-arrow" /></div>
              <p className="video-caption-text">Cách kiểm tra iPhone XS Max cũ trước khi mua</p>
            </div>
            <p className="video-sub">Xem video để biết cách kiểm tra nhanh một chiếc iPhone XS Max cũ, giúp bạn tránh những rủi ro không đáng có.</p>
          </div>

          <div className="pullquote">
            <p>Tin tốt là bạn hoàn toàn có thể sở hữu iPhone XS Max giá tốt mà vẫn đảm bảo chất lượng nếu chọn đúng nơi mua.</p>
          </div>

          <p>
            Các dòng iPhone XS Max cũ giá rẻ hiện nay vẫn nằm trong phân khúc dưới 15 triệu nhưng
            vẫn đáp ứng cực tốt nhu cầu hàng ngày:
          </p>

          <ul className="benefit-list">
            <li>Lướt web, xem phim mượt mà</li>
            <li>Chơi game ổn định</li>
            <li>Chụp ảnh đẹp, sắc nét</li>
          </ul>

          <p>
            Không chỉ vậy, khi mua tại cửa hàng uy tín, bạn còn được cam kết rõ ràng từng hạng mục —
            giúp giảm rủi ro gần như về 0:
          </p>

          <div className="guarantee-grid">
            {[
              { label: 'Dung lượng pin', value: 'Từ 85% trở lên', note: 'Hiệu năng ổn định mỗi ngày' },
              { label: 'Tình trạng máy', value: 'Zin, chưa sửa chữa', note: 'Không thay linh kiện phần cứng' },
              { label: 'Kiểm định', value: 'Test full chức năng', note: 'Camera, loa, cảm biến, Face ID' },
              { label: 'Bảo hành', value: '6 tháng', note: 'Hỗ trợ trực tiếp tại cửa hàng' },
              { label: 'Đổi trả', value: '1 đổi 1 trong 7 ngày', note: 'Không hài lòng đổi ngay, không hỏi' },
            ].map((g, i) => (
              <div className="gc" key={i}>
                <p className="gc-label">{g.label}</p>
                <p className="gc-value">{g.value}</p>
                <p className="gc-note">{g.note}</p>
              </div>
            ))}
          </div>

          <div className="video-embed">
            <p className="video-label">Video test thực tế</p>
            <div className="video-block">
              <div className="video-play"><div className="video-play-arrow" /></div>
              <p className="video-caption-text">Test thực tế iPhone XS Max</p>
            </div>
            <p className="video-sub">Video thực tế cho thấy iPhone XS Max vẫn hoạt động rất mượt trong các tác vụ hằng ngày.</p>
          </div>

          <h2>iPhone XS Max giá bao nhiêu?</h2>

          <p>
            Hiện nay, giá iPhone XS Max cũ sẽ phụ thuộc vào dung lượng bộ nhớ trong. Nhìn chung,
            tất cả phiên bản vẫn nằm trong tầm dưới 15 triệu — cực kỳ đáng mua so với hiệu năng
            mang lại.
          </p>

          <div className="pricing-table">
            <div className="pricing-table-head">
              <span>Phiên bản</span>
              <span>Phù hợp với</span>
              <span>Giá</span>
            </div>
            {[
              ['64GB', 'Nhu cầu cơ bản, giá thấp nhất'],
              ['128GB', 'Lựa chọn cân bằng, phổ biến nhất'],
              ['256GB', 'Lưu ảnh, video thoải mái'],
              ['512GB', 'Dung lượng lớn, giá cao hơn'],
            ].map(([cap, desc], i) => (
              <div className="pricing-table-row" key={i}>
                <span className="ptr-model">iPhone XS Max {cap}</span>
                <span className="ptr-desc">{desc}</span>
                <a className="ptr-link" href="https://www.phonecusaigon.com/products/Aiasdfhiidsafasdfasdfadsfwdiasnd" target="_blank" rel="noopener noreferrer">Xem giá</a>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '14px', color: 'var(--muted)', fontStyle: 'italic' }}>
            Giá cuối phụ thuộc vào tình trạng ngoại hình cụ thể của từng máy.
          </p>

          <h2>Vì sao iPhone XS Max vẫn đáng mua trong năm 2026?</h2>

          <p>
            Dù ra mắt đã lâu, iPhone XS Max vẫn sở hữu phần cứng đủ mạnh để đáp ứng tốt nhu cầu
            học tập, làm việc và giải trí hàng ngày.
          </p>

          <ul className="feature-list">
            {[
              ['Màn hình OLED sắc nét', 'Super Retina Display 6.5 inch với độ tương phản vô cực, màu sắc sống động ở mọi điều kiện ánh sáng.'],
              ['Camera kép chụp ảnh chuyên nghiệp', 'Portrait Mode với bokeh tự nhiên, Smart HDR, chụp đẹp từ ban ngày đến ban đêm.'],
              ['Face ID nhanh và chính xác', 'Nhận diện khuôn mặt 3D trong dưới 0.4 giây, bảo mật hơn cảm biến vân tay thông thường.'],
              ['Chip A12 Bionic vẫn rất mạnh', 'Xử lý mượt mà ứng dụng nặng, game đồ họa cao và video 4K mà không lo giật lag.'],
            ].map(([title, desc], i) => (
              <li key={i}>
                <strong>{title}</strong>
                <span>{desc}</span>
              </li>
            ))}
          </ul>

          <div className="urgency-box">
            <p className="urgency-label">Lưu ý quan trọng</p>
            <p className="urgency-text">
              Nếu bạn đang tìm một chiếc iPhone XS Max dưới 15 triệu, đây chính là thời điểm tốt nhất
              để sở hữu. Số lượng máy đẹp không nhiều — bán rất nhanh mỗi ngày.
            </p>
          </div>

          <div className="cta-box">
            <div>
              <p className="cta-box-label">Liên hệ ngay hôm nay</p>
              <p className="cta-box-title">Được tư vấn và giữ máy tốt nhất</p>
              <p className="cta-box-sub">
                Hotline: 0966 888 212<br />
                1769 QL1A, Tan Thoi Hiep, Quan 12, TP.HCM
              </p>
            </div>
            <a className="cta-box-btn" href="https://www.phonecusaigon.com/products/Aiasdfhiidsafasdfasdfadsfwdiasnd" target="_blank" rel="noopener noreferrer">
              Xem chi tiet
            </a>
          </div>

        </div>

        <div className="article-footer">
          <div className="footer-grid">
            <div className="contact-card">
              <p className="cc-label">Hotline tư vấn</p>
              <p className="cc-value phone">0966 888 212</p>
            </div>
            <div className="contact-card">
              <p className="cc-label">Địa chỉ cửa hàng</p>
              <p className="cc-value" style={{ fontSize: '15px' }}>1769 QL1A, Tân Thới Hiệp, Quận 12, TP.HCM</p>
            </div>
          </div>
          <div className="footer-cta-row">
            <a className="footer-cta-btn" href="https://www.phonecusaigon.com/products/Aiasdfhiidsafasdfasdfadsfwdiasnd" target="_blank" rel="noopener noreferrer">
              Xem chi tiết sản phẩm
            </a>
          </div>
          <p className="article-copy">© 2026 Phone Cũ Sài Gòn. All Rights Reserved.</p>
        </div>

      </main>
    </>
  );
}