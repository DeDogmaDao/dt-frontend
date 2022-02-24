import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface faqType {
  question: string;
  answer: string;
}

export interface teamType {
  name: string;
  role: string;
  image: string;
}

export interface socialType { icon: IconDefinition; href: string; color:string; };