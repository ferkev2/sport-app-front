export interface Iplayer {
  _id: string;
  name: string;
  position: string;
  thumbnail: string;
  signin: {
    amount: number;
    currency: string;
  };
  born: Date;
}

export interface IdataTeam {
  playerList: Iplayer[];
  team: string;
}
