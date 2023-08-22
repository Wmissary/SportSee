import { LineChart, Line, XAxis, Tooltip, YAxis } from "recharts";
import styled from "styled-components";

const SessionsLengthContainer = styled.div`
  background-color: #ff0000;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 2px 4px 0px #00000005;
`;

export default function SessionsLength({ data }) {
  const userSessions = data.sessions.map((session, index) => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    return {
      day: days[index],
      sessionLength: session.sessionLength,
    };
  });
  return (
    <SessionsLengthContainer>
      <LineChart width={250} height={250} data={userSessions}>
        <text y={15} textAnchor="top" fontSize={15} fill="#FFFFFF">
          Durée moyenne des sessions
        </text>
        <Line type="bump" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={3} />
        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#FFFFFF" }} />
        <YAxis dataKey="sessionLength" axisLine={false} tickLine={false} tick={{ fill: "#FFFFFF" }} hide />
        <Tooltip />
      </LineChart>
    </SessionsLengthContainer>
  );
}
