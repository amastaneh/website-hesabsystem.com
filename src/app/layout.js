import "./globals.css";

export const metadata = {
  title: "Hesab System",
  description: "Hesab System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
