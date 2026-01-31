import { Link } from "@/i18n/routing";
import { Heart, Share2, Home } from "lucide-react";
import { useTranslations } from "next-intl";
import { HotelNew } from "@/types/hotel";

interface BreadcrumbsProps {
  hotel?: HotelNew | null;
}

const Breadcrumbs = ({ hotel }: BreadcrumbsProps) => {
  const t = useTranslations("HotelDetail.breadcrumbs");

  return (
    <nav className="text-sm mb-6 flex items-center justify-between">
      <ol className="list-none p-0 inline-flex items-center flex-wrap">
        <li className="flex items-center">
          <Home className="w-4 h-4 mr-1 text-gray-900 dark:text-gray-100" />
          <Link href="/" className="text-gray-900 hover:underline dark:text-gray-100">
            {t("homePage")}
          </Link>
          <span className="mx-2 text-gray-900 dark:text-gray-100">/</span>
        </li>
        <li className="flex items-center">
          <Link href="/categories/hotel" className="text-gray-900 hover:underline dark:text-gray-100">
            {t("hotel")}
          </Link>
          <span className="mx-2 text-gray-900 dark:text-gray-100">/</span>
        </li>
        <li className="text-blue-600 font-semibold dark:text-blue-400">{hotel?.name || "Hotel"}</li>
      </ol>

      <div className="flex items-center gap-4">
        <Heart className="w-5 h-5 text-gray-900 dark:text-gray-100 cursor-pointer" />
        <Share2 className="w-5 h-5 text-gray-900 dark:text-gray-100 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Breadcrumbs;
