'use client';

import { useTranslations } from 'next-intl';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

interface AccuracyTrendChartProps {
  data: { date: string; accuracy: number }[];
}

export function AccuracyTrendChart({ data }: AccuracyTrendChartProps) {
  const t = useTranslations('analytics');

  // Format date for display
  const formattedData = data.map(item => ({
    ...item,
    displayDate: new Date(item.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    }),
  }));

  // Calculate average accuracy
  const validData = data.filter(d => d.accuracy > 0);
  const avgAccuracy = validData.length > 0
    ? Math.round(validData.reduce((sum, d) => sum + d.accuracy, 0) / validData.length)
    : 0;

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="accuracyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="var(--border)" 
            vertical={false}
          />
          <XAxis
            dataKey="displayDate"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
            dy={10}
          />
          <YAxis
            domain={[0, 100]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
            tickFormatter={(value) => `${value}%`}
            dx={-10}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
            labelStyle={{ color: 'var(--foreground)', fontWeight: 600 }}
            formatter={(value) => [`${value}%`, t('accuracy')]}
          />
          <ReferenceLine
            y={avgAccuracy}
            stroke="var(--primary)"
            strokeDasharray="5 5"
            strokeOpacity={0.5}
          />
          <Line
            type="monotone"
            dataKey="accuracy"
            stroke="var(--primary)"
            strokeWidth={3}
            dot={{ fill: 'var(--primary)', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: 'var(--primary)' }}
            fill="url(#accuracyGradient)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
