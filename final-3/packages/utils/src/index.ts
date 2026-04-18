export function fn() {
  return "Hello, tsdown!";
}

/**
 * returns a string that formates price for it
 *
 * @param value
 * @returns formattedPrice
 */
export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
