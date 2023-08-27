import fetchData from "./fetchData.js";
import UserData from "../models/UserData.js";
import { kUserDataMock } from "../mock/userData.js";

async function getUserData(id) {
  const kURL = new URL("http://localhost:3000/user/");
  const profileDataUrl = new URL(kURL + id);
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
