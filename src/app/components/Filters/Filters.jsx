
const Filters = ({
    products,
    selectedBrand,
    setSelectedBrand,
    selectedRating,
    setSelectedRating,
    selectedPrice,
    setSelectedPrice,
    resetFilters,
}) => {
    const brandOptions = Array.from(new Set(products.map(product => product.brand)));
    const priceOptions = [
        { value: 0, label: "Any Price" },
        { value: 100, label: "$100 or less" },
        { value: 200, label: "$200 or less" },
        { value: 300, label: "$300 or less" },
        { value: 400, label: "$400 or less" },
        { value: 500, label: "$500 or less" },
        { value: 600, label: "$600 or less" },
        { value: 700, label: "$700 or less" },
        { value: 800, label: "$800 or less" },
        { value: 900, label: "$900 or less" },
        { value: 1000, label: "$1000 or less" },
    ];

    return (
        <div className="filters">
            <div className="filters_wrapper">
                {/* Brand Filter */}
                <select
                    value={selectedBrand || ""}
                    onChange={(e) => setSelectedBrand(e.target.value || null)}
                >
                    <option value="">Filter by Brand</option>
                    {brandOptions.map(brand => (
                        <option key={brand} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>

                {/* Rating Filter */}
                <select
                    value={selectedRating || ""}
                    onChange={(e) => setSelectedRating(Number(e.target.value) || null)}
                >
                    <option value="">Filter by Rating</option>
                    <option value={5}>5+</option>
                    <option value={4}>4+</option>
                    <option value={3}>3+</option>
                </select>

                {/* Price Filter */}
                <select
                    value={selectedPrice || ""}
                    onChange={(e) => setSelectedPrice(Number(e.target.value) || null)}
                >
                    <option value="">Filter by Price</option>
                    {priceOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                {/* <Order sortOrder={sortOrder} setSortOrder={setSortOrder} /> */}

                <button onClick={() => resetFilters()}>Reset Filters</button>
            </div>
        </div>
    );
};

export default Filters;