"use client";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import React from "react";
import {Provider} from "react-redux";
import {reduxStore} from "../state/store";
import Features from "../pages/Features";
import BackgroundVideo from "../components/Home/BackgroundVideo";
import BoardsSlider from "../pages/BoardsSlider";
import MultiBoard from "../pages/MultiBoard";
import SliderProduct from "../pages/SliderProduct";
import WhatWeAre from "../pages/WhatWeAre";
import Vision from "../components/Home/Vision";
import GridStories from "../pages/GridStories";
import FirstBanner from "../pages/FirstBanner";
import AboutUs from "../pages/AboutUs";
import NewsAndEvent from "../pages/NewsAndEvent";
import BoardBanner from "../pages/BoardBanner";
import ThirdBanner from "../pages/ThirdBanner";
import Fade from "../components/re-usable/Fade";

export default function Home() {
  return (
    <Provider store={reduxStore}>
      <BackgroundVideo/>
      <Fade>
        <Features/>
      </Fade>
      <Fade>
        <BoardsSlider/>
      </Fade>
      <Fade>
        <MultiBoard/>
      </Fade>
      <Fade>
        <SliderProduct/>
      </Fade>
      <Fade>
        <WhatWeAre/>
      </Fade>
      <Fade>
        <Vision/>
      </Fade>
      <Fade>
        <GridStories/>
      </Fade>
      <Fade>
        <FirstBanner/>
      </Fade>
      <Fade>
        <AboutUs/>
      </Fade>
      <Fade>
        <NewsAndEvent/>
      </Fade>
      <Fade>
        <BoardBanner/>
      </Fade>
      <Fade>
        <ThirdBanner/>
      </Fade>
    </Provider>
  );
}
