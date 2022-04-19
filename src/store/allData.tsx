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
  metaType,
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
  {
    question: "How will the minting work?",
    answer: (
      <>
        This collectible contains 7777 unique NFTs. We will sell the 10 God NFTs
        in an dutch auction which are all revealed from the beginning. Then, all
        the remaining characters will be minted in an unrevealed fashion. On the
        reveal day, owners will be able to see their revealed character on DDD
        and all the other listed platforms.
      </>
    ),
  },
  {
    question: "How much is the minting price?",
    answer: (
      <>
        God NFT minting price will be determined during the dutch auction which
        will vary for different gods.
        <br />
        The minting price for the remaining NFTs will be announced soon.
      </>
    ),
  },
  {
    question: "Mint date",
    answer: <>June 2022</>,
  },
  {
    question: "When is the reveal?",
    answer: <>4 weeks after minting is over</>,
  },
  {
    question: "How to get whitelisted?",
    answer: (
      <>
        - Holders of collections that we will announce in our social channels.
        <br />
        - Active members of our community.
        <br />- Winners of the challenges announced in DDD discord.
      </>
    ),
  },
  {
    question: "Are there any public sales?",
    answer: (
      <>
        Whitelisted members are our priority list of customers for sale. The
        remaining NFTs will be available to the public.
      </>
    ),
  },
  {
    question: "Should we do anything to join the lottery?",
    answer: (
      <>
        No, it is an auto join lottery. You just need to hold your NFT in your
        wallet.
      </>
    ),
  },
  {
    question: "What wallets can I use?",
    answer: <>Metamask, WalletConnect, Coinbase wallet, Fortmatic and Portis</>,
  },
  {
    question: "Do the NFTs have an equal chance to win the lottery?",
    answer: (
      <>
        No, it depends on your character. Read more about it here{" "}
        <a
          href="https://paper.com"
          target={"_blank"}
          className="link-inside-text"
        >
          like to lite-paper
        </a>
      </>
    ),
  },
  {
    question: "How can the nfts be upgraded?",
    answer: (
      <>
        Cards that have played but couldn’t reveal the treasure will receive a
        POTL (Proof Of Titan Luck). Cards with 3 POTLs will have the option to
        upgrade their NFTs to the more rare guilds.
      </>
    ),
  },
  {
    question: "Will the burnt nft come back to the supply?",
    answer: <>No, It will not.</>,
  },
  {
    question: "Will the supply increase?",
    answer: (
      <>
        No, there are only 7777 NFTs which can decrease if owners burn their
        NFTs.
      </>
    ),
  },
  {
    question: "Will Demmortal Treasure be minted on ERC-721A standard?",
    answer: (
      <>
        Yes{" "}
        <a
          href="https://azuki.com"
          target={"_blank"}
          className="link-inside-text"
        >
          link to Azuki’s post about this standard
        </a>
      </>
    ),
  },
  {
    question: "What is the time-guaranteed treasury?",
    answer: (
      <>
        This is an anti-rug feature designed to guarantee the quality and price
        of the collection. This means the share of the team will be released to
        the team gradually in a smaller amount during 8 months to maintain the
        value of the NFTs and guarantee the performance of our protocol.
      </>
    ),
  },
  {
    question: "What is the time-guaranteed treasury schedule?",
    answer: (
      <>
        20% of minting price during minting period for market making and
        bootstrapping
        <br />
        10% of minting price after the 3rd month for the team
        <br />
        10% of minting price after the 4th month for the team
        <br />
        10% of minting price after the 5th month for the team
        <br />
        10% of minting price after the 6th month for DDD platform expansion
        <br />
        10% of minting price after the 7th month for DDD platform expansion
        <br />
        10% of minting price after the 8th month for DDD platform expansion
      </>
    ),
  },
  {
    question: "How will the guaranteed prize work?",
    answer: (
      <>
        The royalty fees of our 8 weeks with highest trading volume will be used
        for yield farming and the interest of it will be funded in the
        guaranteed prize.
      </>
    ),
  },
  {
    question: "When does the lottery start?",
    answer: (
      <>
        We are having a three month lottery preparation period in-between
        minting and when the lottery starts.
      </>
    ),
  },
  {
    question: "What is the yield farming strategy?",
    answer: (
      <>
        This strategy can change throughout time and we will optimize towards
        the maximum interest between yield aggregators. In the beginning we will
        start with Yearn Finance.
      </>
    ),
  },
  {
    question: "Wen token?",
    answer: (
      <>
        We don’t have any tokens. All prizes and benefits of the lottery are in
        ETH itself.
      </>
    ),
  },
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
    name: "Zeus",
    titleOfHonor: "King of the Olympians",
    image: "/img/cyc/zeus.jpg",
    desc: [
      "Lord of the skies and king of the Olympians. Strong-willed and astute, he  empowers mortals with his greatness to surface their potential. His thunderbolt has the power to induce fear and dominate like no other.",
      "Zeus takes 1.5 % of every mortal player's prize share in case of winning. Zeus has 18X more chance to compare to other cards to win the lottery.",
    ],
  },
  {
    activeCard: false,
    name: "Artemis",
    titleOfHonor: "Goddess of the hunt",
    image: "/img/cyc/artemis.jpg",
    desc: [
      "Beautiful moon maiden, goddess of the hunt. Twin to Apollo, the sun god. Fingers laced with silver and a deadly accuracy with her bow and arrows- all who pursue the art of archery strive to attain a sliver of her skill all their lives.",
      "Artemis created the beastrider guild by sending her goat to help them. She takes 3% share of the beast rider's win of the treasury.",
      "Artemis has 18X more chance to compare to other cards to win the lottery.",
    ],
  },
  {
    activeCard: false,
    name: "Hermes",
    titleOfHonor: "God of the sun",
    image: "/img/cyc/hermes.jpg",
    desc: [
      "God of the sun and master of thievery and poetry. With his wing-threaded sandals, he can spread news at the blink of an eye to those who are willing to lend him an ear. The words that leave his mouth are nothing short of poetical.",
      "Hermes created the thieves guild by placing a magnetic power in humans. ",
      "Hermes takes 3% share of the thieves guild’s win of treasury.",
      "Hermes has 18X more chance to compare to other cards to win the lottery.",
    ],
  },
  {
    activeCard: false,
    name: "Hephaestus",
    titleOfHonor: "God of craftsmen and invention",
    image: "/img/cyc/zeus.jpg",
    desc: [
      "God of craftsmen and invention, son of Hera. A blazing forge with his blessing yields the sharpest daggers and the most balanced swords. His inventive spirit can solve any problem with an ingenious idea.",
      "Hephaestus created the blessed guild by giving them the box of pandora.",
      "Hephaestus takes 3% share of the blessed guild’s win of treasury. ",
      "Hephaestus has 18X more chance to compare to other cards to win the lottery.",
    ],
  },
  {
    activeCard: false,
    name: "Hecate",
    titleOfHonor: "Goddess of necromancy and sorcery",
    image: "/img/cyc/hecate.jpg",
    desc: [
      "Goddess of necromancy and sorcery. Accompanied by her double shadow, her magical abilities knows no boundaries.",
      "Hecate created the sorcerers by the power of her magic and fire.",
      "Hecate takes 3% share of the sorcerers guild’s win of  treasury. ",
      "Hecate has 18X more chance to compare to other cards to win the lottery.",
    ],
  },
  {
    activeCard: false,
    name: "Hades",
    titleOfHonor: "God of the afterlife",
    image: "/img/cyc/hades.jpg",
    desc: [
      "God of the afterlife and Lord of the underworld. No mortal man could bare a single second in his presence, as he emits a sense of death being right around the corner.",
      "18X more chance to compare to other cards to win the lottery",
    ],
  },
  {
    activeCard: true,
    name: "Aphrodite",
    titleOfHonor: "Goddess of beauty and passion",
    image: "/img/cyc/aphrodite.jpg",
    desc: [
      "Goddess of beauty and passion. Seductive, beautiful and wistful, this goddess could make a man swoon at her while holding a dagger to his throat. A dangerous-but-fantastic deity.",
      "18X more chance to compare to other cards to win the lottery.",
    ],
  },
  {
    activeCard: false,
    name: "Poseidon",
    titleOfHonor: "God of the oceans",
    image: "/img/cyc/poseidon.jpg",
    desc: [
      "God of the oceans and Lord of the seas. Father of horses and all sea creatures. With is power to control large bodies of water, he can influence the climate of the earth like no other.",
      "18X more chance to compare to other cards to win the lottery.",
    ],
  },
  {
    activeCard: false,
    name: "Ares",
    titleOfHonor: "God of War and bloodlust",
    image: "/img/cyc/ares.jpg",
    desc: [
      "God of War and bloodlust. The most hostile god to deal with, but the most useful to have with you in battle. His combat intelligence and street smarts cannot be humbled.",
      "18X more chance to compare to other cards to win the lottery.",
    ],
  },
  {
    activeCard: false,
    name: "Hera",
    titleOfHonor: "Goddess of marriage",
    image: "/img/cyc/hera.jpg",
    desc: [
      "Goddess of marriage and patroness of women. Daughter of Kronos and Hera. Her loyalty to Zeus cannot be restrained and her dedication towards women and  children is admirable.",
      "18X more chance to compare to other cards to win the lottery",
    ],
  },
];
export const humanTabData: tabType[] = [
  {
    activeCard: false,
    name: "Beast riders",
    titleOfHonor: "ّFollowers of Artemis",
    image: "/img/cyc/3.png",
    desc: [
      "Attained their power from Artemis. Power is known as “card illusion”. With this power, one holds an additional card in the deck identical to the real one. This guild has 444 cards in total at the start.",
      "Chance of winning for the members of this guild is 1.7X among all the cards.",
    ],
  },
  {
    activeCard: false,
    name: "Bandits",
    titleOfHonor: "Followers of Hermes",
    image: "/img/cyc/1.png",

    desc: [
      "Attained their power from Hermes. Power is known as “magnet”. With this power, one can steal the treasury from the winner under a specific condition. This guild has 480 cards in total at the start.",
      "Chance of winning for the members of this guild is 1.45X among all the cards.",
    ],
  },
  {
    activeCard: true,
    name: "Enchants",
    titleOfHonor: "Followers of Hecate",
    image: "/img/cyc/2.png",
    desc: [
      "Attained their power from Hecate. Power is known as “double ability”. With this power, members can play their abilities twice. This guild has 666 cards in total at the start.",
      "Chance of winning for the members of this guild is 1.25X among all the cards.",
    ],
  },
  {
    activeCard: false,
    name: "Smiths",
    titleOfHonor: "Followers of Hephaestus",
    image: "/img/cyc/3.png",

    desc: [
      "Attained their power from Hephaestus. Power is known as “special drop”. With this power members will receive something special in the future. This guild has 777 cards in total at the start.",
      "Chance of winning for the members of this guild is 0.85X among all the cards.",
    ],
  },
  {
    activeCard: false,
    name: "Humans",
    titleOfHonor: "Ordinary people",
    image: "/img/cyc/2.png",
    desc: [
      "They don’t hold any special power but they are strong in their beliefs, which is the reason why they joined the army to hunt down the treasure with their bare hands.",
      "The chance of winning for the humans is 0.85X among all the cards.",
    ],
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
    title: "Treasury filling period (3 month)",
    desc: (
      <>
        After minting, releasing royalty fees from Opensea will take a month and
        8 weeks to fill the Investment Treasury.
      </>
    ),
  },
  {
    title: "Yield farming on Investment Treasury simultaneously",
    desc: <>This will start immediately after receiving the funds.</>,
  },
  {
    title: "Multi format PFP for NFT owners to download",
    desc: (
      <>This feature will be available from the first day of the reveal date.</>
    ),
  },
  {
    title: "Lottery starts",
    desc: <>3 months after minting(until the investment Treasury fills).</>,
  },
  {
    title: "Sharing prize pools",
    desc: (
      <>
        Building several participant pools. Members of the pools will have an
        increased chance of winning the prize as a passive income opportunity.
        This prize will be splitted among the members based on their NFTs.
      </>
    ),
  },
];
export const roadDataQ2: roadDataType[] = [
  {
    title: "Moving towards becoming a DAO",
    desc: (
      <>
        6 months after minting the Demmortal Treasure NFTs, accepting proposal
        for accelerating defi gamification ideas based on DD Dao treasures{" "}
        <a
          href="https://wiki.com"
          target={"_blank"}
          className="link-inside-text"
        >
          link to the Wiki
        </a>
      </>
    ),
  },
  {
    title: "Airdrops for the next upcoming collictigame that is being built",
    desc: (
      <>
        To play this game, each player needs to hold 5 cards of the new
        collection. 3 of which will be airdropped to the owners of Demmortal
        Treasure collection.
      </>
    ),
  },
  {
    title: "Expanding DDD collictigames to Sandbox platform",
    desc: (
      <>
        This is an ongoing project. This is expected to be released by the end
        of 2022.
      </>
    ),
  },
  {
    title: "Merging other investment DeFi protocols to our existing games",
    desc: <>To add more diverse funds to the lottery prize.</>,
  },
  {
    title: "Launching accessories marketplace",
    desc: (
      <>
        Marketplace for collectibles and their accessories like scores, POAPs,
        badges, etc.
      </>
    ),
  },
];
export const roadDataQ3: roadDataType[] = [
  {
    title: "Platformization the lottery format for other collectibles",
    desc: (
      <>
        This is possible via fractionalizing to ERC20. DDD will host at least 10
        lottery for popular collectibles by the end of 2022.
      </>
    ),
  },
  {
    title: "Expanding the games and protocols on ethereum layer2 networks",
    desc: <> Building fully on-chain games with cost efficient fees.</>,
  },
  {
    title: "More anti-rug open-sourced features",
    desc: (
      <>We believe you should not trust the team, trust the code instead.</>
    ),
  },
];

