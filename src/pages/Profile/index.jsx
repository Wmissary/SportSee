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

import style from "../../css/style.css";

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
    <main className="Profile">
      <div className="Profile__header">
        <h1>
          Bonjour <span> {profileData.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <section className="Profile__main">
        <div className="Profile__main__wrapper">
          <DailyActivity data={profileActivity} />
          <div className="Profile__main__flex">
            <SessionsLength data={profileSessions} />
            <ActivityType data={profilePerformance} />
            <Score data={profileData} />
          </div>
        </div>
        <aside className="Profile__aside">
          <KeyCard
            name="Calories"
            value={profileData.keyData.calorieCount}
            img={caloriesSVG}
            color={"rgba(255, 0, 0, 0.1)"}
            unit="kCal"
          />
          <KeyCard
            name="Protéines"
            value={profileData.keyData.proteinCount}
            img={proteinSVG}
            color={"rgba(74, 184, 255, 0.1)"}
            unit="g"
          />
          <KeyCard
            name="Glucides"
            value={profileData.keyData.carbohydrateCount}
            img={carbohydrateSVG}
            color={"rgba(249, 206, 35, 0.1)"}
            unit="g"
          />
          <KeyCard
            name="Lipides"
            value={profileData.keyData.lipidCount}
            img={lipidSVG}
            color={"rgba(253, 81, 129, 0.1)"}
            unit="g"
          />
        </aside>
      </section>
    </main>
  );
}
