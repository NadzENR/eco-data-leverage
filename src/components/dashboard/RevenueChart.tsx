
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { category: 'PPA', value: 82.0, color: '#3b82f6' },
  { category: 'Spot', value: 89.2, color: '#8b5cf6' },
  { category: 'Actual', value: 84.5, color: '#16a34a' },
];

export const RevenueChart = () => {
  return (
    <ResponsiveContainer width="100%" height={128}>
      <BarChart data={data} layout="horizontal">
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis type="number" domain={[75, 95]} fontSize={12} />
        <YAxis dataKey="category" type="category" fontSize={12} />
        <Tooltip 
          formatter={(value) => [`€${value}`, 'Revenue/MWh']}
          labelStyle={{ color: '#666' }}
        />
        <Bar dataKey="value" fill="#16a34a" />
      </BarChart>
    </ResponsiveContainer>
  );
};
