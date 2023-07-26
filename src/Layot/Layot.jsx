import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./Layot.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, Outlet } from "react-router-dom";
import logo from '../assets/логотип_для веб.svg'
import logo2 from '../assets/логотип_для веб 1.svg'
import tel from '../assets/phone.svg'
import tg from '../assets/telegramm.svg'
import ws from '../assets/watsapp.svg'
import vb from '../assets/viber.svg'
import { Button } from "@mui/material";
import Switcher from "../components/Dark/Switcher";
import TemporaryDrawer from "../components/Nav/Nav";



const Layot = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="overflow-hidden dark:bg-white bg-gray-950">

    <header className="max-w-[100%] ">
      <div className="container border-b border-[#0D4373] md:border-none ">
        <div className="flex   h-[40px] justify-between items-center">
        <div className="flex gap-[10px] md:hidden">
            <div>
              <h1 className="flex items-center text-[16px] font-[400] text-[#FFF] dark:text-[#333333]">  <img src={tel} alt="" /> +375 44 767 60 76</h1>
            </div>
            <div className="flex items-start gap-[5px]">
              <img src={tg} alt="" />
              <img src={ws} alt="" />
              <img src={vb} alt="" />
            </div>
          </div>
          <ul className="md:flex hidden gap-[30px] text-[#FFF] dark:text-[#333333] font-[400]">
            <Link to={"/company"} >
            <li>{t("nav2.company")}</li>
            </Link>
            <Link to={"/news"}>
            <li>{t("nav2.news")}</li>
            </Link>
            <Link to={"/otziv"}>
            <li>{t("nav2.otziv")}</li>
            </Link>
          </ul>
          <div className="flex gap-[30px]">
          <select className="bg-transparent text-[#Fefefe] dark:text-[#434343]" onChange={(e)=>changeLanguage(e.target.value)} >
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          <div className="md:block hidden">
          <Switcher/>
          </div>
         
          </div>
        </div>

        <div className="flex justify-between gap-[50px] items-center py-[30px]">
          <Link to={"/tech"}>
          <div data-aos="fade-right">
            <img src={logo} alt="" />
          </div>
          </Link>
          
          <div data-aos="fade-left" className="md:flex hidden">
            <div>
              <h1 className="flex items-center text-[16px] font-[700] text-[#FFF] dark:text-[#333333]">  <img src={tel} alt="" /> +375 44 767 60 76</h1>
              <h1 className="font-[400] text-[#FFF] dark:text-[#333333]">info@svai.by</h1>
            </div>
            <div  className="flex items-start gap-[5px]">
              <img src={tg} alt="" />
              <img src={ws} alt="" />
              <img src={vb} alt="" />
            </div>
          </div>
          <div className="md:hidden border rounded-[4px] border-[#0D4373]">
            <TemporaryDrawer/>
          </div>
        </div>
      </div>
    </header>

    <section className="bg-[#0D4373] max-w-[100%] ">
      <div className="container">
        <div className="md:flex hidden items-center h-[70px] justify-between">
          <ul className="text-[#Fefefe]  flex justify-between items-center gap-[30px] font-[400]">
            <Link to={"/"}>
            <li className="hover:text-[#FFF] hover:font-[500] border-r pr-7">{t("nav.main")}</li>
            </Link>
            <Link to={"/uslugi"}>
            <li className="hover:text-[#FFF] hover:font-[500] border-r pr-7">{t("nav.service")}</li>
            </Link>
            <Link to={"/objects"}>
            <li className="hover:text-[#FFF] hover:font-[500] border-r pr-7">{t("nav.object")}</li>
            </Link>
            <Link to={"/carreer"}>
            <li className="hover:text-[#FFF] hover:font-[500] border-r pr-7">{t("nav.career")}</li>
            </Link>
            <Link to={"/contact"}>
            <li className="hover:text-[#FFF] hover:font-[500]">{t("nav.contact")}</li>
            </Link>
          </ul>
          <div className="md:hidden lg:block">
            <Button variant="contained" sx={{backgroundColor:"#D74C20"}}>
           {t("nav.join")}
            </Button>
          </div>
        </div>
      </div>
    </section>
    <Outlet/>

    <footer className="max-w-[100%] bg-[#0D4373]">
      <div className="container py-[20px]">
      <Link to={"/tech"}>
        <div className="text-center flex justify-center py-10">
          <h1>  <img src={logo2} alt="" /><span className="pl-[60px] text-[white] font-[400]">Полный комплекс свайных работ</span></h1>
        </div>
      </Link>
        <div className="text-center md:py-[20px]">
          <h1 className="text-white font-[400]">© Copyrights 2021 Fundamenta. All rights reserved.</h1>
        </div>
      </div>
    </footer>
    
    </div>
  );
};

export default Layot;
