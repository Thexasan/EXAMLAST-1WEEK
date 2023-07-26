import React from "react";
import img5 from "../../assets/image 5.jpg";
import check from "../../assets/check.svg";
import chel2 from "../../assets/Group 29.png";
import img6 from '../../assets/image 5.png'

const Usluga = () => {
  return (
    <>
      <section className="max-w-[100%] my-[10px]">
        <div data-aos="fade-up"
     data-aos-duration="3000" className="container">
          <div>
            <h1 className="text-[14px] font-[400] text-[#FFF] dark:text-[#333333]">
              Главная &gt; Услуги
            </h1>
            <h1 className="text-[#0D4373] text-[24px] font-[600] py-[20px]">
              Услуги
            </h1>
          </div>

          <div className="flex xl:flex-row flex-col items-start justify-between gap-[30px]">
            <div className="xl:w-[70%]">
              <div>
                <h1 className="text-[18px] text-[#FFF] dark:text-[#333333] py-[20px] font-[700]">
                  Основная информация
                </h1>
                <p className="text-[16px] text-[#868686] font-[400]">
                  Забивка железобетонных свай – один из самых быстрых, надежных
                  и недорогих способов устройства свайных фундаментов. Наша
                  группа компаний объединяет колоссальный опыт, компетенции, что
                  в сочетании с техникой лучшего в мире производителя техники
                  для забивки свай JUNTTAN, позволяют нам быть лидерами рынка
                  Республики Беларусь в этом сегменте. Мы владеем пятью
                  сваебойными установками Junttan PM20 с гидравлическими
                  молотами с весом ударной части 4-6 тонн. Мощности компании
                  позволяют забивать до 300 свай ежедневно. Длина цельных
                  забиваемых свай, шпунта, труб – до 18 метров.
                </p>
              </div>
              <div>
                <h1 className="text-[18px] text-[#FFF] dark:text-[#333333] py-[20px] font-[700]">
                  Заголовок
                </h1>
                <p className="text-[16px] text-[#868686] font-[400]">
                  Наша группа компаний объединяет колоссальный опыт,
                  компетенции, что в сочетании с техникой лучшего в мире
                  производителя техники для забивки свай JUNTTAN, позволяют нам
                  быть лидерами рынка Республики Беларусь в этом сегменте. Мы
                  владеем пятью сваебойными установками Junttan PM20 с
                  гидравлическими молотами с весом ударной части 4-6 тонн.
                  Мощности компании позволяют забивать до 300 свай ежедневно.
                  Длина цельных забиваемых свай, шпунта, труб – до 18 метров.{" "}
                  <br />
                  <br />
                  Наша группа компаний объединяет колоссальный опыт,
                  компетенции, что в сочетании с техникой лучшего в мире
                  производителя техники для забивки свай JUNTTAN, позволяют нам
                  быть лидерами рынка Республики Беларусь в этом сегменте. Мы
                  владеем пятью сваебойными установками Junttan PM20 с
                  гидравлическими молотами с весом ударной части 4-6 тонн.
                  Мощности компании позволяют забивать до 300 свай ежедневно.
                  Длина цельных забиваемых свай, шпунта, труб – до 18 метров.
                </p>
              </div>
            </div>
            <div>
              <img className="m-auto xl:m-0" src={img5} alt="" />
              <div className="w-[75%] m-auto xl:m-0">
                <h1 className="text-[18px] text-center xl:text-start font-[700] text-[#FFF] dark:text-[#333333]">
                  Заголовок
                </h1>
                <div>
                  <h1 className="text-[16px] font-[400] text-[#868686] py-[10px] flex items-start gap-1">
                    <img src={check} alt="" /> Забивка железобетонных свай –
                    один из самых быстрых, надежных и недорогих способов
                    устройства свайных фундаментов.
                  </h1>
                  <h1 className="text-[16px] font-[400] text-[#868686] flex items-start gap-1">
                    <img src={check} alt="" /> Забивка железобетонных свай –
                    один из самых быстрых
                  </h1>
                  <h1 className="text-[16px] font-[400] text-[#868686] py-[10px] flex items-start gap-1">
                    <img src={check} alt="" /> Забивка железобетонных свай –
                    один из самых быстрых, надежных и недорогих способов
                    устройства свайных фундаментов.
                  </h1>
                  <h1 className="text-[16px] font-[400] text-[#868686] flex items-start gap-1">
                    <img src={check} alt="" /> Забивка железобетонных свай –
                    один из самых быстрых
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] my-[50px]">
        <div className="container">
            <div className="flex flex-wrap  justify-between gap-[10px]">
                <img className="m-auto " src={chel2} alt="" />
                <img className="m-auto " src={img6} alt="" />
                <img className="m-auto " src={chel2} alt="" />
            </div>
        </div>
      </section>
    </>
  );
};

export default Usluga;
