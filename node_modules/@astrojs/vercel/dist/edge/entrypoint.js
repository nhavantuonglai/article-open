import "./shim.js";
import { App } from "astro/app";
const clientAddressSymbol = Symbol.for("astro.clientAddress");
function createExports(manifest) {
  const app = new App(manifest);
  const handler = async (request) => {
    if (app.match(request)) {
      Reflect.set(request, clientAddressSymbol, request.headers.get("x-forwarded-for"));
      return await app.render(request);
    }
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  };
  return { default: handler };
}
export {
  createExports
};
