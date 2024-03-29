// type
import {
  counterNumType,
  faqType,
  gameCardType,
  layersType,
  socialType,
  tabsType,
  tabType,
  roadMapType,
  roadDataType,
  benefitType,
  teamCardType,
  metaDataType,
  web3walletType,
  auctionDataType,
  auctionTabDataType,
} from "../types/allTypes";

// images
import { auctionTabsSVGS, socialSVGs } from "./svg";
//links
import {
  decentralTitanSocial,
  discordLink,
  elaheSocial,
  erc721Link,
  flokiBBSocial,
  georgeSocial,
  gitHubLink,
  katySocial,
  lotteryChanceLink,
  metiEthSocial,
  saraSocial,
  twitterLink,
  youtubeLink,
} from "./allLinks";
//
//

import { teamImg, walletImgData } from "./img";

const {
  DiscordSVG,
  YoutubeSVG,
  Twitter,
  Github,
  Instagram,
  Linkedin,
  WebsiteSVG,
} = socialSVGs;

export const footerData: socialType[] = [
  {
    icon: <YoutubeSVG />,
    href: youtubeLink,
  },
  {
    icon: <DiscordSVG />,
    href: discordLink,
  },
  {
    icon: <Twitter />,
    href: twitterLink,
  },
  {
    icon: <Github />,
    href: gitHubLink,
  },
];
export const mdData: string[] = ["3", "l"];

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
    answer: <>TBA</>,
  },
  {
    question: "When is the reveal?",
    answer: <>2 weeks after minting is over</>,
  },
  {
    question: "How to get whitelisted?",
    answer: (
      <>
        - Blast stakers have priority (more details will be announced soon)
        <br />
        - By being an active member of our community.
        <br />- Winners of the challenges are announced in DDD discord.
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
    question: "Which wallets can I use?",
    answer: <>Metamask, WalletConnect, Coinbase wallet, Fortmatic and Portis</>,
  },
  {
    question: "Do the NFTs have an equal chance to win the lottery?",
    answer: (
      <>
        No, it depends on your character.{" "}
        <a
          href={lotteryChanceLink}
          target={"_blank"}
          className="link-inside-text"
        >
          Read more about it here
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
        Yes,{" "}
        <a href={erc721Link} target={"_blank"} className="link-inside-text">
          Read Azuki’s post about this standard
        </a>
      </>
    ),
  },
  // {
  //   question: "What is the time-guaranteed treasury?",
  //   answer: (
  //     <>
  //       This is an anti-rug feature designed to guarantee the quality and price
  //       of the collection. This means the share of the team will be released to
  //       the team gradually in a smaller amount during 8 months to maintain the
  //       value of the NFTs and guarantee the performance of our protocol.
  //     </>
  //   ),
  // },
  // {
  //   question: "What is the time-guaranteed treasury schedule?",
  //   answer: (
  //     <>
  //       20% of minting price during minting period for market making and
  //       bootstrapping
  //       <br />
  //       10% of minting price after the 3rd month for the team
  //       <br />
  //       10% of minting price after the 4th month for the team
  //       <br />
  //       10% of minting price after the 5th month for the team
  //       <br />
  //       10% of minting price after the 6th month for DDD platform expansion
  //       <br />
  //       10% of minting price after the 7th month for DDD platform expansion
  //       <br />
  //       10% of minting price after the 8th month for DDD platform expansion
  //     </>
  //   ),
  // },
  {
    question: "How will the guaranteed prize work?",
    answer: (
      <>
        It's an evergrowing pool that gets filled with two inflows. One is the 8
        ATH weeks in royalty volume and the other is 50% percent of native
        yields from the buyback excrow. The guarantee prizes rely on Native
        yields generated by this pool
      </>
    ),
  },
  {
    question: "When does the lottery start?",
    answer: (
      <>
        We are having a two month lottery preparation period for treasury
        reserves between minting and when the lottery starts.
      </>
    ),
  },
  // {
  //   question: "What is the yield farming strategy?",
  //   answer: (
  //     <>
  //       This strategy can change throughout time and we will optimize towards
  //       the maximum interest between yield aggregators. In the beginning we will
  //       start with Yearn Finance.
  //     </>
  //   ),
  // },
  {
    question: "Wen token?",
    answer: (
      <>
        We don’t have any tokens. All prizes and benefits of the lottery are in
        ETH itself. And can be boosted by Blast token in the future
      </>
    ),
  },
];
export const lgData: string[] = ["n_"];

