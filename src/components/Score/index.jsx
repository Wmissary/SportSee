import { RadialBarChart, RadialBar } from "recharts";

export default function Score({ data }) {
  return (
    <RadialBarChart
      width={238}
      height={243}
      innerRadius="100%"
      data={[
        { todayScore: data.todayScore * 100, fill: "#FF0000" },
        { todayScore: 100, fill: "#FBFBFB" },
      ]}
      startAngle={210}
      endAngle={-30}
      style={{
        padding: 20,
        margin: 10,
        backgroundColor: "#FBFBFB",
      }}
    >
      <RadialBar background={true} clockWise={true} dataKey="todayScore" />
      <text y={15} textAnchor="top" fontSize={18}>
        Score
      </text>
      <text x={90} y={120} textAnchor="top" fontSize={36}>
        {data.todayScore * 100}%
      </text>
      <text x={50} y={150} textAnchor="top" fontSize={22}>
        de votre objectif
      </text>
    </RadialBarChart>
  );
}
