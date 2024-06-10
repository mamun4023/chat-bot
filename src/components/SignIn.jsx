import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { ROUTES } from "../constants/route";
import { CONSTANT } from "../constants";
import { useSignInMutation } from "../redux/API";
import Logo from "./Logo";
import Cookies from "js-cookie";
import _ from 'lodash'

export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signIn, { isLoading }] = useSignInMutation();

    const signInHandler = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        };

        try {
            const resp = await signIn(data).unwrap();
            const token = resp?.authToken
            Cookies.set("authToken", token);
            navigate(ROUTES.HOME);
        } catch (err) {
            toast.error(err?.data?.message);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-96  p-2  rounded-md">
                <form onSubmit={signInHandler}>
                    <div className="flex flex-col gap-4">
                        <div className=" mb-10">
                            <Logo />
                            <h1 className=" my-2 text-center text-[34px] text-neutral ">
                                {" "}
                                {CONSTANT.SIGNIN}{" "}
                            </h1>
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                className="input input-bordered input-primary w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="input input-bordered input-primary w-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button className=" btn btn-primary text-white" disabled={isLoading}>
                            {isLoading ? (
                                <span className="loading loading-dots loading-lg bg-success "></span>
                            ) : (
                                CONSTANT.SIGNIN
                            )}
                        </button>
                    </div>
                    <div className="my-2 text-[16px]">
                        <p className="text-primary text-[14px] mt-4 ">
                            {CONSTANT.DONT_HAVE_ACCOUNT}
                            <Link className=" underline pl-2" to={ROUTES.SIGNUP}>
                                {CONSTANT.SIGNUP}
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
