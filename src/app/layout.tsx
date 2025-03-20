import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import Container from "@mui/material/Container";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CssBaseline />
          <Container maxWidth="xl">{props.children}</Container>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
