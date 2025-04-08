import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Thương hiệu tạo nên chất lượng</h3>
          <p>📍 Địa chỉ: 70 Lu Gia, District 11, Ho Chi Minh City</p>
          <p>📞 Số điện thoại: 0886013500</p>
          <p>📧 Email: luannv2212@gmail.com </p>
          <p>© Bản quyền thuộc về Luannv</p>
        </div>
        <div className="footer-section">
          <h3>HỖ TRỢ KHÁCH HÀNG</h3>
          <ul>
            <li>Tìm kiếm</li>
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
            <li>Cửa hàng</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>CHÍNH SÁCH</h3>
          <ul>
            <li>Điều khoản dịch vụ</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách đổi trả</li>
            <li>Câu hỏi thường gặp</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>ĐĂNG KÝ NHẬN TIN</h3>
          <p>Bạn muốn nhận khuyến mãi đặc biệt? Đăng ký ngay.</p>
          <div className="subscribe">
            <input type="email" placeholder="Nhập địa chỉ email" />
            <button>Đăng ký</button>
          </div>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-zalo"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-tiktok"></i>
          </div>
        </div>
      </div>
      {/* <div className="footer-payment">
        <img src="visa.png" alt="Visa" />
        <img src="mastercard.png" alt="MasterCard" />
        <img src="momo.png" alt="MoMo" />
        <img src="zalopay.png" alt="ZaloPay" />
        <img src="cod.png" alt="COD" />
      </div> */}
    </footer>
  );
}

export default Footer;