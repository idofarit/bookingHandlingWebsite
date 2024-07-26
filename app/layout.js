import "@/app/_styles/globals.css";
import { Acme, Mochiy_Pop_One } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
import Footer from "./home/Footer";

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
        className={`${acme.className}  text-primary-800 min-h-screen flex flex-col relative`}
      >
        <Header className={`${mochiy.className}`} />
        <div className="flex-1 grid">
          <main className="relative overflow-hidden">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
