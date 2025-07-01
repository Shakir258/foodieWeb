import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";



const Review = () => {
  
    let review = [
      "This platform exceeded my expectations The design is clean and modern, which made navigation super easy. I especially loved how everything was well organized — it saved me so much time. I had a small query and the customer support responded quickly and politely. Overall, a great experience that I will definitely recommend to friends and colleagues",
      "I have been using this service for a few weeks now and I am genuinely impressed The features are powerful yet user-friendly. Everything runs smoothly and there is clearly a lot of effort put into the overall quality. It is rare to find a tool that combines functionality with such a nice design. Kudos to the team behind this — you have gained a loyal user",
      "Absolutely love the simplicity and functionality of this service From the moment I signed up everything felt seamless. It worked exactly as promised with no bugs or slowdowns. What stood out to me was how effortlessly I could complete my tasks. I have tried similar platforms before but this one just felt more polished and reliable"
    ]
  
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Sophia Azura" review={review[0]}/>
        <ReviewCard img={img2} name="John Deo" review={review[1]}/>
        <ReviewCard img={img3} name="Victoria Zoe" review={review[2]}/>
      </div>
    </div>
  );
};

export default Review;
