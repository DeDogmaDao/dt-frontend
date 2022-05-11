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
import floor from "./images/benefits/floor.png";
import lottery from "./images/benefits/lottery.png";
import pool from "./images/benefits/pool.png";
export const benefitImg: StaticImageData[] = [floor, lottery, pool];

// logo
import treasure from "./images/logo/treasure.png";
import treasure1 from "./images/logo/treasure1.png";
export const treasuresImg = { treasure, treasure1 };

// backgrounds
import sec1 from "./images/bg/sec1.png";
import sec2 from "./images/bg/sec2.png";
import sec3 from "./images/bg/sec3.png";
import sec4 from "./images/bg/sec4.png";
import story from "./images/bg/Story.png";
import roadSec1 from "./images/bg/road-sec1.png";
import roadSec2 from "./images/bg/road-sec2.png";
import roadSec3 from "./images/bg/road-sec3.png";

export const allBgImg = {
  sec1,
  sec2,
  sec3,
  sec4,
  story,
  roadMap: [roadSec1, roadSec2, roadSec3],
};


//hero
import portal from "./images/art/portal.png";
import middlePortal from "./images/art/middle-portal.png";
import city from "./images/art/city.png";
import mask from "./images/art/mask.png";

export const allArtImg = { portal, middlePortal, city, mask };