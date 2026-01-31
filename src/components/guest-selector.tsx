"use client";

import React, { useState, useEffect } from "react";

import { Users } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface GuestSelectorProps {
  value: {
    adults: number;
    children: number;
    total: number;
  };
  onChange: (value: { adults: number; children: number; total: number }) => void;
  className?: string;
  placeholder?: string;
}

const GuestSelector: React.FC<GuestSelectorProps> = ({
  value,
  onChange,
  className = "",
}) => {
  const [adults, setAdults] = useState(value.adults);
  const [children, setChildren] = useState(value.children);

  useEffect(() => {
    const total = adults + children;
    onChange({ adults, children, total });
  }, [adults, children, onChange]);

  const handleAdultChange = (increment: boolean) => {
    if (increment) {
      setAdults(adults + 1);
    } else {
      setAdults(Math.max(1, adults - 1));
    }
  };

  const handleChildrenChange = (increment: boolean) => {
    if (increment) {
      setChildren(children + 1);
    } else {
      setChildren(Math.max(0, children - 1));
    }
  };

  const getDisplayText = () => {
    if (children === 0) {
      return `${adults} Yetişkin`;
    }
    return `${adults} Yetişkin, ${children} Çocuk`;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={`w-full justify-start text-left font-normal ${className}`}
        >
          <Users className="mr-2 h-4 w-4" />
          {getDisplayText()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="start">
        <div className="space-y-4">
          <h4 className="font-medium leading-none">Kişi Sayısı</h4>
          
          {/* Yetişkin Sayısı */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Yetişkin</p>
              <p className="text-xs text-muted-foreground">13 yaş ve üzeri</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleAdultChange(false)}
                disabled={adults <= 1}
                className="w-8 h-8 p-0"
              >
                -
              </Button>
              <span className="w-8 text-center font-medium">{adults}</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleAdultChange(true)}
                className="w-8 h-8 p-0"
              >
                +
              </Button>
            </div>
          </div>

          {/* Çocuk Sayısı */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Çocuk</p>
              <p className="text-xs text-muted-foreground">0-12 yaş</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleChildrenChange(false)}
                disabled={children <= 0}
                className="w-8 h-8 p-0"
              >
                -
              </Button>
              <span className="w-8 text-center font-medium">{children}</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleChildrenChange(true)}
                className="w-8 h-8 p-0"
              >
                +
              </Button>
            </div>
          </div>

          {/* Toplam */}
          <div className="pt-2 border-t">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Toplam</span>
              <span className="text-sm font-semibold">{value.total} Kişi</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default GuestSelector;
