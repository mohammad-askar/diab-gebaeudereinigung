import Link from "next/link";

export default function GlobalNotFoundPage() {
  return (
    <html lang="de">
      <body>
        <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
          <div>
            <p className="text-brand-green font-bold">404</p>

            <h1 className="text-brand-blue-dark mt-4 text-4xl font-bold">Seite nicht gefunden</h1>

            <p className="text-muted mt-5">Die angeforderte Seite ist nicht verfügbar.</p>

            <Link
              href="/de"
              className="bg-brand-blue mt-8 inline-flex rounded-full px-7 py-3 font-bold text-white"
            >
              Zur Startseite
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
