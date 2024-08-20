import express, { Request, Response, Router } from 'express';
import User from '../models/User.js';

const LoginRouter: Router = express.Router();

LoginRouter.post('/login', async (req: Request, res: Response): Promise<any> => {
    try {
        const result = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        if(result === null){
            res.json({
                id: "Not Found",
                username: "Not Found"
            })
        } else {
            res.json({
                id: result._id,
                username: result.username
            })
        }
    } catch(e) {
        res.sendStatus(500);
    }
})

export default LoginRouter;