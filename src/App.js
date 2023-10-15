import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLanguage } from "./redux/features/languageSlice/languageSlice";
import moment from "moment";
import "moment/locale/ar";
import { Spinner } from "@material-tailwind/react";
import NotFound from "./Pages/NotFound/NotFound";

const ShipmentsTrack = lazy(() =>
  import("./Pages/ShipmentsTrack/ShipmentsTrack")
);

function App() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    let lan = sessionStorage.getItem("language");
    if (lan === "ar") {
      i18n.changeLanguage("ar");
      dispatch(setLanguage("ar"));
      moment.locale("ar");
      document.body.dir = "rtl";
    } else {
      i18n.changeLanguage("en");
      dispatch(setLanguage("en"));
      moment.locale("en");
      document.body.dir = "ltr";
    }
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center my-auto h-screen">
            <Spinner color="red" className="h-10 w-10" />
          </div>
        }
      >
        <NavBar />
        <>
          <Routes>
            <Route path="/" element={<ShipmentsTrack />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      </Suspense>
    </>
  );
}

export default App;
