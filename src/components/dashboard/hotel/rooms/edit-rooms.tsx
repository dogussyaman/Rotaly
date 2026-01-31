"use client";

import { FC, useState, useEffect } from "react";
import { Room } from "@/types/room";

interface EditRoomDialogProps {
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (value: boolean) => void;
  selectedRoom: Room;
}

const EditRoomDialog: FC<EditRoomDialogProps> = ({
  isEditDialogOpen,
  setIsEditDialogOpen,
  selectedRoom,
}) => {
  const [roomData, setRoomData] = useState<Room>(selectedRoom);

  useEffect(() => {
    setRoomData(selectedRoom);
  }, [selectedRoom]);

  const handleSave = () => {
    console.log("Oda güncellendi:", roomData);
    setIsEditDialogOpen(false);
  };

  if (!isEditDialogOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Oda Düzenle</h2>
        <input
          type="text"
          value={roomData.name}
          className="input input-bordered w-full mb-2"
          onChange={(e) => setRoomData({ ...roomData, name: e.target.value })}
          placeholder="Oda Adı"
        />
        <textarea
          value={roomData.description || ""}
          className="input input-bordered w-full mb-2"
          onChange={(e) => setRoomData({ ...roomData, description: e.target.value })}
          placeholder="Oda Açıklaması"
          rows={3}
        />
        <input
          type="number"
          value={roomData.price}
          className="input input-bordered w-full mb-2"
          onChange={(e) =>
            setRoomData({ ...roomData, price: Number(e.target.value) })
          }
          placeholder="Fiyat"
        />
        <div className="grid grid-cols-2 gap-2 mb-2">
          <input
            type="number"
            value={roomData.maxAdults}
            className="input input-bordered w-full"
            onChange={(e) =>
              setRoomData({ ...roomData, maxAdults: Number(e.target.value) })
            }
            placeholder="Maksimum Yetişkin"
          />
          <input
            type="number"
            value={roomData.maxChildren}
            className="input input-bordered w-full"
            onChange={(e) =>
              setRoomData({ ...roomData, maxChildren: Number(e.target.value) })
            }
            placeholder="Maksimum Çocuk"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <input
            type="number"
            value={roomData.floor}
            className="input input-bordered w-full"
            onChange={(e) =>
              setRoomData({ ...roomData, floor: Number(e.target.value) })
            }
            placeholder="Kat"
          />
          <input
            type="number"
            value={roomData.roomNumber}
            className="input input-bordered w-full"
            onChange={(e) =>
              setRoomData({ ...roomData, roomNumber: Number(e.target.value) })
            }
            placeholder="Oda Numarası"
          />
        </div>
        <input
          type="number"
          value={roomData.capacity}
          className="input input-bordered w-full mb-2"
          onChange={(e) =>
            setRoomData({ ...roomData, capacity: Number(e.target.value) })
          }
          placeholder="Toplam Kapasite"
        />
        <input
          type="number"
          value={roomData.bedCount}
          className="input input-bordered w-full mb-2"
          onChange={(e) =>
            setRoomData({ ...roomData, bedCount: Number(e.target.value) })
          }
          placeholder="Yatak Sayısı"
        />
        <div className="flex justify-end space-x-2 mt-4">
          <button
            className="btn btn-secondary"
            onClick={() => setIsEditDialogOpen(false)}
          >
            İptal
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRoomDialog;
