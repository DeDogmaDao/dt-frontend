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

export interface tabType {
  name: string;
  image: string;
  desc: ReactElement<any, any>;
}


export interface layersType {
  image:string;
  speed:number;
}

