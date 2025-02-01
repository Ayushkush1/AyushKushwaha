import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


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
        <Footer />
        
  <!-- SmartCode script -->
    <script src="https://tigsaw.com/api/delivery/N71ZW3EN/common"></script>
  <!-- End SmartCode script -->
      </body>
    </html>
  );
}
