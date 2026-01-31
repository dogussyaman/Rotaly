import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Edit, Trash } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'
import { Customer } from '@/types/customer';

interface CustomerMobilCardProps {
  filteredCustomers: Customer[];
  handleViewDetails: (customer: Customer) => void;
  handleEdit: (customer: Customer) => void;
  handleDelete: (customer: Customer) => void;
}

const CustomerMobilCard = ({ filteredCustomers, handleViewDetails, handleEdit, handleDelete }: CustomerMobilCardProps) => {
  const t = useTranslations("Customers");

  return (
    <div className="lg:hidden space-y-4 p-4">
      {filteredCustomers.map((customer) => (
        <Card key={customer.id} className="border border-border">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={customer.avatar} alt={`${customer.name} ${customer.surname}`} />
                    <AvatarFallback>
                      {customer.name[0]}{customer.surname[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">
                      {customer.name} {customer.surname}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {customer.email}
                    </p>
                  </div>
                </div>
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
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">{t("phone")}</p>
                  <p className="font-medium text-foreground">
                    {customer.phone}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t("created")}</p>
                  <p className="text-foreground">
                    {new Date(customer.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t("lastReservation")}</p>
                  <p className="text-foreground">
                    {customer.lastReservation
                      ? new Date(customer.lastReservation).toLocaleDateString()
                      : "-"}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t("totalSpent")}</p>
                  <p className="font-medium text-foreground">
                    {customer.totalSpent.toLocaleString("tr-TR")} TL
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t("totalReservations")}</p>
                  <p className="text-foreground">
                    {customer.totalReservations}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t("favoriteHotels")}</p>
                  <p className="text-foreground">
                    {customer.favoriteHotels}
                  </p>
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleViewDetails(customer)}
                  className="flex-1"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  {t("viewDetails")}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEdit(customer)}
                  className="flex-1"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  {t("edit")}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(customer)}
                  className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
                >
                  <Trash className="h-4 w-4 mr-2" />
                  {t("delete")}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default CustomerMobilCard;
