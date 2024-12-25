import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
