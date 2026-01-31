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
import { Customer } from "@/types/customer";
import { UpdateUserDto } from "@/types/user-dto";
import { adminService } from "@/services/admin.service";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import z from "zod";

interface EditCustomerDialogProps {
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (open: boolean) => void;
  t: (key: string) => string;
  selectedCustomer: Customer;
  onCustomerUpdated?: () => void; // Callback for refreshing the list
}

// Admin için basitleştirilmiş müşteri güncelleme formu
const EditCustomerDialog = ({
  isEditDialogOpen,
  setIsEditDialogOpen,
  t,
  selectedCustomer,
  onCustomerUpdated,
}: EditCustomerDialogProps) => {
  const [isLoading, setIsLoading] = useState(false);

  // Sadece admin için gerekli alanları içeren basit schema - tümü optional
  const customerFormSchema = z.object({
    name: z.string().min(2, t("nameMin2") || "Name must be at least 2 characters").optional(),
    surname: z.string().min(2, t("surnameMin2") || "Surname must be at least 2 characters").optional(),
    email: z.string().email(t("invalidEmail") || "Invalid email address").optional(),
    phone: z.string().min(10, t("phoneMin10") || "Phone must be at least 10 characters").optional(),
  });

  type CustomerFormValues = z.infer<typeof customerFormSchema>;

  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: {
      name: selectedCustomer.name || "",
      surname: selectedCustomer.surname || "",
      email: selectedCustomer.email || "",
      phone: selectedCustomer.phone || "",
    },
  });

  // Selected customer değiştiğinde formu güncelle
  useEffect(() => {
    if (selectedCustomer) {
      form.reset({
        name: selectedCustomer.name || "",
        surname: selectedCustomer.surname || "",
        email: selectedCustomer.email || "",
        phone: selectedCustomer.phone || "",
      });
    }
  }, [selectedCustomer, form]);

  const onSubmit = async (data: CustomerFormValues) => {
    if (!selectedCustomer?.id) return;

    setIsLoading(true);
    try {
      // Sadece değişen alanları gönder
      const updateData: UpdateUserDto = {};
      
      if (data.name && data.name !== selectedCustomer.name) {
        updateData.name = data.name;
      }
      if (data.surname && data.surname !== selectedCustomer.surname) {
        updateData.surname = data.surname;
      }
      if (data.email && data.email !== selectedCustomer.email) {
        updateData.email = data.email;
      }
      if (data.phone && data.phone !== selectedCustomer.phone) {
        updateData.phone = data.phone;
      }

      // Eğer hiç değişiklik yoksa uyarı ver
      if (Object.keys(updateData).length === 0) {
        toast.error("Herhangi bir değişiklik yapılmadı");
        return;
      }

      const response = await adminService.updateUser(selectedCustomer.id, updateData);
      
      if (response.success) {
        toast.success("Müşteri başarıyla güncellendi");
        setIsEditDialogOpen(false);
        onCustomerUpdated?.(); // Listeyi yenile
      } else {
        toast.error("Müşteri güncellenirken hata oluştu");
      }
    } catch (error) {
      console.error("Customer update error:", error);
      toast.error("Müşteri güncellenirken hata oluştu");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t("editCustomer") || "Müşteri Düzenle"}</DialogTitle>
        </DialogHeader>
        {selectedCustomer && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  {t("editingCustomer") || "Düzenlenen müşteri"}: <strong>{selectedCustomer.name} {selectedCustomer.surname}</strong>
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {/* First Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-1">
                        <FormLabel className="text-sm font-medium">
                          {t("firstName") || "Ad"}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder={t("firstName") || "Ad"} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Last Name */}
                  <FormField
                    control={form.control}
                    name="surname"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-1">
                        <FormLabel className="text-sm font-medium">
                          {t("lastName") || "Soyad"}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder={t("lastName") || "Soyad"} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1">
                      <FormLabel className="text-sm font-medium">
                        {t("email") || "E-posta"}
                      </FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t("email") || "E-posta"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1">
                      <FormLabel className="text-sm font-medium">
                        {t("phone") || "Telefon"}
                      </FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder={t("phone") || "Telefon"} {...field} />
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

export default EditCustomerDialog;
