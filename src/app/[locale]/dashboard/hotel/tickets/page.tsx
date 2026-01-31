"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Search,
  Calendar,
  Eye,
  MessageCircle,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supportService } from "@/services/support.service";
import { SupportTicket } from "@/types/support";

const HotelTicketsPage = () => {
  const t = useTranslations("TicketsDashboard");
  const router = useRouter();

  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<SupportTicket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [activeTab, setActiveTab] = useState("open");

  const filterTickets = useCallback(() => {
    let filtered = tickets;

    // Filter by tab (status groups)
    if (activeTab === "open") {
      filtered = filtered.filter((ticket) => !ticket.closedAt);
    } else if (activeTab === "closed") {
      filtered = filtered.filter((ticket) => ticket.closedAt !== null);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (ticket) =>
          ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ticket.body.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by status
    if (statusFilter !== "all") {
      if (statusFilter === "OPEN") {
        filtered = filtered.filter((ticket) => !ticket.closedAt);
        } else if (statusFilter === "CLOSED") {
        filtered = filtered.filter((ticket) => ticket.closedAt !== null);
      }
    }

    // Filter by category
    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (ticket) => ticket.category === categoryFilter
      );
    }

    setFilteredTickets(filtered);
  }, [tickets, searchTerm, statusFilter, categoryFilter, activeTab]);

  useEffect(() => {
    fetchTickets();
  }, []);

  useEffect(() => {
    filterTickets();
  }, [filterTickets]);

  const fetchTickets = async () => {
    try {
      setIsLoading(true);
      const response = await supportService.getSupportTickets();
      setTickets(response.supports);
      setError("");
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || "Failed to fetch tickets");
    } finally {
      setIsLoading(false);
    }
  };



  const getStatusIcon = (isOpen: boolean) => {
    if (isOpen) {
      return <AlertCircle className="w-4 h-4 text-red-500" />;
    } else {
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
  };

  const getStatusColor = (isOpen: boolean) => {
    if (isOpen) {
      return "bg-red-100 text-red-800 border-red-200";
    } else {
      return "bg-green-100 text-green-800 border-green-200";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "TECHNICAL":
        return "bg-red-100 text-red-800 border-red-200";
      case "BILLING":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "GENERAL":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "BOOKING":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "CANCELLATION":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getOpenTicketsCount = () => tickets.filter((t) => !t.closedAt).length;

  const getClosedTicketsCount = () =>
    tickets.filter((t) => t.closedAt !== null).length;

  if (isLoading) {
    return (
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-96" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Skeleton className="h-24" />
          <Skeleton className="h-24" />
          <Skeleton className="h-24" />
        </div>
        <Skeleton className="h-96" />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {t("mySupporTickets")}
          </h1>
          <p className="text-muted-foreground">{t("viewManage")}</p>
        </div>
        <Button onClick={() => router.push("/support/tickets")}>
          <Plus className="w-4 h-4 mr-2" />
          {t("createNewTicket")}
        </Button>
      </div>

      {/* Error Alert */}
      {error && (
        <Card className="border-red-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-red-800">
              <AlertCircle className="w-4 h-4" />
              <span>{error}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t("totalTickets")}
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tickets.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t("openTickets")}
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {getOpenTicketsCount()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t("resolved")}
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {getClosedTicketsCount()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>{t("filters")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t("searchTickets")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="OPEN">Open</SelectItem>
                <SelectItem value="CLOSED">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="GENERAL">General</SelectItem>
                <SelectItem value="TECHNICAL">Technical</SelectItem>
                <SelectItem value="BILLING">Billing</SelectItem>
                <SelectItem value="BOOKING">Booking</SelectItem>
                <SelectItem value="CANCELLATION">Cancellation</SelectItem>
                <SelectItem value="ACCOUNT">Account</SelectItem>
                <SelectItem value="OTHER">Other</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setStatusFilter("all");
                setCategoryFilter("all");
              }}
            >
              {t("clearFilters")}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tickets Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="open" className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {t("open")} ({getOpenTicketsCount()})
          </TabsTrigger>
          <TabsTrigger value="closed" className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            {t("closed")} ({getClosedTicketsCount()})
          </TabsTrigger>
          <TabsTrigger value="all" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            {t("all")} ({tickets.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("ticket")}</TableHead>
                  <TableHead>{t("status")}</TableHead>
                  <TableHead>{t("category")}</TableHead>
                  <TableHead>{t("created")}</TableHead>
                  <TableHead>{t("messages")}</TableHead>
                  <TableHead className="text-right">{t("actions")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTickets.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      {t("noTicketsFound")}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{ticket.subject}</div>
                          <div className="text-sm text-muted-foreground line-clamp-1">
                            {ticket.body}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(!ticket.closedAt)}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(!ticket.closedAt)}
                            {ticket.closedAt ? "CLOSED" : "OPEN"}
                          </div>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getCategoryColor(ticket.category)}>
                          {ticket.category}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {formatDate(ticket.createdAt)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm">
                          <MessageCircle className="w-3 h-3" />
                          {ticket.messageCount || 0}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            router.push(`/support/tickets/${ticket.id}`)
                          }
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HotelTicketsPage;
