import { Typography } from "@material-tailwind/react";
import React from "react";
import { translate } from "../../utils/Language";
import { getStepThreeText } from "../../Pages/ShipmentsTrack/ShipmentsTrack.factory";
import { useSelector } from "react-redux";

const SmallViewRender = ({ textColor }) => {
  const { trakingStatus, statusData } = useSelector(
    (state) => state?.shipmentsState
  );
  return (
    <div className="flex flex-col md:flex-row justify-between gap-y-5 py-5 border-b-2 mb-2">
      <Typography color={"black"} className="font-display font-bold text-sm">
        {translate("ticketCreated")}
      </Typography>
      <Typography color={"black"} className="font-display font-bold text-sm">
        {translate("StepTwoText")}
      </Typography>
      <div className="flex flex-col gap-2">
        <Typography color={"black"} className="font-display font-bold text-sm">
          {translate("outForDelivery")}
        </Typography>
        <Typography className={`font-display text-xs ${textColor}`}>
          {getStepThreeText(trakingStatus)}
        </Typography>
      </div>
      <Typography
        color={statusData?.activeStep === 3 ? "black" : "gray-300"}
        className="font-display font-bold text-sm"
      >
        {translate("packageRecievied")}
      </Typography>
    </div>
  );
};

export default SmallViewRender;
