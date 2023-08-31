import express, { Request, Response, NextFunction } from 'express';

function authenticate (req: Request, res: Response, next: NextFunction) {
  const isAuthenticate = true; // simulate authentication logic
  console.log('authenticate');

  if(!isAuthenticate) {
    res.status(401).send("Unauthorized");
  }
  next();
}

export default authenticate;