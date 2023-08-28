import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import styled from "styled-components";
import { getUserActivityMock as getUserActivity } from "../../services/getUserActivity";

export default function DailyActivity({ userId }) {
  const [userActivity, setUserActivity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserActivity(userId);
        setUserActivity(
          data.sessions.map((session, index) => ({
            day: index + 1,
            kilogram: session.kilogram,
            calories: session.calories,
          })),
        );
      } catch (error) {
        // Gérer l'erreur
      }
    };

    fetchData();
  }, [userId]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <TooltipContainer>
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}kCal`}</p>
        </TooltipContainer>
      );
    }
  };

  return (
    <DailyActivityContainer>
      <BarChart width={835} height={320} data={userActivity} barCategoryGap={42} barGap={10}>
        <text y={25} textAnchor="top" fontSize={25}>
          Activité quotidienne
        </text>
        <XAxis dataKey="day" />
        <YAxis dataKey="calories" orientation="right" type="number" />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <Tooltip content={<CustomTooltip />} />
        <Legend iconType="circle" iconSize={8} align="right" verticalAlign="top" wrapperStyle={{ padding: "50px" }} />
        <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" radius={[20, 20, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" radius={[20, 20, 0, 0]} />
      </BarChart>
    </DailyActivityContainer>
  );
}

const DailyActivityContainer = styled.div`
  background-color: #fbfbfb;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 2px 4px 0px #00000005;
  display: flex;
  justify-content: center;
`;

const TooltipContainer = styled.div`
  background-color: #e60000;
  width: 70px;
  height: 100px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-weight: 500;
`;
