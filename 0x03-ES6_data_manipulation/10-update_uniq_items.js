export default function updateUniqueItems(objMap) {
  if (!(objMap instanceof Map)) throw new Error('Cannot process');
  for (const [key, value] of objMap) {
    if (value === 1) {
      objMap.set(key, 100);
    }
  }
  return objMap;
}
