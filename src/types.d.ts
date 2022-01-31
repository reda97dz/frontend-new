declare module '*.png';
declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.ttf';
export interface Member {
  firstName: string;
  lastName: string;
  membershipNumber: string;
}

export type FetchError = {
  message: string;
};
