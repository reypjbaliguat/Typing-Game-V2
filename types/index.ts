export interface User {
  id: string;
  email: string;
  image: string;
  name: string;
  token: string;
}

export interface Score {
  user_id: string;
  speed: number;
  email: string;
}
