import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ikkbub8o",
  dataset: "production",
  useCdn: true,
});
