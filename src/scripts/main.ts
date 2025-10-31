import "../styles/main.scss";
import AccordionCollection from "./Accordion";
import Micromodal from "micromodal";

document.addEventListener("DOMContentLoaded", (): void => {
  new AccordionCollection();
});

const popups = document.querySelectorAll("[data-custom-popup]");
popups.forEach(popup => {
  const popupElement = popup as HTMLElement;
  if (popupElement?.id) {
    const delay = parseInt(popupElement?.dataset?.delay || "1000");
    setTimeout(() => {
      Micromodal.show(popupElement?.id);
    }, delay);
  }
});
