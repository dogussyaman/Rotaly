"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ShieldCheck,
  ShieldAlert,
  Smartphone,
  Lock,
  Activity,
  Clock,
  MapPin,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RefreshCw,
  Download,
  Settings,
  Users,
  Key,
  Bell,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

export default function AdminSecurityPage() {
  const t = useTranslations("AdminSecurity");

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [ipRestrictions, setIpRestrictions] = useState(false);

  // Mock data - gerçek uygulamada API'den gelecek
  const securityScore = 85;
  const activeSessions = [
    {
      id: 1,
      device: "Chrome - Windows 10",
      location: "İstanbul, Türkiye",
      ip: "192.168.1.100",
      lastActivity: "2 dakika önce",
      status: "active",
    },
    {
      id: 2,
      device: "Safari - iPhone 14",
      location: "Ankara, Türkiye",
      ip: "192.168.1.101",
      lastActivity: "1 saat önce",
      status: "active",
    },
  ];

  const securityLogs = [
    {
      id: 1,
      action: "Başarılı giriş",
      user: "admin@rotaly.xyz",
      ip: "192.168.1.100",
      location: "İstanbul, TR",
      timestamp: "2024-01-15 14:30:25",
      status: "success",
    },
    {
      id: 2,
      action: "Şifre değiştirildi",
      user: "admin@rotaly.xyz",
      ip: "192.168.1.100",
      location: "İstanbul, TR",
      timestamp: "2024-01-15 13:15:10",
      status: "warning",
    },
    {
      id: 3,
      action: "Başarısız giriş denemesi",
      user: "admin@rotaly.xyz",
      ip: "203.45.67.89",
      location: "Bilinmeyen",
      timestamp: "2024-01-15 12:45:30",
      status: "error",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "error":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            {t("successful")}
          </Badge>
        );
      case "warning":
        return (
          <Badge variant="default" className="bg-yellow-100 text-yellow-800">
            {t("warning")}
          </Badge>
        );
      case "error":
        return (
          <Badge variant="default" className="bg-red-100 text-red-800">
            {t("error")}
          </Badge>
        );
      default:
        return <Badge variant="outline">{t("unknown")}</Badge>;
    }
  };

  return (
    <div className="w-full min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200">{t("title")}</h1>
            <p className="text-gray-600 mt-2">{t("subtitle")}</p>
          </div>
          <Button className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            {t("refresh")}
          </Button>
        </div>

        {/* Güvenlik Skoru */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              {t("securityScore")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-700">
                    {securityScore}
                  </span>
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-green-500 border-opacity-20"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    {t("securityLevel")}
                  </span>
                  <span className="text-sm text-gray-600">
                    {securityScore}/100
                  </span>
                </div>
                <Progress value={securityScore} className="h-2" />
                <p className="text-sm text-gray-600 mt-2">
                  {securityScore >= 80
                    ? t("excellent")
                    : securityScore >= 60
                    ? t("good")
                    : t("needsImprovement")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ana Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-blue-500 dark:bg-card">
            <TabsTrigger value="overview">{t("overview")}</TabsTrigger>
            <TabsTrigger value="settings">{t("settings")}</TabsTrigger>
            <TabsTrigger value="logs">{t("logs")}</TabsTrigger>
          </TabsList>

          {/* Genel Bakış Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* İki Faktörlü Doğrulama */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-200">
                        {t("twoFactorStatus")}
                      </p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-gray-400">
                        {twoFactorEnabled ? t("active") : t("inactive")}
                      </p>
                    </div>
                    <div
                      className={`p-2 rounded-full ${
                        twoFactorEnabled ? "bg-green-100" : "bg-red-100"
                      }`}
                    >
                      {twoFactorEnabled ? (
                        <ShieldCheck className="w-6 h-6 text-green-600" />
                      ) : (
                        <ShieldAlert className="w-6 h-6 text-red-600" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Aktif Oturumlar */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-200">
                        {t("activeSessions")}
                      </p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-gray-400">
                        {activeSessions.length}
                      </p>
                    </div>
                    <div className="p-2 rounded-full bg-blue-100">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Son Giriş */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-200">
                        {t("lastLogin")}
                      </p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-gray-400">2 dk</p>
                    </div>
                    <div className="p-2 rounded-full bg-purple-100">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Güvenlik Uyarıları */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-200">
                        {t("alerts")}
                      </p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-gray-400">1</p>
                    </div>
                    <div className="p-2 rounded-full bg-yellow-100">
                      <Bell className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Hızlı Aksiyonlar */}
            <Card>
              <CardHeader>
                <CardTitle>{t("quickActions")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    {t("enable2FA")}
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Key className="w-4 h-4" />
                    {t("changePassword")}
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    {t("securityReport")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Güvenlik Ayarları Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* İki Faktörlü Doğrulama */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    {t("twoFactorAuth")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{t("smsVerification")}</p>
                      <p className="text-sm text-gray-600">
                        {t("smsVerificationDesc")}
                      </p>
                    </div>
                    <Switch
                      checked={twoFactorEnabled}
                      onCheckedChange={setTwoFactorEnabled}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{t("emailVerification")}</p>
                      <p className="text-sm text-gray-600">
                        {t("emailVerificationDesc")}
                      </p>
                    </div>
                    <Switch
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Bildirim Ayarları */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    {t("notificationSettings")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{t("securityAlerts")}</p>
                      <p className="text-sm text-gray-600">
                        {t("securityAlertsDesc")}
                      </p>
                    </div>
                    <Switch checked={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{t("smsAlerts")}</p>
                      <p className="text-sm text-gray-600">
                        {t("smsAlertsDesc")}
                      </p>
                    </div>
                    <Switch
                      checked={smsNotifications}
                      onCheckedChange={setSmsNotifications}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* IP Kısıtlamaları */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {t("ipRestrictions")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{t("ipRestriction")}</p>
                      <p className="text-sm text-gray-600">
                        {t("ipRestrictionDesc")}
                      </p>
                    </div>
                    <Switch
                      checked={ipRestrictions}
                      onCheckedChange={setIpRestrictions}
                    />
                  </div>
                  {ipRestrictions && (
                    <div className="space-y-2">
                      <Label>{t("allowedIPs")}</Label>
                      <Input placeholder="192.168.1.100" />
                      <Button variant="outline" size="sm">
                        {t("addIP")}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Şifre Politikası */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    {t("passwordPolicy")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{t("minLength")}</span>
                      <Badge variant="outline">8 karakter</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{t("uppercaseRequired")}</span>
                      <Badge variant="outline">{t("yes")}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{t("numberRequired")}</span>
                      <Badge variant="outline">{t("yes")}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        {t("specialCharRequired")}
                      </span>
                      <Badge variant="outline">{t("yes")}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          {/* Güvenlik Logları Tab */}
          <TabsContent value="logs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{t("securityLogs")}</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      {t("export")}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      {t("filter")}
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("operation")}</TableHead>
                      <TableHead>{t("user")}</TableHead>
                      <TableHead>{t("ipAddress")}</TableHead>
                      <TableHead>{t("location")}</TableHead>
                      <TableHead>{t("date")}</TableHead>
                      <TableHead>{t("status")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {securityLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="flex items-center gap-2">
                          {getStatusIcon(log.status)}
                          {log.action}
                        </TableCell>
                        <TableCell>{log.user}</TableCell>
                        <TableCell>{log.ip}</TableCell>
                        <TableCell>{log.location}</TableCell>
                        <TableCell>{log.timestamp}</TableCell>
                        <TableCell>{getStatusBadge(log.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
