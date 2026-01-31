"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Rating, RatingButton } from "../ui/shadcn-io/rating";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HotelTabs() {
  const t = useTranslations("HotelDetail.hotelTabs");

  return (
    <div className="mt-8 bg-white dark:bg-card rounded-lg shadow-md p-6">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-3 ">
          <TabsTrigger value="description">{t("descriptionTab")}</TabsTrigger>
          <TabsTrigger value="reviews">{t("reviewsTab")}</TabsTrigger>
          <TabsTrigger value="map">{t("mapTab")}</TabsTrigger>
        </TabsList>

        <TabsContent
          value="description"
          className="pt-4 text-gray-700 dark:text-gray-300"
        >
          <h2 className="text-xl font-semibold mb-3">
            {t("description.title")}
          </h2>
          <p className="mb-4">
            {t("description.paragraph1")}
          </p>
          <p className="mb-4">
            {t("description.paragraph2")}
          </p>
          <h3 className="text-lg font-semibold mb-2 mt-4">{t("description.roomsAndSuitesTitle")}</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>{t("description.roomFeature1")}</li>
            <li>{t("description.roomFeature2")}</li>
            <li>{t("description.roomFeature3")}</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2 mt-4">{t("description.servicesTitle")}</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>{t("description.service1")}</li>
            <li>{t("description.service2")}</li>
            <li>{t("description.service3")}</li>
            <li>{t("description.service4")}</li>
            <li>{t("description.service5")}</li>
            <li>{t("description.service6")}</li>
            <li>{t("description.service7")}</li>
            <li>{t("description.service8")}</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2 mt-4">{t("description.localTipsTitle")}</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>
              {t("description.localTip1")}
            </li>
            <li>
              {t("description.localTip2")}
            </li>
            <li>{t("description.localTip3")}</li>
            <li>{t("description.localTip4")}</li>
          </ul>
        </TabsContent>

        <TabsContent
          value="reviews"
          className="pt-4 text-gray-700 dark:text-gray-300"
        >
          <h2 className="text-xl font-semibold mb-3">
            {t("reviews.title", { count: 125 })}
          </h2>
          <div className="mb-4 flex items-center gap-4">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-blue-600">4.8</span>
              <Rating defaultValue={4.8} readOnly>
                {Array.from({ length: 5 }).map((_, index) => (
                  <RatingButton
                    key={index}
                    size={20}
                    className="text-yellow-500"
                  />
                ))}
              </Rating>
              <span className="text-sm text-gray-500">{t("reviews.excellent")}</span>
            </div>
            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((starCount) => (
                <div key={starCount} className="flex items-center gap-2">
                  <span className="text-sm">{t("reviews.stars", { starCount })}</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{
                        width:
                          starCount === 5
                            ? "90%"
                            : starCount === 4
                            ? "70%"
                            : starCount === 3
                            ? "30%"
                            : starCount === 2
                            ? "10%"
                            : "5%",
                      }} // Example widths
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Reviews (mock) */}
          <div className="border-t pt-4 mt-4 space-y-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="font-semibold mr-2">{t("reviews.user1Name")}</div>
                <Rating defaultValue={5} readOnly>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <RatingButton
                      key={index}
                      size={14}
                      className="text-yellow-500"
                    />
                  ))}
                </Rating>
                <span className="text-sm text-gray-500 ml-2">{t("reviews.user1Date")}</span>
              </div>
              <p className="text-sm">
                {t("reviews.user1Comment")}
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="font-semibold mr-2">{t("reviews.user2Name")}</div>
                <Rating defaultValue={4} readOnly>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <RatingButton
                      key={index}
                      size={14}
                      className="text-yellow-500"
                    />
                  ))}
                </Rating>
                <span className="text-sm text-gray-500 ml-2">{t("reviews.user2Date")}</span>
              </div>
              <p className="text-sm">
                {t("reviews.user2Comment")}
              </p>
            </div>
            <Button variant="outline" className="w-full mt-4">
              {t("reviews.viewAllReviews")}
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="map" className="pt-4">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Card className="border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <MapPin className="h-5 w-5 text-red-500 mr-2" />
                {t("map.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6016.451935958043!2d28.980267249633762!3d41.064053019894764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab71cc5d69f1f%3A0x51e922b9e59b5a9b!2zaXN0YW5idWwgcm90YWx5IGt1bMO8YsO8IGRlcm5lxJ9p!5e0!3m2!1s!2str!4v1754138151565!5m2!1s!2str"
                className="w-full h-[300px] rounded-b-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />
              <div className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t("map.officeName")}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t("map.officeAddress1")}<br />
                      {t("map.officeAddress2")}
                    </p>
                  </div>
                  <Image
                    src="/images/logo3.png"
                    alt="Rotaly Logo"
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
