import HotelCard from "@/components/hotelCard";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const RecentlyViewedHotels = () => {
  const t = useTranslations("HotelDetail.recentlyViewedHotels");

  const recentlyViewedHotels = [
    {
      id: 1,
      name: t("hotel1.name"),
      location: t("hotel1.location"),
      rating: 4.8,
      price: "40.500 TL",
      image: "/images/opportunity8.jpg",
      nights: 7,
      cancelText: t("hotel1.cancelText"),
      breakfastText: t("hotel1.breakfastText"),
      parkingText: t("hotel1.parkingText"),
    },
    {
      id: 2,
      name: t("hotel2.name"),
      location: t("hotel2.location"),
      rating: 4.8,
      price: "40.500 TL",
      image: "/images/opportunity1.jpg",
      nights: 7,
      cancelText: t("hotel2.cancelText"),
      breakfastText: t("hotel2.breakfastText"),
      parkingText: t("hotel2.parkingText"),
    },
    {
      id: 3,
      name: t("hotel3.name"),
      location: t("hotel3.location"),
      rating: 4.8,
      price: "40.500 TL",
      image: "/images/opportunity7.jpg",
      nights: 7,
      cancelText: t("hotel3.cancelText"),
      breakfastText: t("hotel3.breakfastText"),
      parkingText: t("hotel3.parkingText"),
    },
    {
      id: 4,
      name: t("hotel4.name"),
      location: t("hotel4.location"),
      rating: 4.8,
      price: "40.500 TL",
      image: "/images/opportunity3.jpg",
      nights: 7,
      cancelText: t("hotel4.cancelText"),
      breakfastText: t("hotel4.breakfastText"),
      parkingText: t("hotel4.parkingText"),
    },
    
   
  ];

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{t("title")}</h2>
        <Link href="/recently-viewed" className="text-blue-600 flex items-center gap-1">
          {t("viewAll")} <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {recentlyViewedHotels.map((item) => (
    <HotelCard
      key={item.id}
      item={{
        ...item,
        price: Number(item.price), // string → number dönüşümü
      }}
    />
  ))}
</div>
    </div>
  );
};

export default RecentlyViewedHotels;