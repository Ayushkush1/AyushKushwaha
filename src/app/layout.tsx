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
      <head>
        {/* Tigsaw Script */}

        <script id="tigsaw-script" tigsaw-id="WZP3MYPQ">
          (function(t,i,g,s,a,w){
            i = t.currentScript.getAttribute("tigsaw-id");
          (w||window).tigsawContainerId=i;
          g=t.createElement('script');
          g.src='https://static.tigsaw.com/delivery/smartscript.js';
          g.defer=true;
          t.head.appendChild(g);
})(document,typeof window!=='undefined'?window:this);
        </script>

       
        {/* End Tigsaw Script */}
      </head>
      <body>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
