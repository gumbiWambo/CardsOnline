export class Card{
  type: string;
  kind: string | null;
  costs: number = 0;
  constructor(type?: string, kind?: string, costs?: number) {
    this.type = !!type ? type : '';
    this.kind = !!kind ? kind : null;
    this.costs = costs !== null && costs !== undefined ? costs : 0;
  }
}