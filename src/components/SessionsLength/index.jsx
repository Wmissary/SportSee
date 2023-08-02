import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function SessionsLength({ data }) {
  const userSessions = data.sessions.map((session, index) => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    return {
      day: days[index],
      sessionLength: session.sessionLength,
    };
  });
  return (
    <div className="sessionslength">
      <h2 className="sessionslength__title">Durée moyenne des sessions</h2>
      <LineChart width={400} height={400} data={userSessions}>
        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
        <XAxis dataKey="day" axisLine={false} tickLine={false} />
        <Tooltip />
      </LineChart>
    </div>
  );
}
