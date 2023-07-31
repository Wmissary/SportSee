import { useState, useEffect } from "react";

//import fetchProfileData from "../../services/fetchProfileData";
import UserData from "../../classes/UserData";

import { kUserDataMock } from "../../mock/userData";

export default function Profile() {
  const [profileData, setProfileData] = useState(null);
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
    setProfileData(userData);
  }, []);

  return (
    <div className="Profile">
      <h1>{`Bonjour ${profileData.firstName}`}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
