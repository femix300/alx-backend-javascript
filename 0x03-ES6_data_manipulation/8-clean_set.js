export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter((element) => typeof element === 'string' && element.startsWith(startString))
    .map((element) => element.substring(startString.length))
    .join('-');
}
