import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { ReactElement } from "react";

export interface LinkType {
  ref: string;
  text: string;
}

export interface faqType {
  question: string;
  answer: string;
}

export interface globCardType {
  image: string;
  name?: string;
  role?: string;
}

export interface socialType {
  icon: IconDefinition;
  href: string;
  color: string;
}

export interface layersType {
  image: string;
  speed: number;
  top: number;
}

export interface tabType {
  activeCard: boolean;
  name: string;
  titleOfHonor: string;
  image: string;
  image2?: string;
  image3?: string;
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
  [gods: string]: number;
  humans: number;
}

export interface roadDataType {
  title: ReactElement<any, any>;
  desc: string;
}

export interface roadMapType {
  sectionName: string;
  backImg: string;
  roadData: roadDataType[];
}

export interface benefitType {
  title: string;
  desc: string[];
}
