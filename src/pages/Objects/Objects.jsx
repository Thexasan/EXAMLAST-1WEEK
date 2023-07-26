import React from "react";
import dvrt from "../../assets/Group 45.png";
import { Link } from "react-router-dom";

const Objects = () => {
  return (
    <div>
      <section className="max-w-[100%] mt-[20px]">
        <div className="container">
          <div className="md:ml-[5%] ml-[2%] pb-[50px]">
            <h1 className="text-[14px] font-[400] text-[#FFF] dark:text-[#333333]">
              Главная &gt; География
            </h1>
            <h1 className="text-[#0D4373] text-[24px] font-[600] py-[20px]">
              География
            </h1>

            <div className="picture5 my-[30px]">
              <div className="flex justify-center pt-[100px]">
                <Link to={"/lmerlin"}>
                <img src={dvrt} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Objects;
