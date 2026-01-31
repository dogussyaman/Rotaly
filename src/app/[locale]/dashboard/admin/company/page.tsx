"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { UploadIcon, SaveIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { adminService } from "@/services/admin.service";
import { UpdateAdminProfileDto } from "@/types/admin";
import { useEffect, useState } from "react";

interface CompanyFormData {
  companyLogo: string;
  companyName: string;
  emailAddress: string;
  companyVatOrTaxId: string;
  taxNumber: string;
  taxOffice: string;
  country: string;
  fullAddress: string;
  city: string;
  state: string;
  postalCode: string;
}

interface CompanyProps {
  companyName: string;
  companyTaxId: string;
  country: string;
  city: string;
  state: string;
  postCode: string;
  fullAddress: string;
  logo: never[];
}

export default function CompanyPage() {
  const t = useTranslations();
  const [profile, setProfile] = useState<CompanyProps | null>(null);
  const [loading, setLoading] = useState(true);

  const form = useForm<CompanyFormData>({
    defaultValues: {
      companyLogo: "/images/logo3.PNG",
      companyName: "",
      emailAddress: "",
      companyVatOrTaxId: "",
      taxNumber: "",
      taxOffice: "",
      country: "",
      fullAddress: "",
      city: "",
      state: "",
      postalCode: "",
    },
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await adminService.getUserProfile();
        console.log("profile", response);
        
        if (response.success && response.data) {
          setProfile(response.data);
          
          // Form'u backend verileriyle doldur
          form.reset({
            companyLogo: response.data.logo?.[0] || "/images/logo3.PNG",
            companyName: response.data.companyName || "",
            emailAddress: "", // Email backend'den gelmiyor, boş bırak
            companyVatOrTaxId: response.data.companyTaxId || "",
            taxNumber: response.data.companyTaxId || "",
            taxOffice: "İstanbul Vergi Dairesi", // Varsayılan değer
            country: response.data.country || "",
            fullAddress: response.data.fullAddress || "",
            city: response.data.city || "",
            state: response.data.state || "",
            postalCode: response.data.postCode || "",
          });
        }
      } catch (error) {
        console.error("Profile fetch error:", error);
        toast.error("Profil bilgileri yüklenirken hata oluştu");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [form]);

  const onSubmit = async (data: CompanyFormData) => {
    try {
      // Sadece değişen alanları gönder
      const updateData: UpdateAdminProfileDto = {};
      
      if (data.companyName && data.companyName !== profile?.companyName) {
        updateData.companyName = data.companyName;
      }
      if (data.companyVatOrTaxId && data.companyVatOrTaxId !== profile?.companyTaxId) {
        updateData.companyTaxId = data.companyVatOrTaxId;
      }
      if (data.country && data.country !== profile?.country) {
        updateData.country = data.country;
      }
      if (data.city && data.city !== profile?.city) {
        updateData.city = data.city;
      }
      if (data.state && data.state !== profile?.state) {
        updateData.state = data.state;
      }
      if (data.postalCode && data.postalCode !== profile?.postCode) {
        updateData.postCode = data.postalCode;
      }
      if (data.fullAddress && data.fullAddress !== profile?.fullAddress) {
        updateData.fullAddress = data.fullAddress;
      }

      // Eğer hiç değişiklik yoksa uyarı ver
      if (Object.keys(updateData).length === 0) {
        toast.error("Herhangi bir değişiklik yapılmadı");
        return;
      }

      const response = await adminService.updateCompanyProfile(updateData);
      
      if (response.success) {
        toast.success(t("Company.savedSuccessfully") || "Şirket bilgileri başarıyla güncellendi");
        // Refresh profile data
        const updatedProfile = await adminService.getUserProfile();
        if (updatedProfile.success && updatedProfile.data) {
          setProfile(updatedProfile.data);
        }
      }
    } catch (error) {
      console.error("Company update error:", error);
      toast.error("Şirket bilgileri güncellenirken hata oluştu");
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-lg shadow-sm p-8">
            {/* Header Skeleton */}
            <div className="flex items-center gap-3 mb-6">
              <Skeleton className="w-16 h-16 rounded-lg" />
              <div className="space-y-2">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>

            {/* Form Fields Skeleton */}
            <div className="space-y-6">
              {/* Company Logo Skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <div className="flex items-center gap-4">
                  <Skeleton className="w-16 h-16 rounded-lg" />
                  <Skeleton className="h-9 w-24" />
                </div>
              </div>

              {/* Grid Fields Skeleton */}
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                ))}
              </div>

              {/* Full Address Skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Save Button Skeleton */}
              <div className="flex justify-end pt-4">
                <Skeleton className="h-10 w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-card border border-border rounded-lg shadow-sm p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Image
              src={profile?.logo?.[0] || "/images/logo3.PNG"}
              alt="Company Logo"
              width={64}
              height={64}
            />
            <div>
              <h1 className="text-2xl font-semibold text-foreground">
                {t("Company.title")}
              </h1>
              <p className="text-muted-foreground text-sm">
                {t("Company.subtitle")}
              </p>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Company Logo */}
              <FormField
                control={form.control}
                name="companyLogo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      {t("Company.companyLogo")} *
                    </FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center bg-muted/50 overflow-hidden">
                          <Image
                            src={field.value || profile?.logo?.[0] || "/images/logo3.PNG"}
                            alt="Company Logo"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <Button type="button" variant="outline" size="sm">
                          <UploadIcon className="w-4 h-4 mr-2" />
                          {t("Company.upload")}
                        </Button>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                {/* Company Name */}
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        {t("Company.companyName")} *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("Company.companyName")}
                          {...field}
                          className="bg-background"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Email Address */}
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        {t("Company.emailAddress")} *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t("Company.emailAddress")}
                          {...field}
                          className="bg-background"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* Tax Information */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="companyVatOrTaxId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        {t("Hotels.taxId")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("Hotels.taxId")}
                          {...field}
                          className="bg-background"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="taxOffice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        {t("Company.taxOffice")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="İstanbul Vergi Dairesi"
                          {...field}
                          className="bg-background"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* Billing Address Section */}
              <div className="space-y-4 border-t border-border pt-4 mt-4">
                <h3 className="text-lg font-medium">
                  {t("Company.billingAddress")}
                </h3>

                {/* Country */}
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        {t("Company.country")}
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-background">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">🇹🇷</span>
                              <SelectValue placeholder={t("Company.country")} />
                            </div>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="turkey">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">🇹🇷</span>
                              {t("Company.turkey")}
                            </div>
                          </SelectItem>
                          <SelectItem value="unitedStates">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">🇺🇸</span>
                              {t("Company.unitedStates")}
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                {/* Address */}
                <FormField
                  control={form.control}
                  name="fullAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        {t("Company.fullAddress")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("Company.fullAddress")}
                          {...field}
                          className="bg-background"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* City and State */}
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          {t("Company.city")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("Company.city")}
                            {...field}
                            className="bg-background"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          {t("Company.state")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("Company.state")}
                            {...field}
                            className="bg-background"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Postal Code */}
                <FormField
                  control={form.control}
                  name="postalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        {t("Company.postalCode")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("Company.postalCode")}
                          {...field}
                          className="bg-background"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
                  size="lg"
                >
                  <SaveIcon className="w-4 h-4 mr-2" />
                  {t("Company.save") || "Kaydet"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
