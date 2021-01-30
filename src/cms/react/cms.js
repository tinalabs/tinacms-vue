import { createElement } from "react";
import { TinaProvider } from "tinacms";
import { TinaVueRenderer } from "./tina-vue-renderer";

export function Cms({ cms, app }) {
  return createElement(
    TinaProvider,
    { cms },
    createElement(TinaVueRenderer, { app })
  );
}
