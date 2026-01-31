"use client";

import React, { useState, useEffect } from "react";
import { userService } from "@/services";
import { Button } from "@/components/ui/button";
import { Edit, Camera, BadgeCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/date-picker";

interface InfoField {
  id: string;
  label: string;
  value: string;
}

interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  isVerified: boolean;
  images: string[];
  paymentCards: string[];
  role: string;
}

interface ProfileTabContentProps {
  t: (key: string) => string;
  user: User | null;
}

export default function ProfileTabContent({ t, user }: ProfileTabContentProps) {
  const [personalInfo, setPersonalInfo] = useState<InfoField[]>([]);
  
  // User bilgileri geldiğinde state'i güncelle
  useEffect(() => {
    if (user) {
      setPersonalInfo([
        { id: "firstName", label: t("firstName"), value: user.name || "" },
        { id: "lastName", label: t("lastName"), value: user.surname || "" },
        { id: "email", label: t("email"), value: user.email || "" },
        { id: "phone", label: t("phone"), value: user.phone || "" },
        { id: "role", label: t("role"), value: user.role || "" },
      ]);
    }
  }, [user, t]);
  const [addressInfo, setAddressInfo] = useState<InfoField[]>([
    { id: "country", label: t("country"), value: "Türkiye" },
    { id: "city", label: t("city"), value: "Ankara" },
    { id: "postalCode", label: t("postalCode"), value: "ERT 1254" },
  ]);

  const [editSection, setEditSection] = useState<"personal" | "address" | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [tempData, setTempData] = useState<InfoField[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [passwordErrors, setPasswordErrors] = useState<Record<string, string>>({});

  const handleEditClick = (section: "personal" | "address") => {
    const data =
      section === "personal"
        ? personalInfo.filter((f) => f.id !== "role").map((item) => ({ ...item }))
        : addressInfo.map((item) => ({ ...item }));

    setEditSection(section);
    setTempData(data);
    setErrors({});
    setOpenDialog(true);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    tempData.forEach((field) => {
      const val = field.value.trim();

      if (!val) {
        newErrors[field.id] = t("fieldRequired");
      } else if (
        field.id === "email" &&
        !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(val)
      ) {
        newErrors[field.id] = t("invalidEmail");
      } else if (
        field.id === "phone" &&
        !/^\+90\s5\d{2}\s\d{3}\s\d{4}$/.test(val)
      ) {
        newErrors[field.id] = t("invalidPhone");
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePasswordChange = () => {
    const newErrors: Record<string, string> = {};
    const { current, new: newPass, confirm } = passwords;

    if (!current) newErrors.current = t("fieldRequired");
    if (!newPass) newErrors.new = t("fieldRequired");
    if (!confirm) newErrors.confirm = t("fieldRequired");

    if (newPass && confirm && newPass !== confirm)
      newErrors.confirm = t("passwordsDoNotMatch");

    setPasswordErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;

    if (editSection === "personal") {
      try {
        const userData = {
          name: tempData.find(f => f.id === "firstName")?.value || "",
          surname: tempData.find(f => f.id === "lastName")?.value || "",
          email: tempData.find(f => f.id === "email")?.value || "",
          phone: tempData.find(f => f.id === "phone")?.value || "",
        };

        await userService.updateProfile(userData);
        
        const roleField = personalInfo.find((f) => f.id === "role")!;
        const updated = [...tempData, roleField];
        setPersonalInfo(updated);
        
        // Success mesajı gösterebilirsiniz
        console.log("Profil başarıyla güncellendi");
      } catch (error) {
        console.error("Profil güncelleme hatası:", error);
        // Error mesajı gösterebilirsiniz
      }
    } else {
      setAddressInfo(tempData);
    }

    setOpenDialog(false);
  };

  const handlePasswordSave = () => {
    if (!validatePasswordChange()) return;

    console.log("Password changed:", passwords);

    setPasswords({ current: "", new: "", confirm: "" });
    setPasswordErrors({});
    setOpenPasswordDialog(false);
  };

  const getFieldValue = (data: InfoField[], id: string) =>
    data.find((f) => f.id === id)?.value || "";

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">{t("title")}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t("subtitle")}</p>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="relative group">
          <Avatar className="h-28 w-28 ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-blue-400 transition">
            <AvatarImage src="/images/userprofile.png" />
            <AvatarFallback>AY</AvatarFallback>
          </Avatar>
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-0 right-0 bg-white dark:bg-gray-700 backdrop-blur rounded-full p-1 shadow"
          >
            <Camera className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </Button>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-medium text-gray-800 dark:text-white flex items-center gap-2">
            <span>
              {user ? `${user.name} ${user.surname}` : getFieldValue(personalInfo, "firstName") + " " + getFieldValue(personalInfo, "lastName")}
            </span>
            {user?.isVerified && <BadgeCheck className="text-blue-500 w-5 h-5" />}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {user ? user.role : getFieldValue(personalInfo, "role")}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {getFieldValue(addressInfo, "city")},{" "}
            {getFieldValue(addressInfo, "country")}
          </p>
        </div>
      </div>

      {[{ title: t("personalInfo"), data: personalInfo, key: "personal" }, { title: t("addressInfo"), data: addressInfo, key: "address" }].map(
        (section) => (
          <section
            key={section.key}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6 space-y-6"
          >
            <div className="flex justify-between items-center border-b border-gray-300/40 dark:border-gray-600 pb-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {section.title}
              </h3>
              <Button
                onClick={() => handleEditClick(section.key as "personal" | "address")}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Edit className="mr-2 h-4 w-4" />
                {t("edit")}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8">
              {section.data.map((field) => (
                <div key={field.id} className="space-y-1 pb-4">
                  <Label className="text-gray-500 dark:text-gray-400 text-sm">{field.label}</Label>
                  <p className="text-gray-800 dark:text-white font-medium">
                    {field.id === "dob"
                      ? format(new Date(field.value), "dd.MM.yyyy")
                      : field.value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )
      )}

      {/* Şifre alanı */}
      <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6 space-y-6">
        <div className="flex justify-between items-center border-b border-gray-300/40 dark:border-gray-600 pb-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {t("passwordOperations")}
          </h3>
          <Button
            onClick={() => setOpenPasswordDialog(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            <Edit className="mr-2 h-4 w-4" />
            {t("changePassword")}
          </Button>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{t("passwordHint")}</p>
      </section>

      {/* Edit Dialog */}
      <Dialog
        open={openDialog}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setTempData([]);
            setErrors({});
            setEditSection(null);
          }
          setOpenDialog(isOpen);
        }}
      >
        <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900 rounded-xl p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
              {t("edit")}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {tempData.map((field, idx) => (
              <div key={field.id} className="space-y-1">
                <Label htmlFor={field.id} className="text-gray-700 dark:text-gray-300">
                  {field.label}
                </Label>

                {field.id === "dob" ? (
                  <DatePicker />
                ) : (
                  <Input
                    id={field.id}
                    value={field.value}
                    onChange={(e) => {
                      const updated = [...tempData];
                      updated[idx].value = e.target.value;
                      setTempData(updated);
                    }}
                    placeholder={field.id === "phone" ? "+90 532 123 4567" : undefined}
                    className={`dark:bg-gray-800 dark:text-white ${errors[field.id] ? "border-red-500" : ""}`}
                  />
                )}
                {errors[field.id] && (
                  <p className="text-sm text-red-500">{errors[field.id]}</p>
                )}
              </div>
            ))}
          </div>

          <DialogFooter className="pt-4">
            <Button
              onClick={handleSave}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              {t("save")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Password Dialog */}
    <Dialog open={openPasswordDialog} onOpenChange={setOpenPasswordDialog}>
        <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900 rounded-xl p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
              {t("changePassword")}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {[
              { id: "current", label: t("currentPassword") },
              { id: "new", label: t("newPassword") },
              { id: "confirm", label: t("confirmNewPassword") },
            ].map((field) => (
              <div key={field.id} className="space-y-1">
                <Label htmlFor={field.id} className="text-gray-700 dark:text-gray-300">
                  {field.label}
                </Label>
                <Input
                  id={field.id}
                  type="password"
                  value={passwords[field.id as keyof typeof passwords]}
                  onChange={(e) =>
                    setPasswords((prev) => ({ ...prev, [field.id]: e.target.value }))
                  }
                  className={`dark:bg-gray-800 dark:text-white ${
                    passwordErrors[field.id] ? "border-red-500" : ""
                  }`}
                />
                {passwordErrors[field.id] && (
                  <p className="text-sm text-red-500">{passwordErrors[field.id]}</p>
                )}
              </div>
            ))}
          </div>

          <DialogFooter className="pt-4">
            <Button
              onClick={handlePasswordSave}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              {t("save")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
