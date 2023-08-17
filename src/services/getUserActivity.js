import fetchData from "./fetchData.js";
import UserActivity from "../models/UserActivity.js";
import { kUserActivityMock } from "../mock/userData.js";

async function getUserActivity(id) {
  const profileDataUrl = new URL("http://localhost:3000/user/" + id + "/activity");
  const fetchedUserActivity = await fetchData(profileDataUrl);
  const userActivity = new UserActivity(fetchedUserActivity);
  return userActivity;
}

async function getUserActivityMock() {
  return new Promise(resolve => {
    resolve(new UserActivity(kUserActivityMock));
  });
}

export { getUserActivity, getUserActivityMock };
