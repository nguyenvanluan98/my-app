import React, { useState, useEffect } from "react";
import "./Coupons.css";

function generateRandomCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

function Coupons() {
  const [coupons, setCoupons] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null); // Trạng thái để theo dõi nút đã sao chép

  useEffect(() => {
    const generatedCoupons = [
      {
        title: "MIỄN PHÍ VẬN CHUYỂN",
        description: "Freeship cho đơn hàng từ 500k",
        code: "EGAFREESHIP",
        expiry: "01/05/2025",
        expired: false,
        note: "Áp dụng cho tất cả các đơn hàng trên toàn quốc.",
      },
      {
        title: "GIẢM 50K",
        description: "Áp dụng cho đơn hàng từ 600k",
        code: "GIAM50K",
        expiry: "01/09/2023",
        expired: false,
      },
      {
        title: "GIẢM 30%",
        description: "Cho các sản phẩm trong Set đồ tập",
        code: "GIAM30",
        expiry: "01/09/2023",
        expired: true,
      },
      {
        title: "GIẢM 40%",
        description: "Cho sản phẩm thứ 4 trong đơn hàng",
        code: "GIAM40",
        expiry: "20/05/2023",
        expired: true,
      },
    ];
    setCoupons(generatedCoupons);
  }, []);

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index); // Đánh dấu nút đã sao chép
    setTimeout(() => setCopiedIndex(null), 2000); // Reset trạng thái sau 2 giây
  };

  return (
    <div className="coupons-container">
      {coupons.map((coupon, index) => (
        <div key={index} className="coupon-card">
          <div className="coupon-icon">
            <img
              src="//bizweb.dktcdn.net/thumb/medium/100/484/026/themes/953543/assets/coupon_2_img.png?1738827047187"
              alt="coupon-icon"
            />
          </div>
          <div className="coupon-content">
            <h3 className="coupon-title">{coupon.title}</h3>
            <p className="coupon-description">{coupon.description}</p>
            <div className="coupon-expiry-row">
              <p className="coupon-expiry">HSD: {coupon.expiry}</p>
              <button
                className={`coupon-button ${
                  copiedIndex === index ? "copied" : ""
                }`}
                onClick={() => handleCopy(coupon.code, index)}
                disabled={copiedIndex === index}
              >
                {copiedIndex === index ? "Đã sao chép" : "Sao chép"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Coupons;
