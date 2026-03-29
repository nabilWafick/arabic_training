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
  Legend,
} from 'recharts';

interface WeeklyActivityChartProps {
  data: { day: string; time: number; exercises: number }[];
}

export function WeeklyActivityChart({ data }: WeeklyActivityChartProps) {
  const t = useTranslations('analytics');

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--border)"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
          />
          <YAxis
            yAxisId="left"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
            tickFormatter={(value) => `${value}m`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
            labelStyle={{ color: 'var(--foreground)', fontWeight: 600 }}
            formatter={(value, name) => {
              if (name === 'time') return [`${value} ${t('minutes')}`, t('timeSpent')];
              return [value, t('exercises')];
            }}
          />
          <Legend
            wrapperStyle={{ paddingTop: 20 }}
            formatter={(value) => {
              if (value === 'time') return t('timeSpent');
              return t('exercises');
            }}
          />
          <Bar
            yAxisId="left"
            dataKey="time"
            fill="var(--primary)"
            radius={[4, 4, 0, 0]}
            maxBarSize={30}
          />
          <Bar
            yAxisId="right"
            dataKey="exercises"
            fill="var(--accent)"
            radius={[4, 4, 0, 0]}
            maxBarSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
