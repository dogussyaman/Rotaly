"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import {
  ArrowLeft,
  MessageSquare,
  Clock,
  CheckCircle,
  Send,
  AlertCircle,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supportService } from "@/services/support.service";
import {
  SupportTicketWithMessages,
  SupportCategory,
  SupportMessage,
} from "@/types/support";
import { getErrorMessage } from "@/lib/error-utils";
import { RootState } from "@/store/store";

const categoryColors = {
  [SupportCategory.GENERAL]: "bg-blue-100 text-blue-800",
  [SupportCategory.TECHNICAL]: "bg-red-100 text-red-800",
  [SupportCategory.BILLING]: "bg-green-100 text-green-800",
  [SupportCategory.BOOKING]: "bg-purple-100 text-purple-800",
  [SupportCategory.CANCELLATION]: "bg-orange-100 text-orange-800",
  [SupportCategory.ACCOUNT]: "bg-yellow-100 text-yellow-800",
  [SupportCategory.OTHER]: "bg-gray-100 text-gray-800",
};

export default function TicketDetailPage() {
  const t = useTranslations("TicketDetail");
  const [ticket, setTicket] = useState<SupportTicketWithMessages | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
  const [showCloseDialog, setShowCloseDialog] = useState(false);
  const [closingTicket, setClosingTicket] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const params = useParams();
  const router = useRouter();
  const ticketId = params.ticketId as string;

  const categoryLabels = {
    [SupportCategory.GENERAL]: t("categoryGeneral"),
    [SupportCategory.TECHNICAL]: t("categoryTechnical"),
    [SupportCategory.BILLING]: t("categoryBilling"),
    [SupportCategory.BOOKING]: t("categoryBooking"),
    [SupportCategory.CANCELLATION]: t("categoryCancellation"),
    [SupportCategory.ACCOUNT]: t("categoryAccount"),
    [SupportCategory.OTHER]: t("categoryOther"),
  };

  const fetchTicket = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await supportService.getSupportTicketById(ticketId);
      setTicket(response);
    } catch (err: unknown) {
      setError(getErrorMessage(err, "Failed to load ticket details"));
    } finally {
      setLoading(false);
    }
  }, [ticketId]);

  useEffect(() => {
    if (ticketId) {
      fetchTicket();
    }
  }, [ticketId, fetchTicket]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !ticket) return;

    try {
      setSendingMessage(true);
      await supportService.sendMessageToTicket(ticketId, newMessage.trim());
      setNewMessage("");
      // Refresh the ticket to get updated messages
      await fetchTicket();
    } catch (err: unknown) {
      setError(getErrorMessage(err, "Failed to send message"));
    } finally {
      setSendingMessage(false);
    }
  };

  const handleCloseTicket = async () => {
    try {
      setClosingTicket(true);
      await supportService.closeSupportTicket(ticketId);
      setShowCloseDialog(false);
      // Refresh the ticket to show updated status
      await fetchTicket();
    } catch (err: unknown) {
      setError(getErrorMessage(err, "Failed to close ticket"));
    } finally {
      setClosingTicket(false);
    }
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

  const getInitials = (name: string, surname: string) => {
    return `${name.charAt(0)}${surname.charAt(0)}`.toUpperCase();
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center gap-4 mb-6">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-32" />
        </div>
        <Card className="mb-6">
          <CardHeader>
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-20 w-full" />
          </CardContent>
        </Card>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-16 w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error && !ticket) {
    return (
      <div className="container mx-auto py-8 px-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="container mx-auto py-8 px-4">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>Ticket not found</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("back")}
        </Button>
        <h1 className="text-2xl font-bold">{t("supportTicket")}</h1>
      </div>

      {error && (
        <Alert className="mb-6" variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Ticket Details */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl">{ticket.subject}</CardTitle>
              <CardDescription className="mt-2">
                {t("created")} {formatDate(ticket.createdAt)} {t("by")}{" "}
                {ticket.user.name} {ticket.user.surname}
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
                  {t("statusClosed")}
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="text-blue-600 border-blue-600"
                >
                  <Clock className="w-3 h-3 mr-1" />
                  {t("statusOpen")}
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-sm whitespace-pre-wrap">{ticket.body}</p>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                <span>
                  {ticket.messageCount} {t("messages")}
                </span>
              </div>
              {ticket.supportRep && (
                <div>
                  {t("assignedTo")} {ticket.supportRep.name}{" "}
                  {ticket.supportRep.surname}
                </div>
              )}
            </div>
            {!ticket.closedAt && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCloseDialog(true)}
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                <X className="w-4 h-4 mr-1" />
                {t("closeTicket")}
              </Button>
            )}
          </div>

          {ticket.closedAt && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                {t("ticketClosed")} {formatDate(ticket.closedAt)}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Messages */}
      <div className="space-y-4 mb-6">
        <h2 className="text-lg font-semibold">{t("conversation")}</h2>

        {ticket.messages && ticket.messages.length > 0 ? (
          ticket.messages.map((message: SupportMessage) => (
            <Card key={message.id}>
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>
                      {getInitials(message.sender.name, message.sender.surname)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-sm">
                        {message.sender.name} {message.sender.surname}
                      </span>
                      {message.sender.role === "SUPPORT" && (
                        <Badge variant="outline" className="text-xs">
                          {t("supportTeam")}
                        </Badge>
                      )}
                      <span className="text-xs text-gray-500">
                        {formatDate(message.createdAt)}
                      </span>
                    </div>
                    <p className="text-sm whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="py-8 text-center">
              <MessageSquare className="w-8 h-8 mx-auto text-gray-400 mb-3" />
              <p className="text-gray-600">{t("noMessages")}</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Message Input */}
      {!ticket.closedAt && user?.role !== "ADMIN" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{t("sendMessageTitle")}</CardTitle>
            <CardDescription>{t("addMessage")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea
                placeholder={t("typeMessage")}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="min-h-[100px]"
                disabled={sendingMessage}
              />
              <div className="flex justify-end">
                <Button
                  onClick={handleSendMessage}
                  disabled={sendingMessage || !newMessage.trim()}
                  className="flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {sendingMessage ? t("sending") : t("sendMessage")}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Admin Info */}
      {!ticket.closedAt && user?.role === "ADMIN" && (
        <Card>
          <CardContent className="py-8 text-center">
            <div className="text-gray-500">
              <p className="text-sm">{t("adminInfo")}</p>
              <p className="text-xs mt-1">{t("adminInfoSub")}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Close Ticket Dialog */}
      <Dialog open={showCloseDialog} onOpenChange={setShowCloseDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("closeTicketTitle")}</DialogTitle>
            <DialogDescription>{t("closeTicketConfirm")}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowCloseDialog(false)}
              disabled={closingTicket}
            >
              {t("cancel")}
            </Button>
            <Button
              onClick={handleCloseTicket}
              disabled={closingTicket}
              className="bg-red-600 hover:bg-red-700"
            >
              {closingTicket ? t("closing") : t("closeTicket")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
