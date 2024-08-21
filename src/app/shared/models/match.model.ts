export interface ChatMessage {
  message: string;
  user: string;
}
export interface ListMatchResponse {
  code: number;
  path: string;
  success: boolean;
  data: Match[];
  isArray: boolean;
  ip: string;
  status: string;
}

export interface Match {
  id: string;
  ownId: string;
  opponentId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  users: User[];
  quotes: Quote[];
}

export interface Quote {
  id: string;
  matchId: string;
  content: string;
  author: string;
  length: number;
}

export interface User {
  uid: string;
  nickname: string;
}
