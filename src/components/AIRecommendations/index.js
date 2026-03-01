import React from 'react';
import Cookies from "js-cookie"

import "./index.css"
import {
    useEffect, useState
} from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
      dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
};

        const AIRecommendations = () => {
            const [recommendations, setRec] = useState([]);
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState("");

            useEffect(() => {
                const fetchRecommendations = async () => {
                    setLoading(true);
                    setError("");
                    try {
                        const lastItem = JSON.parse(localStorage.getItem("recentlyViewed"));
                        if (!lastItem || !lastItem.imageUrl) {
                            setLoading(false);
                            return;
                        }
                        let newIndex = "";
                        try {
                            const index = lastItem.imageUrl.split("/");
                            newIndex = index[index.length - 1].split("-")[0];
                        } catch {
                            setLoading(false);
                            return;
                        }
                        const jwtToken = Cookies.get("jwt_token");
                        const options = {
                            method: "GET",
                            headers: {
                                Authorization: `Bearer ${jwtToken}`,
                            },
                        };
                        const results = await fetch("https://apis.ccbp.in/products/", options);
                        if (!results.ok) throw new Error("Failed to fetch recommendations");
                        const data = await results.json();
                        const filtered = data.products.filter((e) => e.image_url.includes(newIndex));
                        setRec(filtered);
                    } catch (err) {
                        setError("Unable to load recommendations. Please try again later.");
                    } finally {
                        setLoading(false);
                    }
                };
                fetchRecommendations();
            }, []);

            return (
                <div className="ai-recommendations">
                    <h2>Recommended for You</h2>
                    <div className="recommende-list">
                        {loading ? (
                            <div style={{ padding: "2rem", textAlign: "center" }}>
                                <span className="loader" /> Loading recommendations...
                            </div>
                        ) : error ? (
                            <div style={{ color: "#d32f2f", textAlign: "center", padding: "2rem" }}>{error}</div>
                        ) : (
                            <Slider className="slider" {...settings}>
                                {recommendations.length === 0 ? (
                                    <div style={{ padding: "2rem", textAlign: "center" }}>No recommendations yet.</div>
                                ) : (
                                    recommendations.map((item) => (
                                        <div key={item.id} className="recent-item">
                                            <img src={item.image_url} alt={item.title} width={120} height={120} />
                                            <div style={{ marginTop: "0.5rem", fontWeight: "bold" }}>{item.title}</div>
                                            <div style={{ color: "#666", fontSize: "0.95rem", marginTop: "0.25rem" }}>{item.brand}</div>
                                            <div style={{ color: "#1976d2", fontWeight: "bold", marginTop: "0.25rem" }}>
                                                ₹{item.price}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </Slider>
                        )}
                    </div>
                </div>
            );
        };

        export default AIRecommendations
