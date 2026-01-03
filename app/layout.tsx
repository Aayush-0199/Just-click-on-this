import "./globals.css";
import { Poppins, Dancing_Script } from "next/font/google";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "700", "900"],
  variable: "--font-poppins" 
});

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-dancing" 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${dancingScript.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}