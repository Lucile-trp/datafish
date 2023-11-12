import { Url } from "url";

export type NavigationType = NavigationItem[];

type NavigationItem = {
  title: String;
  href: String;
  children?: NavigationItem[];
};
