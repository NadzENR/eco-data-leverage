
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', solarA: 96, windB: 82, bessC: 75 },
  { month: 'Feb', solarA: 95, windB: 80, bessC: 70 },
  { month: 'Mar', solarA: 94, windB: 78, bessC: 68 },
  { month: 'Apr', solarA: 95, windB: 79, bessC: 65 },
  { month: 'May', solarA: 95, windB: 78, bessC: 62 },
];

export const HealthTimeline = () => {
  return (
    <ResponsiveContainer width="100%" height={96}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" fontSize={10} />
        <YAxis domain={[50, 100]} fontSize={10} />
        <Tooltip 
          formatter={(value, name) => [
            `${value}`, 
            name === 'solarA' ? 'Solar Farm A' : 
            name === 'windB' ? 'Wind Farm B' : 'BESS C'
          ]}
          labelStyle={{ color: '#666' }}
        />
        <Line type="monotone" dataKey="solarA" stroke="#16a34a" strokeWidth={2} dot={{ r: 2 }} />
        <Line type="monotone" dataKey="windB" stroke="#eab308" strokeWidth={2} dot={{ r: 2 }} />
        <Line type="monotone" dataKey="bessC" stroke="#dc2626" strokeWidth={2} dot={{ r: 2 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};
