import fetchData from "./fetchData.js";
import UserData from "../models/UserData.js";
import { kUserDataMock } from "../mock/userData.js";

async function getUserData(url, id) {
  const profileDataUrl = new URL(url + "user/" + id);
  const fetchedUserData = await fetchData(profileDataUrl);
  const userData = new UserData(fetchedUserData.data);
  return userData;
}

async function getUserDataMock() {
  return new Promise(resolve => {
    resolve(new UserData(kUserDataMock));
  });
}

export { getUserData, getUserDataMock };
