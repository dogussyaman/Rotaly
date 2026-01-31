"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart } from "recharts"
import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export function ChartLineLabelCustom() {
  const t = useTranslations("Dashboard.ChartLineLabelCustom");

  const chartData = [
    { ay: t("months.january"), müşteri: 275, fill: "var(--color-chrome)" },
    { ay: t("months.february"), müşteri: 200, fill: "var(--color-safari)" },
    { ay: t("months.march"), müşteri: 187, fill: "var(--color-firefox)" },
    { ay: t("months.april"), müşteri: 173, fill: "var(--color-edge)" },
    { ay: t("months.may"), müşteri: 90, fill: "var(--color-other)" },
    { ay: t("months.june"), müşteri: 90, fill: "var(--color-other)" },
  ];

  const chartConfig = {
    müşteri: {
      label: t("customerLabel"),
      color: "var(--chart-2)",
    },
    ocak: {
      label: t("months.january"),
      color: "var(--chart-1)",
    },
    şubat: {
      label: t("months.february"),
      color: "var(--chart-2)",
    },
    mart: {
      label: t("months.march"),
      color: "var(--chart-3)",
    },
    nisan: {
      label: t("months.april"),
      color: "var(--chart-4)",
    },
    mayıs: {
      label: t("months.may"),
      color: "var(--chart-5)",
    },
  } satisfies ChartConfig;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{t("cardTitle")}</CardTitle>
        <CardDescription>{t("cardDescription")}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey="ay"
                  hideLabel
                />
              }
            />
            <Line
              dataKey="müşteri"
              type="natural"
              stroke="var(--color-müşteri)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-müşteri)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                dataKey="ay"
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-row items-start gap-2 text-sm justify-between h-full">
       <div>
       <div className="flex gap-2 leading-none font-medium">
          {t("increaseText", { percentage: 5.2 })} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          {t("totalCustomersText")}
        </div>
       </div>
       <div className="text-2xl font-bold">
        {t("totalCustomersCount", { count: chartData.reduce((acc, curr) => acc + curr.müşteri, 0) })}
       </div>
      </CardFooter>
    </Card>
  );
}
