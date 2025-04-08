import React from "react";
import "./Content.css";
import ProductList from "./ProductList";
import Coupons from "./Coupons"; // Import Coupons component
import ResponsiveImage from "./ResponsiveImage"; // Import ResponsiveImage component
import { gsap } from "gsap"; // Import GSAP for animations
import { useState } from "react"; // Import useState for state management

function Content() {
  return (
    <div className="content">
      {/* Ảnh lớn dưới header */}
      <div className="banner">
        <ResponsiveImage />
      </div>

      {/* Thêm mã giảm giá */}
      <div className="coupons-section">
        <Coupons />
      </div>

      {/* Danh sách sản phẩm */}
      <ProductList />
    </div>
  );
}

export default Content;
