import { useState, useEffect } from "react";

import DailyActivity from "../../components/DailyActivity";
import SessionsLength from "../../components/SessionsLength";

//import fetchProfileData from "../../services/fetchProfileData";

import UserData from "../../classes/UserData";
import UserActivity from "../../classes/UserActivity";
import UserSessions from "../../classes/UserSessions";

import { kUserDataMock, kUserActivityMock, kUserAverageSessionsMock } from "../../mock/userData";

export default function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [profileActivity, setProfileActivity] = useState(null);
  const [profileSessions, setProfileSessions] = useState(null);

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

    setProfileData(userData);
    setProfileActivity(userActivity);
    setProfileSessions(userSessions);
  }, []);

  return (
    <div className="Profile">
      <h1>{profileData ? `Bonjour ${profileData.firstName}` : "Chargement..."}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      {profileActivity ? <DailyActivity data={profileActivity} /> : "Chargement..."}
      {profileSessions ? <SessionsLength data={profileSessions} /> : "Chargement..."}
    </div>
  );
}