export const teamDataLvl1: teamCardType[] = [
  {
    name: "Sepi D Mancer",
    role: "Co-founder and CEO",
    image: teamImg[0],
    desc: "Believer in Decentral Dogma. Explorer of the first titans treasure. Full time defi user and researcher for more than 4 years. NFT market addicted.",
    link: [{ href: decentralTitanSocial.twitter, icon: <Twitter /> }],
  },
  {
    name: "Meti.eth",
    role: "Blockchain Engineer",
    image: teamImg[1],
    desc: "Mehdi Salehi is an integration engineer at Arbitrum. He graduated from Concordia University in Montreal, Canada. He mainly researches blockchain technologies and decentralized finance. Before this, he used to be an independent smart contract auditor, auditing several DeFi projects. He also contributed to the Meta Governance project and EIP-4824.",
    link: [
      {
        href: metiEthSocial.linkedin,
        icon: <Linkedin />,
      },
    ],
  },
  {
    name: "Sara",
    role: "Co-founder and Product Manager",
    image: teamImg[2],
    desc: "Sara has a technical background in entertainment and fintech industry worked in companies like Spotify and iZettle. She is a true believer in Ethereum and blockchain. She has been active in this field for a couple of years now and wants to continue to have a bigger impact in this industry by building more innovative solutions.",
    link: [
      {
        href: saraSocial.linkedin,
        icon: <Linkedin />,
      },
    ],
  },
];

