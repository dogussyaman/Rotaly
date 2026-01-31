import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Root layout - sadece children'ı geçirir çünkü asıl layout [locale]/layout.tsx'de
export default function RootLayout({ children }: Props) {
  return children;
}
