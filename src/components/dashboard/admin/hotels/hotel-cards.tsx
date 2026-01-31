import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { adminService } from '@/services';
import { 
  Building2, 
  CheckCircle, 
  Calendar, 
  TrendingUp,
  Target,
  TrendingDown
} from 'lucide-react';

interface StatsData {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  target?: string;
  progress?: number;
  trend?: 'up' | 'down' | 'neutral';
}

const HotelCards = () => {
  const t = useTranslations("AdminHotels");
  const [statsData, setStatsData] = useState<StatsData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        
        // API'den verileri çek
        const [totalHotelsRes, totalEarningsRes, totalReservationsRes] = await Promise.all([
          adminService.getTotalHotels(),
          adminService.getTotalEarnings(),
          adminService.getTotalReservations()
        ]);

        // Tüm otelleri çek (aktif olmayanları hesaplamak için)
        const allHotelsRes = await adminService.getAllHotels();
        const totalHotels = totalHotelsRes.data?.totalHotels || 0;
        const activeHotels = allHotelsRes.hotels?.filter((hotel: { isActive: boolean }) => hotel.isActive)?.length || 0;
        const inactiveHotels = totalHotels - activeHotels;

        const totalEarnings = totalEarningsRes.data?.totalEarnings || 0;
        const totalReservations = totalReservationsRes.data?.totalReservations || 0;

        // Hedef değerler (örnek olarak)
        const targets = {
          totalHotels: 50,
          activeHotels: 45,
          totalReservations: 5000,
          totalEarnings: 25000000 // 25M TL
        };

        // Progress hesaplamaları
        const calculateProgress = (current: number, target: number) => {
          return Math.min((current / target) * 100, 100);
        };

        // Trend hesaplamaları (örnek olarak)
        const calculateTrend = (current: number, target: number) => {
          const percentage = (current / target) * 100;
          if (percentage >= 90) return 'up';
          if (percentage >= 70) return 'neutral';
          return 'down';
        };

        const newStatsData: StatsData[] = [
          {
            title: t("allRegisteredHotels"),
            value: totalHotels.toString(),
            subtitle: `${inactiveHotels} ${t("inactive")}`,
            icon: <Building2 className="h-6 w-6" />,
            target: targets.totalHotels.toString(),
            progress: calculateProgress(totalHotels, targets.totalHotels),
            trend: calculateTrend(totalHotels, targets.totalHotels)
          },
          {
            title: t("activeHotels"),
            value: activeHotels.toString(),
            subtitle: `${((activeHotels / totalHotels) * 100).toFixed(1)}% ${t("activeRate")}`,
            icon: <CheckCircle className="h-6 w-6" />,
            target: targets.activeHotels.toString(),
            progress: calculateProgress(activeHotels, targets.activeHotels),
            trend: calculateTrend(activeHotels, targets.activeHotels)
          },
          {
            title: t("totalBookings"),
            value: totalReservations.toLocaleString('tr-TR'),
            subtitle: `${t("thisMonth")}`,
            icon: <Calendar className="h-6 w-6" />,
            target: targets.totalReservations.toLocaleString('tr-TR'),
            progress: calculateProgress(totalReservations, targets.totalReservations),
            trend: calculateTrend(totalReservations, targets.totalReservations)
          },
          {
            title: t("totalRevenue"),
            value: `${(totalEarnings / 1000000).toFixed(1)}M TL`,
            subtitle: `${t("thisMonth")}`,
            icon: <TrendingUp className="h-6 w-6" />,
            target: `${(targets.totalEarnings / 1000000).toFixed(1)}M TL`,
            progress: calculateProgress(totalEarnings, targets.totalEarnings),
            trend: calculateTrend(totalEarnings, targets.totalEarnings)
          },
        ];

        setStatsData(newStatsData);
      } catch (error) {
        console.error('Stats yüklenirken hata:', error);
        // Fallback veriler
        setStatsData([
          {
            title: t("allRegisteredHotels"),
            value: "0",
            subtitle: "0 inactive",
            icon: <Building2 className="h-6 w-6" />,
            target: "50",
            progress: 0,
            trend: 'down'
          },
          {
            title: t("activeHotels"),
            value: "0",
            subtitle: "0% active rate",
            icon: <CheckCircle className="h-6 w-6" />,
            target: "45",
            progress: 0,
            trend: 'down'
          },
          {
            title: t("totalBookings"),
            value: "0",
            subtitle: "this month",
            icon: <Calendar className="h-6 w-6" />,
            target: "5,000",
            progress: 0,
            trend: 'down'
          },
          {
            title: t("totalRevenue"),
            value: "0M TL",
            subtitle: "this month",
            icon: <TrendingUp className="h-6 w-6" />,
            target: "25M TL",
            progress: 0,
            trend: 'down'
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [t]);

  const getTrendColor = (trend: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-yellow-600';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return 'bg-green-500';
    if (progress >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

     if (loading) {
     return (
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {[...Array(4)].map((_, i) => (
           <Card key={i} className="bg-card border border-border animate-pulse">
             <CardHeader className="pb-3">
               <div className="h-6 w-6 bg-gray-300 rounded"></div>
             </CardHeader>
             <CardContent className="pt-0">
               <div className="space-y-2">
                 <div className="h-8 w-16 bg-gray-300 rounded"></div>
                 <div className="h-4 w-24 bg-gray-300 rounded"></div>
               </div>
             </CardContent>
           </Card>
         ))}
       </div>
     );
   }

     return (
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
       {statsData.map((stat, index) => (
         <Card key={index} className="bg-card border border-border hover:bg-accent/50 transition-all duration-300 cursor-pointer group">
           <CardHeader >
             <div className="flex items-center justify-between">
               <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                 {stat.icon}
               </div>
               {stat.trend && (
                 <div className={`p-1 rounded-full ${getTrendColor(stat.trend)}`}>
                   {stat.trend === 'up' && <TrendingUp className="h-4 w-4" />}
                   {stat.trend === 'down' && <TrendingDown className="h-4 w-4" />}
                   {stat.trend === 'neutral' && <Target className="h-4 w-4" />}
                 </div>
               )}
             </div>
           </CardHeader>
           <CardContent className="pt-0">
             <div className="space-y-3">
               {/* Ana Değer */}
               <div>
                 <p className="text-2xl font-bold text-foreground">
                   {stat.value}
                 </p>
                 <p className="text-sm text-muted-foreground mt-1">
                   {stat.title}
                 </p>
               </div>

               {/* Alt Bilgi */}
               <div className="space-y-2">
                 <p className="text-xs text-muted-foreground">
                   {stat.subtitle}
                 </p>
                 
                 {/* Hedef ve Progress */}
                 {stat.target && stat.progress !== undefined && (
                   <div className="space-y-1">
                     <div className="flex justify-between items-center text-xs">
                       <span className="text-muted-foreground">{t("target")}: {stat.target}</span>
                       <span className="font-medium">{stat.progress.toFixed(0)}%</span>
                     </div>
                     <div className="w-full bg-gray-200 rounded-full h-2">
                       <div 
                         className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(stat.progress)}`}
                         style={{ width: `${stat.progress}%` }}
                       ></div>
                     </div>
                   </div>
                 )}
               </div>
             </div>
           </CardContent>
         </Card>
       ))}
     </div>
   );
};

export default HotelCards;