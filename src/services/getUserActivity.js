import fetchData from "./fetchData.js";
import UserActivity from "../models/UserActivity.js";
import { kUserActivityMock } from "../mock/userData.js";

async function getUserActivity(id) {
  const kURL = new URL("http://localhost:3000/user/");
  const profileDataUrl = new URL(kURL + id + "/activity");
  const fetchedUserActivity = await fetchData(profileDataUrl);
  const userActivity = new UserActivity(fetchedUserActivity.data);
  return userActivity;
}

async function getUserActivityMock() {
  return new Promise(resolve => {
    resolve(new UserActivity(kUserActivityMock));
  });
}

export { getUserActivity, getUserActivityMock };
