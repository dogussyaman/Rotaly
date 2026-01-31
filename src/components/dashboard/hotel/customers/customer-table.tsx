"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Filter, MoreHorizontal, Trash } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Customer } from "@/types/customer";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

interface CustomerTableProps {
  filteredCustomers: Customer[];
  activeFilter: (value: string) => void;
  shortBy: (sort: string) => void;
  handleViewDetails: (customer: Customer) => void;
  handleEdit: (customer: Customer) => void;
  handleDelete: (customer: Customer) => void;
}

const CustomerTable = ({
  filteredCustomers,
  activeFilter,
  shortBy,
}: CustomerTableProps) => {
  const t = useTranslations("Customers");

  const [openDelete, setOpenDelete] = useState(false);

  return (
    <div className="hidden lg:block">
      <Table>
        <TableHeader>
          <TableRow className="border-border">
            <TableHead className="text-muted-foreground">
              <div className="flex items-center justify-between">
                {t("customerInformation")}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => shortBy("name")}>
                      A-Z
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => shortBy("name-desc")}>
                      Z-A
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground">
              <div className="flex items-center justify-between">
                {t("phone")}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => shortBy("phone")}>
                      A-Z
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => shortBy("phone-desc")}>
                      Z-A
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground">
              <div className="flex items-center justify-between">
                {t("email")}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => shortBy("email")}>
                      A-Z
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => shortBy("email-desc")}>
                      Z-A
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground">
              <div className="flex items-center justify-between">
                {t("createdAt")}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => shortBy("createdAt")}>
                      En Yeni
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => shortBy("createdAt-desc")}>
                      En Eski
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground">
              <div className="flex items-center justify-between">
                {t("lastReservation")}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => shortBy("lastReservation")}
                    >
                      En Yeni
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => shortBy("lastReservation-desc")}
                    >
                      En Eski
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground">
              <div className="flex items-center justify-between">
                {t("totalSpent")}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => shortBy("totalSpent")}>
                      En Düşük
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => shortBy("totalSpent-desc")}
                    >
                      En Yüksek
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground">
              <div className="flex items-center justify-between">
                {t("status")}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Filter className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => activeFilter("verified")}>
                      {t("verified")}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => activeFilter("unverified")}
                    >
                      {t("unverified")}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => activeFilter("all")}>
                      {t("allStatus")}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCustomers.map((customer) => (
            <TableRow
              key={customer.id}
              className="border-border hover:bg-muted/50"
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={customer.avatar}
                      alt={`${customer.name} ${customer.surname}`}
                    />
                    <AvatarFallback>
                      {customer.name[0]}
                      {customer.surname[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">
                      {customer.name} {customer.surname}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-foreground">
                {customer.phone}
              </TableCell>
              <TableCell className="text-foreground">
                {customer.email}
              </TableCell>
              <TableCell className="text-foreground">
                {new Date(customer.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-foreground">
                {customer.lastReservation
                  ? new Date(customer.lastReservation).toLocaleDateString()
                  : "-"}
              </TableCell>
              <TableCell className="font-medium text-foreground">
                {customer.totalSpent.toLocaleString("tr-TR")} TL
              </TableCell>
              <TableCell>
                <Badge
                  variant={customer.isVerified ? "default" : "secondary"}
                  className={
                    customer.isVerified
                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                      : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                  }
                >
                  {customer.isVerified ? t("verified") : t("unverified")}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => setOpenDelete(true)}
                      className="text-red-600 focus:text-red-600"
                    >
                      <Trash className="h-4 w-4 mr-2" />
                      {t("delete")}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/*Delet Dialog */}
    <Dialog open={openDelete} onOpenChange={setOpenDelete}>
  <DialogContent>
    <DialogTitle>{t("deleteTitle")}</DialogTitle>
    <p>{t("deleteConfirm")}</p>
    <DialogFooter>
   <DialogClose asChild>
  <Button variant="outline">
    {t("cancel")}
  </Button>
</DialogClose>
      <Button onClick={() => setOpenDelete(false)}>
        {t("confirm")}
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
      ;
    </div>
  );
};

<Dialog>
  <DialogContent>test</DialogContent>
</Dialog>;

export default CustomerTable;
