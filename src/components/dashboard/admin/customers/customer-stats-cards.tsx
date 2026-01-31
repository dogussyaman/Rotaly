import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import React from 'react';
import { 
  Users, 
  UserPlus, 
  ShoppingCart, 
  UserX,
  TrendingUp,
  Target,
  TrendingDown
} from 'lucide-react';

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

interface CustomerStatsCardsProps {
  allUsers: User[];
}

const CustomerStatsCards: React.FC<CustomerStatsCardsProps> = ({ allUsers }) => {
  const t = useTranslations("Customers");

  // Stats verilerini hesapla
  const totalCustomers = allUsers.length;
  const thisMonthUsers = allUsers.filter(user => {
    const userDate = new Date(user.createdAt);
    const now = new Date();
    return userDate.getMonth() === now.getMonth() && userDate.getFullYear() === now.getFullYear();
  }).length;
  const inactiveUsers = allUsers.filter(user => !user.isVerified).length;
  const activeUsers = totalCustomers - inactiveUsers;

  // Hedef değerler
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

  // Trend hesaplamaları
  const calculateTrend = (current: number, target: number) => {
    const percentage = (current / target) * 100;
    if (percentage >= 90) return 'up';
    if (percentage >= 70) return 'neutral';
    return 'down';
  };

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

  const statsData = [
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
      subtitle: totalCustomers > 0 ? `${((thisMonthUsers / totalCustomers) * 100).toFixed(1)}% ${t("ofTotal")}` : "0% of total",
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
      trend: 'down' as const
    },
    {
      title: t("inactiveFor90Days"),
      value: inactiveUsers.toString(),
      subtitle: totalCustomers > 0 ? `${((inactiveUsers / totalCustomers) * 100).toFixed(1)}% ${t("inactiveRate")}` : "0% inactive rate",
      icon: <UserX className="h-6 w-6" />,
      target: targets.inactiveUsers.toString(),
      progress: calculateProgress(inactiveUsers, targets.inactiveUsers),
      trend: calculateTrend(inactiveUsers, targets.inactiveUsers)
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsData.map((stat, index) => (
        <Card key={index} className="bg-card border border-border hover:bg-accent/50 transition-all duration-300 cursor-pointer group">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                {stat.icon}
              </div>
              {stat.trend && (
                <div className={`p-1 rounded-full ${getTrendColor(stat.trend as 'up' | 'down' | 'neutral')}`}>
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

export default CustomerStatsCards;
