import RobotImage from "../assets/robot.svg";

export const AuthLayout = ({ children }) => {
    return (
        <section className="h-screen grid grid-cols-1 md:grid-cols-12 ">
            <div className="col-span-4">{children}</div>
            <div className="col-span-8 invisible md:visible">
                <div className=" h-full ">
                    <img src={RobotImage} className=" w-full h-full object-cover " />
                </div>
            </div>
        </section>
    );
};
