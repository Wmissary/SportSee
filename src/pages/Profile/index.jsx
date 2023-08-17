import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DailyActivity from "../../components/DailyActivity";
import SessionsLength from "../../components/SessionsLength";
import ActivityType from "../../components/ActivityType";
import Score from "../../components/Score";
import KeyCard from "../../components/KeyCard";

import getUserProfile from "../../services/getUserProfile";

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
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getUserProfile({ id, isMock: true });
        setProfileData(data.userData);
        setProfileActivity(data.userActivity);
        setProfileSessions(data.userAverageSessions);
        setProfilePerformance(data.userPerformances);
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
