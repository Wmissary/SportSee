import { RadialBarChart, RadialBar } from "recharts";
import styled from "styled-components";

const ScoreContainer = styled.div`
  background-color: #fbfbfb;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 2px 4px 0px #00000005;
`;

export default function Score({ data }) {
  return (
    <ScoreContainer>
      <RadialBarChart
        width={250}
        height={250}
        innerRadius="100%"
        data={[
          { todayScore: data.todayScore * 100, fill: "#FF0000" },
          { todayScore: 100, fill: "#FBFBFB" },
        ]}
        startAngle={210}
        endAngle={-30}
      >
        <RadialBar background={true} clockWise={true} dataKey="todayScore" />
        <text y={15} textAnchor="top" fontSize={15} fontWeight={500}>
          Score
        </text>
        <text x={96} y={120} textAnchor="top" fontSize={36}>
          {data.todayScore ? data.todayScore * 100 : 0}%
        </text>
        <text x={56} y={150} textAnchor="top" fontSize={22}>
          de votre objectif
        </text>
      </RadialBarChart>
    </ScoreContainer>
  );
}
