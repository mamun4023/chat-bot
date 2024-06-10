import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../constants/route";
import { CONSTANT } from "../constants";
import { useSignUpMutation } from "../redux/API";
import Logo from "./Logo";

export default function SignUp() {
    const navigate = useNavigate();
    const [signUp, {isLoading}] = useSignUpMutation();
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUpHandler = async (e) => {
        e.preventDefault();

        const data = {
            name,
            email,
            password,
        };

        try {
            const resp = await signUp(data).unwrap();
            toast.success(resp?.data?.message);
            navigate(ROUTES.HOME);
        } catch (err) {
            toast.error(err?.data?.message);
        }
    };

    return (
        <div className=" h-screen flex justify-center  items-center">
            <div className="w-96 border-[1px] p-2 rounded-md  border-gray-200">
                <form onSubmit={signUpHandler}>
                    <div className="flex flex-col gap-4">
                        <div className=" mb-10">
                           <Logo />
                           <h1 className=" my-2 text-center text-[34px] text-neutral "> {CONSTANT.SIGNIN} </h1>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                required
                                className="input input-bordered input-primary w-full"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
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
                                <span className="loading loading-spinner loading-lg bg-success "></span>
                            ) : (
                                CONSTANT.SIGNUP
                            )}
                        </button>
                    </div>
                    <div className="my-2 text-[16px] mt-4">
                        <p className="text-primary">
                            {CONSTANT.DO_YOU_HAVE_AN_ACCOUNT}
                            <Link className=" underline pl-2" to={ROUTES.SIGNIN}>
                                {CONSTANT.SIGNIN}
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
