import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

// If filtered product array returns 0 return no products
// if user clicks listview display products in a list
// if user clicks gridview display products in a grid

const ProductList = () => {
	const { filtered_products: products, grid_view } = useFilterContext();
	if (products.length < 1) {
		return (
			<h5 style={{ textTransform: "none" }}>
				Sorry, no products matched your search...
			</h5>
		);
	}
	if (grid_view === false) {
		return <ListView products={products} />;
	}
	return <GridView products={products}>product list</GridView>;
};

export default ProductList;
