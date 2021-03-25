import React from 'react';
import { Grid } from '@material-ui/core';
import Product from '../Product/Product';
import  useStyles  from './productsStyle';


const Products = ({products, onAddToCart}) => {
  
  const classes = useStyles();

    return (
        <main className={classes.content}>
          <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.length && products.map((product) => 
                  <Grid item key={product.id} xs={12} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                  </Grid>
                )}
            </Grid>
        </main>
    )
}

export default Products;