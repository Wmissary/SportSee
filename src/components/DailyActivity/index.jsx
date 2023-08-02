import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function DailyActivity({ data }) {
  const UserActivity = data.sessions.map((session, index) => {
    return {
      day: index + 1,
      kilogram: session.kilogram,
      calories: session.calories,
    };
  });
  return (
    <div className="dailyactivity">
      <div className="dailyactivity__header">
        <h2 className="dailyactivity__title">Activité quotidienne</h2>
        <div className="dailyactivity__header__legend">
          <div className="dailyactivity__header__legend__item">
            <div className="dailyactivity__header__legend__item__circle dailyactivity__header__legend__item__circle--black"></div>
            <p className="dailyactivity__header__legend__item__text">Poids (kg)</p>
          </div>
          <div className="dailyactivity__header__legend__item">
            <div className="dailyactivity__header__legend__item__circle dailyactivity__header__legend__item__circle--black"></div>
            <p className="dailyactivity__header__legend__item__text">Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <div className="dailyactivity__content">
        <BarChart width={500} height={300} data={UserActivity}>
          <XAxis dataKey="day" />
          <YAxis orientation="right" type="number" domain={["dataMin", "auto"]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="calories" fill="#82ca9d" name="Calories" />
          <Bar dataKey="kilogram" fill="#8884d8" name="Weight" />
        </BarChart>
      </div>
    </div>
  );
}
