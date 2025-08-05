import React, { useEffect, useRef, useState } from "react";
import BlogImg1 from "../../assets/Home/Blog/Blog Img 1.jpg";
import BlogImg2 from "../../assets/Home/Blog/Blog Img 2.jpg";
import BlogImg3 from "../../assets/Home/Blog/Blog Img 3.png";

function Blog() {
  const containerRef = useRef(null);
  const slideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalGroups, setTotalGroups] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateValues = () => {
      const sets = slideRef.current?.children.length || 0;
      setTotalGroups(Math.ceil(sets / 3));
      setContainerWidth(containerRef.current?.offsetWidth || 0);
    };

    updateValues();
    window.addEventListener("resize", updateValues);
    return () => window.removeEventListener("resize", updateValues);
  }, []);

  const handleLeftClick = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleRightClick = () => {
    if (activeIndex < totalGroups - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const translateX = -(activeIndex * (containerWidth + 15));

  return (
    <div className="section-template">
      <div className="section-template-heading">
        <h2>A Cafe with Comfort Perks</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius.
          <br className="desktop" />
          Lectus egestas nunc facilisis id.
        </p>
      </div>
      <div className="home-blog">
        <div
          className="home-blog-controls"
          onClick={handleLeftClick}
          style={{
            opacity: activeIndex === 0 ? 0.3 : 1,
            pointerEvents: activeIndex === 0 ? "none" : "auto",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_394_2270"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect
                width="24"
                height="24"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_394_2270)">
              <path
                d="M7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20L13.425 18.6L7.825 13Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
        </div>
        <div className="home-blog-container" ref={containerRef}>
          <div
            className="home-blog-slide"
            ref={slideRef}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.5s ease",
            }}
          >
            <div className="home-blog-set">
              <img src={BlogImg1} alt="Blog Image 1" />
              <div className="home-blog-content">
                <span>Inside Ameya</span>
                <section>
                  <h3>Why Staying at a Homestay Beats a Hotel Any Day</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nec neque quis massa
                    scelerisque amet. Enim orci mi nunc a sed nulla velit et
                    scelerisque. Tristique ultricies posuere sapien in.
                  </p>
                </section>
              </div>
            </div>
            <div className="home-blog-set">
              <img src={BlogImg2} alt="Blog Image 2" />
              <div className="home-blog-content">
                <span>Inside Ameya</span>
                <section>
                  <h3>Waking Up in Coorg: A Day at Ameya Homestay</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nec neque quis massa
                    scelerisque amet. Enim orci mi nunc a sed nulla velit et
                    scelerisque. Tristique ultricies posuere sapien in.
                  </p>
                </section>
              </div>
            </div>
            <div className="home-blog-set">
              <img src={BlogImg3} alt="Blog Image 3" />
              <div className="home-blog-content">
                <span>Inside Ameya</span>
                <section>
                  <h3>Experience Coorgi Culture First-Hand at Ameya</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nec neque quis massa
                    scelerisque amet. Enim orci mi nunc a sed nulla velit et
                    scelerisque. Tristique ultricies posuere sapien in.
                  </p>
                </section>
              </div>
            </div>
            <div className="home-blog-set">
              <img src={BlogImg1} alt="Blog Image 1" />
              <div className="home-blog-content">
                <span>Inside Ameya</span>
                <section>
                  <h3>Why Staying at a Homestay Beats a Hotel Any Day</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nec neque quis massa
                    scelerisque amet. Enim orci mi nunc a sed nulla velit et
                    scelerisque. Tristique ultricies posuere sapien in.
                  </p>
                </section>
              </div>
            </div>
            <div className="home-blog-set">
              <img src={BlogImg2} alt="Blog Image 2" />
              <div className="home-blog-content">
                <span>Inside Ameya</span>
                <section>
                  <h3>Waking Up in Coorg: A Day at Ameya Homestay</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nec neque quis massa
                    scelerisque amet. Enim orci mi nunc a sed nulla velit et
                    scelerisque. Tristique ultricies posuere sapien in.
                  </p>
                </section>
              </div>
            </div>
            <div className="home-blog-set">
              <img src={BlogImg3} alt="Blog Image 3" />
              <div className="home-blog-content">
                <span>Inside Ameya</span>
                <section>
                  <h3>Experience Coorgi Culture First-Hand at Ameya</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nec neque quis massa
                    scelerisque amet. Enim orci mi nunc a sed nulla velit et
                    scelerisque. Tristique ultricies posuere sapien in.
                  </p>
                </section>
              </div>
            </div>
            <div className="home-blog-set">
              <img src={BlogImg1} alt="Blog Image 1" />
              <div className="home-blog-content">
                <span>Inside Ameya</span>
                <section>
                  <h3>Why Staying at a Homestay Beats a Hotel Any Day</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nec neque quis massa
                    scelerisque amet. Enim orci mi nunc a sed nulla velit et
                    scelerisque. Tristique ultricies posuere sapien in.
                  </p>
                </section>
              </div>
            </div>
            <div className="home-blog-set">
              <img src={BlogImg2} alt="Blog Image 2" />
              <div className="home-blog-content">
                <span>Inside Ameya</span>
                <section>
                  <h3>Waking Up in Coorg: A Day at Ameya Homestay</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nec neque quis massa
                    scelerisque amet. Enim orci mi nunc a sed nulla velit et
                    scelerisque. Tristique ultricies posuere sapien in.
                  </p>
                </section>
              </div>
            </div>
            <div className="home-blog-set">
              <img src={BlogImg3} alt="Blog Image 3" />
              <div className="home-blog-content">
                <span>Inside Ameya</span>
                <section>
                  <h3>Experience Coorgi Culture First-Hand at Ameya</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nec neque quis massa
                    scelerisque amet. Enim orci mi nunc a sed nulla velit et
                    scelerisque. Tristique ultricies posuere sapien in.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div
          className="home-blog-controls"
          onClick={handleRightClick}
          style={{
            opacity: activeIndex === totalGroups - 1 ? 0.3 : 1,
            pointerEvents: activeIndex === totalGroups - 1 ? "none" : "auto",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_394_2265"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_394_2265)">
              <path
                d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Blog;
