import { StaticImageData } from "next/image";

// teams
import member1 from "./images/team/member1.png";
import member2 from "./images/team/member2.png";
import member3 from "./images/team/member3.png";
import member4 from "./images/team/member4.png";
import member5 from "./images/team/member5.png";
import member6 from "./images/team/member6.png";
import member7 from "./images/team/member7.png";
export const teamImg: StaticImageData[] = [
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
  member7,
];


// benefits
import floorImg from "./images/benefits/floor.png";
import lotteryImg from "./images/benefits/lottery.png";
import poolImg from "./images/benefits/pool.png";
export const benefitImg: StaticImageData[] = [ floorImg, lotteryImg, poolImg ];

// logo
import treasure from "./images/logo/treasure.png";
import treasure1 from "./images/logo/treasure1.png";
export const treasuresImg = { treasure, treasure1 };

// backgrounds
import sec1 from "./images/bg/sec1.png";
import sec2 from "./images/bg/sec2.png";
import sec3 from "./images/bg/sec3.png";
import sec4 from "./images/bg/sec4.png";
import roadSec1 from "./images/bg/road-sec1.png";
import roadSec2 from "./images/bg/road-sec2.png";
import roadSec3 from "./images/bg/road-sec3.png";

export const allBgImg = {
  sec1,
  sec2,
  sec3,
  sec4,
  roadMap: [roadSec1, roadSec2, roadSec3],
};


//hero
import portal from "./images/art/portal.png";
import middlePortal from "./images/art/middle-portal.png";
import city from "./images/art/city.png";
import mask from "./images/art/mask.png";

export const allArtImg = { portal, middlePortal, city, mask };


//tabs
import bandits from "./images/tabs/bandits.png";
import beastriders from "./images/tabs/beast-riders.png";
import enchants from "./images/tabs/enchants.png";
import human1 from "./images/tabs/human1.png";
import human2 from "./images/tabs/human2.png";
import smiths from "./images/tabs/smiths.png";
import aphrodite from "./images/tabs/aphrodite.jpg";
import ares from "./images/tabs/ares.jpg";
import artemis from "./images/tabs/artemis.jpg";
import hephaestus from "./images/tabs/hephaestus.jpg";
import hades from "./images/tabs/hades.jpg";
import hecate from "./images/tabs/hecate.jpg";
import hera from "./images/tabs/hera.jpg";
import hermes from "./images/tabs/hermes.jpg";
import poseidon from "./images/tabs/poseidon.jpg";
import zeus from "./images/tabs/zeus.jpg";

interface tabImgDataType {
  [gods: string]: StaticImageData[];
  humans: StaticImageData[];
}
export const tabImgData:tabImgDataType = {
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