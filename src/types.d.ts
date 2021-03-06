/* eslint-disable camelcase */
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
  id: string;
  firstName: string;
  lastName: string;
  membershipNumber: string;
  active: Borrow[];
}

export type FetchError = {
  message: string;
};

export interface Book {
  id: number;
  isbn: string;
  title: string;
  author: string;
  year: string;
  bar_code: number;
  available: boolean;
  length: string;
  Category: {
    name: string;
  };
}

export interface Issue {
  books: string;
  date_issued: string;
  date_due_for_return: string;
  date_returned: string | null;
  member_id: number;
}

export interface MemberIssue {
  id: number;
  first_name: string;
  last_name: string;
  birthday: string;
  phone_number: string;
  email: string;
  membership_number: string;
  membership_start: string;
  membership_end: string;
  Issues: Issue[];
}

export interface IssuesItem extends Issue {
  id: number;
  Member: {
    first_name: string;
    last_name: string;
    membership_number: string;
    phone_number: string;
    email: string;
  };
}
