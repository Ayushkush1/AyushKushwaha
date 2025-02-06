import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"


export const metadata = {
  title: "Ayush Kushwaha",
  description: "Portfolio of Ayush Kushwaha, a Full Stack Developer with expertise in React.js, Next.js, Node.js, and MongoDB.",
  icons: {
    icon: "/favicon.png",

  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Analytics />
        <Footer />
        
      <script src="https://tigsaw.com/api/delivery/N71ZW3EN/common"></script>
      </body>
    </html>
  );
}
