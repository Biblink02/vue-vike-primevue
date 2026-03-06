import { PageContext } from "vike/types";
import { i18n } from "@utils/i18n";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

export { onCreateApp };

function onCreateApp(pageContext: PageContext) {
  if (pageContext.isRenderingHead) {
    // Don't add plugins when rendering <head> (see Lifecycle)
    return;
  }
  const app = pageContext.app!;
  app.use(i18n);

  const pinia = createPinia();
  app.use(pinia);

  app.use(PrimeVue);
}
