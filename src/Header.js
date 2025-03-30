import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import CSS riêng cho Header
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="menu-bar">
      <button className="icon-btn hamburger-btn" onClick={toggleMenu}>
        <i className="fas fa-bars"></i> {/* Icon 3 gạch */}
      </button>
      <div className="logo">
        <Link to="/">My App</Link>
      </div>
      <nav className={`main-menu ${menuOpen ? "open" : ""}`}>
        <ul className="menu">
          <li className="dropdown">
            <Link to="/products">Sản phẩm</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/products/shoes">Giầy</Link>
              </li>
              <li>
                <Link to="/products/sandals">Dép</Link>
              </li>
              <li>
                <Link to="/products/clothes">Áo quần</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/collections">Bộ sưu tập</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/collections/sports">Thể thao</Link>
              </li>
              <li>
                <Link to="/collections/summer">Mùa hè</Link>
              </li>
              <li>
                <Link to="/collections/winter">Mùa đông</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/accessories">Phụ kiện</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/accessories/watches">Đồng hồ</Link>
              </li>
              <li>
                <Link to="/accessories/necklaces">Dây chuyền</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/trends">Xu hướng</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/trends/80s">Thập niên 80</Link>
              </li>
              <li>
                <Link to="/trends/youth">Giới trẻ</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/promotions">Khuyến mãi</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/promotions/special-sale">Ngày sell đặc biệt</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
        </ul>
      </nav>
      <div className="menu-icons">
        <button className="icon-btn search-btn">
          <i className="fas fa-search"></i>
        </button>
        <button className="icon-btn login-btn">
          <i className="fas fa-user"></i>
        </button>
        <button className="icon-btn cart-btn">
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
