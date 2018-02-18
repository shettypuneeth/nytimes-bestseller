// @flow

export function getCurrentYear(): number {
  const date = new Date();

  return date.getFullYear();
}

export function getCurrentMonth(): number {
  const date = new Date();

  return date.getMonth();
}

export function getCacheKey(year: number, month: number): string {
  return `${year}_${month}`;
}