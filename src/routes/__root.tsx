import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl">404</h1>
        <p className="mt-4 text-muted-foreground">This page drifted off the shelf.</p>
        <Link to="/" className="mt-8 inline-flex px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please refresh or head home.</p>
        <div className="mt-6 flex gap-3 justify-center">
          <button onClick={() => { router.invalidate(); reset(); }} className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm">Try again</button>
          <a href="/" className="px-5 py-2.5 rounded-full border border-border text-sm">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ellivion Healthcare — Beauty meets Wellness" },
      { name: "description", content: "Vibrant healthcare and beauty products by Ellivion — dermatologist-formulated for glowing skin and joyful wellness." },
      { property: "og:title", content: "Ellivion Healthcare — Beauty meets Wellness" },
      { property: "og:description", content: "Vibrant healthcare and beauty products by Ellivion — dermatologist-formulated for glowing skin and joyful wellness." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Ellivion Healthcare — Beauty meets Wellness" },
      { name: "twitter:description", content: "Vibrant healthcare and beauty products by Ellivion — dermatologist-formulated for glowing skin and joyful wellness." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/34079085-f72e-4cfd-9300-26e7676803b7/id-preview-c6808b1e--f2e17186-38c8-47da-b7a3-d3399a61d106.lovable.app-1779180639771.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/34079085-f72e-4cfd-9300-26e7676803b7/id-preview-c6808b1e--f2e17186-38c8-47da-b7a3-d3399a61d106.lovable.app-1779180639771.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
