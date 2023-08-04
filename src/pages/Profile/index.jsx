import { useState, useEffect } from "react";

import DailyActivity from "../../components/DailyActivity";
import SessionsLength from "../../components/SessionsLength";
import ActivityType from "../../components/ActivityType";

//import fetchProfileData from "../../services/fetchProfileData";

import UserData from "../../classes/UserData";
import UserActivity from "../../classes/UserActivity";
import UserSessions from "../../classes/UserSessions";
import UserPerformance from "../../classes/UserPerformance";

import { kUserDataMock, kUserActivityMock, kUserAverageSessionsMock, kUserPerformanceMock } from "../../mock/userData";

export default function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [profileActivity, setProfileActivity] = useState(null);
  const [profileSessions, setProfileSessions] = useState(null);
  const [profilePerformance, setProfilePerformance] = useState(null);

  useEffect(() => {
    //const kApiUrl = new URL("https://api.github.com/users/");
    //fetchProfileData(kApiUrl).then(data => setProfileData(data));
    const userData = new UserData({
      id: kUserDataMock.id,
      firstName: kUserDataMock.userInfos.firstName,
      lastName: kUserDataMock.userInfos.lastName,
      age: kUserDataMock.userInfos.age,
      todayScore: kUserDataMock.todayScore,
      calorieCount: kUserDataMock.keyData.calorieCount,
      proteinCount: kUserDataMock.keyData.proteinCount,
      carbohydrateCount: kUserDataMock.keyData.carbohydrateCount,
      lipidCount: kUserDataMock.keyData.lipidCount,
    });

    const userActivity = new UserActivity({
      userId: kUserActivityMock.userId,
      sessions: kUserActivityMock.sessions,
    });
    const userSessions = new UserSessions({
      userId: kUserAverageSessionsMock.userId,
      sessions: kUserAverageSessionsMock.sessions,
    });

    const userPerformance = new UserPerformance({
      userId: kUserPerformanceMock.userId,
      data: kUserPerformanceMock.data.map(item => ({ key: kUserPerformanceMock.kind[item.kind], value: item.value })),
    });

    setProfileData(userData);
    setProfileActivity(userActivity);
    setProfileSessions(userSessions);
    setProfilePerformance(userPerformance);
  }, []);

  return (
    <div className="Profile">
      <h1>{profileData ? `Bonjour ${profileData.firstName}` : "Chargement..."}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      {profileActivity ? <DailyActivity data={profileActivity} /> : "Chargement..."}
      {profileSessions ? <SessionsLength data={profileSessions} /> : "Chargement..."}
      {profilePerformance ? <ActivityType data={profilePerformance} /> : "Chargement..."}
    </div>
  );
}
