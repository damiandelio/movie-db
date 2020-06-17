const URL_BASE = 'https://api.themoviedb.org/3'
const APY_KEY = 'a7a0795aaec83387554c7a0f2c80c09a'
const URL_DISCOVER_MOVIES = URL_BASE + '/discover/movie'
const URL_MOVIE = URL_BASE + '/movie'

export function GET_DISCOVER_MOVIES_CFG(targetPage) {
  return {
    method: "get",
    url: URL_DISCOVER_MOVIES,
    headers: {},
    params: {
      api_key: APY_KEY,
      language: "en-US",
      sort_by: "popularity.desc",
      include_adult: "false",
      include_video: "false",
      page: targetPage,
    },
  };
}

export function GET_MOVIE_CFG(movieId) {
  return {
    method: "get",
    url: URL_MOVIE + '/' + movieId,
    headers: {},
    params: {
      api_key: APY_KEY,
      language: "en-US",
    },
  };
}
