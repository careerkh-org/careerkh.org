import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Link } from 'react-router-dom';
function SearchBar({ placeholder, data }) {
    const [ filteredData, setFilteredData ] = useState([]);
    const [ wordEntered, setWordEntered ] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.attributes.caption.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-start lg:pl-28">
            <div className="w-100 max-w-lg lg:max-w-xs">

                <div className="relative ">
                    <div className=" absolute inset-y-0 left-0 flex items-center pl-3">

                        {filteredData.length === 0 ? (
                            <MagnifyingGlassIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />) : (

                            <CloseIcon id="clearBtn" className="h-5 w-5 text-gray-400"
                                aria-hidden="true" onClick={clearInput} />

                        )}
                    </div>
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={wordEntered}
                        onChange={handleFilter}

                        className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-green-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
                    />

                </div>
                {filteredData.length != 0 && (
                    <div className="mt-1 bg-white overflow-auto overflow-y-auto block absolute z-10 shadow w-52 h-80">
                        {filteredData.slice(0, 15).map((value, key) => {
                            return (
                                
                                <a className="pl-2 w-full h-12 flex items-center  text-black hover:text-white hover:bg-primary_700 " >
                                    <Link to='/careersdetail'>
                                    <p>{value.attributes.caption} </p>
                                    </Link>
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;