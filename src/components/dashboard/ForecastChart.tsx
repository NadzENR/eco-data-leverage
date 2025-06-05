
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', forecast: 0, actual: 0 },
  { time: '06:00', forecast: 15, actual: 12 },
  { time: '12:00', forecast: 85, actual: 78 },
  { time: '18:00', forecast: 20, actual: 25 },
  { time: '24:00', forecast: 0, actual: 0 },
];

export const ForecastChart = () => {
  return (
    <ResponsiveContainer width="100%" height={128}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="time" fontSize={12} />
        <YAxis fontSize={12} />
        <Tooltip 
          formatter={(value, name) => [`${value} MW`, name === 'forecast' ? 'Forecast' : 'Actual']}
          labelStyle={{ color: '#666' }}
        />
        <Bar dataKey="forecast" fill="#3b82f6" fillOpacity={0.3} />
        <Line 
          type="monotone" 
          dataKey="actual" 
          stroke="#2563eb" 
          strokeWidth={2}
          dot={{ fill: '#2563eb', strokeWidth: 2, r: 3 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
