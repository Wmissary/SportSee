import { getUserData, getUserDataMock } from "./getUserData";
import { getUserActivity, getUserActivityMock } from "./getUserActivity";
import { getUserAverageSessions, getUserAverageSessionsMock } from "./getUserAverageSessions";
import { getUserPerformances, getUserPerformancesMock } from "./getUserPerformances";

export default async function getUserProfile({ id, isMock = false }) {
  const kURL = new URL("http://localhost:3000");

  const userData = isMock ? await getUserDataMock() : await getUserData(kURL, id);
  const userActivity = isMock ? await getUserActivityMock() : await getUserActivity(kURL, id);
  const userAverageSessions = isMock ? await getUserAverageSessionsMock() : await getUserAverageSessions(kURL, id);
  const userPerformances = isMock ? await getUserPerformancesMock() : await getUserPerformances(kURL, id);

  return Promise.all([userData, userActivity, userAverageSessions, userPerformances]).then(values => {
    return {
      userData: values[0],
      userActivity: values[1],
      userAverageSessions: values[2],
      userPerformances: values[3],
    };
  });
}
