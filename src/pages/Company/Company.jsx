import React from "react";
import rst from "../../assets/RST_9633 1.png";
import res from '../../assets/Ресурс 111.svg'
import res2 from '../../assets/Ресурс 222.svg'
import con2 from '../../assets/Ресурс 1 2.svg'
import con3 from '../../assets/Ресурс 6.svg'
import con4 from '../../assets/Ресурс 7.svg'
import control from '../../assets/quality-control 1.svg'
import Swipper2 from "../../components/Swipper2/Swipper2";
import ser from '../../assets/RST_9633 2.png'
import { Button } from "@mui/material";



const Company = () => {
  return (
    <div>
      <section className="max-w-[100%] mt-[10px]">
        <div className="container">
          <div>
            <h1 className="text-[14px] font-[400] text-[#FFF] dark:text-[#333333]">
              Главная &gt; О компании
            </h1>
            <h1 className="text-[#0D4373] text-[24px] font-[600] py-[20px]">
              О компании
            </h1>
          </div>

          <div className="flex xl:flex-row flex-col gap-[20px] py-[40px] justify-between">
            <div>
              <img src={rst} alt="" />
            </div>
            <div className="xl:w-[65%]">
              <h1 className="text-[18px] font-[700] text-[#FFF] dark:text-[#333333]">
                Основная информация
              </h1>
              <p className="text-[16px] font-[400] text-[#888] py-[20px]">
                SVAI.BY специализированная строительная группа компаний,
                основным видом деятельности которой является выполнение работ по
                устройству свайных фундаментов из забивных и буронабивных свай,
                а также предоставление в аренду специализированной сваебойной и
                буровой техники. Предприятие активно работает на рынке
                строительных услуг Беларуси с 2010г. <br />
                Располагаем всей необходимой техникой для качественного
                выполнения работ: современными сваебойными установками,
                предназначенными для забивки свай, шпунтов и труб, буровыми
                установками для устройства буронабивных и вибронабивных свай,
                лидерного бурения, а также оборудованием, необходимым для срубки
                оголовков свай. <br />
                Сегодня, имея многолетний практический опыт в области устройства
                свайных фундаментов и команду квалифицированных работников –
                более 40 специалистов в свайном деле, SVAI.BY способны выполнить
                любой объем свайных работ в оптимальные для заказчика сроки.
              </p>
              <div>
                <h1 className="font-[400] py-[20px] text-[#888] flex gap-[30px] items-start"><img src={res} alt="" />Наличие собственной строительной техники, автотранспорта и средств малой механизации позволяет компании проводить  строительно-монтажных работ и делает нас конкурентной на рынке строительных услуг.</h1>
                <h1 className="font-[400] text-[#888] flex gap-[30px] items-start"><img src={res2} alt="" />За время работы благодаря активной и рациональной кадровой политике в организации сформировалась команда профессионалов – лучших в своем деле.</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] bg-slate-800 dark:bg-[#F4F4F4] mt-[100px]">
        <div className="container">
        <div className="xl:flex hidden xl:flex-row flex-col justify-between gap-[30px] p-10 items-center ">  
          <div>
            <div className="flex  items-center gap-[30px] xl:w-[523px] h-[120px] ">
              <img src={control} alt="" />
              <h1 className="text-[18px] bg-[#333] dark:bg-[#FFF] rounded-[10px] py-[30px] px-[30px]  font-[400] text-[#FFF] dark:text-[#333333]">Имеем сертификат соответствия <span>СТБ ISO 9001-2015</span> </h1>
            </div>
            <div className="flex  items-center gap-[35px] xl:w-[523px] h-[120px] ">
              <img src={con2} alt="" />
              <h1 className="text-[18px] bg-[#333] dark:bg-[#FFF] rounded-[10px] py-[30px] px-[30px]  font-[400] text-[#FFF] dark:text-[#333333]">Работы производятся опытными специалистами со стажем </h1>
            </div>
            <div className="flex  items-center gap-[30px] xl:w-[523px] h-[120px] ">
              <img src={con3} alt="" />
              <h1 className="text-[18px] bg-[#333] dark:bg-[#FFF] rounded-[10px] py-[30px] px-[30px]  font-[400] text-[#FFF] dark:text-[#333333]">Мы обеспечим максимально возможную оперативность работ </h1>
            </div>
            <div className="flex  items-center gap-[30px] xl:w-[523px] h-[120px] ">
              <img src={con4} alt="" />
              <h1 className="text-[18px] bg-[#333] dark:bg-[#FFF] rounded-[10px] py-[30px] px-[30px]  font-[400] text-[#FFF] dark:text-[#333333]">Мы гарантируем лучшее ценообразование на строительные работы</h1>
            </div>
            <div className="flex  items-center gap-[30px] xl:w-[523px] h-[120px] ">
              <img src={con4} alt="" />
              <h1 className="text-[18px] bg-[#333] dark:bg-[#FFF] rounded-[10px] py-[30px] px-[30px]  font-[400] text-[#FFF] dark:text-[#333333]">Мы гарантируем лучшее ценообразование на строительные работы</h1>
            </div>
          </div>
          <div>
            <img src={ser} alt="" />
          </div>
        </div>
        </div>
      </section>

      <section className="max-w-[100%] bg-[#0D4373]">
        <div className="container  p-10">
          <div className="flex text-center lg:text-start lg:flex-row flex-col justify-between">
            <div>
              <h1 className="text-[18px] text-[#FFF] font-[400]">Профессиональное устройство свайных фундаментов из забивных и буронабивных свай</h1>
            </div>
            <div className="py-[10px] lg:py-0">
              <button className="text-[18px] font-[600] text-[#D74C20] lg:border-l border-[#D74C20] pl-7">Связаться с нами &gt;&gt;</button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[60px]">
        <div className="container">
          <div>
            <h1 className="text-[24px]  font-[700] text-[#FFF] dark:text-[#333333] py-[15px]">Сертификаты</h1>
            <p className="text-[16px] font-[400] text-[#868686]">Более 10 лет ООО «БелКопроСтрой» работает в сфере устройства свайных фундаментов. Для осуществления деятельности компания имеет все необходимые разрешительные документы для качественного производства работ (свидетельства, аттестаты соответствия и сертификаты).</p>
          </div>
          <div>
            <Swipper2/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
