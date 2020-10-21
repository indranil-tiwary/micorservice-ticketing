import { Request, Response, Router } from 'express';

const router = Router();

router.get('/api/users/currentuser', (req: Request, res: Response) => {
  res.send('Hi There');
});

export { router as currentUserRouter };
