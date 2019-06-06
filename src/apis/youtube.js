import axios from "axios";

const KEY = "AIzaSyA2ZYBQAgKnQwzJT4D1LY-ha4C3H0Ed1-0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
