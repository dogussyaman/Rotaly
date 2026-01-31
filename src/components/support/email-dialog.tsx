"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import z from "zod";
import {useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

const EmailDialog = () => {
  const emailSchema = z.object({
    name: z.string().min(3, { message: "İsim en az 3 karakter olmalıdır" }),
    email: z.string().email({ message: "Geçerli bir email adresi giriniz" }),
    title: z.string().min(3, { message: "Başlık en az 3 karakter olmalıdır" }),
    content: z.string().min(10, { message: "İçerik en az 10 karakter olmalıdır" }),
  });

  type EmailFormData = z.infer<typeof emailSchema>;

  const form = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      content: "",
    },
  });

  const onSubmit = async (data: EmailFormData) => {
    try {
      console.log("Form data:", data);
      // Burada email gönderme işlemi yapılacak
      // await sendEmail(data);
      
      // Form başarılı olduğunda formu sıfırla
      form.reset();
    } catch (error) {
      console.error("Email gönderme hatası:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="dark:text-blue-100 cursor-pointer hover:underline hover:text-blue-500 transition-all duration-300">
          support@hotel.com
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Email Gönder</DialogTitle>
          <DialogDescription>
            Destek ekibimizle iletişime geçmek için formu doldurunuz.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="name">İsim</Label>
                  <FormControl>
                    <Input 
                      id="name"
                      placeholder="İsminizi giriniz" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email">Email</Label>
                  <FormControl>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="Email adresinizi giriniz" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="title">Başlık</Label>
                  <FormControl>
                    <Input 
                      id="title"
                      placeholder="Başlık giriniz" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="content">Mesaj</Label>
                  <FormControl>
                    <Textarea 
                      id="content"
                      placeholder="Mesajınızı giriniz" 
                      className="min-h-[100px] resize-none"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Gönderiliyor..." : "Gönder"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailDialog;