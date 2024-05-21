export default function two_crystal_balls(breaks: boolean[]): number {
  let sqrt = Math.floor(Math.sqrt(breaks.length));
  let idx = sqrt;

  for (; idx < breaks.length; idx += sqrt) {
    if (breaks[idx]) {
      break;
    }
  }

  for (let i = idx - sqrt; i < idx; i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
