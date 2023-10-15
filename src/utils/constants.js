const constants = {
  URL: "https://tracking.bosta.co/",
  trackingStates: {
    delivered: "DELIVERED",
    cancelled: "CANCELLED",
    deliverToSender: "DELIVERED_TO_SENDER",
  },
  detailsState: {
    created: "TICKET_CREATED",
    received: "PACKAGE_RECEIVED",
    outOfDelivery: "OUT_FOR_DELIVERY",
    delivered: "DELIVERED",
    cancelled: "CANCELLED",
    transit: "IN_TRANSIT",
    notShipped: "NOT_YET_SHIPPED",
    customerAction: "WAITING_FOR_CUSTOMER_ACTION",
    deliveredToSender: "DELIVERED_TO_SENDER",
  },
};

const trackingNumbers = ["7234258", "13737343", "67151313"];

export { constants, trackingNumbers };
