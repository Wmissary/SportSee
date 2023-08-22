import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import styled from "styled-components";

const DailyActivityContainer = styled.div`
  background-color: #fbfbfb;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 2px 4px 0px #00000005;
  display: flex;
  justify-content: center;
`;

export default function DailyActivity({ data }) {
  const UserActivity = data.sessions.map((session, index) => {
    return {
      day: index + 1,
      kilogram: session.kilogram,
      calories: session.calories,
    };
  });
  return (
    <DailyActivityContainer>
      <BarChart width={835} height={320} data={UserActivity} barCategoryGap={42} barGap={10}>
        <text y={25} textAnchor="top" fontSize={25}>
          Activité quotidienne
        </text>
        <XAxis dataKey="day" />
        <YAxis dataKey="calories" orientation="right" type="number" />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <Tooltip />
        <Legend iconType="circle" iconSize={8} align="right" verticalAlign="top" wrapperStyle={{ padding: "50px" }} />
        <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" radius={[20, 20, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" radius={[20, 20, 0, 0]} />
      </BarChart>
    </DailyActivityContainer>
  );
}
