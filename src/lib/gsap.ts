import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

  // Curvas propias. "premium" es un ease-out muy largo: arranca casi de golpe
  // y se posa durante el resto de la duración — es lo que separa una entrada
  // que se siente cara de una que se siente genérica. "premium-io" es su
  // versión simétrica, para lo que entra y sale (cortina, navbar).
  CustomEase.create("premium", "M0,0 C0.16,1 0.3,1 1,1");
  CustomEase.create("premium-io", "M0,0 C0.76,0 0.24,1 1,1");

  gsap.defaults({ ease: "premium" });
}

export { gsap, ScrollTrigger, SplitText, CustomEase };
