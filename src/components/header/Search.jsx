import SearchIcon from '../../assets/icons/search.svg'

const Search = () => {
    return (
        <button className="lg:flex hidden h-8 rounded-full pl-2 pr-3 items-center w-full gap-2 bg-white text-zinc-500 ring-1 ring-zinc-900/10 transition">
            <img
                src={SearchIcon}
                alt="search icon"
                className=" h-6 w-6"
            />
            <input
                type="text"
                placeholder="search"
                className="flex-1 focus:outline-none focus:border-none"
            />
            <kbd className="ml-auto w-auto text-2xs text-zinc-400">
                <kbd>ctrl</kbd>
                <kbd>k</kbd>
            </kbd>
        </button>
    );
};

export default Search;