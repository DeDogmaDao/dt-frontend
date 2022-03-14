import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { ReactElement } from "react";

export interface faqType {
  question: string;
  answer: string;
}

export interface teamType {
  name: string;
  role?: string;
  image: string;
}

export interface socialType {
  icon: IconDefinition;
  href: string;
  color: string;
}

export interface layersType {
  image: string;
  speed: number;
  top:number;
}

export interface tabType {
  activeCard: boolean;
  name: string;
  image: string;
  image2?: string;
  image3?: string;
  desc: ReactElement<any, any>;
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
  communityNum:number;
  individualNum: number;
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

export interface spellNumber {
  [yellow: string]: number;
  blue: number;
}
