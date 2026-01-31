"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CloseVerificationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function CloseVerificationDialog({
  open,
  onOpenChange,
  onConfirm,
  onCancel,
}: CloseVerificationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-md w-full rounded-2xl p-6 space-y-6 [&>button[aria-label=Close]]:hidden"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold">
            Çıkış Yapmak Üzeresiniz
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-gray-500">
            Çıkış yaparsanız hesap doğrulama işlemi tekrar başlatılacaktır. 30
            dakika sonra tekrar giriş yapabilirsiniz.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={onCancel}
            className="text-black dark:text-white"
          >
            İptal
          </Button>
          <Button
            onClick={onConfirm}
            className="bg-primary text-white dark:bg-gray-200 dark:text-black"
          >
            Çıkış Yap
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
