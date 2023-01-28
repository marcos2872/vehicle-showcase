import { Request, Response, NextFunction } from 'express';

function asyncError(err:any, _req: Request, res: Response, _next: NextFunction) {
  console.log(err);
  const { status, message } = err;
  res.status(status || 500).json({ message });
}

export default asyncError;
