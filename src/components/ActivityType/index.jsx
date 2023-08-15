import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

export default function ActivityType({ data }) {
  return (
    <div className="activitytype">
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
}
