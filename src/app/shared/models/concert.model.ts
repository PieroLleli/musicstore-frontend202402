export interface Concert {
  id: number;
  title: string;
  description: string;
  place: string;
  unitPrice: number;
  genre: string;
  genreId: number;
  dateEvent: string;
  timeEvent: string;
  imageUrl: string;
  ticketsQuantity: number;
  finalized: boolean;
  status: string;
}
