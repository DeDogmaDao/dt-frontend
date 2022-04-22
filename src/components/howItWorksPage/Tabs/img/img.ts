import bandits from "./bandits.png";
import beastriders from "./beast-riders.png";
import enchants from "./enchants.png";
import human1 from "./human1.png";
import human2 from "./human2.png";
import smiths from "./smiths.png";
import aphrodite from "./aphrodite.jpg";
import ares from "./ares.jpg";
import artemis from "./artemis.jpg";
import hephaestus from "./hephaestus.jpg";
import hades from "./hades.jpg";
import hecate from "./hecate.jpg";
import hera from "./hera.jpg";
import hermes from "./hermes.jpg";
import poseidon from "./poseidon.jpg";
import zeus from "./zeus.jpg";

interface imgDataType {
  [gods: string]: StaticImageData[];
  humans: StaticImageData[];
}
const imgData: imgDataType = {
  humans: [beastriders, bandits, enchants, smiths, human1, human2],
  gods: [
    zeus,
    artemis,
    hermes,
    hephaestus,
    hecate,
    hades,
    aphrodite,
    poseidon,
    ares,
    hera,
  ],
};

export default imgData;
