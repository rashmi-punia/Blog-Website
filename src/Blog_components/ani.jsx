import Lottie from "lottie-react";
import animation_lottie from "../animation_lottie.json";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/themes/material.css";
import "tippy.js/animations/perspective.css";

import lottie from "lottie-react";

export default function MyLottieAnimation() {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row-reverse justify-center my-7 ">
        <div className="w-1/2 md:w-1/3  mx-5  h-auto">
          <Lottie loop={true} animationData={animation_lottie} />
        </div>
        <Tippy
          theme="material"
          delay={300}
          animation="perspective"
          placement="bottom"
          offset={[0, 12]}
          interactive={true}
          content={
            <div>
              <h1>hellow from my side to everyone what's up..!</h1>
            </div>
          }
        >
          <p className="text-lg text-center text-wrap  md:w-1/3 my-auto mx-11 md:mx-5">
            {" "}
            You're not alone... learn from other leaders that are serving in the
            trenches
          </p>
        </Tippy>
      </div>
    </>
  );
}
