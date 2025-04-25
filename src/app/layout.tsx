import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Shopery",
  description: "Shopery Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} antialiased flex flex-col w-screen h-screen`}
      >
        <header className="flex flex-col items-center">
          <div className="w-full max-w-[1280px] border-2">
            <p>teste</p>
          </div>
        </header>
        <main className="flex flex-col flex-1 items-center">
          <div className="w-full h-full overflow-y-auto max-w-[1280px] border-2">
            {children}
          </div>
        </main>
        <footer className="flex flex-col items-center">
          <div className="w-full max-w-[1280px] border-2">
            <p>teste</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
