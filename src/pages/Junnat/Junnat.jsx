import React from "react";
import trak from '../../assets/image 7.jpg'
import truck from '../../assets/image 5 copy.jpg'
import truck1 from '../../assets/image 5.png'

const Junnat = () => {
  return (
    <div>
      <section className="max-w-[100] mt-[20px]">
        <div className="container">
          <div>
            <h1 className="text-[14px] font-[400] text-[#333333]">
              Главная &gt; Техника &gt; Сваебойная установка Junttan PM20
            </h1>
            <h1 className="text-[#0D4373] text-[24px] font-[600] py-[20px]">
              Сваебойная установка Junttan PM20
            </h1>
          </div>

          <div className="flex lg:flex-row flex-col items-start lg:gap-[30px] 2xl:gap-0 justify-between">
            <div className="lg:w-[55%]">
              <h1 className="text-[18px] font-[700] text-[#333333]">
                Основная информация
              </h1>{" "}
              <br />
              <p>
                Сваебойная установка компании JUNTTAN - высокотехнологичное
                оборудование, предназначенное для забивки железобетонных свай,
                металлических труб, шпунта длиной до 18 метров. <br /> Пять сваебойных
                машин, оборудованные гидромолотами с ударной частью 4-6 тонн
                гарантируют лучшую производительность и качество работ. <br />
                Парк сваебойных машин нашей компании позволяет забивать более
                300 свай в смену.
              </p>{" "}
              <br />
              <h1 className="text-[18px] font-[700] text-[#333333]">
                Технические характеристики </h1>
                <div className="flex justify-between border-b border-gray-300 py-3">
                  <h1 className="text-[16px] text-[#868686] font-[400]">
                    Вес установки
                  </h1>
                  <h1 className="font-[400] text-[#333]">18м</h1>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-3">
                  <h1 className="text-[16px] text-[#868686] font-[400]">
                    Длина погружаемых свай цельных max
                  </h1>
                  <h1 className="font-[400] text-[#333]">6т</h1>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-3">
                  <h1 className="text-[16px] text-[#868686] font-[400]">
                    Вес забиваемого элемента{" "}
                  </h1>
                  <h1 className="font-[400] text-[#333]">52 тонны</h1>
                </div>
                <h1 className="text-[18px] mt-[35px] font-[700] text-[#333333]">
                Гидромолот ННК5а </h1>
                <div className="flex justify-between border-b border-gray-300 py-3">
                  <h1 className="text-[16px] text-[#868686] font-[400]">
                  Энергия удара мах
                  </h1>
                  <h1 className="font-[400] text-[#333]">59кН</h1>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-3">
                  <h1 className="text-[16px] text-[#868686] font-[400]">
                  Частота ударов в мин
                  </h1>
                  <h1 className="font-[400] text-[#333]">40-100</h1>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-3">
                  <h1 className="text-[16px] text-[#868686] font-[400]">
                  Вес ударной части
                  </h1>
                  <h1 className="font-[400] text-[#333]">5 тонн</h1>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-3">
                  <h1 className="text-[16px] text-[#868686] font-[400]">
                  Мах высота подъема ударной части
                  </h1>
                  <h1 className="font-[400] text-[#333]">1200мм</h1>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-3">
                  <h1 className="text-[16px] text-[#868686] font-[400]">
                  Сечение забиваемых свай макс
                  </h1>
                  <h1 className="font-[400] text-[#333]">400мм</h1>
                </div>
                <h1 className="text-[18px] mt-[35px] font-[700] text-[#333333]">
                Гидромолот ННК4</h1>
                <div className="flex justify-between border-b border-gray-300 py-3">
                  <h1 className="text-[16px] text-[#868686] font-[400]">
                  Энергия удара мах
                  </h1>
                  <h1 className="font-[400] text-[#333]">47кН</h1>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-3">
                  <h1 className="text-[16px] text-[#868686] font-[400]">
                  Частота ударов в мин
                  </h1>
                  <h1 className="font-[400] text-[#333]">40-100</h1>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-3">
                  <h1 className="text-[16px] text-[#868686] font-[400]">
                  Вес ударной части
                  </h1>
                  <h1 className="font-[400] text-[#333]">4 тонн</h1>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-3">
                  <h1 className="text-[16px] text-[#868686] font-[400]">
                  Мах высота подъема ударной части
                  </h1>
                  <h1 className="font-[400] text-[#333]">800мм</h1>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-3">
                  <h1 className="text-[16px] text-[#868686] font-[400]">
                  Сечение забиваемых свай макс
                  </h1>
                  <h1 className="font-[400] text-[#333]">350мм</h1>
                </div>
            </div>
            <div>
                <img className="hidden lg:block m-auto lg:m-0" src={trak} alt="" />
                <img className="lg:mt-[15px] m-auto lg:m-0" src={trak} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] my-[100px]">
        <div className="container">
            <div className="flex xl:flex-row flex-col justify-center gap-[10px] items-center">
                <img src={truck} alt="" />
                <img src={truck1} alt="" />
                <img src={truck} alt="" />
            </div>
        </div>
      </section>
    </div>
  );
};

export default Junnat;
