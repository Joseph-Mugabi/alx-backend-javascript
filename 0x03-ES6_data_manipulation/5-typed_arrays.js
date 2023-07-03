export default function createInt8TypedArray(length, possition, value) {
  const array = new Int8Array(length);
  array[possition] = value;
  if (possition > length - 1) throw new Error('Position outside range');
  const view = new DataView(array.buffer);

  return view;
}
