import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

// if cart has nothing inside display its empty else use stripe component

const CheckoutPage = () => {
	const { cart } = useCartContext();
	return (
		<main>
			<PageHero title="checkout" />
			<Wrapper className="page">
				{cart.length < 1 ? (
					<div className="empty">
						<h2>your cart is empty</h2>
						<Link to="/products" className="btn">
							fill it
						</Link>
					</div>
				) : (
					<StripeCheckout />
				)}
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.div`
	.products {
		display: grid;
		gap: 3rem 1.5rem;
		margin: 4rem auto;
	}
	@media (min-width: 768px) {
		.products {
			grid-template-columns: 200px 1fr;
		}
	}
`;
export default CheckoutPage;
