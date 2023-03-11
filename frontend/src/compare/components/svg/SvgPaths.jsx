import React, { useEffect, useRef } from "react";
import "./svg.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import MotionPathHelper from "gsap/MotionPathHelper";
// gsap.registerPlugin(MotionPathPlugin);

// import { GSDevTools } from "gsap/GSDevTools";

const SvgPaths = () => {
  const ref = useRef();
  //   const lineLength = document.getElementsByClassName("theLine");
  //   console.log(document.getEle;
  console.log(ref);
  const length = ref.current?.getTotalLength();
  console.log(length);

  gsap.registerPlugin(
    ScrollTrigger,
    // DrawSVGPlugin,
    MotionPathPlugin
    // GSDevTools
  );
  let prevdirection = 0;
  function callback() {
    let scale = gsap.quickTo(".skiIcon", "scaleX");
    console.log(this.parent.scrollTrigger.direction);
    if (this.parent.scrollTrigger.direction !== prevdirection) {
      scale(this.parent.scrollTrigger.direction === 1 ? 0.1 : -0.1);
      prevdirection = this.parent.scrollTrigger.direction;
    }
  }
  function gsapHandler() {
    gsap.set(".skiIcon", {
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 50%",
    });
    gsap.defaults({ ease: "none" });
    const pulses = gsap
      .timeline({
        defaults: {
          scale: 2,
          autoAlpha: 1,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
          immediateRender: true,
        },
      })
      .to(".ball02, .text01", {}, 0.84)
      .to(".ball03, .text02", {}, 1.36)
      .to(".ball04, .text03", {}, 1.92);

    const main = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#svg",
          scrub: true,
          start: "top center",
          end: "bottom center",
          immediateRender: true,
        },
      })
      .to(".ball01", { autoAlpha: 1, duration: 0.05 })
      .to(".skiIcon", { autoAlpha: 1, duration: 0.2 })
      .fromTo(
        ".theLine",
        {
          strokeDasharray: 1671.4647216796875,
          strokeDashoffset: 1671.4647216796875,
        },
        {
          strokeDashoffset: 0,
          duration: 4,
        },
        0
      )
      .to(
        ".skiIcon",
        {
          motionPath: {
            path: ".skiRout ",
            align: ".skiRout",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
          },
          duration: 4,
          immediateRender: true,
          callbackScope: this,
          onUpdate: callback,
          //    (thiss) => {
          //     console.log(thiss);
          // if (prevDirection !== self.direction) {
          //   // only run this when we're changing direction
          //   rotateTo(self.direction === 1 ? 0 : -180);
          //   prevDirection = self.direction;
          // }
          //   },
        },
        0
      )
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine ",
            align: ".theLine",

            alignOrigin: [0.5, 0.5],
          },
          duration: 4,
        },
        0
      )
      .to(".skiIcon", { scaleY: -0.1, duration: 0 }, 1.28)
      .to(".skiIcon", { scaleY: 0.1, duration: 0 }, 2.51)
      .to(".skiIcon", { scaleY: -0.1, duration: 0 }, 3.37)
      .add(pulses, 0);
  }
  useEffect(() => {
    gsapHandler();
  }, []);

  //   MotionPathHelper.create(".astronaut");
  //GSDevTools.create({animation:main})
  return (
    <div className="svg-anime ">
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 1200">
        {/* <path className="line01 line" d="M 10 200  600 200"></path>
        <path className="line02 line" d="M 10 400  600 400"></path>
        <path className="line03 line" d="M 10 600  600 600"></path>
        <path className="line04 line" d="M 10 800  600 800"></path>
        <path className="line05 line" d="M 10 1000  600 1000"></path>
        <text className="text01" x="30" y="190">
          2018
        </text>
        <text className="text02" x="30" y="390">
          2019
        </text>
        <text className="text03" x="30" y="590">
          2020
        </text> */}

        <path
          ref={ref}
          className="theLine"
          //   rotate={180}
          d="M -5,0
       Q 450 230 300 450 
       T 130 750
       Q 100 850 300 1000
       T 150 1200"
          fill="none"
          stroke="white"
          strokeWidth="10px"
        />
        <path
          //   ref={ref}
          className="skiRout"
          //   rotate={180}
          d="M -5 0 Q 565 261 555 382 T 104 722 Q -14 907 316.005 960.973 T 150 1200"
          fill="none"
          stroke="red"
          strokeWidth="10px"
        />
        {/* <path
          className="theLine"
          //   rotate={180}
          d="M 632 319 C 141 393 -74 521 54 776 C 302 951 390 790 511 951 C 638 1213 20.339 1040.965 67 1193 C 0 1455 835.125 1320.378 632 1563 C 517 1724 57.235 1623.348 67 1812 C 55.674 2004.272 470 1912 551 2094 C 470 2235 223 2216 -74 2343"
          fill="none"
          stroke="white"
          strokeWidth="10px"
        /> */}
        {/* <path
          className="skiRoute"
          d="M 50 200
     Q 100 250 150 220
     Q 200 190 250 210
     Q 300 230 350 200
     Q 400 170 450 180
     Q 500 190 550 220
     Q 600 250 650 200"
          fill="none"
          stroke="red"
          strokeWidth="5"
        /> */}
        {/* <path
          className="skiRoute"
          d="M 50 20
     Q 100 70 80 120
     Q 60 170 100 220
     Q 140 270 110 320
     Q 80 370 120 420
     Q 160 470 140 520
     Q 120 570 160 620"
          fill="none"
          stroke="red"
          strokeWidth="5"
        /> */}
        {/* <path
          //   className="theLine"
          d="M 50,50 C 50,50 100,100 200,100 C 300,100 350,50 400,50 C 450,50 500,100 600,100"
          fill="none"
          stroke="white"
          strokeWidth="10px"
        /> */}

        <circle className="ball ball01" r="20" cx="50" cy="100"></circle>
        {/* <circle className="ball ball02" r="20" cx="278" cy="201"></circle>
        <circle className="ball ball03" r="20" cx="327" cy="401"></circle>
        <circle className="ball ball04" r="20" cx="203" cy="601"></circle> */}
        <circle className="ball ski" r="20" cx="203" cy="601"></circle>
        <g className="skiIcon" transform="scale(0.1,0.1)">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path
                fill="#1961f0"
                // style="fill:#1961f0;"
                d="M90.167,398.871l327.764,111.225c19.521,6.451,40.578-4.152,47.03-23.673l0,0 c2.392-7.215-4.44-14.262-11.627-11.804c-7.419,2.541-15.704,2.774-23.729,0.121L101.85,363.515 c-4.887-1.611-10.147,1.033-11.757,5.921l-5.846,17.678C82.636,391.992,85.289,397.261,90.167,398.871"
              ></path>{" "}
              <g>
                {" "}
                <path
                  fill="#0d0d0d"
                  //   style="fill:#0d0d0d;"
                  d="M363.048,46.545C363.048,20.843,342.205,0,316.503,0s-46.545,20.843-46.545,46.545 s20.843,46.545,46.545,46.545S363.048,72.248,363.048,46.545"
                ></path>{" "}
                <path
                  fill="#0d0d0d"
                  //   style="fill:#0d0d0d;"
                  d="M306.505,279.155l-44.274-14.625l14.587-44.2l78.615,25.972c8.806,2.904,18.963-0.419,23.245-8.639 c5.464-10.482,0.121-22.863-10.612-26.41l-61.878-20.443l10.221-30.934c5.641-17.082-3.631-35.514-20.713-41.155l-17.687-5.846 c-17.082-5.641-35.505,3.631-41.156,20.722l-31.902,96.563c-12.214,36.985,7.857,76.865,44.833,89.079l12.595,4.161 c9.765,3.23,15.071,13.759,11.841,23.524l-15.779,45.158c-4.049,12.251,2.607,25.46,14.857,29.51l0,0 c12.26,4.049,25.479-2.616,29.519-14.885l27.359-80.607C336.592,306.599,325.998,285.597,306.505,279.155"
                ></path>{" "}
              </g>{" "}
              <g>
                {" "}
                <path
                  fill="E4E5E6"
                  //   style="fill:#E4E5E6;"
                  d="M347.539,253.006c-0.968,0-1.955-0.149-2.914-0.475L52.934,156.164 c-4.887-1.61-7.54-6.879-5.921-11.757c1.61-4.878,6.87-7.587,11.748-5.921l291.691,96.377c4.887,1.61,7.54,6.87,5.921,11.748 C355.089,250.53,351.449,253.006,347.539,253.006"
                ></path>{" "}
                <path
                  fill="#E4E5E6"
                  //   style="fill:#E4E5E6;"
                  d="M76.521,183.07c-0.968,0-1.955-0.149-2.914-0.475c-4.887-1.61-7.54-6.87-5.921-11.748 l11.683-35.356c1.61-4.887,6.879-7.596,11.748-5.921c4.887,1.61,7.54,6.87,5.921,11.757l-11.683,35.347 C84.071,180.594,80.431,183.07,76.521,183.07"
                ></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SvgPaths;
{
  /* <svg
  height="200px"
  width="200px"
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 511.986 511.986"
  xml:space="preserve"
  fill="#000000"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></g>
  <g id="SVGRepo_iconCarrier">
    {" "}
    <g>
      {" "}
      <path
        style="fill:#1961f0;"
        d="M90.167,398.871l327.764,111.225c19.521,6.451,40.578-4.152,47.03-23.673l0,0 c2.392-7.215-4.44-14.262-11.627-11.804c-7.419,2.541-15.704,2.774-23.729,0.121L101.85,363.515 c-4.887-1.611-10.147,1.033-11.757,5.921l-5.846,17.678C82.636,391.992,85.289,397.261,90.167,398.871"
      ></path>{" "}
      <g>
        {" "}
        <path
          style="fill:#0d0d0d;"
          d="M363.048,46.545C363.048,20.843,342.205,0,316.503,0s-46.545,20.843-46.545,46.545 s20.843,46.545,46.545,46.545S363.048,72.248,363.048,46.545"
        ></path>{" "}
        <path
          style="fill:#0d0d0d;"
          d="M306.505,279.155l-44.274-14.625l14.587-44.2l78.615,25.972c8.806,2.904,18.963-0.419,23.245-8.639 c5.464-10.482,0.121-22.863-10.612-26.41l-61.878-20.443l10.221-30.934c5.641-17.082-3.631-35.514-20.713-41.155l-17.687-5.846 c-17.082-5.641-35.505,3.631-41.156,20.722l-31.902,96.563c-12.214,36.985,7.857,76.865,44.833,89.079l12.595,4.161 c9.765,3.23,15.071,13.759,11.841,23.524l-15.779,45.158c-4.049,12.251,2.607,25.46,14.857,29.51l0,0 c12.26,4.049,25.479-2.616,29.519-14.885l27.359-80.607C336.592,306.599,325.998,285.597,306.505,279.155"
        ></path>{" "}
      </g>{" "}
      <g>
        {" "}
        <path
          style="fill:#E4E5E6;"
          d="M347.539,253.006c-0.968,0-1.955-0.149-2.914-0.475L52.934,156.164 c-4.887-1.61-7.54-6.879-5.921-11.757c1.61-4.878,6.87-7.587,11.748-5.921l291.691,96.377c4.887,1.61,7.54,6.87,5.921,11.748 C355.089,250.53,351.449,253.006,347.539,253.006"
        ></path>{" "}
        <path
          style="fill:#E4E5E6;"
          d="M76.521,183.07c-0.968,0-1.955-0.149-2.914-0.475c-4.887-1.61-7.54-6.87-5.921-11.748 l11.683-35.356c1.61-4.887,6.879-7.596,11.748-5.921c4.887,1.61,7.54,6.87,5.921,11.757l-11.683,35.347 C84.071,180.594,80.431,183.07,76.521,183.07"
        ></path>{" "}
      </g>{" "}
    </g>{" "}
  </g>
</svg>; */
}
