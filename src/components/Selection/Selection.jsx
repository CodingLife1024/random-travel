import React, { useState } from "react";
import styles from "./Selection.module.css";

function Selection() {

    const minBudget = 0;
    const maxBudget = 1000000;
    const midBudget = 100000;

    const [sliderValue, setSliderValue] = useState(500); // Initialize at midpoint

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
        console.log("Slider value:", e.target.value);
    };

    const budget = (() => {
        if (sliderValue <= 500) {
            return Math.round(minBudget + (midBudget - minBudget) * (sliderValue / 500));
        } else {
            return Math.round(midBudget + (maxBudget - midBudget) * ((sliderValue - 500) / 500));
        }
    })();

    return (
        <>
            <div className={styles.identity}>
                <div className={styles.category}>
                    <div className={styles.title}>Name</div>
                    <div className={styles.container}>
                        <input type="text" id="name" className={styles.full} name="name"/>
                    </div>
                </div>
                <div className={styles.category}>
                    <div className={styles.title}>Email</div>
                    <div className={styles.container}>
                        <input type="email" id="email" className={styles.full} name="email"/>
                    </div>
                </div>
                <div className={styles.category}>
                    <div className={styles.title}>Age</div>
                    <div className={styles.container}>
                        <input type="number" id="age" className={styles.full} name="age"/>
                    </div>
                </div>
                <div className={styles.category}>
                    <div className={styles.title}>Sex</div>
                    <div className={styles.container}>
                        <div>
                            <input type="radio" id="male" name="sex" value="male"/>
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input type="radio" id="female" name="sex" value="female"/>
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.preferences}>
                <div className={styles.category}>
                    <div className={styles.title}>Budget</div>
                    <div className={styles.budgetContainer}>
                        <input
                            type="range"
                            id="budgetSlider"
                            name="budgetSlider"
                            min="0"
                            max="1000"
                            step="1"
                            value={sliderValue}
                            onChange={handleSliderChange}
                        />
                        <div className={styles.budgetTitle}>
                            Selected Budget: {new Intl.NumberFormat().format(budget)}
                        </div>
                    </div>
                </div>

                <div className={styles.category}>
                    <div className={styles.title}>Location Preferences</div>
                    <div className={styles.container}>
                        <div>
                            <input type="checkbox" id="beach" name="location" value="beach"/>
                            <label htmlFor="beach">Beaches</label>
                        </div>
                        <div>
                            <input type="checkbox" id="hill" name="location" value="hill"/>
                            <label htmlFor="hill">Hills</label>
                        </div>
                        <div>
                            <input type="checkbox" id="city" name="location" value="city"/>
                            <label htmlFor="city">Cities</label>
                        </div>
                        <div>
                            <input type="checkbox" id="forest" name="location" value="forest"/>
                            <label htmlFor="forest">Forests</label>
                        </div>
                        <div>
                            <input type="checkbox" id="desert" name="location" value="desert"/>
                            <label htmlFor="desert">Deserts</label>
                        </div>
                        <div>
                            <input type="checkbox" id="island" name="location" value="island"/>
                            <label htmlFor="island">Islands</label>
                        </div>
                    </div>
                </div>

                <div className={styles.category}>
                    <div className={styles.title}>Passport Status</div>
                    <div className={styles.container}>
                        <div>
                            <input type="radio" id="have_passport" name="passport_status" value="have_passport"/>
                            <label htmlFor="have_passport">Have a Passport</label>
                        </div>
                        <div>
                            <input type="radio" id="no_passport" name="passport_status" value="no_passport"/>
                            <label htmlFor="no_passport">Do Not Have a Passport</label>
                        </div>
                    </div>
                </div>

                <div className={styles.category}>
                    <div className={styles.title}>Accommodations</div>
                    <div className={styles.container}>
                        <div>
                            <input type="checkbox" id="hotel" name="accommodations" value="hotel"/>
                            <label htmlFor="hotel">Hotel</label>
                        </div>
                        <div>
                            <input type="checkbox" id="hostel" name="accommodations" value="hostel"/>
                            <label htmlFor="hostel">Hostel</label>
                        </div>
                        <div>
                            <input type="checkbox" id="guesthouse" name="accommodations" value="guesthouse"/>
                            <label htmlFor="guesthouse">Guesthouse</label>
                        </div>
                        <div>
                            <input type="checkbox" id="airbnb" name="accommodations" value="airbnb"/>
                            <label htmlFor="airbnb">Airbnb</label>
                        </div>
                        <div>
                            <input type="checkbox" id="camping" name="accommodations" value="camping"/>
                            <label htmlFor="camping">Camping</label>
                        </div>
                    </div>
                </div>

                <div className={styles.category}>
                    <div className={styles.title}>Transportation Preferences</div>
                    <div className={styles.container}>
                        <div>
                            <input type="checkbox" id="flight" name="transportation" value="flight"/>
                            <label htmlFor="flight">Flight</label>
                        </div>
                        <div>
                            <input type="checkbox" id="train" name="transportation" value="train"/>
                            <label htmlFor="train">Train</label>
                        </div>
                        <div>
                            <input type="checkbox" id="bus" name="transportation" value="bus"/>
                            <label htmlFor="bus">Bus</label>
                        </div>
                        <div>
                            <input type="checkbox" id="car" name="transportation" value="car"/>
                            <label htmlFor="car">Car</label>
                        </div>
                        <div>
                            <input type="checkbox" id="bike" name="transportation" value="bike"/>
                            <label htmlFor="bike">Bike</label>
                        </div>
                    </div>
                </div>

                <div className={styles.category}>
                    <div className={styles.title}>Preferred Activities</div>
                    <div className={styles.container}>
                        <div>
                            <input type="checkbox" id="hiking" name="activities" value="hiking"/>
                            <label htmlFor="hiking">Hiking</label>
                        </div>
                        <div>
                            <input type="checkbox" id="swimming" name="activities" value="swimming"/>
                            <label htmlFor="swimming">Swimming</label>
                        </div>
                        <div>
                            <input type="checkbox" id="sightseeing" name="activities" value="sightseeing"/>
                            <label htmlFor="sightseeing">Sightseeing</label>
                        </div>
                        <div>
                            <input type="checkbox" id="museum" name="activities" value="museum"/>
                            <label htmlFor="museum">Visiting Museums</label>
                        </div>
                        <div>
                            <input type="checkbox" id="adventure" name="activities" value="adventure"/>
                            <label htmlFor="adventure">Adventure Sports</label>
                        </div>
                        <div>
                            <input type="checkbox" id="relaxing" name="activities" value="relaxing"/>
                            <label htmlFor="relaxing">Relaxing</label>
                        </div>
                    </div>
                </div>

                <div className={styles.category}>
                    <div className={styles.title}>Vacation Length (in days)</div>
                    <div className={styles.container}>
                        <input type="number" id="vacation_min" className={styles.half} name="vacation_min" placeholder="Min days" /> <input type="number" id="vacation_max" className={styles.half} name="vacation_max" placeholder="Max days" />
                    </div>
                </div>

                <div className={styles.category}>
                    <div className={styles.title}>Travel Companions</div>
                    <div className={styles.container}>
                        <div>
                            <input type="radio" id="solo" name="companions" value="solo"/>
                            <label htmlFor="solo">Solo</label>
                        </div>
                        <div>
                            <input type="radio" id="family" name="companions" value="family"/>
                            <label htmlFor="family">Family</label>
                        </div>
                        <div>
                            <input type="radio" id="friends" name="companions" value="friends"/>
                            <label htmlFor="friends">Friends</label>
                        </div>
                        <div>
                            <input type="radio" id="partner" name="companions" value="partner"/>
                            <label htmlFor="partner">Partner</label>
                        </div>
                    </div>
                </div>

                <div className={styles.category}>
                    <div className={styles.title}>Climate Preferences</div>
                    <div className={styles.container}>
                        <div>
                            <input type="checkbox" id="tropical" name="climate" value="tropical"/>
                            <label htmlFor="tropical">Tropical</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cold" name="climate" value="cold"/>
                            <label htmlFor="cold">Cold</label>
                        </div>
                        <div>
                            <input type="checkbox" id="temperate" name="climate" value="temperate"/>
                            <label htmlFor="temperate">Temperate</label>
                        </div>
                        <div>
                            <input type="checkbox" id="dry" name="climate" value="dry"/>
                            <label htmlFor="dry">Dry</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Selection;
