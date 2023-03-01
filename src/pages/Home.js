import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0, 8);
    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    }, []);
    return (
        <div>
            <Carousel autoPlay axis="horizontal" infiniteLoop>
            <div>
            <img src="https://res.cloudinary.com/tanu1616/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1675693369/c3wmmtabugkusxw3lz2x.jpg" className="home-banner" alt=""/>
            </div>
            <div>
            <img src="https://res.cloudinary.com/tanu1616/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1675696852/jd6dfn9w3k40fbvrypwn.jpg" className="home-banner" alt=""/>
            </div>
            <div>
            <img src="https://res.cloudinary.com/tanu1616/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1675696705/fglw348hdbxpojfmyhhf.webp" className="home-banner" alt=""/>
            </div>
            <div>
            <img src="https://res.cloudinary.com/tanu1616/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1675696908/t46ptdc8mktd4kc4j4kf.jpg" className="home-banner" alt=""/>
            </div>
            </Carousel>
            <div className="featured-products-container container mt-4">
                <h2>Last products</h2>
                {/* last products here */}
                <div className="d-flex justify-content-center flex-wrap">
                    {lastProducts.map((product) => (
                        <ProductPreview {...product} />
               
                    ))}
                </div>
                <div>
              
                    <Link to="/category/all" style={{ textAlign: "right", display: "block", textDecoration: "none" }}>
                        See more {">>"}
                    </Link>
                </div>
            </div>
            {/* sale banner */}
            <div className="sale__banner--container mt-4">
                <img src="https://res.cloudinary.com/tanu1616/image/upload/v1675679252/cgkn44qwrcytfnuiftgq.jpg" alt="" />
            </div>
            <div className="recent-products-container container mt-4">
                <h2>Categories</h2>
                <Row>
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Home;
