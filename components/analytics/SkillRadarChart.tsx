'use client';

import { useTranslations } from 'next-intl';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import type { SkillType } from '@/stores/useAnalyticsStore';

interface SkillRadarChartProps {
  data: { skill: SkillType; value: number }[];
}

const SKILL_LABELS: Record<SkillType, string> = {
  reading: '📖 Reading',
  writing: '✍️ Writing',
  speaking: '🗣️ Speaking',
  listening: '👂 Listening',
};

export function SkillRadarChart({ data }: SkillRadarChartProps) {
  const t = useTranslations('analytics');

  const formattedData = data.map(item => ({
    ...item,
    subject: SKILL_LABELS[item.skill] || item.skill,
    fullMark: 100,
  }));

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={formattedData}>
          <PolarGrid
            stroke="var(--border)"
            strokeDasharray="3 3"
          />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: 'var(--foreground)', fontSize: 12, fontWeight: 500 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: 'var(--muted-foreground)', fontSize: 10 }}
            tickFormatter={(value) => `${value}%`}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
            formatter={(value) => [`${value}%`, t('accuracy')]}
          />
          <Radar
            name={t('skillBalance')}
            dataKey="value"
            stroke="var(--primary)"
            fill="var(--primary)"
            fillOpacity={0.3}
            strokeWidth={2}
            dot={{ fill: 'var(--primary)', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
