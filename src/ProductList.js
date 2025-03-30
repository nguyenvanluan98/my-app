import React from "react";
import "./Content.css"; // Reuse the same CSS for styling

function ProductList() {
  // Tạo danh sách 30 sản phẩm ngẫu nhiên
  const products = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: `${(Math.random() * 1000000 + 100000).toFixed(0)} VND`,
    image: `https://picsum.photos/200?random=${index + 1}`, // Ảnh ngẫu nhiên từ Picsum
  }));

  return (
    <div className="product-section">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
