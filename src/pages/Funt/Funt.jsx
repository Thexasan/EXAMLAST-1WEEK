import React from "react";
import recr from "../../assets/image 5 copy 2.jpg";
import rex from "../../assets/Rectangle 9.jpg";
import rexr from "../../assets/Rectangle 9 copy.jpg";
import strek from "../../assets/chevrons-right.svg";
import cheked from '../../assets/check.svg'

const Funt = () => {
  return (
    <div>
      <section className="max-w-[100%] mt-[30px]">
        <div className="container">
          <div className="ml-[1%] lg:ml-[7%] pb-[50px]">
            <h1 className="text-[14px] font-[400] text-[#FFF] dark:text-[#333333]">
              Главная &gt; Новости &gt; Выигран тендер на забивку свай в
              г.Молодечно
            </h1>
            <h1 className="text-[#0D4373] text-[24px] font-[600] py-[20px]">
              Выигран тендер на забивку свай в г.Молодечно
            </h1>

            <div className="flex lg:flex-row flex-col gap-[30px] items-center justify-between">
              <div className="lg:w-[80%]">
                <img src={recr} alt="" />
                <p className="text-[#868686] py-[20px] text-[16px] font-[400]">
                  В соответствии с протоколом заседания конкурсной комиссии ОАО
                  «ПМК-212» от 22.02.2018г. по выбору победителя переговоров на
                  выполнение свайных работ на объекте: «Многоквартирный жилой
                  дом по гептану №4 застройки в границах улиц Великий Гостинец,
                  Городокская, Тамары Дудка в микрорайоне №10 г. Молодечно», ООО
                  «БелКопроСтрой» признано победителем.
                </p>
                <div>
                    <h1 className="text-[18px] font-[700] text-[#FFF] dark:text-[#333333]">Список</h1>
                    <div>
                        <h1 className="font-[400] py-[10px] flex items-start text-[#868686]"> <img src={cheked} alt="" /> Забивка железобетонных свай – один из самых быстрых, надежных и недорогих способов устройства свайных фундаментов.</h1>
                        <h1 className="font-[400] pb-[10px] flex items-start text-[#868686]"> <img src={cheked} alt="" />Забивка железобетонных свай – один из самых быстрых </h1>
                        <h1 className="font-[400] flex items-start text-[#868686]"> <img src={cheked} alt="" /> Забивка железобетонных свай – один из самых быстрых, надежных и недорогих способов устройства свайных фундаментов.</h1>
                        <h1 className="font-[400] py-[10px]  flex items-start text-[#868686]"> <img src={cheked} alt="" />Забивка железобетонных свай – один из самых быстрых </h1>
                    </div>
                </div>
              </div>
              <div className=" lg:w-[40%] py-[30px]">
                <div>
                    <h1 className="text-[18px] font-[700] text-[#FFF] dark:text-[#333333]">Последние новости</h1>
                </div>
                <div className="py-[20px]">
                  <img src={rex} alt="" />
                  <div className="">
                    <h1 className="text-[#0D4373] font-[700] text-[18px]">
                    Выигран тендер на забивку свай в г.Молодечно
                    </h1>
                    <p className="text-[16px] font-[400] text-[#868686] py-[15px]">
                      02.10.2020
                    </p>
                    <button className="flex text-[16px] font-[400] text-[#D74C20] items-center">
                      Подробнее <img className="w-[20px]" src={strek} alt="" />
                    </button>
                  </div>
                </div>
                <div>
                  <img src={rexr} alt="" />
                  <div className="">
                    <h1 className="text-[#FFF] dark:text-[#333333] font-[700] text-[18px]">
                      Белкопрострой. 10 лет на рынке свайных фундаментов
                    </h1>
                    <p className="text-[16px] font-[400] text-[#868686] py-[15px]">
                      02.10.2020
                    </p>
                    <button className="flex text-[16px] font-[400] text-[#FFF] dark:text-[#333333] hover:text-[#D74C20] items-center">
                      Подробнее <img className="w-[20px]" src={strek} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Funt;
