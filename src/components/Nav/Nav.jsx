import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import bar from '../../assets/align-justify.svg'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Switcher from "../Dark/Switcher";
import logo from '../../assets/логотип_для веб.svg'


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="gridcell"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <Link to={"/tech"}>
          <div className="text-center">
            <img src={logo} alt="" />
            <h1 className="font-[700] text-[#FFF] text-[20px] dark:text-[#333333]">info@svai.by</h1>

          </div>
          </Link>
      </List>
      <Divider/>
      <List>
      <Link to={"/company"} >
            <li className="text-[18px] font-[500] hover:border-b w-fit border-[#333]  hover:text-blue-500">{t("nav2.company")}</li>
            </Link>
            <Link to={"/news"}>
            <li className="text-[18px] font-[500] hover:border-b w-fit border-[#333]  hover:text-blue-500">{t("nav2.news")}</li>
            </Link>
            <Link to={"/otziv"}>
            <li className="text-[18px] font-[500] hover:border-b w-fit border-[#333]  hover:text-blue-500">{t("nav2.otziv")}</li>
            </Link>
      </List>
      <Divider />
      <List>
      <Link to={"/"}>
            <li className="text-[#434343] text-[17px] hover:font-[700] hover:text-red-500 ">{t("nav.main")}</li>
            </Link>
            <Link to={"/uslugi"}>
            <li className="text-[#434343] text-[17px] hover:font-[700] hover:text-red-500 ">{t("nav.service")}</li>
            </Link>
            <Link to={"/objects"}>
            <li className="text-[#434343] text-[17px] hover:font-[700] hover:text-red-500 ">{t("nav.object")}</li>
            </Link>
            <Link to={"/carreer"}>
            <li className="text-[#434343] text-[17px] hover:font-[700] hover:text-red-500 ">{t("nav.career")}</li>
            </Link>
            <Link to={"/contact"}>
            <li className="text-[#434343] text-[17px] hover:font-[700] hover:text-red-500 ">{t("nav.contact")}</li>
            </Link>
      </List>
      <Divider/>
      <List >
      <Switcher/>

      </List>
    </Box>
  );

  return (
    <div >
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <img onClick={toggleDrawer(anchor, true)} src={bar} alt="" />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
