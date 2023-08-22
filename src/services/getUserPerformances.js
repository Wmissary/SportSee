import fetchData from "./fetchData";
import UserPerformances from "../models/UserPerformances";
import { kUserPerformancesMock } from "../mock/userData";

async function getUserPerformances(url, id) {
  const profileDataUrl = new URL(url + "user/" + id + "/performance");
  const fetchedUserPerformances = await fetchData(profileDataUrl);
  const userPerformances = new UserPerformances(fetchedUserPerformances.data);
  return userPerformances;
}

async function getUserPerformancesMock() {
  return new Promise(resolve => {
    resolve(new UserPerformances(kUserPerformancesMock));
  });
}

export { getUserPerformances, getUserPerformancesMock };
