import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-[#1E4EAE] dark:bg-gray-900 text-white dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Kategoriler */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("categoriesTitle")}</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/categories/hotel"
                className="text-sm text-blue-100 hover:text-white dark:text-blue-200 dark:hover:text-white"
              >
                {t("hotel")}
              </Link>
              <Link
                href="/categories/villa"
                className="text-sm text-blue-100 hover:text-white dark:text-blue-200 dark:hover:text-white"
              >
                {t("villa")}
              </Link>
              <Link
                href="/categories/apartment"
                className="text-sm text-blue-100 hover:text-white dark:text-blue-200 dark:hover:text-white"
              >
                {t("apartment")}
              </Link>
              <Link
                href="/categories/bungalow"
                className="text-sm text-blue-100 hover:text-white dark:text-blue-200 dark:hover:text-white"
              >
                {t("bungalow")}
              </Link>
              <Link
                href="/categories/pension"
                className="text-sm text-blue-100 hover:text-white dark:text-blue-200 dark:hover:text-white"
              >
                {t("pension")}
              </Link>
              <Link
                href="/categories/camp"
                className="text-sm text-blue-100 hover:text-white dark:text-blue-200 dark:hover:text-white"
              >
                {t("camp")}
              </Link>
            </nav>
          </div>

          {/* Destek */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("supportTitle")}</h3>
            <nav className="flex flex-col space-y-2">
              <Link

                href="/support"
                className="text-sm text-blue-100 hover:text-white"
              >
                {t("supportTickets")}
              </Link>
              <Link
                href="/support/faq"
                className="text-sm text-blue-100 hover:text-white dark:text-blue-200 dark:hover:text-white"
              >
                {t("faq")}
              </Link>
              <Link
                href="/support/cancellation"
                className="text-sm text-blue-100 hover:text-white dark:text-blue-200 dark:hover:text-white"
              >
                {t("cancellation")}

              </Link>
            </nav>
          </div>

          {/* Bizi Keşfet */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("exploreUsTitle")}</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-sm text-blue-100 hover:text-white dark:text-blue-200 dark:hover:text-white"
              >
                {t("about")}
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-blue-100 hover:text-white dark:text-blue-200 dark:hover:text-white"
              >
                {t("privacy")}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-blue-100 hover:text-white dark:text-blue-200 dark:hover:text-white"
              >
                {t("terms")}
              </Link>
            </nav>
          </div>

          {/* Bizi Takip Et */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("followUsTitle")}</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/rotaly_xyz/"
                target="_blank"
                className="rounded-md p-2 text-blue-100 hover:scale-110 dark:text-blue-200 transition-all duration-300"
              >
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                >
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                    cx="19.38"
                    cy="42.035"
                    r="44.899"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#fd5"></stop>
                    <stop offset=".328" stopColor="#ff543f"></stop>
                    <stop offset=".348" stopColor="#fc5245"></stop>
                    <stop offset=".504" stopColor="#e64771"></stop>
                    <stop offset=".643" stopColor="#d53e91"></stop>
                    <stop offset=".761" stopColor="#cc39a4"></stop>
                    <stop offset=".841" stopColor="#c837ab"></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                    cx="11.786"
                    cy="5.54"
                    r="29.813"
                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#4168c9"></stop>
                    <stop
                      offset=".999"
                      stopColor="#4168c9"
                      stopOpacity="0"
                    ></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                  ></path>
                  <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-500 dark:border-blue-400 pt-8">
          <div className="text-center flex flex-row items-center justify-center">
            <Image src='/images/logo3.PNG' alt='logo' width={50} height={50} />
            <p className="text-sm text-blue-100 dark:text-blue-200">{t("copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
