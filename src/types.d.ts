declare module '*.png';
declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.ttf';

interface Borrow {
  id: number;
  book: number;
}
export interface Member {
  firstName: string;
  lastName: string;
  membershipNumber: string;
  id: string;
  active: Borrow[];
}

export type FetchError = {
  message: string;
};

export interface Book {
  id: string;
  title: string;
}
