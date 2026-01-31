"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";
import {
  ChevronDown,
  Repeat,
  Download,
  Star,
  TrendingUp,
  Calendar,
  DollarSign,
  Bed,
} from "lucide-react";

// Aylık gelir verisi - RevenueChart bileşeni için
const monthlyRevenueData = [
  { month: "Oca", revenue: 45000, bookings: 45 },
  { month: "Şub", revenue: 52000, bookings: 52 },
  { month: "Mar", revenue: 48000, bookings: 48 },
  { month: "Nis", revenue: 61000, bookings: 61 },
  { month: "May", revenue: 58000, bookings: 58 },
  { month: "Haz", revenue: 72000, bookings: 72 },
  { month: "Tem", revenue: 85000, bookings: 85 },
  { month: "Ağu", revenue: 92000, bookings: 92 },
];

// Oda türleri dağılımı - RoomTypeDistribution bileşeni için
const roomTypeData = [
  { name: "Standart Oda", value: 35, color: "#8884d8" },
  { name: "Deluxe Oda", value: 25, color: "#83a6ed" },
  { name: "Suit Oda", value: 20, color: "#8dd1e1" },
  { name: "Aile Odası", value: 15, color: "#a4de6c" },
  { name: "VIP Oda", value: 5, color: "#d0ed57" },
];

// Haftalık doluluk oranı - WeeklyOccupancyChart bileşeni için
const weeklyOccupancyData = [
  { day: "Pzt", occupancy: 65, revenue: 8500 },
  { day: "Sal", occupancy: 72, revenue: 9200 },
  { day: "Çar", occupancy: 68, revenue: 8800 },
  { day: "Per", occupancy: 85, revenue: 11000 },
  { day: "Cum", occupancy: 92, revenue: 12000 },
  { day: "Cmt", occupancy: 95, revenue: 12500 },
  { day: "Paz", occupancy: 78, revenue: 10000 },
];

// Müşteri memnuniyeti - CustomerSatisfaction bileşeni için
const satisfactionData = [
  { category: "cleanliness", rating: 4.8, count: 156 },
  { category: "service", rating: 4.6, count: 142 },
  { category: "location", rating: 4.9, count: 168 },
  { category: "price", rating: 4.3, count: 134 },
  { category: "overall", rating: 4.7, count: 189 },
];

// Pie chart renkleri - RoomTypeDistribution bileşeni için
const COLORS = roomTypeData.map((d) => d.color);

// StatsCard bileşeni için prop interface'i
interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ReactNode;
  trend?: string;
  trendValue?: string;
}

// İstatistik kartları bileşeni - Ana sayfada 4 adet kullanılıyor
const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtitle, icon, trend, trendValue }) => (
  <Card className="flex flex-col h-full">
    <CardHeader className="flex items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
        {trend && (
          <div className="flex items-center space-x-1">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 font-medium">{trendValue}</span>
          </div>
        )}
      </div>
    </CardContent>
  </Card>
);

