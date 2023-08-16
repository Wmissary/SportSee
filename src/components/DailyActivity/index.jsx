import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

export default function DailyActivity({ data }) {
  const UserActivity = data.sessions.map((session, index) => {
    return {
      day: index + 1,
      kilogram: session.kilogram,
      calories: session.calories,
    };
  });
  return (
    <BarChart
      width={835}
      height={320}
      data={UserActivity}
      barCategoryGap={42}
      barGap={10}
      style={{
        backgroundColor: "#FBFBFB",
        margin: 10,
        padding: 20,
      }}
    >
      <text y={25} textAnchor="top" fontSize={25}>
        Activité quotidienne
      </text>
      <XAxis dataKey="day" />
      <YAxis dataKey="kilogram" orientation="right" type="number" domain={["dataMin - 1", "dataMax + 2"]} />
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <Tooltip />
      <Legend iconType="circle" iconSize={8} align="right" verticalAlign="top" wrapperStyle={{ padding: "50px" }} />
      <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" radius={[20, 20, 0, 0]} />
      <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" radius={[20, 20, 0, 0]} />
    </BarChart>
  );
}
