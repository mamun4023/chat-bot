
import React, { useState } from "react";
import { CONSTANT } from "../constants";
import Loader from '../components/Loader'
import axios from "axios";
import {useAddHistoryMutation, useMeQuery} from '../redux/API'


const BookSearch = () => {
    const [addHistory] = useAddHistoryMutation()
    const {refetch} = useMeQuery()
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY

    const searchBooks = async () => {
        setLoading(true)
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
            );
            setBooks(response.data.items);
            await addHistory({title : query})
            await refetch()
            setError("");
            setLoading(false)
        } catch (err) {
            setError("No Result");
            setLoading(false)
            setBooks([])
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        searchBooks();
    };


    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSearch} className="mb-4">
                <div className=" flex gap-2">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for books..."
                        className="input input-bordered w-full"
                    />
                    <button type="submit" className=" btn w-30">
                        {CONSTANT.SEARCH}
                    </button>
                </div>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            {loading && <Loader />}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map((book) => (
                    <div key={book.id} className="border p-4 rounded">
                        <h2 className="text-xl font-semibold">{book.volumeInfo.title}</h2>
                        <p className="text-gray-700">{book.volumeInfo.authors?.join(", ")}</p>
                        {book.volumeInfo.imageLinks?.thumbnail && (
                            <img
                                src={book.volumeInfo.imageLinks.thumbnail}
                                alt={book.volumeInfo.title}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookSearch;
