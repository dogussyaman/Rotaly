import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl,FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface AddHotelDialogProps {
  isAddHotelDialogOpen: boolean;
  setIsAddHotelDialogOpen: (open: boolean) => void;
  t: (key: string) => string;
}

const AddHotelDialog = ({ isAddHotelDialogOpen, setIsAddHotelDialogOpen, t }: AddHotelDialogProps) => {
  const hotelFormSchema = z.object({
    name: z.string().min(2, t("nameMin2")),
    location: z.string().min(2, t("locationMin2")),
    address: z.string().min(2, t("addressMin2")),
    city: z.string().min(2, t("cityMin2")),
    country: z.string().min(2, t("countryMin2")),
    type: z.enum(["APARTMENT", "HOTEL", "VILLA", "BUNGALOW", "ROOM", "RESORT", "HOSTEL", "CAMP"]),
    ownerId: z.string().min(1, t("ownerIdRequired")),
  });

  type HotelFormValues = z.infer<typeof hotelFormSchema>;
  const form = useForm<HotelFormValues>({
    resolver: zodResolver(hotelFormSchema),
    defaultValues: {
      name: "",
      location: "",
      address: "",
      city: "",
      country: "",
      type: "APARTMENT",
      ownerId: "",
    },
  });

  const onSubmit = (data: HotelFormValues) => {
    console.log(data);
  };

  return (
    <Dialog open={isAddHotelDialogOpen} onOpenChange={setIsAddHotelDialogOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("addHotel")}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* İlk satır: Name ve Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel className="text-sm font-medium">{t("name")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("name")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel className="text-sm font-medium">{t("location")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("location")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Address - tam genişlik */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="text-sm font-medium">{t("address")}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={t("address")} {...field} />
                  </FormControl>
                    <FormMessage />
                </FormItem>
              )}
            />

            {/* İkinci satır: City ve Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel className="text-sm font-medium">{t("city")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("city")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel className="text-sm font-medium">{t("country")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("country")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Üçüncü satır: Type ve Owner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel className="text-sm font-medium">{t("type")}</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder={t("type")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="APARTMENT">APARTMENT</SelectItem>
                          <SelectItem value="HOTEL">HOTEL</SelectItem>
                          <SelectItem value="VILLA">VILLA</SelectItem>
                          <SelectItem value="BUNGALOW">BUNGALOW</SelectItem>
                          <SelectItem value="ROOM">ROOM</SelectItem>
                          <SelectItem value="RESORT">RESORT</SelectItem>
                          <SelectItem value="HOSTEL">HOSTEL</SelectItem>
                          <SelectItem value="CAMP">CAMP</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ownerId"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel className="text-sm font-medium">{t("owner")}</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder={t("selectOwner")} />
                        </SelectTrigger>
                        <SelectContent>
                          {/* {t("availableOwnersWillBeListedHere")} */}
                          <SelectItem value="user1">{t("user")} 1</SelectItem>
                          <SelectItem value="user2">{t("user")} 2</SelectItem>
                          <SelectItem value="user3">{t("user")} 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">{t("addHotel")}</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddHotelDialog;