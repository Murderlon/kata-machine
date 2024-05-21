export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0; // inclusive
  let high = haystack.length; // exclusive

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const value = haystack[mid];

    if (value === needle) {
      return true;
    } else if (value > needle) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return false;
}
