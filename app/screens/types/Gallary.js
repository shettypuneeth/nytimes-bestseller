// @flow
export type People = {
  role: string,
  name: string
};
export type ArtworkType = {
  objectid: string,
  century?: string,
  labelText: string,
  culture: string,
  dated: string,
  classification: string,
  primaryimageurl: string,
  people: Array<People>,
  medium?: string,
  title: string
};