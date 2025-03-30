import React from "react";
import "./Coupons.css"; // Import CSS riêng cho Coupons

function generateRandomCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

function Coupons() {
  const coupons = [
    {
      title: "MIỄN PHÍ VẬN CHUYỂN",
      description: "Freeship cho đơn hàng từ 500k",
      code: generateRandomCode(),
      icon: "//bizweb.dktcdn.net/thumb/medium/100/484/026/themes/953543/assets/coupon_1_img.png?1738827047187",
      expiry: "30/12/2024",
    },
    {
      title: "GIẢM 50K",
      description: "Áp dụng cho đơn hàng từ 600k",
      code: generateRandomCode(),
      icon: "//bizweb.dktcdn.net/thumb/medium/100/484/026/themes/953543/assets/coupon_2_img.png?1738827047187",
      expiry: "30/12/2024",
    },
    {
      title: "GIẢM 30%",
      description: "Cho các sản phẩm trong Set đồ tập",
      code: generateRandomCode(),
      icon: "//bizweb.dktcdn.net/thumb/medium/100/484/026/themes/953543/assets/coupon_3_img.png?1738827047187",
      expiry: "01/09/2023",
    },
    {
      title: "GIẢM 40%",
      description: "Cho sản phẩm thứ 4 trong đơn hàng",
      code: generateRandomCode(),
      icon: "//bizweb.dktcdn.net/thumb/medium/100/484/026/themes/953543/assets/coupon_4_img.png?1738827047187",
      expiry: "20/05/2023",
    },
  ];

  return (
    <div className="section_coupons">
      <div className="container card border-0">
        <div className="row scroll justify-content-xl-center">
          {coupons.map((coupon, index) => (
            <div
              key={index}
              className="coupon-item-wrap py-2 col-lg-3 col-md-5 col-lg col-10"
            >
              <div className="coupon_item coupon--new-style">
                <div className="coupon_icon pos-relative embed-responsive embed-responsive-1by1">
                  <img
                    className="img-fluid"
                    src={coupon.icon}
                    alt={coupon.title}
                    width="79"
                    height="70"
                  />
                </div>
                <div className="coupon_body">
                  <div className="coupon_head coupon--has-info">
                    <h3 className="coupon_title">{coupon.title}</h3>
                    <div className="coupon_desc">{coupon.description}</div>
                  </div>
                  <div className="d-flex align-items-center flex-wrap justify-content-between">
                    <div className="coupon-code-body">
                      <div className="coupon-code-row">
                        <span>Mã:</span> {coupon.code}
                      </div>
                      <div className="coupon-code-row">
                        <span>HSD:</span> {coupon.expiry}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-main btn-sm coupon_copy mb-0"
                      onClick={() => navigator.clipboard.writeText(coupon.code)}
                    >
                      <span>Sao chép</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Coupons;
