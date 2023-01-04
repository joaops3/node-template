import express from "express";

interface User {
  admin: boolean;
}

declare module "express-serve-static-core" {
  interface Request {
    user?: User;
  }
}
