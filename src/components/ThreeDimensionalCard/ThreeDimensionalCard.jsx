import React, { useEffect } from "react";
import "./ThreeDimensionalCard.css"; // Import the CSS file that contains the styles for this component
// import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS

const Card = () => {
  const angle = 20;

  const lerp = (start, end, amount) => {
    return (1 - amount) * start + amount * end;
  };

  const remap = (value, oldMax, newMax) => {
    const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
    return Math.min(Math.max(newValue, -newMax), newMax);
  };

  useEffect(() => {
    const handleMouseMove = (event, e) => {
      const rect = e.getBoundingClientRect();
      const centerX = (rect.left + rect.right) / 2;
      const centerY = (rect.top + rect.bottom) / 2;
      const posX = event.pageX - centerX;
      const posY = event.pageY - centerY;
      const x = remap(posX, rect.width / 2, angle);
      const y = remap(posY, rect.height / 2, angle);

      const updateCardStyles = () => {
        e.style.setProperty("--rotateX", `${x}deg`);
        e.style.setProperty("--rotateY", `${-y}deg`);
      };

      requestAnimationFrame(updateCardStyles);
    };

    const handleMouseOut = (e) => {
      const resetCardStyles = () => {
        e.style.setProperty("--rotateX", "0");
        e.style.setProperty("--rotateY", "0");
      };

      requestAnimationFrame(resetCardStyles);
    };

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        handleMouseMove(event, card);
      });

      card.addEventListener("mouseout", () => {
        handleMouseOut(card);
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  const cardData = [
    { imageUrl: "https://images.pexels.com/photos/2393789/pexels-photo-2393789.jpeg?auto=compress&cs=tinysrgb&w=600", content: "Top Quality Content" },
    { imageUrl: "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=600", content: "Highly Skilled Instructor" },
    { imageUrl: "https://images.pexels.com/photos/6627401/pexels-photo-6627401.jpeg?auto=compress&cs=tinysrgb&w=600", content: "World Class & Quiz" },
    { imageUrl: "https://images.pexels.com/photos/7063764/pexels-photo-7063764.jpeg?auto=compress&cs=tinysrgb&w=600", content: "Get Certified" }
  ];

  return (
    <div className="container">
      <div className="row">
        {cardData.map((data, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 " key={index}>
            <div className="card border-left-behind">
              {/* <div className="shadow" style={{ "--url": `url('${data.imageUrl}')` }}></div> */}
              <div className="image background" style={{ "--url": `url('${data.imageUrl}')` }}></div>
              <div className="image cutout" style={{ "--url": `url('${data.imageUrl}')` }}></div>
              <div className="content">
                <h2 className="card-data">{data.content}</h2>
                <p className="card-para">A small river named<br/> Duden flows <br/>by their place and supplies.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;