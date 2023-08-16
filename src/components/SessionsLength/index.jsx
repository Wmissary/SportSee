import { LineChart, Line, XAxis, Tooltip, YAxis } from "recharts";

export default function SessionsLength({ data }) {
  const userSessions = data.sessions.map((session, index) => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    return {
      day: days[index],
      sessionLength: session.sessionLength,
    };
  });
  return (
    <LineChart
      width={238}
      height={243}
      data={userSessions}
      style={{
        backgroundColor: "#FF0000",
        padding: "20px",
        borderRadius: "5px",
        margin: 10,
      }}
    >
      <text y={15} textAnchor="top" fontSize={18} fill="#FFFFFF">
        Durée moyenne des sessions
      </text>
      <Line type="bump" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={3} />
      <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#FFFFFF" }} />
      <YAxis dataKey="sessionLength" axisLine={false} tickLine={false} tick={{ fill: "#FFFFFF" }} hide />
      <Tooltip />
    </LineChart>
  );
}
