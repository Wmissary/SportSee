import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import styled from "styled-components";

const ActivityTypeContainer = styled.div`
  background-color: #282d30;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 2px 4px 0px #00000005;
`;

export default function ActivityType({ data }) {
  return (
    <ActivityTypeContainer>
      <RadarChart width={250} height={250} data={data.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" fontSize={12} />
        <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ActivityTypeContainer>
  );
}
