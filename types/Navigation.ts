export type NavigationItem = {
  title: string;
  href: string;
  requiresAuth?: boolean;
  requiresNoAuth?: boolean;
  children?: NavigationItem[];
};

export type NavigationType = NavigationItem[];
