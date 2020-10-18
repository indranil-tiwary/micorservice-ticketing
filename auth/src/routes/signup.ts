import { Router } from 'express';
import { body } from 'express-validator';

const router = Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Please enter a valid email.'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  (req, res) => {
    res.send('Hello');
  }
);

export { router as signupRouter };
