import { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";

import DailyActivity from "../../components/DailyActivity";
import SessionsLength from "../../components/SessionsLength";
import ActivityType from "../../components/ActivityType";
import Score from "../../components/Score";
import KeyCard from "../../components/KeyCard";

//import fetchData from "../../services/fetchData";

import { UserActivity, UserAverageSessions, UserData, UserPerformance } from "../../models/dataModel";
import { kUserDataMock, kUserActivityMock, kUserAverageSessionsMock, kUserPerformanceMock } from "../../mock/userData";

import caloriesSVG from "../../assets/calories.svg";
import proteinSVG from "../../assets/proteins.svg";
import carbohydrateSVG from "../../assets/glucides.svg";
import lipidSVG from "../../assets/lipides.svg";

export default function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [profileActivity, setProfileActivity] = useState(null);
  const [profileSessions, setProfileSessions] = useState(null);
  const [profilePerformance, setProfilePerformance] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch data from API

        /*
        const profileDataUrl = new URL("http://localhost:3000/user/" + id);
        const fetchedUserData = await fetchData(profileDataUrl);
        const userData = new UserData(fetchedUserData);
        setProfileData(userData);

        const fetchedUserActivity = await fetchData(profileDataUrl + "/activity");
        const userActivity = new UserActivity(fetchedUserActivity);
        setProfileActivity(userActivity);

        const fetchedUserSessions = await fetchData(profileDataUrl + "/average-sessions");
        const userSessions = new UserAverageSessions(fetchedUserSessions);
        setProfileSessions(userSessions);

        const fetchedUserPerformance = await fetchData(profileDataUrl + "/performance");
        const userPerformance = new UserPerformance(fetchedUserPerformance);
        setProfilePerformance(userPerformance);

        */

        // Fetch data from mock
        const userData = new UserData(kUserDataMock);
        setProfileData(userData);

        const userActivity = new UserActivity(kUserActivityMock);
        setProfileActivity(userActivity);

        const userSessions = new UserAverageSessions(kUserAverageSessionsMock);
        setProfileSessions(userSessions);

        const userPerformance = new UserPerformance(kUserPerformanceMock);
        setProfilePerformance(userPerformance);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  if (error) {
    return <div className="Profile">Une erreur est survenue : {error.message}</div>;
  }

  if (isLoading) {
    return <div className="Profile">Chargement...</div>;
  }

  return (
    <div className="Profile">
      <h1>{`Bonjour ${profileData.firstName}`}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <DailyActivity data={profileActivity} />
      <SessionsLength data={profileSessions} />
      <ActivityType data={profilePerformance} />
      <Score data={profileData} />
      <KeyCard name="Calories" value={profileData.keyData.calorieCount} img={caloriesSVG} />
      <KeyCard name="Protéines" value={profileData.keyData.proteinCount} img={proteinSVG} />
      <KeyCard name="Glucides" value={profileData.keyData.carbohydrateCount} img={carbohydrateSVG} />
      <KeyCard name="Lipides" value={profileData.keyData.lipidCount} img={lipidSVG} />
    </div>
  );
}
