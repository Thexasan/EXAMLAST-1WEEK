import React from "react";
import row from "../../assets/long-arrow-left 1.svg";
import car from '../../assets/Rectangle 16.jpg'
import { Link } from "react-router-dom";

const Lmerlin = () => {
  return (
    <div>
      <section className="max-w-[100%] mt-[20px]">
        <div data-aos="fade-up"
     data-aos-duration="3000" className="container">
          <div className="lg:ml-[5%]">
            <h1 className="text-[14px] font-[400] text-[#FFF] dark:text-[#333333]">
              Главная &gt; Объекты &gt; Строительство торгового центра «Leroy
              Merlin»
            </h1>
            <h1 className="text-[#0D4373] text-[24px] font-[600] py-[20px]">
              Строительство торгового центра «Leroy Merlin»
            </h1>
            <Link to={"/objects"}>
              <button className="text-[18px] flex items-center gap-2 font-[400] text-[#D74C20]">
                {" "}
                <img  src={row} alt="" /> Вернуться к карте
              </button>
            </Link>

            <div className="flex lg:flex-row flex-col py-[30px] mb-[50px] gap-[30px] justify-between">
                    <img  src={car} alt="" />
                <div className="lg:w-[60%]">
                    <h1 className="text-[14px] text-[#868686] font-[400]">Первый в Беларуси магазин Leroy Merlin будет расположен в столице страны – г. Минске. Генподрядчик – Группа компаний Litana – партнер SVAI.BY в Республике Беларусь с 2012 года.</h1>
                    <div className="mt-[30px] dark:bg-[#F4F4F4] bg-[#333] border-l-[3px] border-[#0D4373] py-5 px-3">
                        <h1 className="font-[400] text-[#FFF] dark:text-[#333333]">Итоговый срок погружения 1770 железобетоных свай составил 25 календарных дней.</h1>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Lmerlin;
