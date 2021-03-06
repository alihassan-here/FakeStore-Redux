import { useEffect } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, fetchProduct, removeSelectedProduct } from "../redux/actions/productActions";
import { Oval, Plane } from 'react-loader-spinner';
import '../../node_modules/react-loader-spinner/dist/loader/css/Plane.css';


const ProductDetail = () => {

    const product = useSelector(state => state.product);
    const { image, title, price, category, description } = product;

    const { productId } = useParams();
    const dispatch = useDispatch();

    // const fetchProductDetail = async () => {
    //     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
    //         console.log(err);
    //     });
    //     dispatch(selectedProduct(response.data));
    // }
    useEffect(() => {
        if (productId && productId !== '') {
            dispatch(fetchProduct(productId));
            // fetchProductDetail();
        }
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId])

    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div style={{ marginTop: '250px', marginLeft: '500px' }}>
                    {/* <Oval
                        ariaLabel="loading-indicator"
                        height={100}
                        width={100}
                        strokeWidth={5}
                        color="red"
                        secondaryColor="yellow"
                    /> */}
                    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            ) : (
                <div className="ui segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} alt={title} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetail;