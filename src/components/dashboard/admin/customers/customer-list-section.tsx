import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react';
import { CustomerFilters, CustomerTable, CustomerMobilCard } from './index';
import type { Customer } from '@/types/customer';

export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

interface CustomerListSectionProps {
  searchTerm: string;
  handleSearch: (value: string) => void;
  activeFilter: (value: string) => void;
  shortBy: (short: string) => void;
  handleViewDetails: (customer: Customer) => void;
  handleEdit: (customer: Customer) => void;
  handleDelete: (customer: Customer) => void;
  paginatedCustomers: Customer[];
  filteredCustomers: Customer[];
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const CustomerListSection: React.FC<CustomerListSectionProps> = ({
  searchTerm,
  handleSearch,
  activeFilter,
  shortBy,
  handleViewDetails,
  handleEdit,
  handleDelete,
  paginatedCustomers,
  filteredCustomers,
  page,
  totalPages,
  setPage
}) => {
  return (
    <Card className="bg-card border border-border">
      <CardHeader className="pb-4">
        <CustomerFilters
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          activeFilter={activeFilter}
          shortBy={shortBy}
        />
      </CardHeader>

      <CardContent className="p-0">
        {/* Desktop Table */}
        <CustomerTable
          filteredCustomers={paginatedCustomers}
          activeFilter={activeFilter}
          shortBy={shortBy}
          handleViewDetails={handleViewDetails}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />

        {/* Mobile Cards - Tüm veriler gösterilir, pagination yok */}
        <CustomerMobilCard
          filteredCustomers={filteredCustomers}
          handleViewDetails={handleViewDetails}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </CardContent>
    </Card>
  );
};

export default CustomerListSection;
