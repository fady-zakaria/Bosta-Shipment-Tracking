import { createSlice } from "@reduxjs/toolkit";
import { getShipmentTrackStatus } from "../../../Services/GetShipmentTrackStatus";
import { constants } from "../../../utils/constants";
import { translate } from "../../../utils/Language";
import { getDetails } from "../../../Pages/ShipmentsTrack/ShipmentsTrack.factory";
import moment from "moment";

const initialState = {
  loading: false,
  trackingData: null,
  trakingStatus: "",
  statusData: {
    activeStep: 2,
    lineColor: "bosta-gray",
    textStatus: "",
  },
  hubData: "-",
  details: [],
};

export const shipmentsTrackSlice = createSlice({
  name: "shipmentsState",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setTrackingData: (state, action) => {
      state.trackingData = action.payload.trackingData;
      state.trakingStatus = action.payload.trakingStatus;
    },
    setStatusData: (state, action) => {
      state.statusData = action.payload;
    },
    setHubData: (state, action) => {
      state.hubData = action.payload;
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const getTrackingData = (trackingNumber) => {
  return async (dispatch, store) => {
    try {
      dispatch(setLoading(true));
      const res = await getShipmentTrackStatus(trackingNumber);
      dispatch(handlingPrograssState(res?.CurrentStatus?.state));
      dispatch(
        setTrackingData({
          trakingStatus: res?.CurrentStatus?.state,
          trackingData: res,
        })
      );
      dispatch(handlingTrackingDetails(res?.TransitEvents));
      dispatch(setLoading(false));
    } catch (error) {
      //TODO: we Should make an error handling and http error interceptor.
      dispatch(setLoading(false));
      console.log("error", error);
    }
  };
};

export const handlingTrackingDetails = (data) => {
  return async (dispatch, store) => {
    let newData = [];
    data?.map((item) =>
      newData.push({
        branchName: dispatch(getbranchName(item?.hub)),
        date: moment(item?.timestamp).format("DD/MM/YYYY"),
        time: moment(item?.timestamp).format("h:mm a"),
        details: getDetails(item),
      })
    );
    dispatch(setDetails(newData));
  };
};

export const handlingPrograssState = (status) => {
  return (dispatch, store) => {
    switch (status) {
      case constants.trackingStates.delivered: {
        dispatch(
          setStatusData({
            activeStep: 3,
            lineColor: "bosta-green",
            textStatus: translate("ticketDelivered"),
          })
        );
        break;
      }
      case constants.trackingStates.cancelled: {
        dispatch(
          setStatusData({
            activeStep: 2,
            lineColor: "bosta-red",
            textStatus: translate("ticketCancelled"),
          })
        );
        break;
      }
      case constants.trackingStates.deliverToSender: {
        dispatch(
          setStatusData({
            activeStep: 2,
            lineColor: "bosta-warning",
            textStatus: translate("ticketError"),
          })
        );
        break;
      }
      default: {
        break;
      }
    }
  };
};

const getbranchName = (data) => {
  return (dispatch, store) => {
    if (data) {
      dispatch(setHubData(data));
      return data;
    }
    return store().shipmentsState.hubData;
  };
};

export const {
  setTrackingData,
  setLoading,
  setStatusData,
  setHubData,
  setDetails,
} = shipmentsTrackSlice.actions;

export default shipmentsTrackSlice.reducer;
