import req from "./https";

// 全域 api 掛載於 Vue.prototype
// 使用方式 this.$api
// api 命名原則 首字大寫爾後駝峰
const api = {
  // events
  GetEvents(params) {
    return req("get", "Events/GetEvents", params);
  },
  GetEventById(params) {
    return req("get", "Events/GetDetail", params);
  },
  GetEventsPage(params) {
    return req("get", "CalendarEvent/GetClient", params);
  },

  //unit
  GetUnits() {
    return req("get", "School/GetUnitList");
  },
};

export default api;
