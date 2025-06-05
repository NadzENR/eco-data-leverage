
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', pr: 92.1 },
  { day: 'Tue', pr: 94.2 },
  { day: 'Wed', pr: 91.8 },
  { day: 'Thu', pr: 93.5 },
  { day: 'Fri', pr: 94.8 },
  { day: 'Sat', pr: 93.2 },
  { day: 'Sun', pr: 94.2 },
];

export const PRTrendChart = () => {
  return (
    <ResponsiveContainer width="100%" height={128}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="day" fontSize={12} />
        <YAxis domain={[90, 96]} fontSize={12} />
        <Tooltip 
          formatter={(value) => [`${value}%`, 'PR']}
          labelStyle={{ color: '#666' }}
        />
        <Line 
          type="monotone" 
          dataKey="pr" 
          stroke="#16a34a" 
          strokeWidth={2}
          dot={{ fill: '#16a34a', strokeWidth: 2, r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
