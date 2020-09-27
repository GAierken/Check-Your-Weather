
export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const REQUEST_ACTIVEITEM_DATA = "REQUEST_ACTIVEITEM_DATA"
export const RECEIVE_ACTIVEITEM_DATA = "RECEIVE_ACTIVEITEM_DATA";

export const requestApiData = data => ({ type: REQUEST_API_DATA, data });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });

export const requestActiveItemData = data => ({ type: REQUEST_ACTIVEITEM_DATA, data });
export const receiveActiveItemData = data => ({ type: RECEIVE_ACTIVEITEM_DATA, data });
