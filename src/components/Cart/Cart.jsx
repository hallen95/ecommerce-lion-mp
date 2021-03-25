import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom'
const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    
    const classes = useStyles();
    const EmptyCart = () => (
        <Typography variant="subtitle1">No tienes nada en tu carrito aun!
            <Link to="/" className={classes.link}>Vuelve para agregar algo!</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid  item xs={12} sm={4} key={item.id}>
                    <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart}/>
                </Grid>
            ))}
                <div className={classes.cardDetails}>
                    <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
                </div>
        </Grid>
        </>
    )

    if(!cart.line_items) return 'loading...';

    return (
        <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom>Tu carrito</Typography>
        { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
