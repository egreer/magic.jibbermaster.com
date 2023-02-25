import ReactDOMServer from "react-dom/server";

export const reactToBool = (el) =>
  Boolean(ReactDOMServer.renderToStaticMarkup(el));
