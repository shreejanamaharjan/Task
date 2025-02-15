export interface IUser {
  username: string;
  email: string;
  password: string;
  slug: string;
  lastLogin: Date;
}

export interface IBrandResponse extends IUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