// Aylık gelir ve rezervasyon trendi grafiği - LineChart kullanıyor
const RevenueChart = () => {
  const t = useTranslations("HotelStatistics");
  return (
    <Card className="col-span-2 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-sm font-medium">{t("monthlyRevenueTrend")}</CardTitle>
        <p className="text-xs text-muted-foreground">{t("monthlyRevenueDescription")}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyRevenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={3} name={`${t("revenue")} (₺)`} />
            <Line yAxisId="right" type="monotone" dataKey="bookings" stroke="#82ca9d" strokeWidth={3} name={t("bookings")} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

// Oda türleri dağılımı grafiği - PieChart kullanıyor
const RoomTypeDistribution = () => {
  const t = useTranslations("HotelStatistics");
  return (
    <Card className="col-span-1 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-sm font-medium">{t("roomTypeDistribution")}</CardTitle>
        <p className="text-xs text-muted-foreground">{t("roomTypeDescription")}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={roomTypeData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {roomTypeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap justify-center mt-2 text-xs">
          {roomTypeData.map((item) => (
            <div key={item.name} className="flex items-center mr-3 mb-1">
              <span className="h-2 w-2 rounded-full mr-1" style={{ backgroundColor: item.color }} />
              <span className="text-muted-foreground">{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Haftalık doluluk ve gelir grafiği - AreaChart kullanıyor
const WeeklyOccupancyChart = () => {
  const t = useTranslations("HotelStatistics");
  return (
    <Card className="col-span-1 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-sm font-medium">{t("weeklyOccupancy")}</CardTitle>
        <p className="text-xs text-muted-foreground">{t("weeklyOccupancyDescription")}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={weeklyOccupancyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Area yAxisId="left" type="monotone" dataKey="occupancy" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} name={`${t("occupancy")} (%)`} />
            <Area yAxisId="right" type="monotone" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} name={`${t("revenue")} (₺)`} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

// Müşteri memnuniyeti bileşeni - Progress bar'lar ile kategori bazında değerlendirmeler
const CustomerSatisfaction = () => {
  const t = useTranslations("HotelStatistics");
  return (
    <Card className="col-span-1 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-sm font-medium">{t("customerSatisfaction")}</CardTitle>
        <p className="text-xs text-muted-foreground">{t("customerSatisfactionDescription")}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-3">
          {satisfactionData.map((item, index) => (
            <div key={index} className="space-y-1">
                             <div className="flex items-center justify-between">
                 <span className="text-sm font-medium">{t(item.category)}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold">{item.rating}</span>
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                </div>
              </div>
                             <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                 <div 
                   className="bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-500 dark:to-yellow-700 h-2 rounded-full" 
                   style={{ width: `${(item.rating / 5) * 100}%` }}
                 ></div>
               </div>
                             <p className="text-xs text-muted-foreground">{item.count} {t("reviews")}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// En popüler odalar tablosu - Gradient arka planlı kartlar ile sıralama
const TopRooms = () => {
  const t = useTranslations("HotelStatistics");
  return (
    <Card className="col-span-1 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-sm font-medium">{t("topRooms")}</CardTitle>
        <p className="text-xs text-muted-foreground">{t("topRoomsDescription")}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-3">
          {[
            { name: "Deluxe Deniz Manzaralı", revenue: "₺45.200", occupancy: "94%", rating: "4.9" },
            { name: "Standart Oda", revenue: "₺28.500", occupancy: "88%", rating: "4.6" },
            { name: "Suit Oda", revenue: "₺52.800", occupancy: "82%", rating: "4.8" },
            { name: "Aile Odası", revenue: "₺32.100", occupancy: "90%", rating: "4.7" },
          ].map((room, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-lg border dark:border-gray-700">
              <div className="flex-1">
                <p className="text-sm font-medium">{room.name}</p>
                <div className="flex items-center space-x-3 text-xs text-muted-foreground mt-1">
                  <span>₺{room.revenue}</span>
                  <span>•</span>
                                     <span>{room.occupancy} {t("occupancyRate")}</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                    <span>{room.rating}</span>
          </div>
          </div>
        </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                #{index + 1}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Ana istatistik sayfası bileşeni - Tüm grafikleri ve tabloları birleştiriyor
const StatisticPage = () => {
  const t = useTranslations("HotelStatistics");
  return (
<div className="flex-1 space-y-6 p-8 pt-6 dark:bg-card">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
        <div className="flex items-center space-x-2">
           <Button variant="outline">
             <Calendar className="h-4 w-4 mr-2" />
             {t("dateRange")}
             <ChevronDown className="h-4 w-4 ml-2" />
           </Button>
           <Button variant="outline">
             <Download className="h-4 w-4 mr-2" />
             {t("exportCsv")}
           </Button>
           <Button>
             <Repeat className="h-4 w-4 mr-2" />
             {t("refresh")}
           </Button>
        </div>
      </div>

             {/* İstatistik Kartları - Toplam Gelir, Rezervasyon Sayısı, Ortalama Doluluk, Müşteri Puanı */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
           title={t("totalRevenue")}
           value="₺521.400"
           subtitle={t("thisMonth")}
           icon={<DollarSign className="h-4 w-4 text-green-500" />}
           trend="+12.5%"
           trendValue={t("comparedToLastMonth")}
         />
         <StatsCard
           title={t("totalBookings")}
           value="1.247"
           subtitle={t("thisMonth")}
           icon={<Calendar className="h-4 w-4 text-blue-500" />}
           trend="+8.3%"
           trendValue={t("comparedToLastMonth")}
         />
         <StatsCard
           title={t("averageOccupancy")}
           value="87.2%"
           subtitle={t("thisMonth")}
           icon={<Bed className="h-4 w-4 text-purple-500" />}
           trend="+5.1%"
           trendValue={t("comparedToLastMonth")}
        />
        <StatsCard
           title={t("customerRating")}
           value="4.7"
           subtitle={t("average")}
           icon={<Star className="h-4 w-4 text-yellow-500" />}
           trend="+0.2"
           trendValue={t("comparedToLastMonth")}
         />
      </div>

             {/* Grafikler ve Tablolar Grid'i - RevenueChart, RoomTypeDistribution, CustomerSatisfaction, WeeklyOccupancyChart, TopRooms */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <RevenueChart />
        <RoomTypeDistribution />
        <CustomerSatisfaction />
        <WeeklyOccupancyChart />
        <TopRooms />
      </div>
    </div>
  );
};

export default StatisticPage;
