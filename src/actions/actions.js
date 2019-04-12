import axios from "axios";

const fetch_user = () => {
  return {
    type: "FETCHING"
  };
};

export const getCity = city => {
  //store.dispatch(fetch_user());
  return function(dispatch) {
    dispatch(fetch_user());
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b16f2ce13b743124891d61551c569230`
      )
      .then(response => {
        if (response.message === "Not Found") {
          throw new Error("City not found");
        } else {
          return dispatch({
            type: "GET_CITY",
            data: response.data
          });
        }
      })
      .catch(error => {
        return dispatch({
          type: "GET_ERROR"
        });
      });
  };
};

// `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b16f2ce13b743124891d61551c569230`
