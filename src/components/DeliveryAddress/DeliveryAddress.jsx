import { Typography } from "@material-tailwind/react";
import React from "react";
import "../../App.css";
import { translate } from "../../utils/Language";

const DeliveryAddress = () => {
  return (
    <div className="flex flex-col gap-5 flex-grow-0">
      <Typography variant="h5" color="gray-300" className="font-display">
        {translate("deliveryAddress")}
      </Typography>
      <div className="p-8 rounded-lg bostaShadowBox bg-gray-50">
        <Typography
          variant="h5"
          color="gray-300"
          className="font-display break-all"
        >
          {translate("userAddress")}
        </Typography>
      </div>
    </div>
  );
};

export default DeliveryAddress;
