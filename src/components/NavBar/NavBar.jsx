import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NavLinks from "./NavLinks";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { translate } from "../../utils/Language";
import { setLanguage } from "../../redux/features/languageSlice/languageSlice";
import moment from "moment";
import "moment/locale/ar";
import {
  centerLinks,
  otherLinks,
} from "../../Pages/ShipmentsTrack/ShipmentsTrack.factory";

const NavBar = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const languageHandler = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
      sessionStorage.setItem("language", "ar");
      dispatch(setLanguage("ar"));
      moment.locale("ar");
      document.body.dir = i18n.dir();
    } else {
      i18n.changeLanguage("en");
      sessionStorage.setItem("language", "en");
      dispatch(setLanguage("en"));
      moment.locale("en");
      document.body.dir = i18n.dir();
    }
  };

  return (
    <Navbar className="h-max max-w-full rounded-none p-4">
      <div className="flex items-center flex-1 justify-between lg:justify-normal gap-4">
        <div className="cursor-pointer flex-grow-0">
          <img
            className="object-cover object-center"
            width={"120px"}
            height={"32px"}
            src={`assets/images/${
              i18n.language === "en" ? "logo_en.svg" : "logo_ar.svg"
            }`}
            alt="Bosto-logo"
          />
        </div>
        <div className="flex items-center flex-1 pt-1.5">
          <div className="hidden lg:flex lg:justify-between lg:flex-row items-center flex-1">
            <NavLinks links={centerLinks()} style={true} />
            <NavLinks links={otherLinks()} />
          </div>
          <IconButton
            variant="text"
            className="ms-auto h-6 w-6 text-bosta-red hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>

        <Button
          variant="text"
          size="sm"
          className="text-bosta-red text-center pt-4"
          onClick={() => languageHandler()}
        >
          {translate("lan")}
        </Button>
      </div>
      <MobileNav open={openNav}>
        <NavLinks links={centerLinks()} />
        <NavLinks links={otherLinks()} />
      </MobileNav>
    </Navbar>
  );
};

export default NavBar;
