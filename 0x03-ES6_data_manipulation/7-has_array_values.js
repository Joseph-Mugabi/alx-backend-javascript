export default function hasValuesFromArray(setobj, array) {
  const nset = new Set(array);
  let isSubSet = true;

  nset.forEach((value) => {
    if (!setobj.has(value)) {
      isSubSet = false;
    }
  });
  return isSubSet;
}
