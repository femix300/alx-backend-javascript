export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const res = mathFunction();
    queue.push(res);
  } catch (error) {
    queue.push(error);
  }
  queue.push('Guardrail was processed');
  return queue;
}
