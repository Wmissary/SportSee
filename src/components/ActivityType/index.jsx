import { useEffect, useState } from "react";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import styled from "styled-components";

import { getUserPerformances } from "../../services/getUserPerformances";

export default function ActivityType({ userId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserPerformances(userId);
        setData(data);
      } catch (error) {
        // Gérer l'erreur
      }
    };
    fetchData();
  }, [userId]);

  return (
    <ActivityTypeContainer>
      <RadarChart outerRadius="65%" width={250} height={250} data={data.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" fontSize={12} />
        <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ActivityTypeContainer>
  );
}

const ActivityTypeContainer = styled.div`
  background-color: #282d30;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 2px 4px 0px #00000005;
`;
