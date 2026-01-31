import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { adminService } from '@/services';
import { 
  Users, 
  UserPlus, 
  ShoppingCart, 
  UserX,
  TrendingUp,
  Target,
  TrendingDown
} from 'lucide-react';

// Backend'den gelen user veri yapısı
interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

interface StatsData {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  target?: string;
  progress?: number;
  trend?: 'up' | 'down' | 'neutral';
}

const CustomerCards = () => {
  const t = useTranslations("Customers");
  const [statsData, setStatsData] = useState<StatsData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        
        // API'den verileri çek
        const [totalCustomersRes, allUsersRes] = await Promise.all([
          adminService.getTotalCustomers(),
          adminService.getAllUsers()
        ]);

        const totalCustomers = totalCustomersRes.data?.totalCustomers || 0;
        const allUsers = allUsersRes.data || [];
        
        // İstatistikleri hesapla
        const thisMonthUsers = allUsers.filter((user: User) => {
          const userDate = new Date(user.createdAt);
          const now = new Date();
          return userDate.getMonth() === now.getMonth() && userDate.getFullYear() === now.getFullYear();
        }).length;

        const inactiveUsers = allUsers.filter((user: User) => !user.isVerified).length;
        const activeUsers = totalCustomers - inactiveUsers;

        // Hedef değerler (örnek olarak)
        const targets = {
          totalCustomers: 1000,
          thisMonthUsers: 100,
          purchasedUsers: 500,
          inactiveUsers: 50
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
            title: t("allRegisteredUsers"),
            value: totalCustomers.toString(),
            subtitle: `${activeUsers} ${t("active")}`,
            icon: <Users className="h-6 w-6" />,
            target: targets.totalCustomers.toString(),
            progress: calculateProgress(totalCustomers, targets.totalCustomers),
            trend: calculateTrend(totalCustomers, targets.totalCustomers)
          },
          {
            title: t("joinedThisMonth"),
            value: thisMonthUsers.toString(),
            subtitle: `${((thisMonthUsers / totalCustomers) * 100).toFixed(1)}% ${t("ofTotal")}`,
            icon: <UserPlus className="h-6 w-6" />,
            target: targets.thisMonthUsers.toString(),
            progress: calculateProgress(thisMonthUsers, targets.thisMonthUsers),
            trend: calculateTrend(thisMonthUsers, targets.thisMonthUsers)
          },
          {
            title: t("purchasedIn30Days"),
            value: "0", // Bu veri rezervasyon API'sinden gelebilir
            subtitle: t("thisMonth"),
            icon: <ShoppingCart className="h-6 w-6" />,
            target: targets.purchasedUsers.toString(),
            progress: 0,
            trend: 'down'
          },
          {
            title: t("inactiveFor90Days"),
            value: inactiveUsers.toString(),
            subtitle: `${((inactiveUsers / totalCustomers) * 100).toFixed(1)}% ${t("inactiveRate")}`,
            icon: <UserX className="h-6 w-6" />,
            target: targets.inactiveUsers.toString(),
            progress: calculateProgress(inactiveUsers, targets.inactiveUsers),
            trend: calculateTrend(inactiveUsers, targets.inactiveUsers)
          },
        ];

        setStatsData(newStatsData);
      } catch (error) {
        console.error('Stats yüklenirken hata:', error);
        // Fallback veriler
        setStatsData([
          {
            title: t("allRegisteredUsers"),
            value: "0",
            subtitle: "0 active",
            icon: <Users className="h-6 w-6" />,
            target: "1000",
            progress: 0,
            trend: 'down'
          },
          {
            title: t("joinedThisMonth"),
            value: "0",
            subtitle: "0% of total",
            icon: <UserPlus className="h-6 w-6" />,
            target: "100",
            progress: 0,
            trend: 'down'
          },
          {
            title: t("purchasedIn30Days"),
            value: "0",
            subtitle: "this month",
            icon: <ShoppingCart className="h-6 w-6" />,
            target: "500",
            progress: 0,
            trend: 'down'
          },
          {
            title: t("inactiveFor90Days"),
            value: "0",
            subtitle: "0% inactive rate",
            icon: <UserX className="h-6 w-6" />,
            target: "50",
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
          <CardHeader className="pb-3">
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

export default CustomerCards;
