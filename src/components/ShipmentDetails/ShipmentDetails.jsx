import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { translate } from "../../utils/Language";
import { useSelector } from "react-redux";
import {
  getTextColor,
  tableHead,
} from "../../Pages/ShipmentsTrack/ShipmentsTrack.factory";
import "../../App.css";

const ShipmentDetails = () => {
  const { statusData, details } = useSelector((state) => state.shipmentsState);

  const [textColor, settextColor] = useState("");

  useEffect(() => {
    settextColor(getTextColor(statusData));
  }, [statusData]);

  return (
    <div className="flex flex-col gap-5 flex-1">
      <Typography variant="h5" color="gray-300" className="font-display">
        {translate("shipmentsDetails")}
      </Typography>
      <Card className="h-full w-full overflow-auto">
        <table className="w-full min-w-max table-auto">
          <thead>
            <tr>
              {tableHead().map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-display leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {details.map(({ branchName, date, time, details }, index) => {
              const isLast = index === details?.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-display"
                    >
                      {branchName}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-display"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-display"
                    >
                      {time}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-display"
                    >
                      {details?.primaryText}
                    </Typography>
                    {details?.secondaryText && (
                      <Typography
                        variant="small"
                        className={`font-display mt-1 ${textColor}`}
                      >
                        {details?.secondaryText}
                      </Typography>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ShipmentDetails;
