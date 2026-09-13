import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="h-screen flex flex-col bg-[#FCF9F3]">{children}</body>
    </html>
  );
}
