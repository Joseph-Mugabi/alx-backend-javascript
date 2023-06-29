export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const calculate = mathFunction();
    queue.push(calculate);
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}