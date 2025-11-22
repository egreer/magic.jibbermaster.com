import { Alert, Button, Container } from "react-bootstrap";
import { ErrorBoundary } from "react-error-boundary";

const FallBack = ({ error, resetErrorBoundary }) => (
  <Alert variant="danger" className="text-center">
    <h2>We've experienced a Planar Disruption!</h2>
    <p>Try clearing the cache and reloading the page.</p>
    <Button variant="danger" className="my-2" onClick={resetErrorBoundary}>
      Clear Cache
    </Button>
    <hr></hr>
    <p>
      If this continues please report the error on{" "}
      <a
        href="https://github.com/egreer/magic.jibbermaster.com/issues"
        target="_blank"
        rel="noreferrer"
        title="Report error on Github"
        className="alert-link"
      >
        Github
        <sup>
          <i className="fas fa-external-link-alt mx-1 fa-sm"></i>
        </sup>
      </a>
    </p>
    <b>Error Text:</b>
    <pre>{error.message}</pre>
  </Alert>
);

export const PageContainer = ({ className, children }) => (
  <ErrorBoundary
    FallbackComponent={FallBack}
    onReset={() => {
      window.localStorage.clear();
      window.location.reload();
    }}
  >
    <Container fluid className={className}>
      {children}
    </Container>
  </ErrorBoundary>
);
