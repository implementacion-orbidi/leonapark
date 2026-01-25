import { css, unsafeCSS } from "lit";
import bootstrapScss from "./bootstrap-custom.scss?inline";

export const bootstrapStyles = css`
  ${unsafeCSS(bootstrapScss)}
`;
