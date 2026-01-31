"use client";
import React, { useEffect, useState } from "react";
import { adminService } from "@/services/admin.service";
import { Card, CardContent, CardHeader} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

// Backend'den gelen gerçek veri yapısına göre type'lar
interface UserImage {
  id: string;
  url: string;
  userId?: string;
  createdAt: string;
  deletedAt?: string | null;
}

interface PaymentCard {
  id: string;
  userId: string;
  token: string;
  brand: string;
  last4: string;
  expiresAt: string;
  createdAt: string;
}

interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  role: string;
  deletedAt: string | null;
  isVerified: boolean;
  verificationOTP: string | null;
  images: UserImage[];
  paymentCards: PaymentCard[];
  hashedPassword: string;
  createdAt?: string;
  updatedAt?: string;
}

const CustomerDetailsPage = ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const paramsData = React.use(params);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await adminService.getUserById(paramsData.id);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [paramsData.id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <div className="p-4 text-center">Kullanıcı bulunamadı</div>;
  }

  const getInitials = (name: string, surname: string) => {
    return `${name?.[0] || ""}${surname?.[0] || ""}`.toUpperCase();
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div>
        <Button
          onClick={() => router.push("/dashboard/admin/customers")}
          variant="outline"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Geri
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Müşteri Detayları</h1>
        <Badge variant={user.deletedAt ? "destructive" : "default"}>
          {user.deletedAt ? "Pasif" : "Aktif"}
        </Badge>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader className="border-b">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src={user.images?.[0]?.url}
                  alt={`${user.name} ${user.surname}`}
                />
                <AvatarFallback>
                  {getInitials(user.name, user.surname)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">
                  {user.name} {user.surname}
                </h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <div className="flex items-center mt-1 space-x-2">
                  <Badge variant={user.isVerified ? "default" : "secondary"}>
                    {user.isVerified ? "Doğrulanmış" : "Doğrulanmamış"}
                  </Badge>
                  <Badge variant="outline">{user.role}</Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    İletişim Bilgileri
                  </h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm">
                      <span className="font-medium">Telefon:</span>{" "}
                      {user.phone || "Belirtilmemiş"}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">E-posta:</span> {user.email}
                    </p>
                  </div>
                </div>

                {user.createdAt && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Hesap Bilgileri
                    </h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">Oluşturulma Tarihi:</span>{" "}
                        {format(new Date(user.createdAt), "dd.MM.yyyy HH:mm")}
                      </p>
                      {user.updatedAt && (
                        <p className="text-sm">
                          <span className="font-medium">Son Güncelleme:</span>{" "}
                          {format(new Date(user.updatedAt), "dd.MM.yyyy HH:mm")}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  Ödeme Kartları
                </h3>
                {user.paymentCards && user.paymentCards.length > 0 ? (
                  <div className="space-y-2">
                    {user.paymentCards.map((card, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between">
                          <span className="font-medium">
                            **** **** **** {card.last4 || "••••"}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {card.brand || "Kart"}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {format(new Date(card.expiresAt), "MM/yy")}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Kayıtlı ödeme kartı bulunmuyor.
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
