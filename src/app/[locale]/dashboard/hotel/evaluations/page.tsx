"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MessageCircle, Calendar, User, Filter, Search } from "lucide-react";

import Image from "next/image";

interface RoomReview {
  id: string;
  roomName: string;
  roomImage: string;
  averageRating: number;
  totalReviews: number;
  recentReviews: Review[];
}

interface Review {
  id: number;
  guestName: string;
  guestAvatar: string;
  rating: number;
  comment: string;
  date: string;
  category: string;
}


// Oda değerlendirmeleri için dummy data
const roomReviews: RoomReview[] = [
  {
    id: "R001",
    roomName: "Deluxe Deniz Manzaralı Oda",
    roomImage: "https://imagedelivery.net/Yw_SVblNotg-H4OIK8cT8g/0f44ada7-c450-4cb0-009f-17d24c9c4400/HorizontalHD",
    averageRating: 4.8,
    totalReviews: 156,
    recentReviews: [
      {
        id: 1,
        guestName: "Ahmet Yılmaz",
        guestAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        comment: "Harika bir deniz manzarası ve çok temiz bir oda. Kesinlikle tekrar geleceğim!",
        date: "2024-01-15",
        category: "Temizlik"
      },
      {
        id: 2,
        guestName: "Ayşe Demir",
        guestAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        rating: 4,
        comment: "Oda çok güzel ama biraz gürültülüydü. Genel olarak memnun kaldım.",
        date: "2024-01-14",
        category: "Hizmet"
      }
    ]
  },
  {
    id: "R002",
    roomName: "Aile Süiti",
    roomImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6o0Qzar2_qYMMOmJB8uF96gUnOiQ82G2nNA&s",
    averageRating: 4.6,
    totalReviews: 89,
    recentReviews: [
      {
        id: 3,
        guestName: "Mehmet Kaya",
        guestAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        comment: "Ailemizle birlikte çok keyifli bir tatil geçirdik. Süit çok geniş ve konforlu.",
        date: "2024-01-13",
        category: "Konum"
      },
      {
        id: 4,
        guestName: "Fatma Özkan",
        guestAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        rating: 4,
        comment: "Güzel bir süit ama fiyat biraz yüksek. Yine de değer.",
        date: "2024-01-12",
        category: "Fiyat"
      }
    ]
  },
  {
    id: "R003",
    roomName: "Ekonomik Tek Kişilik Oda",
    roomImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EOuqzkVdYSdheGurSafZu-hyOlcv7Oud0A&s",
    averageRating: 4.2,
    totalReviews: 234,
    recentReviews: [
      {
        id: 5,
        guestName: "Ali Veli",
        guestAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        rating: 4,
        comment: "Bütçe dostu ve temiz bir oda. Tek kişilik konaklama için ideal.",
        date: "2024-01-11",
        category: "Temizlik"
      },
      {
        id: 6,
        guestName: "Zeynep Arslan",
        guestAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        comment: "Çok uygun fiyatlı ve temiz. Kesinlikle tavsiye ederim.",
        date: "2024-01-10",
        category: "Fiyat"
      }
    ]
  },
  {
    id: "R004",
    roomName: "Kral Dairesi",
    roomImage: "https://www.asortie.com/blogs/uploads/en_haberler/otel-kral-odasi-hizmetleri.jpg",
    averageRating: 4.9,
    totalReviews: 45,
    recentReviews: [
      {
        id: 7,
        guestName: "Can Özkan",
        guestAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        comment: "Muhteşem bir deneyim! Kral dairesi gerçekten kral gibi.",
        date: "2024-01-09",
        category: "Hizmet"
      },
      {
        id: 8,
        guestName: "Elif Yıldız",
        guestAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        comment: "Hayatımın en lüks konaklaması. Her kuruşuna değer!",
        date: "2024-01-08",
        category: "Genel"
      }
    ]
  }
];

// Yıldız bileşeni
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "text-yellow-400 fill-current"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

// Kategori badge'i
const CategoryBadge = ({ category }: { category: string }) => {
  const t = useTranslations("Evaluations");
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Temizlik":
        return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";
      case "Hizmet":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300";
      case "Konum":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300";
      case "Fiyat":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300";
      case "Genel":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300";
    }
  };

  const getCategoryTranslation = (category: string) => {
    switch (category) {
      case "Temizlik":
        return t("categories.cleanliness");
      case "Hizmet":
        return t("categories.service");
      case "Konum":
        return t("categories.location");
      case "Fiyat":
        return t("categories.price");
      case "Genel":
        return t("categories.general");
      default:
        return category;
    }
  };

  return (
    <Badge variant="secondary" className={getCategoryColor(category)}>
      {getCategoryTranslation(category)}
    </Badge>
  );
};

// Oda değerlendirme kartı
const RoomReviewCard = ({ roomReview }: { roomReview: RoomReview }) => {
  const t = useTranslations("Evaluations");
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Image
              src={roomReview.roomImage}
              alt={roomReview.roomName}
              width={96}
              height={96}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
            </div>
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">{roomReview.roomName}</CardTitle>
            <div className="flex items-center space-x-4 mt-2">
              <StarRating rating={roomReview.averageRating} />
              <span className="text-sm font-medium text-muted-foreground">
                {roomReview.averageRating}/5
              </span>
                             <span className="text-sm text-muted-foreground">
                 {roomReview.totalReviews} {t("reviews")}
               </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {roomReview.recentReviews.map((review: Review) => (
            <div key={review.id} className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex items-start space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={review.guestAvatar} />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium">{review.guestName}</span>
                    <StarRating rating={review.rating} />
                    <CategoryBadge category={review.category} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {review.comment}
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{review.date}</span>
                    </div>
                                         <Button variant="ghost" size="sm" className="h-6 px-2">
                       <MessageCircle className="h-3 w-3 mr-1" />
                       {t("reply")}
                     </Button>
                  </div>
        </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Ana sayfa bileşeni
export default function EvaluationsPage() {
  const t = useTranslations("Evaluations");

  return (
    <div className="flex-1 space-y-6 p-8 pt-6 dark:bg-card">
      {/* Header */}
      <div className="flex items-center justify-between">
                 <div>
           <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
           <p className="text-muted-foreground mt-3">
             {t("subtitle")}
           </p>
         </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                         <input
               type="text"
               placeholder={t("searchPlaceholder")}
               className="pl-10 pr-4 py-2 border border-border rounded-md bg-background"
             />
           </div>
           <Button variant="outline">
             <Filter className="h-4 w-4 mr-2" />
             {t("filter")}
           </Button>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                <Star className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
                             <div>
                 <p className="text-sm font-medium text-muted-foreground">{t("averageRating")}</p>
                 <p className="text-2xl font-bold">4.6</p>
               </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                <MessageCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
                             <div>
                 <p className="text-sm font-medium text-muted-foreground">{t("totalReviews")}</p>
                 <p className="text-2xl font-bold">524</p>
               </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                <User className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
                             <div>
                 <p className="text-sm font-medium text-muted-foreground">{t("thisMonth")}</p>
                 <p className="text-2xl font-bold">89</p>
               </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
                             <div>
                 <p className="text-sm font-medium text-muted-foreground">{t("responded")}</p>
                 <p className="text-2xl font-bold">412</p>
               </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Oda Değerlendirmeleri */}
      <div className="space-y-6">
        {roomReviews.map((roomReview) => (
          <RoomReviewCard key={roomReview.id} roomReview={roomReview} />
        ))}
      </div>
    </div>
  );
}