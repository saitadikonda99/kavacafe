export interface Slide {
  label: string;
  title: string;
  sub: string;
  img: string;
  local?: boolean;
}

export interface MenuItem {
  name: string;
  price: string;
  desc: string;
  star: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  pos: "above" | "below";
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface SocialLink {
  label: string;
  d: string;
}
