import { PageContext } from "vike/types";
import PrimeVue from "primevue/config";

export { onCreateApp };

function onCreateApp(pageContext: PageContext) {
  if (pageContext.isRenderingHead) {
    // Don't add plugins when rendering <head> (see Lifecycle)
    return;
  }
  const app = pageContext.app!;
  app.use(PrimeVue);
}
