"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HotelNew } from "@/types/hotel";
import { UpdateHotelDto, HotelType } from "@/types/hotel-dto";
import { adminService } from "@/services/admin.service";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import z from "zod";

interface EditHotelDialogProps {
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (open: boolean) => void;
  t: (key: string) => string;
  selectedHotel: HotelNew;
  onHotelUpdated?: () => void; // Callback for refreshing the list
}

// Admin için basitleştirilmiş güncelleme formu - sadece önemli alanlar
const EditHotelDialog = ({
  isEditDialogOpen,
  setIsEditDialogOpen,
  t,
  selectedHotel,
  onHotelUpdated,
}: EditHotelDialogProps) => {
  const [isLoading, setIsLoading] = useState(false);

  // Sadece admin için gerekli alanları içeren basit schema - tümü optional
  const hotelFormSchema = z.object({
    name: z.string().min(2, t("nameMin2") || "Name must be at least 2 characters").optional(),
    location: z.string().min(2, t("locationMin2") || "Location must be at least 2 characters").optional(),
    city: z.string().min(2, t("cityMin2") || "City must be at least 2 characters").optional(),
    country: z.string().min(2, t("countryMin2") || "Country must be at least 2 characters").optional(),
    type: z.enum([
      "APARTMENT",
      "HOTEL",
      "VILLA",
      "BUNGALOW",
      "ROOM",
      "RESORT",
      "HOSTEL",
      "CAMP",
    ] as const).optional(),
    isActive: z.boolean().optional(),
  });

  type HotelFormValues = z.infer<typeof hotelFormSchema>;

  const form = useForm<HotelFormValues>({
    resolver: zodResolver(hotelFormSchema),
    defaultValues: {
      name: selectedHotel.name || "",
      location: selectedHotel.location || "",
      city: selectedHotel.city || "",
      country: selectedHotel.country || "",
      type: (selectedHotel.type as HotelType) || "HOTEL",
      isActive: selectedHotel.isActive ?? false,
    },
  });

  // Selected hotel değiştiğinde formu güncelle
  useEffect(() => {
    if (selectedHotel) {
      form.reset({
        name: selectedHotel.name || "",
        location: selectedHotel.location || "",
        city: selectedHotel.city || "",
        country: selectedHotel.country || "",
        type: (selectedHotel.type as HotelType) || "HOTEL",
        isActive: selectedHotel.isActive ?? false,
      });
    }
  }, [selectedHotel, form]);

  const onSubmit = async (data: HotelFormValues) => {
    if (!selectedHotel?.id) return;

    setIsLoading(true);
    try {
      // Sadece değişen alanları gönder
      const updateData: UpdateHotelDto = {};
      
      if (data.name && data.name !== selectedHotel.name) {
        updateData.name = data.name;
      }
      if (data.location && data.location !== selectedHotel.location) {
        updateData.location = data.location;
      }
      if (data.city && data.city !== selectedHotel.city) {
        updateData.city = data.city;
      }
      if (data.country && data.country !== selectedHotel.country) {
        updateData.country = data.country;
      }
      if (data.type && data.type !== selectedHotel.type) {
        updateData.type = data.type;
      }
      if (data.isActive !== undefined && data.isActive !== selectedHotel.isActive) {
        updateData.isActive = data.isActive;
      }

      // Eğer hiç değişiklik yoksa uyarı ver
      if (Object.keys(updateData).length === 0) {
        toast.error("Herhangi bir değişiklik yapılmadı");
        return;
      }

      const response = await adminService.updateHotel(selectedHotel.id, updateData);
      
      if (response.success) {
        toast.success("Otel başarıyla güncellendi");
        setIsEditDialogOpen(false);
        onHotelUpdated?.(); // Listeyi yenile
      } else {
        toast.error("Otel güncellenirken hata oluştu");
      }
    } catch (error) {
      console.error("Hotel update error:", error);
      toast.error("Otel güncellenirken hata oluştu");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t("editHotel") || "Otel Düzenle"}</DialogTitle>
        </DialogHeader>
        {selectedHotel && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  {t("editingHotel") || "Düzenlenen otel"}: <strong>{selectedHotel.name}</strong>
                </p>

                {/* Hotel Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1">
                      <FormLabel className="text-sm font-medium">
                        {t("name") || "Otel Adı"}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder={t("name") || "Otel Adı"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Location */}
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1">
                      <FormLabel className="text-sm font-medium">
                        {t("location") || "Konum"}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder={t("location") || "Konum"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  {/* City */}
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-1">
                        <FormLabel className="text-sm font-medium">
                          {t("city") || "Şehir"}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder={t("city") || "Şehir"} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Country */}
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-1">
                        <FormLabel className="text-sm font-medium">
                          {t("country") || "Ülke"}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder={t("country") || "Ülke"} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Hotel Type */}
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1">
                      <FormLabel className="text-sm font-medium">
                        {t("type") || "Tip"}
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Otel tipini seçiniz" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="APARTMENT">Apartman</SelectItem>
                            <SelectItem value="HOTEL">Otel</SelectItem>
                            <SelectItem value="VILLA">Villa</SelectItem>
                            <SelectItem value="BUNGALOW">Bungalov</SelectItem>
                            <SelectItem value="ROOM">Oda</SelectItem>
                            <SelectItem value="RESORT">Resort</SelectItem>
                            <SelectItem value="HOSTEL">Hostel</SelectItem>
                            <SelectItem value="CAMP">Kamp</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Active Status */}
                <FormField
                  control={form.control}
                  name="isActive"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1">
                      <FormLabel className="text-sm font-medium">
                        {t("isActive") || "Durum"}
                      </FormLabel>
                      <FormControl>
                        <RadioGroup 
                          onValueChange={(value) => field.onChange(value === "true")}
                          value={field.value ? "true" : "false"}
                        >
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="true" id="active" />
                            <Label htmlFor="active">{t("active") || "Aktif"}</Label>
                          </div>
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="false" id="inactive" />
                            <Label htmlFor="inactive">{t("inactive") || "Pasif"}</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end gap-2 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsEditDialogOpen(false)}
                    disabled={isLoading}
                  >
                    {t("cancel") || "İptal"}
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Güncelleniyor..." : (t("save") || "Kaydet")}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EditHotelDialog;