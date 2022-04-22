import bandits from "./bandits.jpg";
import beastriders from "./beast-riders.jpg";
import enchants from "./enchants.jpg";
import human1 from "./human1.jpg";
import human2 from "./human2.jpg";
import smiths from "./smiths.jpg";
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
