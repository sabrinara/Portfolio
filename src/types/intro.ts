export interface SocialLink {
  icon: string;
  title: string;
  url: string;
}

export interface IIntro {
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
