import React from "react";

const Testimonials = ({reviews}) =>(

    <>
  
    <h1 className="font-serif font-bold p-2 text-xl">
      Testimonial
    </h1>
    
    <div className="">
    {reviews.map((person) => (
        <div>
        {person.review}
        </div>
    ))}

    </div>




</>
);


export default Testimonials;






