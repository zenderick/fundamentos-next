import "../globals.css";

export const metadata = {
  title: "RootLayout Marketing",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <p className="ml-5">RootLayout Marketing</p>
        {children}
      </body>
    </html>
  );
}