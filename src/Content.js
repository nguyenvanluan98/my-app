import React from "react";
import "./Content.css";
import ProductList from "./ProductList";
import Coupons from "./Coupons";
import ResponsiveImage from "./ResponsiveImage"; // Import ResponsiveImage component

function Content() {
  return (
    <div className="content">
      {/* Ảnh lớn dưới header */}
      <div className="banner">
        <ResponsiveImage />
      </div>

      {/* Mã giảm giá */}
      <div className="section_coupons">
        <div className="container">
          <div className="coupon-item-wrap">
            <div className="coupon_item">
              <div className="coupon_icon">
                <img src="icon1.png" alt="Coupon 1" />
              </div>
              <h3 className="coupon_title">MIỄN PHÍ VẬN CHUYỂN</h3>
              <p className="coupon_desc">Freeship cho đơn hàng từ 500k</p>
            </div>
          </div>
          <div className="coupon-item-wrap">
            <div className="coupon_item">
              <div className="coupon_icon">
                <img src="icon2.png" alt="Coupon 2" />
              </div>
              <h3 className="coupon_title">GIẢM 50K</h3>
              <p className="coupon_desc">Áp dụng cho đơn hàng từ 600k</p>
            </div>
          </div>
          {/* Thêm các mã giảm giá khác */}
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <ProductList />
    </div>
  );
}

export default Content;
