import CONSTANTS from "./constants";

export const GET_DISCOVER_MOVIES_CFG = {
  method: "get",
  url: CONSTANTS.URL_DISCOVER_MOVIES,
  headers: {},
  params: {
    api_key: "a7a0795aaec83387554c7a0f2c80c09a",
    language: "en-US",
    sort_by: "popularity.desc",
    include_adult: "false",
    include_video: "false",
    page: "1",
  },
};