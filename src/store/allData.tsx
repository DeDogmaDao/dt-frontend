import {
  faDiscord,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
// type
import {
  counterNumType,
  faqType,
  gameCardType,
  layersType,
  socialType,
  tabsType,
  tabType,
  globCardType,
  roadMapType,
  roadDataType,
  benefitType,
} from "../types/allTypes";

//
//
//
//

export const footerData: socialType[] = [
  {
    icon: faDiscord,
    href: "https://www.discord.com",
    color: "#e4405f",
  },
  {
    icon: faYoutube,
    href: "www.discord.com",
    color: "#3b5999",
  },
  {
    icon: faLinkedin,
    href: "www.discord.com",
    color: "#e4405f",
  },
  {
    icon: faTwitter,
    href: "www.discord.com",
    color: "#cd201f",
  },
  {
    icon: faInstagram,
    href: "www.discord.com",
    color: "#0077B5",
  },
];

export const faqData: faqType[] = [
  { question: "What is nepoleia?", answer: "we dont know yet" },
  {
    question: "Can I use the platform without buying an NFT?",
    answer: "we dont know yet",
  },
  { question: "Why does this NFT have value?", answer: "we dont know yet" },
  {
    question: "What blockchain are you operating on?",
    answer: "we dont know yet",
  },
  {
    question: "What type of wallet do I need to buy one of Lonely Shadows NFT?",
    answer: "we dont know yet",
  },
  { question: "when is the launch? ", answer: "we dont know yet" },
];

export const teamDataLvl1: globCardType[] = [
  {
    name: "Member1",
    role: "Graphic designer",
    image: "/img/team/member1.png",
  },
  { name: "Member2", role: "ui/ux designer", image: "/img/team/member2.png" },
];

export const teamDataLvl2: globCardType[] = [
  { name: "Member3", role: "backend dev", image: "/img/team/member3.png" },
  {
    name: "Member1",
    role: "Graphic designer",
    image: "/img/team/member1.png",
  },
  {
    name: "Member2",
    role: "Graphic designer",
    image: "/img/team/member2.png",
  },
  {
    name: "Member3",
    role: "Graphic designer",
    image: "/img/team/member3.png",
  },
];

export const godTabData: tabType[] = [
  {
    activeCard: false,
    name: "tab0",
    titleOfHonor: "herald the stone eyes",
    image: "/img/cyc/1.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media. focus on synthetic
        media. focus on synthetic media. focus on synthetic media. focus on
        synthetic media.
      </div>
    ),
  },
  {
    activeCard: false,
    name: "tab1",
    titleOfHonor: "Hades the Unseen",
    image: "/img/cyc/1.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
      </div>
    ),
  },
  {
    activeCard: false,
    name: "tab2",
    titleOfHonor: "herald the stone eyes",
    image: "/img/cyc/2.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
      </div>
    ),
  },
  {
    activeCard: false,
    name: "tab3",
    titleOfHonor: "Hades the Unseen ",
    image: "/img/cyc/1.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
      </div>
    ),
  },
  {
    activeCard: false,
    name: "tab4",
    titleOfHonor: "herald the stone eyes",
    image: "/img/cyc/1.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
      </div>
    ),
  },
  {
    activeCard: false,
    name: "tab5",
    titleOfHonor: "Hades the Unseen ",
    image: "/img/cyc/2.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
      </div>
    ),
  },
  {
    activeCard: true,
    name: "tab6",
    titleOfHonor: "Hades the Unseen ",
    image: "/img/cyc/1.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
      </div>
    ),
  },
  {
    activeCard: false,
    name: "tab7",
    titleOfHonor: "herald the stone eyes",
    image: "/img/cyc/1.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
      </div>
    ),
  },
  {
    activeCard: false,
    name: "tab8",
    titleOfHonor: "herald the stone eyes",
    image: "/img/cyc/2.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
      </div>
    ),
  },
  {
    activeCard: false,
    name: "tab9",
    titleOfHonor: "Hades the Unseen ",
    image: "/img/cyc/1.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
      </div>
    ),
  },
  {
    activeCard: false,
    name: "tab10",
    titleOfHonor: "herald the stone eyes",
    image: "/img/cyc/1.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
      </div>
    ),
  },
];
export const humanTabData: tabType[] = [
  {
    activeCard: false,
    name: "tab0",
    titleOfHonor: "out of law citizen",
    image: "/img/cyc/3.png",
    image2: "/img/cyc/1.png",
    image3: "/img/cyc/1.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
      </div>
    ),
  },
  {
    activeCard: false,
    name: "tab1",
    titleOfHonor: "out of law citizen",
    image: "/img/cyc/1.png",
    image2: "/img/cyc/3.png",
    image3: "/img/cyc/3.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
      </div>
    ),
  },
  {
    activeCard: true,
    name: "tab2",
    titleOfHonor: "out of law citizen",
    image: "/img/cyc/2.png",
    image2: "/img/cyc/1.png",
    image3: "/img/cyc/1.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
      </div>
    ),
  },
  {
    activeCard: false,
    name: "tab3",
    titleOfHonor: "out of law citizen",
    image: "/img/cyc/3.png",
    image2: "/img/cyc/1.png",
    image3: "/img/cyc/1.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
      </div>
    ),
  },
  {
    activeCard: false,
    name: "tab4",
    titleOfHonor: "out of law citizen",
    image: "/img/cyc/2.png",
    image2: "/img/cyc/1.png",
    image3: "/img/cyc/1.png",
    desc: (
      <div>
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
        <br />
        HUMANS is creating an all-in-one platform for AI-based creation and
        governance with an initial focus on synthetic media.
      </div>
    ),
  },
];

