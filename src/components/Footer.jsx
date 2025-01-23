import { useFooter } from "../hooks/useFooter";

export const Footer = () => {
  const { footerText } = useFooter();
  return (
    <footer className="bg-dark text-center text-white">
      <hr></hr>
      <div className="container p-4">
        <section className="mb-4">
          <p>
            <em>
              Like what you see? Consider buying me a couple packs to help fuel
              this hobby and support future development by donating at{" "}
              <a
                href="https://www.paypal.me/egreerme"
                target="_blank"
                rel="noreferrer"
                title="Buy me a pack!"
              >
                paypal.me/egreerme
              </a>
            </em>
          </p>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/egreer/magic.jibbermaster.com"
            role="button"
            target="_blank"
            rel="noreferrer"
            title="Explore source code at Github"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.paypal.me/egreerme"
            role="button"
            target="_blank"
            rel="noreferrer"
            title="Donate at Paypal"
          >
            <i className="fab fa-paypal"></i>
          </a>
        </section>
      </div>

      {footerText && (
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          {footerText}
        </div>
      )}
    </footer>
  );
};
