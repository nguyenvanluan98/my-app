import React from "react";
import "./Content.css"; // Reuse the same CSS if needed

function ResponsiveImage() {
  return (
    <picture>
      <source
        media="(max-width: 480px)"
        srcSet="//bizweb.dktcdn.net/thumb/large/100/484/026/themes/953543/assets/slider_1.jpg?1738827047187"
      />
      <img
        className="img-fluid mx-auto"
        decoding="async"
        src="//bizweb.dktcdn.net/100/484/026/themes/953543/assets/slider_1.jpg?1738827047187"
        width="1920"
        height="775"
        alt="Slider 1"
      />
    </picture>
  );
}

export default ResponsiveImage;
