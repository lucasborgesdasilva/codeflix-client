import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#141414] text-white scrollbar-hide overflow-x-hidden">{children}</body>
    </html>
  );
}
