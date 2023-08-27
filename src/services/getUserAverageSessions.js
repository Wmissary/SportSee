import fetchData from "./fetchData.js";
import UserAverageSessions from "../models/UserAverageSessions.js";
import { kUserAverageSessionsMock } from "../mock/userData.js";

async function getUserAverageSessions(id) {
  const kURL = new URL("http://localhost:3000/user/");
  const profileDataUrl = new URL(kURL + id + "/average-sessions");
  const fetchedUserAverageSessions = await fetchData(profileDataUrl);
  const userAverageSessions = new UserAverageSessions(fetchedUserAverageSessions.data);
  return userAverageSessions;
}

async function getUserAverageSessionsMock() {
  return new Promise(resolve => {
    resolve(new UserAverageSessions(kUserAverageSessionsMock));
  });
}

export { getUserAverageSessions, getUserAverageSessionsMock };
