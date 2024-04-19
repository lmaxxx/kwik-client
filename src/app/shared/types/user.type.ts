import {Theme} from "./theme.type";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  language: string;
  theme: Theme;
  createdAt: Date;
  isActive: boolean;
}
