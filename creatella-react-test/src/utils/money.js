//Format number from cents to money.
 
export const fromCents = number => {
  return (number / 100).toFixed(2)
}
