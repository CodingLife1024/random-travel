import React, { useState } from "react";
import styles from "./Selection.module.css";

function Selection() {
    return (
        <>
        <div className={styles.left}>
            <div className={styles.title}>Select Dates</div>
            <div className={styles.subtitle}>Click on a date to select or deselect it</div>
            <div className={styles.subtitle}>Selected dates will be highlighted</div>
        </div>
        <div className={styles.right}>
            <div className={styles.title}>Selected Dates</div>
            <div className={styles.subtitle}>Dates you have selected will appear here</div>
        </div>
        </>
    );
}

export default Selection;