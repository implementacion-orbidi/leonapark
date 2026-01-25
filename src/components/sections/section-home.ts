import {LitElement, html, unsafeCSS} from "lit";
import {customElement} from "lit/decorators.js";
import leonaParkLogo from "../../assets/leona-park-logo.svg";
import {bootstrapStyles} from "../../styles/shared-styles";
import styles from "./section-home.scss?inline";

@customElement("section-home")
export class SectionHome extends LitElement {
  public static styles = [bootstrapStyles, unsafeCSS(styles)];

  render() {
    return html`
      <div class="row">
        <div class="col-12">
          <div class="mt-0 mx-3 d-flex flex-column gap-4 fs-5">
            <div class="leona-park-logo position-sticky top-0 pt-5 pb-3 text-center bg-white">
              <img
                src=${leonaParkLogo}
                alt="Leona Park logo"
                class="w-100 logo-image"
                width="500"
                height="200"
              />
            </div>
            <p class="mb-0">
              Nuestro salón de eventos te brinda el escenario perfecto para
              crear momentos inolvidables. Con una capacidad de 50 personas, es
              ideal para celebraciones de tamaño medio. Disfruta de un espacio
              para los más pequeñ@s, sonido de calidad y una decoración que se
              puede ajustar a tu estilo.
            </p>
            <p class="mb-0">
              Leona Park te ofrece un ambiente cálido y acogedor para celebrar
              tus momentos especiales: cumpleaños, reuniones familiares y de
              amig@s,
              <i>baby shower</i>, <i>gender reveal</i>, reuniones corporativas o
              jubilaciones, entre otras. Cuenta con amplios ventanales que
              permiten la entrada de luz natural, creando un espacio luminoso y
              agradable. Además, ofrecemos como servicio adicional el montaje de
              mesas dulces con tu temática favorita y chuches preferidas.
            </p>
            <p class="mb-0">
              Con una ubicación privilegiada, la accesibilidad y la cercanía a
              establecimientos de alimentación y bazar en caso de últimas
              necesidades son grandes ventajas.
            </p>
            <span
              class="text-center mt-2 amatic-sc-regular golden-amber-color fs-2 fw-bold"
              >¡Te esperamos!</span
            >
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "section-home": SectionHome;
  }
}