export const teamDataLvl2: teamCardType[] = [
  {
    name: "George",
    role: "Backend  Adviser",
    image: teamImg[3],
    desc: "George has many years of experience in backend engineering. He has worked in companies like Spotify and successful startups like Soundwave.",
    link: [
      {
        href: georgeSocial.linkedin,
        icon: <Linkedin />,
      },
      { href: georgeSocial.github, icon: <Github /> },
    ],
  },
  {
    name: "Floki BB",
    role: "Co-founder and Blockchain Engineer",
    image: teamImg[4],
    desc: "Floki BB is a software engineer and has been in the Blockchain filed since 2016. He has worked as a Blockchain integration engineer and have been involved in the Ethereum ecosystem since 2018. An example of his remarkable work is contributing to solidity language compiler and work as DAPP engineer in couple other projects.",
    link: [
      { href: flokiBBSocial.twitter, icon: <Twitter /> },
      { href: flokiBBSocial.github, icon: <Github /> },
    ],
  },
  {
    name: "Katy",
    role: "Master of lore and communications",
    image: teamImg[5],
    desc: "Katy is a linguistics enthusiast and lover of all things literature. By day, she teaches English as a foreign language and by night she spends her time building lightsabers, writing, dreaming and ever expanding her hobbies. She enjoys the company of like-minded people and bringing these people together. Inspired by web3 culture. Community building and support lies at the core of what she does at DeDogmaDao.",
    link: [{ href: katySocial.instagram, icon: <Instagram /> }],
  },
  {
    name: "Elahe",
    role: "Head of art",
    image: teamImg[6],
    desc: "Full-time artist for more than 12 years. Specialised in Illustration, character and motion design in the video production and game industry. Graduated in digital arts from Bowling Green State University.",
    link: [{ href: elaheSocial.site, icon: <WebsiteSVG /> }],
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
      "Beautiful moon maiden, goddess of the hunt. Twin to Apollo, the sun god. Fingers laced with silver and a deadly accuracy with her bow and arrows- all who pursue the art of archery strive to attain only a sliver of her skill.",
      "Artemis created the beast rider guild by sending her goat to help them. She takes 3% share of the beast rider's win of the treasury.",
      "Artemis has 18X more chance to compare to other cards to win the lottery.",
    ],
  },
  {
    activeCard: false,
    name: "Hermes",
    titleOfHonor: "God of thieves",
    image: "/img/cyc/hermes.jpg",
    desc: [
      "Master of thievery and poetry. With his wing-threaded sandals, he can spread news at the blink of an eye to those who are willing to lend him an ear. The words that leave his mouth are nothing short of poetical.",
      "Hermes created the Bandits guild by placing a magnetic power in humans.",
      "Hermes takes 3% share of the Bandits guilds‘ win of treasury.",
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
      "Hephaestus created the Smiths guild by giving them the box of pandora.",
      "Hephaestus takes 3% share of the Smiths guilds‘ win of treasury.",
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
      "Hecate created the Enchants by the power of her magic and fire.",
      "Hecate takes 3% share of the Enchants guild’s win of  treasury.",
      "Hecate has 18X more chance to compare to other cards to win the lottery.",
    ],
  },
  {
    activeCard: false,
    name: "Hades",
    titleOfHonor: "God of the afterlife",
    image: "/img/cyc/hades.jpg",
    desc: [
      "God of the afterlife and Lord of the underworld. No mortal man could bare a single second in his presence, as he emits a strong sense of death and loss.",
      "Hades has 18X more chance to compare to other cards to win the lottery",
    ],
  },
  {
    activeCard: true,
    name: "Aphrodite",
    titleOfHonor: "Goddess of beauty and passion",
    image: "/img/cyc/aphrodite.jpg",
    desc: [
      "Goddess of beauty and passion. Seductive, beautiful and wistful, this goddess could make a man swoon at her while holding a dagger to his throat. A dangerous-but-fantastic deity.",
      "Aphrodite has 18X more chance to compare to other cards to win the lottery.",
    ],
  },
  {
    activeCard: false,
    name: "Poseidon",
    titleOfHonor: "God of the oceans",
    image: "/img/cyc/poseidon.jpg",
    desc: [
      "God of the oceans and Lord of the seas. Father of horses and all sea creatures. With his power to control large bodies of water, he can influence the climate of the earth like no other.",
      "Poseidon has 18X more chance to compare to other cards to win the lottery.",
    ],
  },
  {
    activeCard: false,
    name: "Ares",
    titleOfHonor: "God of War and bloodlust",
    image: "/img/cyc/ares.jpg",
    desc: [
      "God of War and bloodlust. The most hostile god to deal with, but the most useful to have with you in battle. His combat intelligence and street smarts cannot be humbled.",
      "Ares has 18X more chance to compare to other cards to win the lottery.",
    ],
  },
  {
    activeCard: false,
    name: "Hera",
    titleOfHonor: "Goddess of marriage",
    image: "/img/cyc/hera.jpg",
    desc: [
      "Goddess of marriage and patroness of women. Daughter of Kronos and Hera. Her loyalty to Zeus cannot be restrained and her dedication towards women and  children is admirable.",
      "Hera has 18X more chance to compare to other cards to win the lottery",
    ],
  },
];
export const humanTabData: tabType[] = [
  {
    activeCard: false,
    name: "Beast riders",
    titleOfHonor: "Followers of Artemis",
    image: "/img/cyc/beast-riders.png",
    desc: [
      "Attained their power from Artemis. Power is known as “card illusion”. With this power, one holds an additional card in the deck identical to the real one. This guild has 444 cards in total at the start.",
      "Chance of winning for the members of this guild is 1.7X among all the cards.",
    ],
  },
  {
    activeCard: false,
    name: "Bandits",
    titleOfHonor: "Followers of Hermes",
    image: "/img/cyc/bandits.png",

    desc: [
      "Attained their power from Hermes. Power is known as “magnet”. With this power, one can steal the treasury from the winner under a specific condition. This guild has 480 cards in total at the start.",
      "Chance of winning for the members of this guild is 1.45X among all the cards.",
    ],
  },
  {
    activeCard: true,
    name: "Enchants",
    titleOfHonor: "Followers of Hecate",
    image: "/img/cyc/enchants.png",
    desc: [
      "Attained their power from Hecate. Power is known as “double ability”. With this power, members can play their abilities twice. This guild has 666 cards in total at the start.",
      "Chance of winning for the members of this guild is 1.25X among all the cards.",
    ],
  },
  {
    activeCard: false,
    name: "Smiths",
    titleOfHonor: "Followers of Hephaestus",
    image: "/img/cyc/smiths.png",

    desc: [
      "Attained their power from Hephaestus. Power is known as “special drop”. With this power members will receive something special in the future. This guild has 777 cards in total at the start.",
      "Chance of winning for the members of this guild is 0.85X among all the cards.",
    ],
  },
  {
    activeCard: false,
    name: "Masculine Mortals",
    image: "/img/cyc/human1.png",
    desc: [
      "They don’t hold any special power but they are strong in their beliefs, which is the reason why they joined the army to hunt down the treasure with their bare hands.",
      "The chance of winning for the humans is 0.85X among all the cards.",
    ],
  },
  {
    activeCard: false,
    name: "Feminine Mortals",
    image: "/img/cyc/human2.png",
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

export const smData: string[] = ["a", "y"];
export const gameCardData: gameCardType[] = [
  {
    id: "1",
    name: "Zeus",
    image: "/img/game/characters/7.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 3,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "bandit",
  },
  {
    id: "2",
    name: "Hades",
    image: "/img/game/characters/9.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3, 4],
    total: 4,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "enchant",
  },
  {
    id: "3",
    name: "Laya",
    image: "/img/game/characters/8.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 6,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "4",
    name: "Desmond",
    image: "/img/game/characters/10.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 5,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "5",
    name: "Hero",
    image: "/img/game/characters/11.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 7,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "6",
    name: "Cool guy",
    image: "/img/game/characters/12.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 7,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: true,
    type: "enchant",
  },
  {
    id: "7",
    name: "Peter pan",
    image: "/img/game/characters/10.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 8,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "8",
    name: "Edmownd",
    image: "/img/game/characters/12.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 9,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "9",
    name: "Zeus",
    image: "/img/game/characters/7.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 9,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "10",
    name: "Hades",
    image: "/img/game/characters/9.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 11,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "11",
    name: "Desmond",
    image: "/img/game/characters/8.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 11,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "12",
    name: "Laya",
    image: "/img/game/characters/7.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 14,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "13",
    name: "Hero",
    image: "/img/game/characters/3.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 12,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "14",
    name: "Cool guy",
    image: "/img/game/characters/2.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 17,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "15",
    name: "Peter pan",
    image: "/img/game/characters/1.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 15,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "16",
    name: "Edmownd",
    image: "/img/game/characters/4.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 18,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "17",
    name: "Zeus",
    image: "/img/game/characters/5.png",
    spellGroup: "blue",
    spellValue: [1],
    total: 18,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "18",
    name: "Hades",
    image: "/img/game/characters/6.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 21,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "19",
    name: "Desmond",
    image: "/img/game/characters/3.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 20,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "20",
    name: "Laya",
    image: "/img/game/characters/1.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 24,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "21",
    name: "Hero",
    image: "/img/game/characters/9.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 21,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "22",
    name: "Cool guy",
    image: "/img/game/characters/3.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 26,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "23",
    name: "Peter pan",
    image: "/img/game/characters/10.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 22,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "24",
    name: "Edmownd",
    image: "/img/game/characters/12.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 25,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "25",
    name: "Zeus",
    image: "/img/game/characters/11.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 28,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "26",
    name: "Hades",
    image: "/img/game/characters/12.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 31,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "27",
    name: "Desmond",
    image: "/img/game/characters/3.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 27,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "28",
    name: "Laya",
    image: "/img/game/characters/10.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 34,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "29",
    name: "Hero",
    image: "/img/game/characters/2.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 28,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "30",
    name: "Cool guy",
    image: "/img/game/characters/1.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 36,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "31",
    name: "Peter pan",
    image: "/img/game/characters/10.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 31,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "32",
    name: "Edmownd",
    image: "/img/game/characters/12.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 34,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "33",
    name: "Zeus",
    image: "/img/game/characters/1.png",
    spellGroup: "blue",
    spellValue: [1],
    total: 37,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "34",
    name: "Hades",
    image: "/img/game/characters/2.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 40,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "35",
    name: "Desmond",
    image: "/img/game/characters/3.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 36,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "36",
    name: "Laya",
    image: "/img/game/characters/1.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 43,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "37",
    name: "Hero",
    image: "/img/game/characters/2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 39,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "38",
    name: "Cool guy",
    image: "/img/game/characters/3.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 45,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "39",
    name: "Peter pan",
    image: "/img/game/characters/1.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 41,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "40",
    name: "Edmownd",
    image: "/img/game/characters/2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 44,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "41",
    name: "Zeus",
    image: "/img/game/characters/1.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 47,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "42",
    name: "Hades",
    image: "/img/game/characters/2.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 50,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "43",
    name: "Desmond",
    image: "/img/game/characters/3.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 46,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "44",
    name: "Laya",
    image: "/img/game/characters/1.png",
    spellGroup: "blue",
    spellValue: [1],
    total: 51,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "45",
    name: "Hero",
    image: "/img/game/characters/2.png",
    spellGroup: "yellow",
    spellValue: [1, 2],
    total: 48,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "46",
    name: "Cool guy",
    image: "/img/game/characters/3.png",
    spellGroup: "blue",
    spellValue: [1],
    total: 52,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "47",
    name: "Peter pan",
    image: "/img/game/characters/1.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 49,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "48",
    name: "Edmownd",
    image: "/img/game/characters/2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 52,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "49",
    name: "Hero",
    image: "/img/game/characters/2.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 53,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "50",
    name: "Cool guy",
    image: "/img/game/characters/3.png",
    spellGroup: "blue",
    spellValue: [1, 2],
    total: 54,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "51",
    name: "Peter pan",
    image: "/img/game/characters/1.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 54,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "52",
    name: "Edmownd",
    image: "/img/game/characters/2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 57,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "53",
    name: "Edmownd",
    image: "/img/game/characters/2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 60,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "54",
    name: "Edmownd",
    image: "/img/game/characters/2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 63,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "55",
    name: "Edmownd",
    image: "/img/game/characters/2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 66,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "56",
    name: "Edmownd",
    image: "/img/game/characters/2.png",
    spellGroup: "yellow",
    spellValue: [1, 2, 3],
    total: 69,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "57",
    name: "Edmownd",
    image: "/img/game/characters/2.png",
    spellGroup: "yellow",
    spellValue: [1],
    total: 70,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "58",
    name: "Edmownd",
    image: "/img/game/characters/2.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 57,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "59",
    name: "Edmownd",
    image: "/img/game/characters/2.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 60,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "60",
    name: "Edmownd",
    image: "/img/game/characters/2.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 63,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "61",
    name: "Edmownd",
    image: "/img/game/characters/2.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 66,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "62",
    name: "Edmownd",
    image: "/img/game/characters/2.png",
    spellGroup: "blue",
    spellValue: [1, 2, 3],
    total: 69,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
  },
  {
    id: "63",
    name: "Edmownd",
    image: "/img/game/characters/2.png",
    spellGroup: "blue",
    spellValue: [1],
    total: 70,
    communityNum: Math.round(Math.random() * 9),
    individualNum: Math.round(Math.random() * 99),
    cardNum: Math.floor(Math.random() * 5250 + 1),
    isWinner: false,
    type: "human",
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
    title: "Treasury reserve period",
    desc: (
      <>
        After minting, will take 8 weeks to fill the Guaranteed Prize Pool with
        royalty Fees.
      </>
    ),
    size: 2,
  },
  {
    title: "Multi format PFP for NFT owners to download",
    desc: (
      <>This feature will be available from the first day of the reveal date.</>
    ),
    size: 1,
  },
  {
    title: "Lottery starts",
    desc: <>2month after minting.</>,
    size: 1,
  },
  {
    title: "Sharing prize pools",
    desc: (
      <>
        Building several participant pools. Members of the pools will have an
        increased chance of winning the prize as a passive income opportunity.
        This prize will be split among the members based on their NFTs.
      </>
    ),
    size: 3.2,
  },
];
export const roadDataQ2: roadDataType[] = [
  {
    title: "Integrating Blast native token to prizes",
    desc: (
      <>
        Providing more prizes for users by adding Blast native token as a new
        prize pool
      </>
    ),
    size: 1,
  },
  {
    title: "Integration of ERC-20s with nft boost option",
    desc: (
      <>
        Allowing users to participate in new pools by depositing Eth and USDC at
        first, and more ERC-20 tokens in the future. With capability of boost
        for nft holders
      </>
    ),
    size: 2,
  },
  {
    title: "Secure Mint launchpad for external projects",
    desc: (
      <>
        Offering secure mint feature launchpad and various pre-developed smart
        contract templates for risk-free NFT mints and escrow contracts.
      </>
    ),
    size: 1.5,
  },
  {
    title: "Offering NFTs as new prize pools",
    desc: (
      <>
        DT new collections and other projects that uses DT launchpad can offer a
        share of NFTs to the prize pools as the launching Fee.
      </>
    ),
    size: 2,
  },
];
export const roadDataQ3: roadDataType[] = [
  {
    title: "Moving towards becoming a DAO",
    desc: (
      <>
        6 months after minting the Demmortal Treasure NFTs, we will be accepting
        proposals for accelerating defi gamification ideas based on DD Dao
        treasures
      </>
    ),
    size: 2.5,
  },
  {
    title: "Launching accessories marketplace",
    desc: (
      <>
        Marketplace for collectibles and their accessories like scores, POTLs,
        POAPs, badges, etc.
      </>
    ),
    size: 1.5,
  },
  {
    title: "Integrating new Blast Features to the platform",
    desc: (
      <>
        As Blast ecosystem is growing, DT can integrate some of their new
        innovative features for improving it’s user experiences
      </>
    ),
    size: 1.5,
  },
  {
    title: "More anti-rug open-sourced features",
    desc: (
      <>We believe you should not trust the team, trust the code instead.</>
    ),
    size: 1,
  },
];

export const roadMapData: roadMapType[] = [
  {
    sectionName: "Demmortal Treasure",
    roadData: roadDataQ1,
  },
  {
    sectionName: "Expanding DDD - part I",
    roadData: roadDataQ2,
  },
  {
    sectionName: "Expanding DDD - part II",
    roadData: roadDataQ3,
  },
];

export const benefitsData: benefitType[] = [
  {
    title: "Guaranteed floor price",
    desc: [
      <>
        DT presents secure mint which Guarantees 90% reimbursement on burning
        and exiting the game.
      </>,
      <>
        The team takes nothing from mint money and only relies on the 50% of
        yield generated from Blast.
      </>,
    ],
  },
  {
    title: "Diverse pool prizes",
    desc: [
      <>Currently, There are two types of prizes in each game:</>,
      <p>
        <span className="font-semibold">1- Active </span> Prize Pool powered by
        secondary sales and burn tax.
      </p>,
      <p>
        <span className="font-semibold">2- Guaranteed </span> Prize Pool Fueled
        by Blast native yield.
      </p>,
      <>
        Note: GPP guarantees an ever-growing treasury and a minimum weekly +
        daily prize.
      </>,
    ],
  },
  {
    title: "Automated Draw Entry",
    desc: [
      <>
        NFT holders automatically enter daily and weekly draws, just by holding
        their cards.
      </>,
      <>No added fees or actions required.</>,
    ],
  },
];

// //////////////////////////
// pages

export const homePageMetaData: metaDataType = {
  siteTitle: "DeDogma Dao",
  pageTitle: "Home",
  desc: "Demmortal Treasure is more than just a collectible. It's a self-sustaining economy driven by anti-rug protocols and a daily draw offering assured rewards, all through NFT ownership!",
  keywords:
    "dogma , decentralized , nft , lottery , collectible , ethereum , collectigame , titan , mythology , greek myths , zeus , card game  , no loss , pooltogether nft , demmortal , treasure , daily prize , big prize , eth , dao  , pfp , anti-rug , anti rug , protocol , erc , yield farming , guarantee , floor price, guaranteed prize",
  imageUrl: "/cover.jpg",
  homePageUrl: "https://dedogmadao.com",
  pageUrl: "https://dedogmadao.com/",
};
export const roadmapPageMetaData: metaDataType = {
  siteTitle: "DeDogma Dao",
  pageTitle: "Roadmap",
  desc: "Demmortal Treasure is more than just a collectible. It's a self-sustaining economy driven by anti-rug protocols and a daily draw offering assured rewards, all through NFT ownership!",
  keywords:
    "dogma , decentralized , nft , lottery , collectible , ethereum , collectigame , titan , mythology , greek myths , zeus , card game  , no loss , pooltogether nft , demmortal , treasure , daily prize , big prize , eth , dao  , pfp , anti-rug , anti rug , protocol , erc , yield farming , guarantee , floor price, guaranteed prize",
  imageUrl: "/cover.jpg",
  homePageUrl: "https://dedogmadao.com",
  pageUrl: "https://dedogmadao.com/roadmap",
};
export const teamPageMetaData: metaDataType = {
  siteTitle: "DeDogma Dao",
  pageTitle: "Team",
  desc: "Demmortal Treasure is more than just a collectible. It's a self-sustaining economy driven by anti-rug protocols and a daily draw offering assured rewards, all through NFT ownership!",
  keywords:
    "dogma , decentralized , nft , lottery , collectible , ethereum , collectigame , titan , mythology , greek myths , zeus , card game  , no loss , pooltogether nft , demmortal , treasure , daily prize , big prize , eth , dao  , pfp , anti-rug , anti rug , protocol , erc , yield farming , guarantee , floor price, guaranteed prize",
  imageUrl: "/cover.jpg",
  homePageUrl: "https://dedogmadao.com",
  pageUrl: "https://dedogmadao.com/team",
};
export const faqPageMetaData: metaDataType = {
  siteTitle: "DeDogma Dao",
  pageTitle: "FAQ",
  desc: "Demmortal Treasure is more than just a collectible. It's a self-sustaining economy driven by anti-rug protocols and a daily draw offering assured rewards, all through NFT ownership!",
  keywords:
    "dogma , decentralized , nft , lottery , collectible , ethereum , collectigame , titan , mythology , greek myths , zeus , card game  , no loss , pooltogether nft , demmortal , treasure , daily prize , big prize , eth , dao  , pfp , anti-rug , anti rug , protocol , erc , yield farming , guarantee , floor price, guaranteed prize",
  imageUrl: "/cover.jpg",
  homePageUrl: "https://dedogmadao.com",
  pageUrl: "https://dedogmadao.com/faq",
};

export const web3Wallets: web3walletType[] = [
  {
    name: "MetaMask",
  },
  {
    name: "WalletConnect",
  },
  {
    name: "CoinBase",
  },
];

export const walletsID = ["metaMask", "coinbaseWallet", "walletConnect"];

export const auctionData: auctionDataType[] = [
  {
    godNumber: 0,
    godName: "Zeus",
    titleOfHonor: "The God of the Sky",
    about: [
      <>
        Lord of the skies and king of the Olympians. Strong-willed and astute,
        he empowers mortals with his greatness to surface their potential. His
        thunderbolt has the power to induce fear and dominate like no other.
      </>,
      <>
        Zeus takes 1.5 % of every mortal player's prize share in case of
        winning. Zeus has 18X more chance to compare to other cards to win the
        lottery.
      </>,
    ],
    godUrl: "/zeus",
  },
  {
    godNumber: 1,
    godName: "Artemis",
    titleOfHonor: "The God of the Hunt",
    about: [
      <>
        Beautiful moon maiden, goddess of the hunt. Twin to Apollo, the sun god.
        Fingers laced with silver and a deadly accuracy with her bow and arrows-
        all who pursue the art of archery strive to attain only a sliver of her
        skill.
      </>,
      <>
        Artemis created the beast rider guild by sending her goat to help them.
        She takes 3% share of the beast rider's win of the treasury.
      </>,
      <>
        Artemis has 18X more chance to compare to other cards to win the
        lottery.
      </>,
    ],
    godUrl: "/Artemis",
  },
  {
    godNumber: 2,
    godName: "Hermes",
    titleOfHonor: "The God of the Mail",
    about: [
      <>
        Master of thievery and poetry. With his wing-threaded sandals, he can
        spread news at the blink of an eye to those who are willing to lend him
        an ear. The words that leave his mouth are nothing short of poetical.
      </>,
      <>
        Hermes created the Bandits guild by placing a magnetic power in humans.
      </>,
      <>Hermes takes 3% share of the Bandits guilds‘ win of treasury.</>,
      <>
        Hermes has 18X more chance to compare to other cards to win the lottery.
      </>,
    ],
    godUrl: "/Hermes",
  },
  {
    godNumber: 3,
    godName: "Hephaestus",
    titleOfHonor: "The God of the Sun",
    about: [
      <>
        God of craftsmen and invention, son of Hera. A blazing forge with his
        blessing yields the sharpest daggers and the most balanced swords. His
        inventive spirit can solve any problem with an ingenious idea.
      </>,
      <>
        Hephaestus created the Smiths guild by giving them the box of pandora.
      </>,
      <>Hephaestus takes 3% share of the Smiths guilds‘ win of treasury.</>,
      <>
        Hephaestus has 18X more chance to compare to other cards to win the
        lottery.
      </>,
    ],
    godUrl: "/Hephaestus",
  },
  {
    godNumber: 4,
    godName: "Hecate",
    titleOfHonor: "The God of the Moon",
    about: [
      <>
        Goddess of necromancy and sorcery. Accompanied by her double shadow, her
        magical abilities knows no boundaries.
      </>,
      <>Hecate created the Enchants by the power of her magic and fire.</>,
      <>Hecate takes 3% share of the Enchants guild’s win of treasury.</>,
      <>
        Hecate has 18X more chance to compare to other cards to win the lottery.
      </>,
    ],
    godUrl: "/Hecate",
  },
  {
    godNumber: 5,
    godName: "Hades",
    titleOfHonor: "The God of the Underworld",
    about: [
      <>
        God of the afterlife and Lord of the underworld. No mortal man could
        bare a single second in his presence, as he emits a strong sense of
        death and loss.
      </>,
      <>
        Hades has 18X more chance to compare to other cards to win the lottery.
      </>,
    ],
    godUrl: "/Hades",
  },
  {
    godNumber: 6,
    godName: "Aphrodite",
    titleOfHonor: "The God of Love",
    about: [
      <>
        Goddess of beauty and passion. Seductive, beautiful and wistful, this
        goddess could make a man swoon at her while holding a dagger to his
        throat. A dangerous-but-fantastic deity.
      </>,
      <>
        Aphrodite has 18X more chance to compare to other cards to win the
        lottery.
      </>,
    ],
    godUrl: "/Aphrodite",
  },
  {
    godNumber: 7,
    godName: "Poseidon",
    titleOfHonor: "The God Of Sea",
    about: [
      <>
        God of the oceans and Lord of the seas. Father of horses and all sea
        creatures. With his power to control large bodies of water, he can
        influence the climate of the earth like no other.
      </>,
      <>
        Poseidon has 18X more chance to compare to other cards to win the
        lottery.
      </>,
    ],
    godUrl: "/Poseidon",
  },
  {
    godNumber: 8,
    godName: "Ares",
    titleOfHonor: "hhhh",
    about: [
      <>
        God of War and bloodlust. The most hostile god to deal with, but the
        most useful to have with you in battle. His combat intelligence and
        street smarts cannot be humbled.
      </>,
      <>
        Ares has 18X more chance to compare to other cards to win the lottery.
      </>,
    ],
    godUrl: "/Ares",
  },
  {
    godNumber: 9,
    godName: "Hera",
    titleOfHonor: "hhhh",
    about: [
      <>
        Goddess of marriage and patroness of women. Daughter of Kronos and Hera.
        Her loyalty to Zeus cannot be restrained and her dedication towards
        women and children is admirable.
      </>,
      <>
        Hera has 18X more chance to compare to other cards to win the lottery
      </>,
    ],
    godUrl: "/Hera",
  },
];
const { AuctionTab1, AuctionTab2, AuctionTab3 } = auctionTabsSVGS;
export const auctionTabData: auctionTabDataType[] = [
  {
    tabName: "Mint",
    tabIcon: <AuctionTab1 />,
  },
  {
    tabName: "About",
    tabIcon: <AuctionTab2 />,
  },
  {
    tabName: "Other GodHolders",
    tabIcon: <AuctionTab3 />,
  },
];
