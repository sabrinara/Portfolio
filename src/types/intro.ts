export interface SocialLink {
  icon: string;
  title: string;
  url: string;
}

export interface Intro {
  _id?: string;
  name: string;
  role: string;
  smallDetails: string;
  image?: string;
  about_content?: string;
  resume?: string;
  socialLinks: SocialLink[];
  createdAt?: string;
  updatedAt?: string;
}