export const allTabs: tabsType[] = [
  {
    tabGroup: "gods",
    activeGroup: true,
    tabInfo: godTabData,
  },
  {
    tabGroup: "humans",
    activeGroup: false,
    tabInfo: humanTabData,
  },
];

export const layersData: layersType[] = [
  {
    image: "1.png",
    speed: 10,
    top: 0,
  },
  {
    image: "2.png",
    speed: 5,
    top: 0,
  },
  {
    image: "3.png",
    speed: -5,
    top: -28,
  },
  {
    image: "4.png",
    speed: -0.2,
    top: -28,
  },
  {
    image: "5.png",
    speed: 4.5,
    top: -28,
  },
];

export const gameCardData: gameCardType[] = [
  {
    id: "1",
    name: "Zeus",
    image: "/img/team/member1.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 3,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "2",
    name: "Hades",
    image: "/img/team/member2.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 6,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "3",
    name: "Laya",
    image: "/img/team/member1.png",
    spellGroup: "blue",
    spellValue: [1],
    total: 7,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "4",
    name: "Desmond",
    image: "/img/team/member3.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 2,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "5",
    name: "Hero",
    image: "/img/team/member2.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 3,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "6",
    name: "Cool guy",
    image: "/img/team/member3.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 9,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "7",
    name: "Peter pan",
    image: "/img/team/member1.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 6,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "8",
    name: "Edmownd",
    image: "/img/team/member2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 9,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: true,
  },
  {
    id: "9",
    name: "Zeus",
    image: "/img/team/member1.png",
    spellGroup: "blue",
    spellValue: [1],
    total: 10,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "10",
    name: "Hades",
    image: "/img/team/member2.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 13,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "11",
    name: "Desmond",
    image: "/img/team/member3.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 11,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "12",
    name: "Laya",
    image: "/img/team/member1.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 15,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "13",
    name: "Hero",
    image: "/img/team/member2.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 12,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "14",
    name: "Cool guy",
    image: "/img/team/member3.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 17,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "15",
    name: "Peter pan",
    image: "/img/team/member1.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 15,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "16",
    name: "Edmownd",
    image: "/img/team/member2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 18,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "17",
    name: "Zeus",
    image: "/img/team/member1.png",
    spellGroup: "blue",
    spellValue: [1],
    total: 18,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "18",
    name: "Hades",
    image: "/img/team/member2.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 21,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "19",
    name: "Desmond",
    image: "/img/team/member3.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 20,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "20",
    name: "Laya",
    image: "/img/team/member1.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 24,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "21",
    name: "Hero",
    image: "/img/team/member2.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 21,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "22",
    name: "Cool guy",
    image: "/img/team/member3.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 26,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "23",
    name: "Peter pan",
    image: "/img/team/member1.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 22,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "24",
    name: "Edmownd",
    image: "/img/team/member2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 25,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "25",
    name: "Zeus",
    image: "/img/team/member1.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 28,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "26",
    name: "Hades",
    image: "/img/team/member2.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 31,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "27",
    name: "Desmond",
    image: "/img/team/member3.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 27,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "28",
    name: "Laya",
    image: "/img/team/member1.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 34,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "29",
    name: "Hero",
    image: "/img/team/member2.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 28,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "30",
    name: "Cool guy",
    image: "/img/team/member3.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 36,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "31",
    name: "Peter pan",
    image: "/img/team/member1.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 31,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "32",
    name: "Edmownd",
    image: "/img/team/member2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 34,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "33",
    name: "Zeus",
    image: "/img/team/member1.png",
    spellGroup: "blue",
    spellValue: [1],
    total: 37,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "34",
    name: "Hades",
    image: "/img/team/member2.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 40,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "35",
    name: "Desmond",
    image: "/img/team/member3.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 36,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "36",
    name: "Laya",
    image: "/img/team/member1.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 43,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "37",
    name: "Hero",
    image: "/img/team/member2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 39,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "38",
    name: "Cool guy",
    image: "/img/team/member3.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 45,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "39",
    name: "Peter pan",
    image: "/img/team/member1.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 41,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "40",
    name: "Edmownd",
    image: "/img/team/member2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 44,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "41",
    name: "Zeus",
    image: "/img/team/member1.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 47,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "42",
    name: "Hades",
    image: "/img/team/member2.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 50,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "43",
    name: "Desmond",
    image: "/img/team/member3.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 46,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "44",
    name: "Laya",
    image: "/img/team/member1.png",
    spellGroup: "blue",
    spellValue: [1],
    total: 51,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "45",
    name: "Hero",
    image: "/img/team/member2.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 48,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "46",
    name: "Cool guy",
    image: "/img/team/member3.png",
    spellGroup: "blue",
    spellValue: [1],
    total: 52,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "47",
    name: "Peter pan",
    image: "/img/team/member1.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 49,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "48",
    name: "Edmownd",
    image: "/img/team/member2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 52,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "49",
    name: "Hero",
    image: "/img/team/member2.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 53,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "50",
    name: "Cool guy",
    image: "/img/team/member3.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 54,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "51",
    name: "Peter pan",
    image: "/img/team/member1.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 54,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
  {
    id: "52",
    name: "Edmownd",
    image: "/img/team/member2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 57,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
  },
];

export const numsList: counterNumType[] = Array.from(Array(51).keys()).map(
  (el) => {
    if (el === 0) {
      return {
        number: el,
        active: true,
      };
    }
    return {
      number: el,
      active: false,
    };
  }
);

export const roadDataQ1: roadDataType[] = [
  {
    title: <p>Set and get their state.</p>,
    desc: "tate and velocity of an animating value.Usually, these are created automatically. But for advanced use-cases, it is possible to create them manually and inject them into motion components.",
  },
  {
    title: <p>Any MotionValue can spawn</p>,
    desc: "All motion components internally use MotionValues to track the state and velocity of an animating value.Usually, these are created automatically. But for advancenents.",
  },
  {
    title: <p>Chain MotionValues via the useTransform hook.</p>,
    desc: "All motion components internally use Moti to create them manually and inject them into motion components.",
  },
  {
    title: <p>before returning it to update the child.</p>,
    desc: "All motion components internally use MotionValues to trackutomatically. But for advanced use-cases, it is possible to create them manually and inject them into motion components.",
  },
  {
    title: <p>Set and get their state.</p>,
    desc: " the state and velocity of an animating value.Usually, these are created automatically. But for advanced use-cases, it is possible to create them manually and inject them into motion components.",
  },
];
export const roadDataQ2: roadDataType[] = [
  {
    title: <p>Set and get their state.</p>,
    desc: "tate and velocity of an animating value.Usually, these are created automatically. But for advanced use-cases, it is possible to create them manually and inject them into motion components.",
  },
  {
    title: <p>Any MotionValue can spawn</p>,
    desc: "All motion components internally use MotionValues to track the state and velocity of an animating value.Usually, these are created automatically. But for advancenents.",
  },
  {
    title: <p>Chain MotionValues via the useTransform hook.</p>,
    desc: "All motion components internally use Moti to create them manually and inject them into motion components.",
  },
  {
    title: <p>before returning it to update the child.</p>,
    desc: "All motion components internally use MotionValues to trackutomatically. But for advanced use-cases, it is possible to create them manually and inject them into motion components.",
  },
  {
    title: <p>Set and get their state.</p>,
    desc: " the state and velocity of an animating value.Usually, these are created automatically. But for advanced use-cases, it is possible to create them manually and inject them into motion components.",
  },
];
export const roadDataQ3: roadDataType[] = [
  {
    title: <p>Set and get their state.</p>,
    desc: "tate and velocity of an animating value.Usually, these are created automatically. But for advanced use-cases, it is possible to create them manually and inject them into motion components.",
  },
  {
    title: <p>Any MotionValue can spawn</p>,
    desc: "All motion components internally use MotionValues to track the state and velocity of an animating value.Usually, these are created automatically. But for advancenents.",
  },
  {
    title: <p>Chain MotionValues via the useTransform hook.</p>,
    desc: "All motion components internally use Moti to create them manually and inject them into motion components.",
  },
  {
    title: <p>before returning it to update the child.</p>,
    desc: "All motion components internally use MotionValues to trackutomatically. But for advanced use-cases, it is possible to create them manually and inject them into motion components.",
  },
  {
    title: <p>Set and get their state.</p>,
    desc: " the state and velocity of an animating value.Usually, these are created automatically. But for advanced use-cases, it is possible to create them manually and inject them into motion components.",
  },
];

export const roadMapData: roadMapType[] = [
  {
    sectionName: "Q1- Expansion",
    backImg: "/img/roadmap/sec1.png",
    roadData: roadDataQ1,
  },
  {
    sectionName: "Q2- Expansion",
    backImg: "/img/roadmap/sec2.png",
    roadData: roadDataQ2,
  },
  {
    sectionName: "Q3- Expansion",
    backImg: "/img/roadmap/sec3.png",
    roadData: roadDataQ3,
  },
];

export const benefitsData: benefitType[] = [
  {
    title: "Self-growing pool prize",
    desc: [
      "All NFT holders will participate in our daily and weekly gamified lottery automatically. ",
    ],
  },
  {
    title: "Auto-join lottery",
    desc: [
      " daily and weekly gamified lottery automatically. ",
      "Self-growing pool prize Self-growing pool prize Self-growing pool prize Self-growing pool prize Self-growing pool prize",
    ],
  },
  {
    title: "Guaranteed floor price",
    desc: [
      "All NFT holders will participate in our daily and weekly gamified lottery automatically. ",
    ],
  },
  {
    title: "One click from NFT to PFP",
    desc: [
      " daily and weekly gamified lottery automatically. ",
      "Self-growing pool prize Self-growing pool prize Self-growing pool prize Self-growing pool prize Self-growing pool prize",
    ],
  },
];
