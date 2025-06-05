
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', loss: 1.2 },
  { day: 'Tue', loss: 1.8 },
  { day: 'Wed', loss: 2.1 },
  { day: 'Thu', loss: 2.7 },
  { day: 'Fri', loss: 3.0 },
  { day: 'Sat', loss: 3.1 },
  { day: 'Sun', loss: 3.2 },
];

export const SoilingTrendChart = () => {
  return (
    <ResponsiveContainer width="100%" height={128}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="day" fontSize={12} />
        <YAxis domain={[0, 4]} fontSize={12} />
        <Tooltip 
          formatter={(value) => [`${value}%`, 'Energy Loss']}
          labelStyle={{ color: '#666' }}
        />
        <Area 
          type="monotone" 
          dataKey="loss" 
          stroke="#ea580c" 
          fill="#ea580c" 
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
