import React, {useEffect, useState} from 'react';
import "../../styles/Specials.css";
import SpecialsCard from './SpecialsCard';
import fakeApi from "../../utils/api";

const fetchCurrentSpecials = async () => {
    try {
        const response = await fakeApi.get();
        return response?.data;
    } catch (e) {
        console.error(e);
    }
}

const Specials = () => {
    const [specials, setSpecials] = useState();

    useEffect(() => {
        const fetchSpecials = async () => {
            const response = await fetchCurrentSpecials();
            setSpecials(response);
        }

        fetchSpecials();

    });

    if (specials) {
        return (
            <section className="specials-section-container">
                <div className="specials-section-title">
                    <h1>This Week's Specials</h1>
                </div>

                <div className="special-card">
                    {specials?.map((special, index) => {
                        return (
                            <SpecialsCard
                                key={index}
                                image={special.image}
                                title={special.title}
                                price={special.price}
                                description={special.description}
                                order={special.order}
                            />
                        )
                    })}
                </div>
            </section>
        )
    } else {
        return (
            <div className="loading-container">
                <h5>Loading...</h5>
            </div>
        )
    }
}

export default Specials
