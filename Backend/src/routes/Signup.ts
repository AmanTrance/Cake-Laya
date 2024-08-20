import express, { Request, Response, Router } from 'express';
import User from '../models/User.js';

const SignupRouter: Router = express.Router();

SignupRouter.post('/signup', async (req: Request, res: Response): Promise<any> => {
    try{
        const result =  await User.findOne({email: req.body.email}).exec();
        if(result !== null) {
            res.sendStatus(409);
        } else {
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
        
            try{
                await user.save();
                res.sendStatus(201);
            } catch(e) {
                res.sendStatus(500);
            }
        }
    } catch(e) {
        res.sendStatus(500);
    }
})

export default SignupRouter