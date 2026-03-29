'use client';

import { useTranslations } from 'next-intl';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

interface TimeDistributionChartProps {
  data: { phase: number; time: number; name: string }[];
}

const PHASE_COLORS = [
  'var(--chart-1)', // Gold
  'var(--chart-2)', // Sage
  'var(--chart-3)', // Teal
  'var(--chart-4)', // Purple
  'var(--chart-5)', // Coral
];

export function TimeDistributionChart({ data }: TimeDistributionChartProps) {
  const t = useTranslations('analytics');

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--border)"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            type="number"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
            tickFormatter={(value) => `${value}m`}
          />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--foreground)', fontSize: 12, fontWeight: 500 }}
            width={75}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
            labelStyle={{ color: 'var(--foreground)', fontWeight: 600 }}
            formatter={(value) => [`${value} ${t('minutes')}`, t('timeSpent')]}
          />
          <Bar
            dataKey="time"
            radius={[0, 6, 6, 0]}
            maxBarSize={40}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={PHASE_COLORS[entry.phase - 1] || PHASE_COLORS[0]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
