"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function PriceChart({ data }: { data: any[] }) {
  return (
    <div style={{ width: '100%', height: 320 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis
            dataKey="ts"
            tickFormatter={(v) => new Date(v).toLocaleDateString()}
            label={{ value: 'Time', position: 'insideBottom', offset: -5 }}
          />
          <YAxis
            label={{ value: 'Price', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#2563eb" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
