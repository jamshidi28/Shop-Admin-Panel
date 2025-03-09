import vazirFont from "@/constants/localFonts";
import "../../globals.css";
import Providers from "@/pages/Providers";
import { Toaster } from "react-hot-toast";
import AdminSideBar from "./AdminSideBar";



export const metadata = {
  title: "پنل ادمین",
  description: "پنل ادمین",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
      <Providers>
              <Toaster />
              <div className="grid grid-cols-5 bg-white h-screen">
                <div className="col-span-1 bg-gray-100 overflow-y-auto p-4">
                  <AdminSideBar/>
                </div>
                <div className="col-span-4 overflow-y-auto p-4">{children}</div>
              </div>
      </Providers>

      </body>
    </html>
  );
}
