import { createRoutes, relativeTo } from "@nuxt/utils";
import path from "path";
import serveStatic from "serve-static";

// with a lot of pages it might be worth considering a folder pass
// to dynamically create this list
const pages = [
  "pages/Tasks.vue",
];
export default function NuxtModule() {
  const { routeNameSplitter, trailingSlash } = this.options.router;
  this.extendRoutes((routes) => {
    routes.push(
      ...createRoutes({
        files: pages,
        srcDir: __dirname,
        pagesDir: "pages",
        routeNameSplitter,
        trailingSlash,
      })
    );
  });


  this.nuxt.hook("components:dirs", (dirs) => {
    dirs.unshift({
      path: path.resolve(__dirname, "components"),
      level: 1, // provide a priority
    });
  });


}