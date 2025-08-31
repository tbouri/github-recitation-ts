// src/fibRoute.ts
import fibonacci from "./fib"; // matches the default export

// Example: if using Express
import { Request, Response } from "express";

export default (req: Request, res: Response) => {
    const { num } = req.params;

    const n = parseInt(num);
    const fibN = fibonacci(n);

    res.send(`fibonacci(${n}) is ${fibN}`);
};
