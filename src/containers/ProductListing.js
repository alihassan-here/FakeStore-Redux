import axios from "axios";
import { useEffect } from "react";
import ProductComponent from "./ProductComponent";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../redux/actions/productActions';


const ProductListing = () => {

    const products = useSelector(state => state);
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch(err => {
            console.log(err);
        });
        dispatch(setProducts(response.data));
    }


    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <ProductComponent />
            </div>
        </div>

    )
}

export default ProductListing;