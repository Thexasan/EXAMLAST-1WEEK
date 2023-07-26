import React from "react";
import stroy from '../../assets/Group 31.png'
import group from '../../assets/Group 30.png'
import group2 from '../../assets/Group 24.png'
import group3 from '../../assets/Group 25.png'
import group4 from '../../assets/Group 20.png'
import Swipper from "../../components/Swipper/Swipper";
import { useTranslation } from "react-i18next";


const Main = () => {

  
const { t, i18n } = useTranslation();
const changeLanguage = (language) => {
  i18n.changeLanguage(language);
};


  return (
    <div>
      <section className="max-w-[100%] picture">
        <div className="container">
          <div data-aos="zoom-in-down" className="xl:w-[70%] py-[75px] xl:py-[150px] xl:pl-[280px] text-center xl:text-start items-center">
            <h1 className="text-[36px] md:text-[60px] text-white  font-[800]">
              <span className="text-[#D74C20]"> {t("sec")} </span>
              {t("sec2")}
            </h1>
            <p className="text-[20px] md:text-[24px] py-[25px] text-[#F3F3F3] font-[400]">
              {t("year")}
            </p>
            <h1 className="text-[white] m-auto xl:m-0 w-fit border-b ">{t("more")}</h1>
          </div>
        </div>
      </section>

      <section className="max-w-[100%]">
        <div data-aos="zoom-out-down" className="container  bg-[#0D4373] p-5 md:p-10">
          <div className="flex md:flex-row flex-col text-center md:text-start justify-between">
            <div>
              <h1 className="text-[18px] text-[#FFF] font-[400]">{t("btn2")}</h1>
            </div>
            <div className="py-[10px] md:p-0">
              <button className="text-[18px] font-[600] text-[#D74C20] md:border-l md:border-[#D74C20] pl-7">{t("btn")} &gt;&gt;</button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[80px]">
        <div className="container">
          <div className="flex md:flex-row flex-col justify-between gap-[30px]">
            <div data-aos="zoom-in-right">
              <img src={stroy} alt="" />
            </div>
            <div data-aos="zoom-in-left">
              <img src={group} alt="" />
            </div>
          </div>
          <div className="mt-[20px] flex md:flex-row flex-col justify-between gap-[30px]">
            <div data-aos="zoom-in-right">
              <img src={group2} alt="" />
            </div>
              <div data-aos="zoom-out">
              <img src={group3} alt="" />
            </div>
              <div data-aos="zoom-in-left" >
              <img src={group4} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] picture2 mt-[100px]">
        <div className="container">
          <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="500"
     className="flex justify-center items-center text-center py-[100px] lg:py-[200px]">
            <h1 className="text-[36px] lg:text-[60px] text-[#FFF] font-[800]" ><span className="text-[#D74C20]">{t("btn4")} </span>
{t("btn3")}</h1>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container">
          <div className="flex xl:flex-row flex-col  gap-[33px]">
            <div data-aos="fade-left" className="xl:w-[30%]   border-r-[3px] border-[#0D4373]">
              <h1 className="sm:text-[18px] text-end pr-[10px]  py-[20px] bg-[#0D4373] pl-[200px] font-[600] text-[#FFF]">{t("who")}</h1>
              <h1 className="sm:text-[18px] text-end pr-[10px] py-[20px] bg-[#F4F4F4] pl-[200px] font-[600] text-[#333333] my-[7px]">{t("qwer")}</h1>
              <h1 className="sm:text-[18px] text-end pr-[10px] py-[20px] bg-[#F4F4F4] pl-[200px] font-[600] text-[#333333]">{t("we")}</h1>
            </div>
            <div data-aos="fade-right" className="xl:w-[70%]">
              <div>
              <h1 className="text-[18px] font-[600] text-[#FFF] dark:text-[#333333]">SVAI.BY</h1>
              <p className="text-[16px] font-[400]   text-[#868686]">Стабильно и уверенно развивающаяся группа компаний по устройству свайных фундаментов</p>
              </div>
              <div>
              <h1 className="text-[18px] font-[600] text-[#FFF] dark:text-[#333333]">Команда</h1>
              <p className="text-[16px] font-[400] text-[#868686]">Наши сотрудники – это наша главная ценность. Мы всегда поддерживаем своих коллег в карьерном росте, создавая позитивную атмосферу в компании.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container">
          <div>
            <Swipper/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
