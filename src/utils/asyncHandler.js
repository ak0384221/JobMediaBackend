function asyncHandler(fn) {
  return async function (req, res, next) {
    try {
      await fn(req, res, next);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        throw new Error(error.message);
      }
      console.log(error);
      return;
    }
  };
}

export { asyncHandler };
