import { Response } from './response.model';

export interface ChatMessage {
  message: string;
  user: string;
}
export interface ListMatchResponse extends Response<Match[]> {
  data: Match[];
}

export interface GetMatchResponse extends Response<Match> {
  data: Match;
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
