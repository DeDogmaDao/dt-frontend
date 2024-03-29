import type { ethers } from "ethers";
import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export interface LinkType {
  ref: string;
  text: string;
}

export interface faqType {
  question: string;
  answer: ReactElement<any, any>;
}

export interface globCardType {
  image: StaticImageData;
  name?: string;
  role?: string;
  desc?: string;
  link?: string;
}
export interface teamCardType {
  image: StaticImageData;
  name: string;
  role: string;
  desc: string;
  link?: socialType[];
}

export interface socialType {
  icon: ReactElement<any>;
  href: string;
}

export interface layersType {
  image: string;
  speed: number;
  top: number;
}

export interface tabType {
  activeCard: boolean;
  name: string;
  titleOfHonor?: string;
  image: string;
  desc: string[];
}

export interface tabsType {
  tabGroup: string;
  activeGroup: boolean;
  tabInfo: tabType[];
}

export interface gameCardType {
  id: string;
  name: string;
  image: string;
  spellGroup: string;
  spellValue: number[];
  total: number;
  communityNum: number;
  individualNum: number;
  cardNum: number;
  isWinner: boolean;
  type:"human"|"enchant"|"bandit" | "beast_rider";
}

export interface topRightPosition {
  right: number;
  top: number;
  width: number;
  height: number;
}
export interface bottomRightPosition {
  right: number | string;
  bottom: number | string;
  width: number | string;
  height: number | string;
}

export interface sizeType {
  width: number | string;
  height?: number | string;
}
export interface dimensionType {
  width: number;
  height: number;
}

export interface spellNumber {
  [yellow: string]: number;
  blue: number;
  yellowCardCount: number;
  blueCardCount: number;
}

export interface counterNumType {
  number: number;
  active: boolean;
}

export type light = { x: number; y: number };
export type createLightningType = (
  grandHeight: number,
  center: light,
  canvasSize: number,
  maxDifference: number,
  minSegmentHeight: number,
  roughness: number
) => light[];

export interface activeIndexCardType {
  [gods: string]: number[];
  humans: number[];
}

export interface roadDataType {
  title: string;
  desc: ReactElement<any, any>;
  size: number;
}

export interface roadMapType {
  sectionName: string;
  roadData: roadDataType[];
}

export interface benefitType {
  title: string;
  desc: ReactElement<any, any>[];
}

export interface metaType {
  title: string;
  description: string;
  keywords: string;
  author: string;
  preload: string[];
}

export interface metaDataType {
  siteTitle: string;
  pageTitle: string;
  desc: string;
  keywords: string;
  pageUrl: string;
  imageUrl: string;
  homePageUrl: string;
}

/////// web3 Types
export interface web3walletType {
  name: string;
}

export interface auctionDataType {
  godNumber: number;
  godName: string;
  godUrl: string;
  about: ReactElement<any, any>[];
  titleOfHonor: string;
}

export interface auctionTabDataType {
  tabName: string;
  tabIcon: ReactElement<any>;
}

export interface auctionResultType {
  tokenId: number;
  startTime: number;
  endTime: number;
  startPrice: number;
  endPrice: number;
  purchasePrice: number;
  owner: string;
  auctionDropPerStep: number;
  isSold: boolean;
}

export interface statusType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export type popUpType = "successful" | "failed" | "neutral";
export interface transactionResErrorType {
  message: any;
  code: any;
  txHash: any;
  hasTx:boolean;
}
