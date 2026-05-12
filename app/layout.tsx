import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcelito & Daisy — Wedding Invitation",
  description:
    "You are cordially invited to celebrate the marriage of Marcelito Cosicol & Daisy Joy Alegrado. Join us for a day of love, joy, and unforgettable memories.",
  keywords: ["wedding", "invitation", "Marcelito", "Daisy", "celebration"],
  openGraph: {
    title: "Marcelito & Daisy — Wedding Invitation",
    description: "Join us to celebrate the union of two souls in love.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="overflow-x-hidden"
        style={{ position: "relative", zIndex: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
