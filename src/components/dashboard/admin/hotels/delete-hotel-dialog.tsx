import { Button } from '@/components/ui/button';
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Dialog } from '@/components/ui/dialog';
import React from 'react'
import { HotelNew } from '@/types/hotel';

interface DeleteHotelDialogProps {
  isDeleteDialogOpen: boolean;
  setIsDeleteDialogOpen: (open: boolean) => void;
  t: (key: string) => string;
  selectedHotel: HotelNew;
  confirmDelete: () => void;
}

const DeleteHotelDialog = ({ isDeleteDialogOpen, setIsDeleteDialogOpen, t, selectedHotel, confirmDelete }: DeleteHotelDialogProps) => {
  return (
    <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{t("deleteHotel")}</DialogTitle>
          </DialogHeader>
          {selectedHotel && (
            <div className="space-y-4">
              <p className="text-muted-foreground">
                {t("deleteHotelConfirmation")}: <strong>{selectedHotel.name}</strong>?
              </p>
              <p className="text-sm text-red-600">
                {t("deleteWarning")}
              </p>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                  {t("cancel")}
                </Button>
                <Button 
                  variant="destructive" 
                  onClick={confirmDelete}
                >
                  {t("delete")}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
  )
}

export default DeleteHotelDialog;

