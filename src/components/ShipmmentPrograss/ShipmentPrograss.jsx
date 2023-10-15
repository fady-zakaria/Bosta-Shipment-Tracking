import React, { useState, useEffect } from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import { BsCheck } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { AiOutlineSave } from "react-icons/ai";
import { useSelector } from "react-redux";
import { constants } from "../../utils/constants";
import {
  getBgColor,
  getStepThreeText,
  getTextColor,
} from "../../Pages/ShipmentsTrack/ShipmentsTrack.factory";
import { translate } from "../../utils/Language";
import "../../App.css";
import ItemList from "../ItemList/ItemList";
import SmallViewRender from "./SmallViewRender";

const ShipmentPrograss = () => {
  const { trakingStatus, statusData } = useSelector(
    (state) => state?.shipmentsState
  );

  const { lang } = useSelector((state) => state?.languageState);

  const [bgColor, setBgColor] = useState("");
  const [textColor, settextColor] = useState("");

  const [smallView, setSmallView] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth > 959 ? setSmallView(false) : setSmallView(true)
    );
  }, [window.innerWidth]);

  useEffect(() => {
    setBgColor(getBgColor(statusData));
    settextColor(getTextColor(statusData));
  }, [statusData, trakingStatus]);

  return (
    <div className="pb-20 pt-5 w-full px-10">
      <Stepper
        activeStep={statusData?.activeStep}
        lineClassName="bg-gray-300 start-0"
        activeLineClassName={bgColor}
      >
        <Step completedClassName={bgColor}>
          <BsCheck className="h-7 w-7" />
          <div className="absolute -bottom-[3rem] w-max text-center hidden lg:flex lg:flex-wrap">
            <Typography
              color={"black"}
              className="font-display font-bold text-sm"
            >
              {translate("ticketCreated")}
            </Typography>
          </div>
        </Step>
        <Step completedClassName={bgColor}>
          <BsCheck className="h-7 w-7" />
          <div className="absolute -bottom-[3rem] w-max text-center hidden lg:flex lg:flex-wrap">
            <Typography
              color={"black"}
              className="font-display font-bold text-sm"
            >
              {translate("StepTwoText")}
            </Typography>
          </div>
        </Step>
        <Step activeClassName={bgColor} completedClassName={bgColor}>
          {trakingStatus === constants?.trackingStates?.delivered ? (
            <BsCheck className="h-7 w-7" />
          ) : (
            <FaTruckFast className={`h-5 w-5 ${lang === "ar" && "flipImg"}`} />
          )}

          <div
            className={`absolute w-max text-center hidden lg:flex flex-col gap-1 ${
              trakingStatus === constants.trackingStates.delivered
                ? "bottomThree"
                : "bottomFour"
            }`}
          >
            <Typography
              color={"black"}
              className="font-display font-bold text-sm"
            >
              {translate("outForDelivery")}
            </Typography>
            <Typography className={`font-display text-xs ${textColor}`}>
              {getStepThreeText(trakingStatus)}
            </Typography>
          </div>
        </Step>
        <Step activeClassName={bgColor} completedClassName={bgColor}>
          {trakingStatus === constants?.trackingStates?.delivered ? (
            <BsCheck className="h-7 w-7" />
          ) : (
            <AiOutlineSave className="h-5 w-5" />
          )}

          <div className="absolute -bottom-[3rem] w-max text-center hidden lg:block">
            <Typography
              color={statusData?.activeStep === 3 ? "black" : "gray-300"}
              className="font-display font-bold text-sm"
            >
              {translate("packageRecievied")}
            </Typography>
          </div>
        </Step>
      </Stepper>
      {smallView && <SmallViewRender textColor={textColor} />}
    </div>
  );
};

export default ShipmentPrograss;
