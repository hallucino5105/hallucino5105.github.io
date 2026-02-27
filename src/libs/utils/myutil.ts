export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function randstr(n: number) {
  const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(Array(n))
    .map(() => S[Math.floor(Math.random() * S.length)])
    .join("");
}

export function toBoolean(value: string) {
  switch (value.toLowerCase()) {
    case "true":
      return true;
    case "false":
    case null:
    case undefined:
    default:
      return false;
  }
}

export function floorDecimal(value: number, n: number) {
  return Math.floor(value * Math.pow(10, n)) / Math.pow(10, n);
}

export function ceilDecimal(value: number, n: number) {
  return Math.ceil(value * Math.pow(10, n)) / Math.pow(10, n);
}

export function roundDecimal(value: number, n: number) {
  return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
}

