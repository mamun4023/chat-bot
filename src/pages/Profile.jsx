import React from "react";
import Navbar from "../components/Navbar";
import { useMeQuery } from "../redux/API";

export default function Profile() {
    const { data } = useMeQuery();
    return (
        <section className="max-w-5xl mx-auto p-4">
            <Navbar />

            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
                    <div className="flex items-center justify-center">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            {data?.data?.firstName + " " + data?.data?.lastName}{" "}
                        </h2>
                        <p className="text-gray-600 mt-2">Software Engineer at XYZ</p>
                        <p className="text-gray-600 mt-2">
                            Passionate about technology and coding. Loves to explore new tech trends
                            and work on exciting projects.
                        </p>
                        <div className="mt-4 flex justify-center space-x-4">
                            <a
                                href="https://twitter.com"
                                className="text-blue-500 hover:text-blue-700"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.59.59-2.46.69a4.27 4.27 0 0 0 1.88-2.34 8.56 8.56 0 0 1-2.73 1.04A4.23 4.23 0 0 0 15.5 4a4.23 4.23 0 0 0-4.22 4.23c0 .33.04.65.1.96A12.03 12.03 0 0 1 2.5 4.98a4.22 4.22 0 0 0-.57 2.13 4.23 4.23 0 0 0 1.88 3.52 4.18 4.18 0 0 1-1.91-.53v.06c0 2.04 1.46 3.74 3.4 4.13a4.24 4.24 0 0 1-1.9.07c.53 1.65 2.07 2.86 3.9 2.89A8.52 8.52 0 0 1 2 19.54a12.03 12.03 0 0 0 6.53 1.92c7.84 0 12.13-6.5 12.13-12.13 0-.18 0-.35-.01-.53a8.64 8.64 0 0 0 2.12-2.2z" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com"
                                className="text-gray-900 hover:text-gray-700"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.8-4-.8-4-1.8 0-1 .6-1.7 1.5-2-.4-1-.1-2.3.2-2.6 1.8 0 3.2 1.5 3.2 3.3 0 1.2.7 2.3 1.7 2.6.7-.6 1.5-1.3 2.3-1.8-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.4 1.3-3.3-.1-.3-.6-1.7.1-3.5 0 0 1-.3 3.2 1.2a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.7 1.8.2 3.2.1 3.5.8.9 1.3 2 1.3 3.3 0 4.7-2.8 5.8-5.5 6.1.8.7 1.6 2 1.6 4.1v5.9c0 .3.2.7.8.6A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com"
                                className="text-blue-700 hover:text-blue-900"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.45 2H3.55A1.56 1.56 0 0 0 2 3.56V20.4a1.56 1.56 0 0 0 1.56 1.56H20.4a1.56 1.56 0 0 0 1.56-1.56V3.56A1.56 1.56 0 0 0 20.4 2zm-11 16.6H6.6V10.1H9.5v8.5zm-1.4-9.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM18 18.6h-2.9v-4.2c0-1-.3-1.7-1.2-1.7-.6 0-1 .4-1.1 1-.1.3-.1.5-.1.8v4.2h-2.9V10.1h2.9v1.2c.4-.7 1.1-1.7 2.7-1.7 1.9 0 3.3 1.2 3.3 3.8v5.3z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
