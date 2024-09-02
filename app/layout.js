
import "./globals.css";
import { Jost } from '@next/font/google';

const jost = Jost({ 
  weights: ['300', '400'],
  subsets: ['latin']
});

export const metadata = {
  title: "Shisi",
  description: "shisi reservestion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
