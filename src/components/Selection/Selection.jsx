import React, { useState } from "react";
import styles from "./Selection.module.css";

function Selection() {
    const [sliderValue, setSliderValue] = useState(500); // Midpoint for a 0-1000 slider

    const minBudget = 0;
    const maxBudget = 1000000;
    const midBudget = 100000; // Desired middle point of the exponential scale

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };

    // Exponential transformation
    const budget = Math.round(minBudget + ((maxBudget - minBudget) * (Math.pow(10, sliderValue / 1000) - 1) / 9));

    return (
        <>
            <div className={styles.identity}>
                <div className={styles.name}>
                    <div className={styles.title}>Name</div>
                    <input type="text" id="textbox" name="textbox"/></div>
                <div className={styles.username}>
                    <div className={styles.title}>Username</div>
                    <input type="text" id="textbox" name="textbox"/>
                </div>
                <div className={styles.age}>
                    <div className={styles.title}>Age</div>
                    <input type="text" id="textbox" name="textbox"/>
                </div>
                <div className={styles.sex}>
                    <div className={styles.title}>Sex</div>
                    <input type="text" id="textbox" name="textbox"/>
                </div>
            </div>
            <div className={styles.preferences}>
            <div className={styles.budget}>
                <div className={styles.title}>Budget</div>
                    <input
                        type="range"
                        id="budgetSlider"
                        name="budgetSlider"
                        min="0"
                        max="1000" // Use a range that makes calculations easier
                        step="1"
                        value={sliderValue}
                        onChange={handleSliderChange}
                    />
                    <div className={styles.title}>
                        Selected Budget: {new Intl.NumberFormat().format(budget)}
                    </div>
                </div>

                <div className={styles.location}>
                    <div className={styles.title}>Location Preferences</div>
                    <input type="text" id="textbox" name="textbox"/>
                </div>

                <div className={styles.passport_status}>
                    <div className={styles.title}>Passport Status</div>
                    <input type="text" id="textbox" name="textbox"/>
                </div>
                <div className={styles.sex}>
                    <div className={styles.title}>Sex</div>
                    <input type="text" id="textbox" name="textbox"/>
                </div>
            </div>
        </>
    );
}

export default Selection;