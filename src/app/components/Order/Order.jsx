const Order = ({ sortOrder, setSortOrder }) => {
    return (
        <div className="order">
            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
            >
                <option value="default">Default Order</option>
                <option value="title">Title A-Z</option>
                <option value="price_asc">Price Low to High</option>
                <option value="price_desc">Price High to Low</option>
                <option value="rating">Rating High to Low</option>
            </select>
        </div>
    );
};

export default Order;