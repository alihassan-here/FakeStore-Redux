// import axios from "axios";
import { useEffect, useState } from "react";
import ProductComponent from "./ProductComponent";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { setProducts, fetchProducts } from '../redux/actions/productActions';
import { CradleLoader } from 'react-loader-spinner';
import '../../node_modules/react-loader-spinner/dist/loader/css/Plane.css';


const ProductListing = () => {

    const products = useSelector(state => state);
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(true);

    // const fetchProducts = async () => {
    //     const response = await axios.get("https://fakestoreapi.com/products").catch(err => {
    //         console.log(err);
    //     });
    //     dispatch(setProducts(response.data));
    // }


    useEffect(() => {
        dispatch(fetchProducts());
        setLoader(false);
        // fetchProducts();
    }, [])

    return (
        <>
            {loader ? (
                <div style={{ marginTop: '250px', marginLeft: '500px' }}>
                    <CradleLoader ariaLabel="loading-indicator" />
                </div>) : (
                <div className="container">
                    <div className="row" style={{ marginTop: '100px' }}>
                        <ProductComponent />
                    </div>
                </div>
            )
            }
        </>

    )
}

export default ProductListing;