import { Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTextColor } from "../../Pages/ShipmentsTrack/ShipmentsTrack.factory";
import "../../App.css";

const ItemList = ({ data }) => {
  const { statusData } = useSelector((state) => state.shipmentsState);
  const classes = "text-base font-bold font-display";

  const [textColor, settextColor] = useState("");

  useEffect(() => {
    settextColor(getTextColor(statusData));
  }, [statusData]);

  return (
    <div className="flex flex-col md:flex-row justify-between py-5 border-b-2 mb-2">
      {data.map((item, index) => (
        <div key={index} className=" p-7 flex flex-col gap-2">
          <Typography className="text-base	text-bosta-gray font-display">
            {item?.title}
          </Typography>
          <Typography className={`${classes} ${index === 0 && textColor}`}>
            {item?.value}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
