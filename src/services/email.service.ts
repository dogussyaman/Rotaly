const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const emailService = {
  async sendContactEmail(
    emailData: {
      name: string;
      email: string;
      subject: string;
      message: string;
    },
    locale: string = "en"
  ) {
    await delay(1000);
    console.log("Mock Email Sent (Contact):", emailData);
    return { success: true, message: "Email sent" };
  },

  async sendWelcomeEmail(email: string, locale: string = "en") {
    await delay(1000);
    console.log("Mock Email Sent (Welcome):", email);
    return { success: true, message: "Email sent" };
  },

  async sendSupportConfirmationEmail(
    email: string,
    ticketId: string,
    locale: string = "en"
  ) {
    await delay(1000);
    console.log("Mock Email Sent (Support):", email, ticketId);
    return { success: true, message: "Email sent" };
  },

  async sendBookingConfirmationEmail(
    bookingData: {
      email: string;
      name: string;
      hotelName: string;
      hotelAddress: string;
      hotelPhone?: string;
      checkInDate: string;
      checkInTime: string;
      checkOutDate: string;
      checkOutTime: string;
      nightCount: number;
      guestCount: number;
      roomType: string;
      totalAmount: string;
      confirmationNumber: string;
      specialRequest?: string;
    },
    locale: string = "en"
  ) {
    await delay(1000);
    console.log("Mock Email Sent (Booking):", bookingData);
    return { success: true, message: "Email sent" };
  },
};
