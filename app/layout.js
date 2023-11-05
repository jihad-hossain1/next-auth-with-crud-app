import AuthProvider from "./(components)/AuthProvider";
import Nav from "./(components)/Nav";
import "./globals.css";

export const metadata = {
  title: "Create Next Auth with crud",
  description: "Crud & role based authenticate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="flex flex-col h-screen max-h-screen">
          <Nav />
          <div className="min-h-screen bg-page text-default-text">{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
