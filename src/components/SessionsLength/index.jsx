import { useEffect, useState } from "react";

import { LineChart, Line, XAxis, Tooltip, YAxis } from "recharts";
import styled from "styled-components";

import { getUserAverageSessions } from "../../services/getUserAverageSessions";

export default function SessionsLength({ userId }) {
  const [userSessions, setUserSessions] = useState([]);

  useEffect(() => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    const fetchData = async () => {
      try {
        const data = await getUserAverageSessions(userId);
        setUserSessions(
          data.sessions.map((session, index) => ({
            day: days[index],
            sessionLength: session.sessionLength,
          })),
        );
      } catch (error) {
        // Gérer l'erreur
      }
    };
    fetchData();
  }, [userId]);

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <TooltipContainer>
          <p>{`${payload[0].value} min`}</p>
        </TooltipContainer>
      );
    }
  };

  return (
    <SessionsLengthContainer>
      <LineChart width={250} height={250} data={userSessions}>
        <text y={15} textAnchor="top" fontSize={15} fill="#FFFFFF">
          Durée moyenne des sessions
        </text>
        <Line type="bump" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={3} />
        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#FFFFFF" }} />
        <YAxis dataKey="sessionLength" axisLine={false} tickLine={false} tick={{ fill: "#FFFFFF" }} hide />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </SessionsLengthContainer>
  );
}

const SessionsLengthContainer = styled.div`
  background-color: #ff0000;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 2px 4px 0px #00000005;
`;

const TooltipContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
