import React from "react";
import ItemList from "../ItemList/ItemList";
import ShipmentPrograss from "../ShipmmentPrograss/ShipmentPrograss";
import { shipmentDetailsData } from "../../Pages/ShipmentsTrack/ShipmentsTrack.factory";
import "../../App.css";
import { useSelector } from "react-redux";

const ShipmentData = () => {
  const { trackingData, statusData } = useSelector(
    (state) => state.shipmentsState
  );
  return (
    <div className="mt-10 mx-12 flex justify-center flex-col">
      <div className="rounded-lg bostaShadowBox">
        <ItemList data={shipmentDetailsData(trackingData, statusData)} />
        <div className="p-7 ">
          <ShipmentPrograss />
        </div>
      </div>
    </div>
  );
};

export default ShipmentData;
