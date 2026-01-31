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
import { ArrowUpDown, Filter, MoreHorizontal, Trash, ChevronLeft, ChevronRight } from "lucide-react";
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
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const CustomerTable = ({
  filteredCustomers,
  activeFilter,
  shortBy,
  handleViewDetails,
  handleEdit,
  handleDelete,
  page,
  totalPages,
  setPage,
}: CustomerTableProps) => {
  const t = useTranslations("Customers");

  const [openDelete, setOpenDelete] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

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
                      onClick={() => handleViewDetails(customer)}
                    >
                      <svg
                        className="h-4 w-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      {t("viewDetails")}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleEdit(customer)}>
                      <svg
                        className="h-4 w-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      {t("edit")}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        setSelectedCustomer(customer);
                        setOpenDelete(true);
                      }}
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
      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 px-4">
        <div className="flex items-center space-x-2">
          <p className="text-sm text-muted-foreground">
            Showing {((page - 1) * 8) + 1} to {Math.min(page * 8, filteredCustomers.length)} of {filteredCustomers.length} results
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => page > 1 && setPage(page - 1)}
            disabled={page === 1}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          {/* Sayfa numaraları */}
          <div className="flex items-center space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Button
                key={pageNum}
                variant={page === pageNum ? "default" : "outline"}
                size="sm"
                onClick={() => setPage(pageNum)}
                className="h-8 w-8 p-0"
              >
                {pageNum}
              </Button>
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => page < totalPages && setPage(page + 1)}
            disabled={page === totalPages}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {/*Delet Dialog */}
      <Dialog
        open={openDelete}
        onOpenChange={(open) => {
          setOpenDelete(open);
          if (!open) setSelectedCustomer(null);
        }}
      >
        <DialogContent>
          <DialogTitle>{t("deleteTitle")}</DialogTitle>
          <p>{t("deleteConfirm")}</p>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{t("cancel")}</Button>
            </DialogClose>
            <Button
              onClick={() => {
                if (selectedCustomer) {
                  handleDelete(selectedCustomer);
                }
                setOpenDelete(false);
                setSelectedCustomer(null);
              }}
            >
              {t("confirm")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};



export default CustomerTable;
