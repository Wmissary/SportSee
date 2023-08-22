import fetchData from "./fetchData.js";
import UserActivity from "../models/UserActivity.js";
import { kUserActivityMock } from "../mock/userData.js";

async function getUserActivity(url, id) {
  const profileDataUrl = new URL(url + "user/" + id + "/activity");
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
