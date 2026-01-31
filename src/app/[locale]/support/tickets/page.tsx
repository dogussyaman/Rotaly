"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Plus, MessageSquare, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { supportService } from "@/services/support.service";
import { SupportTicket, SupportCategory } from "@/types/support";
import { CreateTicketDialog } from "./components/create-ticket-dialog";

const categoryColors = {
  [SupportCategory.GENERAL]: "bg-blue-100 text-blue-800",
  [SupportCategory.TECHNICAL]: "bg-red-100 text-red-800",
  [SupportCategory.BILLING]: "bg-green-100 text-green-800",
  [SupportCategory.BOOKING]: "bg-purple-100 text-purple-800",
  [SupportCategory.CANCELLATION]: "bg-orange-100 text-orange-800",
  [SupportCategory.ACCOUNT]: "bg-yellow-100 text-yellow-800",
  [SupportCategory.OTHER]: "bg-gray-100 text-gray-800",
};

export default function SupportPage() {
  const t = useTranslations("SupportTickets");
  const tDetail = useTranslations("TicketDetail");
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | "open" | "closed">("all");
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const router = useRouter();

  const categoryLabels = {
    [SupportCategory.GENERAL]: tDetail("categoryGeneral"),
    [SupportCategory.TECHNICAL]: tDetail("categoryTechnical"),
    [SupportCategory.BILLING]: tDetail("categoryBilling"),
    [SupportCategory.BOOKING]: tDetail("categoryBooking"),
    [SupportCategory.CANCELLATION]: tDetail("categoryCancellation"),
    [SupportCategory.ACCOUNT]: tDetail("categoryAccount"),
    [SupportCategory.OTHER]: tDetail("categoryOther"),
  };

  const fetchTickets = async (status: "all" | "open" | "closed" = "all") => {
    try {
      setLoading(true);
      const response = await supportService.getSupportTickets(1, 20, status);
      setTickets(response.supports);
    } catch {
      // setError(getErrorMessage(err, t("failedToLoad")));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets(activeTab);
  }, [activeTab]);

  const handleTicketCreated = () => {
    setShowCreateDialog(false);
    fetchTickets(activeTab);
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const TicketCard = ({ ticket }: { ticket: SupportTicket }) => (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => router.push(`/support/tickets/${ticket.id}`)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{ticket.subject}</CardTitle>
            <CardDescription className="mt-1">
              {t("created")} {formatDate(ticket.createdAt)}
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={categoryColors[ticket.category]}>
              {categoryLabels[ticket.category]}
            </Badge>
            {ticket.closedAt ? (
              <Badge
                variant="outline"
                className="text-green-600 border-green-600"
              >
                <CheckCircle className="w-3 h-3 mr-1" />
                {tDetail("statusClosed")}
              </Badge>
            ) : (
              <Badge
                variant="outline"
                className="text-blue-600 border-blue-600"
              >
                <Clock className="w-3 h-3 mr-1" />
                {tDetail("statusOpen")}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{ticket.body}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            <span>{ticket.messageCount} messages</span>
          </div>
          {ticket.lastMessage && (
            <div>Last activity: {formatDate(ticket.lastMessage.createdAt)}</div>
          )}
        </div>
        {ticket.supportRep && (
          <div className="mt-2 text-sm text-gray-600">
            Assigned to: {ticket.supportRep.name} {ticket.supportRep.surname}
          </div>
        )}
      </CardContent>
    </Card>
  );

  const TicketsSkeleton = () => (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
            <div className="flex justify-between mt-3">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">{t("title")}</h1>
          <p className="text-gray-600 mt-1">{t("description")}</p>
        </div>
        <Button
          onClick={() => setShowCreateDialog(true)}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          {t("createTicket")}
        </Button>
      </div>

      {/* {error && (
        <Alert className="mb-6" variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )} */}

      <Tabs
        value={activeTab}
        onValueChange={(value) =>
          setActiveTab(value as "all" | "open" | "closed")
        }
      >
        <TabsList className="">
          <TabsTrigger value="all">{t("allTickets")}</TabsTrigger>
          <TabsTrigger value="open">{t("openTickets")}</TabsTrigger>
          <TabsTrigger value="closed">{t("closedTickets")}</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          {loading ? (
            <TicketsSkeleton />
          ) : tickets.length > 0 ? (
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-8 text-center">
                <MessageSquare className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t("noTickets")}</h3>
                <p className="text-gray-600 mb-4">{t("noTicketsDesc")}</p>
                <Button onClick={() => setShowCreateDialog(true)}>
                  {t("createFirstTicket")}
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="open" className="mt-6">
          {loading ? (
            <TicketsSkeleton />
          ) : tickets.filter((t) => !t.closedAt).length > 0 ? (
            <div className="space-y-4">
              {tickets
                .filter((t) => !t.closedAt)
                .map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} />
                ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-8 text-center">
                <CheckCircle className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {t("noOpenTickets")}
                </h3>
                <p className="text-gray-600">{t("allResolved")}</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="closed" className="mt-6">
          {loading ? (
            <TicketsSkeleton />
          ) : tickets.filter((t) => t.closedAt).length > 0 ? (
            <div className="space-y-4">
              {tickets
                .filter((t) => t.closedAt)
                .map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} />
                ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-8 text-center">
                <Clock className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {t("noClosedTickets")}
                </h3>
                <p className="text-gray-600">{t("noClosedTicketsDesc")}</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      <CreateTicketDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        onTicketCreated={handleTicketCreated}
      />
    </div>
  );
}
