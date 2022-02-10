
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {

    const products = useSelector(state => state.allProducts.products);
    const renderList = products.map(product => {
        const { id, title, image, price, category } = product;
        return (
            <div className="col-lg-4 d-flex align-items-stretch" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="card">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            position: 'absolute',
                            right: '0'
                        }
                        }>
                            <span className="badge rounded-pill bg-danger"> {category} </span>
                        </div>
                        <img src={image} className="card-img-top img-thumbnail" alt={title} />
                        <div className="card-body">
                            <h5 className="card-title">{title}  </h5>
                            <p className="card-text">$ {price}</p>
                            <p className="card-text"><small className="text-muted">{category}</small></p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <>
            {renderList}
        </>


    )
}

export default ProductComponent;