import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

export default function ActivityType({ data }) {
  return (
    <RadarChart
      width={238}
      height={243}
      data={data.data}
      style={{
        backgroundColor: "#282D30",
        padding: "20px",
        borderRadius: "5px",
        margin: 10,
      }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
    </RadarChart>
  );
}
