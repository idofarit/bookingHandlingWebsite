import { Acme, Mochiy_Pop_One } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const acme = Acme({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const mochiy = Mochiy_Pop_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: {
    template: "%s:: Car Stop",
    default: "Welcome :: Car Stop",
  },
  description: "One Stop destination to ease road trips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${acme.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header className={`${mochiy.className}`} />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
