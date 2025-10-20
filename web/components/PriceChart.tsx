"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function PriceChart({ data }: { data: any[] }) {
  return (
    <div style={{ width: '100%', height: 320 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="ts"
            tickFormatter={(v) => new Date(v).toLocaleDateString()}
            label={{ value: 'Time', position: 'insideBottom', offset: -5 }}
          />
          <YAxis
            tickFormatter={(v: number) => `$${Number(v).toFixed(2)}`}
            label={{ value: 'Price', angle: -90, position: 'insideLeft' }}
            width={70}
          />
          <Tooltip formatter={(v: any) => [`$${Number(v).toFixed(2)}`, 'Price']} />
          <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
