async function handleRetry(
  functionToRetry,
  functionName,
  operationId,
  previousRetries,
  ...args
) {
  try {
    // Try to execute the main function
    const response = await functionToRetry(...args);
    return response;
  } catch (err) {
    // Evaluates if should retry function again.
    // If no retry, throws error and stops retrying.
    const maxRetries = context.values.get("MAX_FUNC_RETRIES");
    if (previousRetries === maxRetries) {
      throw new Error(
        `Maximum number of attempts reached (${maxRetries}) for function '${functionName}': ${err.message}`
      );
    }

    // Build function execution log entry for insertion into database.
    const logEntry = {
      operationId,
      errorMessage: err.message,
      timestamp: Date.now(),
      retries: previousRetries + 1,
      args,
      functionName,
    };

    // Get reference to database collection
    const executionLog = await context.services
      .get("mongodb-atlas")
      .db("experimental")
      .collection("failed_execution_logs");

    // Add execution log entry to database
    executionLog.insertOne(logEntry);
  }
}

exports = handleRetry;
