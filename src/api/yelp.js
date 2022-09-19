import axios from "axios";

export default axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer VIknDDt1jHg5U36rFdBMTDsFEYqGp6xNFxvM4tsFsH_svujJ5PwKxTTrqqrX_CV8JFsqOiJKTf6RAlpTQR718j_s5jQz4qAZt09S_Pcl9rgsmmWsuTg7FlSXEsEoY3Yx",
  },
});
