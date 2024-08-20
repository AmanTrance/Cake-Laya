var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import User from '../models/User.js';
const SignupRouter = express.Router();
SignupRouter.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield User.findOne({ email: req.body.email }).exec();
        if (result !== null) {
            res.sendStatus(409);
        }
        else {
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });
            try {
                yield user.save();
                res.sendStatus(201);
            }
            catch (e) {
                res.sendStatus(500);
            }
        }
    }
    catch (e) {
        res.sendStatus(500);
    }
}));
export default SignupRouter;
