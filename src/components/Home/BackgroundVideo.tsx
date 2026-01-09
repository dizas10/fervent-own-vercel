import React from "react";
import styles from "./hero.module.css";
import {cn} from "@/lib/utils";

const BackgroundVideo = () => {
    return (
        <div className={styles.bg}>
            <div className={(cn('relative -top-[110px] w-full', styles.videoBackgroundContainer))}>
                <video
                    autoPlay
                    loop
                    muted
                    className={styles.videoBackground}
                >
                    <source src="/assets/hero.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="absolute w-full h-screen z-0 flex flex-col items-center justify-center">
                    <div
                        className="absolute bottom-0 px-8 md:px-0 md:left-[5rem] mx-auto md:w-[45rem] md:h-[119px]
                         flex flex-col items-center justify-center mb-20">
                        <h1 className="text-white text-6xl md:text-7xl text-start font-bold mb-20 capitalize">
                            A trusted place for your multi-board needs.
                        </h1>
                    </div>
                </div>
            </div>

            {/*      <div className="  absolute w-full h-screen bg-[url('/assets/hero/hero.png')]*/}
            {/*bg-cover bg-center bg-no-repeat z-0 flex flex-col items-center justify-center">*/}
            {/*          <div*/}
            {/*              className=" absolute bottom-0 left-[5rem] mx-auto w-[45rem] h-[119px] flex flex-col items-center justify-center mb-20 ">*/}
            {/*              <h1 className="text-white text-7xl text-start font-bold mb-20 capitalize">*/}
            {/*                  A trusted place for your multi-board needs.*/}
            {/*              </h1>*/}
            {/*          </div>*/}
            {/*      </div>*/}
        </div>
    );
};

export default BackgroundVideo;
