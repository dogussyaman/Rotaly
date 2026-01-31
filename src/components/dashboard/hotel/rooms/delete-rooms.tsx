"use client";

import { FC } from "react";
import { Room } from "@/types/room";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Trash2, X } from "lucide-react";

interface DeleteRoomDialogProps {
  isDeleteDialogOpen: boolean;
  setIsDeleteDialogOpen: (value: boolean) => void;
  selectedRoom: Room;
  confirmDelete: () => void;
}

const DeleteRoomDialog: FC<DeleteRoomDialogProps> = ({
  isDeleteDialogOpen,
  setIsDeleteDialogOpen,
  selectedRoom,
  confirmDelete,
}) => {
  if (!isDeleteDialogOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 dark:bg-black/70 z-50">
      <Card className="w-full max-w-md mx-4 bg-background border-border shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              Oda Silme Onayı
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDeleteDialogOpen(false)}
              className="h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="bg-destructive/10 dark:bg-destructive/20 border border-destructive/20 dark:border-destructive/30 rounded-lg p-4">
            <p className="text-sm text-foreground mb-2">
              <strong className="text-destructive">{selectedRoom.name}</strong> adlı oda kalıcı olarak silinecek.
            </p>
            <p className="text-xs text-muted-foreground">
              Bu işlem geri alınamaz ve oda ile ilgili tüm veriler kaybolacaktır.
            </p>
          </div>

          <div className="bg-muted/50 dark:bg-muted/30 rounded-lg p-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Oda Numarası:</span>
              <span className="font-medium text-foreground">{selectedRoom.roomNumber}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Oda Türü:</span>
              <span className="font-medium text-foreground">{selectedRoom.type}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Kapasite:</span>
              <span className="font-medium text-foreground">{selectedRoom.capacity} Kişi</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Fiyat:</span>
              <span className="font-medium text-foreground">{selectedRoom.price}₺</span>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
              className="flex-1"
            >
              İptal
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDelete}
              className="flex-1"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Sil
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeleteRoomDialog;
