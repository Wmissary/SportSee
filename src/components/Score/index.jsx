import { RadialBarChart, RadialBar } from "recharts";

export default function Score({ data }) {
  return (
    <div className="Score">
      <h2>Score</h2>
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="100%"
        data={[
          { todayScore: data.todayScore * 100, fill: "#FF0000" },
          { todayScore: 100, fill: "#FFF" },
        ]}
        startAngle={210}
        endAngle={-30}
      >
        <RadialBar background={true} clockWise={true} dataKey="todayScore" />
      </RadialBarChart>
      <p>{data.todayScore * 100}%</p>
      <p>de votre objectif</p>
    </div>
  );
}