export const roadMapData: roadMapType[] = [
  {
    sectionName: "Demmortal Treasure",
    backImg: "/img/roadmap/sec1.png",
    roadData: roadDataQ1,
  },
  {
    sectionName: "Expanding DDD - part I",
    backImg: "/img/roadmap/sec2.png",
    roadData: roadDataQ2,
  },
  {
    sectionName: "Expanding DDD - part II",
    backImg: "/img/roadmap/sec3.png",
    roadData: roadDataQ3,
  },
];

export const benefitsData: benefitType[] = [
  {
    title: "Time-Guaranteed floor price",
    desc: [
      <>
        The money collected from the minting, goes to the buyback treasury which
        will guarantee the floor price. Any nft holder has the right to burn
        their nfts and receive their funds back. Our team only receives 30% of
        the funds based on the time schedule.{" "}
        <a
          href="https://gitbook.what"
          target={"_blank"}
          className="link-inside-text"
        >
          GITBOOK
        </a>
        <br />
      </>,
      <>
        Part of the money earned from the secondary market sales and yield
        farming will also go to this treasure to refuel it.
      </>,
    ],
  },
  {
    title: "Auto-join lottery",
    desc: [
      <>
        All NFT holders will automatically participate in our daily and weekly
        gamified lottery.
      </>,
      <>No extra gas fee or action needed from the holders unless they win.</>,
    ],
  },
  {
    title: "Diverse pool prizes",
    desc: [
      <>Currently, There are two types of prizes in each game.</>,
      <>Dynamic prize based on secondary sales (main prize).</>,
      <>Guaranteed prize based on yield farming of investment treasury.</>,
      <>
        Note: The investment treasury is a self-growing pool which can only grow
        bigger and guarantees a minimum prize.
      </>,
    ],
  },
  {
    title: "One click from NFT to PFP",
    desc: [
      <>
        Demmortal Treasure collectigame is based on the lore‘s main characters.
        It is also possible to generate detailed artwork PFP from your unique
        NFT.
      </>,
    ],
  },
];

// //////////////////////////
// pages

export const homePageMetaData: metaType = {
  author: "DeDogmaDAO",
  description: "Demmortal Treasure! Win Eth!",
  keywords: "etherium , demmortal",
  title: "DeDogmaDAO Demmortal Treasure",
  preload: [
    "/public/img/art/portal.png",
    "/public/img/art/city.png",
    "/public/img/art/mask.png",
    "/public/img/art/cape.gif",
    "/public/img/art/left-fire.mp4",
    "/public/img/art/right-fire.mp4",
  ],
};
