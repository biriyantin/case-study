/* Components */
import { Providers } from "@/lib/providers";
import Layout from "./components/Layout";

import "./styles/globals.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Layout>{props.children}</Layout>
        </body>
      </html>
    </Providers>
  );
}

export const metadata = {
  title: "Case Study",
};
