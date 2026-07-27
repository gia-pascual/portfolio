import Container from "@/components/Container";
import Button from "@/components/Button";
import LedgerRule from "@/components/LedgerRule";

export default function NotFound() {
  return (
    <section className="py-24 text-center md:py-32">
      <Container>
        <div className="mx-auto max-w-md">
          <LedgerRule label="Error 404" />
          <h1 className="font-display text-3xl text-navy-900">Page not found</h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-500">
            The page you&apos;re looking for doesn&apos;t exist or may have moved.
          </p>
          <Button href="/" variant="primary" className="mt-8">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
