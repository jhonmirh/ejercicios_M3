import { NextFunction, Request, Response } from "express";
const auth = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;
  if (token=="xxx") {
    next()
  }else{
    res.status(400).json(
        {error:"falta información"}
    )
  }
  
};

export default auth;
