import "./Search.css"

const Search = ({ searchQuery, setSearchQuery }) => {
    return (
        <input
            className="search-func"
            type="text"
            placeholder="Search Products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
};

export default Search;
