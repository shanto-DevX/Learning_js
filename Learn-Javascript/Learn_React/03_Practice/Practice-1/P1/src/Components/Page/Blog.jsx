import React from "react";
import blogImage from "../../assets/image/section-bg-1.jpg";

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <div className="blog__wrapper">
        <div className="blog__item">
          <img src={blogImage} alt="" />
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo alias
            maiores adipisci iusto asperiores repellat. Sint labore consectetur
            voluptatibus vel provident, sit quos inventore!
          </p>
        </div>
        <div className="blog__item">
          <img src={blogImage} alt="" />
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo alias
            maiores adipisci iusto asperiores repellat. Sint labore consectetur
            voluptatibus vel provident, sit quos inventore!
          </p>
        </div>
        <div className="blog__item">
          <img src={blogImage} alt="" />
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo alias
            maiores adipisci iusto asperiores repellat. Sint labore consectetur
            voluptatibus vel provident, sit quos inventore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
