import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTranslations } from "next-intl";

const PaymentProcessing = () => {
  const t = useTranslations("HotelDetail.PaymentProcessing");
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <DotLottieReact
        src="https://lottie.host/e837e66a-b157-4633-9758-332486d48d06/ZqA0wj2vcp.lottie"
        loop
        className="w-full h-full"
        autoplay
      />
      <p>{t("processingMessage")}</p>
    </div>
  );
};

export default PaymentProcessing;