import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ✅ Navbar visible on all pages */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
