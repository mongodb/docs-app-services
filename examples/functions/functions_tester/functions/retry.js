async function retry({ fullDocument: logEntry }) {
  const { args, attemptNumber, functionName, operationId } = logEntry;
  context.functions.execute(functionName, ...args, attemptNumber, operationId);
}
