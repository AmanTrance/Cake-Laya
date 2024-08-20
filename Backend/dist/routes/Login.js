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
const LoginRouter = express.Router();
LoginRouter.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield User.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if (result === null) {
            res.json({
                id: "Not Found",
                username: "Not Found"
            });
        }
        else {
            res.json({
                id: result._id,
                username: result.username
            });
        }
    }
    catch (e) {
        res.sendStatus(500);
    }
}));
export default LoginRouter;
