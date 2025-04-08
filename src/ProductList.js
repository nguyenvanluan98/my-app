import React, { useState } from "react";
import { gsap } from "gsap";
import "./Content.css"; // Custom CSS for styling


function ProductList() {
  const [likedProducts, setLikedProducts] = useState([]); // Lưu danh sách sản phẩm đã thích
  const [cartCount, setCartCount] = useState(0); // Số lượng sản phẩm trong giỏ hàng
  const [showNotification, setShowNotification] = useState(false); // Hiển thị thông báo

  const handleLike = (id) => {
    if (!likedProducts.includes(id)) {
      setLikedProducts([...likedProducts, id]); // Thêm sản phẩm vào danh sách đã thích
      setShowNotification(true); // Hiển thị thông báo

      // Ẩn thông báo sau 3 giây
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  const handleAddToCart = (id, event) => {
    setCartCount(cartCount + 1); // Tăng số lượng sản phẩm trong giỏ hàng
    setShowNotification(true); // Hiển thị thông báo

    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    // Lấy vị trí của sản phẩm
    const productImage = event.target.closest(".product-card").querySelector(".main-image");
    const cartIcon = document.querySelector(".cart-icon");

    if (productImage && cartIcon) {
      const productRect = productImage.getBoundingClientRect();
      const cartRect = cartIcon.getBoundingClientRect();

      // Tạo hiệu ứng bay từ sản phẩm đến giỏ hàng
      const flyingImage = productImage.cloneNode(true);
      flyingImage.style.position = "absolute";
      flyingImage.style.top = `${productRect.top}px`;
      flyingImage.style.left = `${productRect.left}px`;
      flyingImage.style.width = `${productRect.width}px`;
      flyingImage.style.height = `${productRect.height}px`;
      flyingImage.style.zIndex = 1000;
      document.body.appendChild(flyingImage);

      gsap.to(flyingImage, {
        duration: 1,
        top: cartRect.top,
        left: cartRect.left,
        width: "30px",
        height: "30px",
        opacity: 0.5,
        onComplete: () => {
          document.body.removeChild(flyingImage);
        },
      });
    }
  };

  const products = [
    {
      id: 1,
      name: "Áo croptop tập gym yoga",
      price: "290.000đ",
      oldPrice: "350.000đ",
      discount: "-18%",
      image: "https://picsum.photos/300/400?random=1",
      hoverImage: "https://picsum.photos/300/400?random=5",
      tag: "FREESHIP",
    },
    {
      id: 2,
      name: "Quần legging lửng tập yoga",
      price: "375.000đ",
      oldPrice: "400.000đ",
      discount: "-7%",
      image: "https://picsum.photos/300/400?random=2",
      hoverImage: "https://picsum.photos/300/400?random=6",
      tag: "HOT DEAL",
    },
    {
      id: 3,
      name: "Áo tập croptop có tay",
      price: "295.000đ",
      oldPrice: " ",
      discount: " ",
      image: "https://picsum.photos/300/400?random=3",
      hoverImage: "https://picsum.photos/300/400?random=7",
      tag: "FREESHIP",
    },
    {
      id: 4,
      name: "Quần legging trơn dáng lửng",
      price: "350.000đ",
      oldPrice: " ",
      discount: " ",
      image: "https://picsum.photos/300/400?random=4",
      hoverImage: "https://picsum.photos/300/400?random=8",
    },
    {
      id: 5,
      name: "Áo hoodie mùa đông",
      price: "450.000đ",
      oldPrice: "500.000đ",
      discount: "-10%",
      image: "https://picsum.photos/300/400?random=9",
      hoverImage: "https://picsum.photos/300/400?random=13",
      tag: "NEW",
    },
    {
      id: 6,
      name: "Quần short thể thao",
      price: "200.000đ",
      oldPrice: "250.000đ",
      discount: "-20%",
      image: "https://picsum.photos/300/400?random=10",
      hoverImage: "https://picsum.photos/300/400?random=14",
      tag: "HOT",
    },
    {
      id: 7,
      name: "Áo sơ mi công sở",
      price: "320.000đ",
      oldPrice: "400.000đ",
      discount: "-20%",
      image: "https://picsum.photos/300/400?random=11",
      hoverImage: "https://picsum.photos/300/400?random=15",
      tag: "SALE",
    },
    {
      id: 8,
      name: "Quần jeans thời trang",
      price: "500.000đ",
      oldPrice: "600.000đ",
      discount: "-17%",
      image: "https://picsum.photos/300/400?random=12",
      hoverImage: "https://picsum.photos/300/400?random=16",
      tag: "TREND",
    },
    {
      id: 9,
      name: "Áo thun basic",
      price: "150.000đ",
      oldPrice: "200.000đ",
      discount: "-25%",
      image: "https://picsum.photos/300/400?random=17",
      hoverImage: "https://picsum.photos/300/400?random=21",
      tag: "FREESHIP",
    },
    {
      id: 10,
      name: "Quần jogger nam",
      price: "400.000đ",
      oldPrice: "450.000đ",
      discount: "-11%",
      image: "https://picsum.photos/300/400?random=18",
      hoverImage: "https://picsum.photos/300/400?random=22",
      tag: "HOT",
    },
    {
      id: 11,
      name: "Áo khoác gió",
      price: "600.000đ",
      oldPrice: "700.000đ",
      discount: "-14%",
      image: "https://picsum.photos/300/400?random=19",
      hoverImage: "https://picsum.photos/300/400?random=23",
      tag: "NEW",
    },
    {
      id: 12,
      name: "Quần tây công sở",
      price: "550.000đ",
      oldPrice: "650.000đ",
      discount: "-15%",
      image: "https://picsum.photos/300/400?random=20",
      hoverImage: "https://picsum.photos/300/400?random=24",
      tag: "SALE",
    },
    {
      id: 13,
      name: "Áo len mùa đông",
      price: "700.000đ",
      oldPrice: "800.000đ",
      discount: "-12%",
      image: "https://picsum.photos/300/400?random=25",
      hoverImage: "https://picsum.photos/300/400?random=29",
      tag: "TREND",
    },
    {
      id: 14,
      name: "Quần thể thao nữ",
      price: "300.000đ",
      oldPrice: "350.000đ",
      discount: "-14%",
      image: "https://picsum.photos/300/400?random=26",
      hoverImage: "https://picsum.photos/300/400?random=30",
      tag: "HOT",
    },
    {
      id: 15,
      name: "Áo khoác dài nữ",
      price: "900.000đ",
      oldPrice: "1.000.000đ",
      discount: "-10%",
      image: "https://picsum.photos/300/400?random=27",
      hoverImage: "https://picsum.photos/300/400?random=31",
      tag: "TREND",
    },
  ];

  return (
    <div>
      {/* Thông báo */}
      {showNotification && (
        <div className="notification">Đã thêm vào giỏ hàng</div>
      )}

      {/* Icon giỏ hàng trên header */}
      <div className="cart-header">
        <div className="cart-icon">🛒</div>
        <span className="cart-count">{cartCount}</span>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
                className="main-image"
              />
              <img
                src={product.hoverImage}
                alt={product.name}
                className="hover-image"
              />
              <div className="product-icons">
                <div
                  className={`icon-btn ${
                    likedProducts.includes(product.id) ? "liked" : ""
                  }`}
                  onClick={() => handleLike(product.id)}
                >
                  ❤
                </div>
                <div
                  className="icon-btn cart-btn"
                  onClick={(event) => handleAddToCart(product.id, event)}
                >
                  🛒
                </div>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">
                {product.price}{" "}
                <span className="old-price">{product.oldPrice}</span>
              </p>
              {product.discount && (
                <span className="discount">{product.discount}</span>
              )}
              {product.tag && <span className="product-tag">{product.tag}</span>}
            </div>
            <div className="product-colors">
              <div className="color-circle" title="Màu"></div>
              <div className="color-circle" title="Màu"></div>
              <div
                className="color-circle more-colors"
                title="Xem thêm màu khác"
              >
                +
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
