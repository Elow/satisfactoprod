export class Dashboard {
  name: string;
  in: number;
  out: number;
  rank: number;

  constructor(name: string, initem: number, outitem: number, rank: number) {
    this.name = name;
    this.in = initem;
    this.out = outitem;
    this.rank = rank;
  }
}
