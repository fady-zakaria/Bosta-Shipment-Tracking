import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShipmentData from "../../components/ShipmentData/ShipmentData";
import { getTrackingData } from "../../redux/features/shipmentsTrackSlice/shipmentsTrackSlice";
import { trackingNumbers } from "../../utils/constants";
import ShipmentDetails from "../../components/ShipmentDetails/ShipmentDetails";
import DeliveryAddress from "../../components/DeliveryAddress/DeliveryAddress";
import Help from "../../components/Help/Help";
import { Spinner } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

const ShipmentsTrack = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const { loading } = useSelector((state) => state.shipmentsState);

  useEffect(() => {
    dispatch(getTrackingData(trackingNumbers[0]));
  }, [dispatch, i18n.language]);

  return (
    <div className="w-full h-screen">
      {loading ? (
        <div className="flex items-center justify-center m-auto h-screen">
          <Spinner color="red" className="h-10 w-10" />
        </div>
      ) : (
        <>
          <ShipmentData />
          <div className="flex xl:flex-row flex-col mt-20 pb-10 mx-12 gap-x-5 gap-y-7">
            <ShipmentDetails />
            <div className="flex flex-col gap-5">
              <DeliveryAddress />
              <Help />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShipmentsTrack;
