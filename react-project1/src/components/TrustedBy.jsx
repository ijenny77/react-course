import React from "react";
import Rakuten from '../assets/download__1_-removebg-preview.png'
import Coinbase from '../assets/download__2_-removebg-preview.png'
import Airbnb from '../assets/download__3_-removebg-preview.png'
import Google from '../assets/download__4_-removebg-preview.png'
import Microsoft from '../assets/download-removebg-preview.png'
import Zoom from '../assets/images-removebg-preview.png'
const TrustedBy = () => {
    return(
        <div className="flex flex-col dark:text-white/80">
            <h3 className="font-semibold text-center">Trusted by Leading Companies</h3>

            <div className="items-center justify-center flex-wrap gap-10 m-4">
                {
                    <div className="flex items-center gap-10 size-18 ml-[27rem]">
                        <img src={Microsoft} alt="" />
                        <img src={Zoom} alt="" />
                        <img src={Rakuten} alt="" />
                        <img src={Coinbase} alt="" />
                        <img src={Airbnb} alt="" />
                        <img src={Google} alt="" />
                    </div>
                }
            </div>
        </div>
    )
}
export default TrustedBy