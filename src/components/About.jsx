import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          We bring you the taste of tradition with a modern twist. Our dishes are prepared using fresh vegetables, handpicked spices, and authentic recipes that have been passed down through generations. Every plate we serve reflects our commitment to quality, hygiene, and rich Indian flavors.

          
        </p>
        <p>
          Whether you crave something spicy, tangy, or mild, we have something for every taste bud. We take pride in serving delicious food that not only satisfies hunger but also warms the heart. Experience the joy of flavorful meals made with love and care
        </p>
        <p>🔸 Hygienic cooking practices</p>
        <p>🔸 Fresh and high-quality ingredients</p>
        <p>🔸 Quick service with great taste</p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
