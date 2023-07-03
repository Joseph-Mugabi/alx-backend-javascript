export default function cleanSet(set, startString) {
  let object = '';

  if (
    typeof set !== 'object' || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }
  const newSet = new Set();
  const strLength = startString.length;

  for (const elemnt of set) {
    if (
      elemnt && elemnt.startsWith(startString)
    ) {
      newSet.add(elemnt.slice(strLength));
    }
  }
  object = [...newSet].join('-');
  return object;
}
