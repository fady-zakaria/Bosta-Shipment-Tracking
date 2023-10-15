import moment from "moment";
import { constants } from "../../utils/constants";
import { translate } from "../../utils/Language";

const shipmentDetailsData = (trackingData, statusData) => {
  return [
    {
      title: `${translate("trackingNumber")} ${trackingData?.TrackingNumber}`,
      value: statusData?.textStatus,
    },
    {
      title: translate("lastUpdateDate"),
      value: moment(trackingData?.CurrentStatus?.timestamp).format(
        "dddd DD/MM/YYYY, h:mm a"
      ),
    },
    {
      title: translate("providerName"),
      value: trackingData?.provider,
    },
    {
      title: translate("deliveryDate"),
      value: trackingData?.PromisedDate
        ? moment(trackingData?.PromisedDate).format("DD MMMM YYYY")
        : "-",
    },
  ];
};

const getStepThreeText = (status) => {
  switch (status) {
    case constants.trackingStates.delivered:
      return "";
    case constants.trackingStates.cancelled:
      return translate("cancelledReason");
    case constants.trackingStates.deliverToSender:
      return translate("warningReason");
    default:
      return "";
  }
};

const getDetails = (item) => {
  switch (item?.state) {
    case constants.detailsState.created:
      return {
        primaryText: translate("ticketCreated"),
      };
    case constants.detailsState.cancelled:
      return {
        primaryText: translate("ticketError"),
        secondaryText: translate("StepTwoText"),
      };
    case constants.detailsState.received:
      return {
        primaryText: translate("StepTwoText"),
      };
    case constants.detailsState.transit:
      return {
        primaryText: translate("transit"),
      };
    case constants.detailsState.notShipped:
      return {
        primaryText: translate("notShipped"),
      };
    case constants.detailsState.customerAction:
      return {
        primaryText: translate("customerAction"),
        secondaryText: item?.reason,
      };
    case constants.detailsState.delivered:
      return {
        primaryText: translate("delivered"),
      };
    case constants.detailsState.outOfDelivery:
      return {
        primaryText: translate("outForDelivery"),
      };
    case constants.detailsState.deliveredToSender:
      return {
        primaryText: translate("deliverToSender"),
        secondaryText: translate("warningReason"),
      };
    default:
      return "";
  }
};

const getTextColor = (statusData) => {
  return (statusData?.lineColor).concat("-text");
};

const getBgColor = (statusData) => {
  return (statusData?.lineColor).concat("-bg");
};

const centerLinks = () => {
  return [
    { id: 1, name: `${translate("home")}`, link: "/" },
    { id: 2, name: `${translate("pricing")}`, link: "/" },
    { id: 3, name: `${translate("callSales")}`, link: "/" },
  ];
};

const otherLinks = () => {
  return [
    { id: 4, name: `${translate("trackShipment")}`, searchBar: true },
    { id: 5, name: `${translate("login")}`, link: "/" },
  ];
};

const tableHead = () => {
  return [
    `${translate("branchName")}`,
    `${translate("date")}`,
    `${translate("time")}`,
    `${translate("details")}`,
  ];
};

export {
  shipmentDetailsData,
  getStepThreeText,
  getDetails,
  getTextColor,
  getBgColor,
  centerLinks,
  otherLinks,
  tableHead,
};
