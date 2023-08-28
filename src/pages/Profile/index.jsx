import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DailyActivity from "../../components/DailyActivity";
import SessionsLength from "../../components/SessionsLength";
import ActivityType from "../../components/ActivityType";
import Score from "../../components/Score";
import KeyCard from "../../components/KeyCard";

import { getUserData } from "../../services/getUserData";

import caloriesSVG from "../../assets/calories.svg";
import proteinSVG from "../../assets/proteins.svg";
import carbohydrateSVG from "../../assets/glucides.svg";
import lipidSVG from "../../assets/lipides.svg";

import "../../css/style.css";

export default function Profile() {
  const { id } = useParams();
  const [profileName, setProfileName] = useState(null);
  const [profileScore, setProfileScore] = useState(null);
  const [profileCalories, setProfileCalories] = useState(null);
  const [profileProteins, setProfileProteins] = useState(null);
  const [profileCarbohydrates, setProfileCarbohydrates] = useState(null);
  const [profileLipids, setProfileLipids] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getUserData(id);
        setProfileName(data.firstName);
        setProfileScore(data.todayScore);
        setProfileCalories(data.keyData.calorieCount);
        setProfileProteins(data.keyData.proteinCount);
        setProfileCarbohydrates(data.keyData.carbohydrateCount);
        setProfileLipids(data.keyData.lipidCount);
      } catch {
        console.log("error");
      }
    };
    getData();
  });

  return (
    <main className="Profile">
      <div className="Profile__header">
        <h1>
          Bonjour <span> {profileName ? profileName : "Chargement..."}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <section className="Profile__main">
        <div className="Profile__main__wrapper">
          <DailyActivity userId={id} />
          <div className="Profile__main__flex">
            <SessionsLength userId={id} />
            <ActivityType userId={id} />
            <Score todayScore={profileScore ? profileScore : 0} />
          </div>
        </div>
        <aside className="Profile__aside">
          <KeyCard
            name="Calories"
            value={profileCalories}
            img={caloriesSVG}
            color={"rgba(255, 0, 0, 0.1)"}
            unit="kCal"
          />
          <KeyCard
            name="Protéines"
            value={profileProteins}
            img={proteinSVG}
            color={"rgba(74, 184, 255, 0.1)"}
            unit="g"
          />
          <KeyCard
            name="Glucides"
            value={profileCarbohydrates}
            img={carbohydrateSVG}
            color={"rgba(249, 206, 35, 0.1)"}
            unit="g"
          />
          <KeyCard name="Lipides" value={profileLipids} img={lipidSVG} color={"rgba(253, 81, 129, 0.1)"} unit="g" />
        </aside>
      </section>
    </main>
  );
}
