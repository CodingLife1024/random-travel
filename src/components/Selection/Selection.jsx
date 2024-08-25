import React, { useState } from "react";
import styles from "./Selection.module.css";

function Selection() {
    return (
        <>
            <div className={styles.identity}>
                <div className={styles.image}>
                    <input type="text" id="textbox" name="textbox"/>
                </div>
                <div className={styles.name}>
                    <input type="text" id="textbox" name="textbox"/></div>
                <div className={styles.username}>
                    <input type="text" id="textbox" name="textbox"/>
                </div>
                <div className={styles.age}>
                    <input type="text" id="textbox" name="textbox"/>
                </div>
                <div className={styles.sex}>
                    <input type="text" id="textbox" name="textbox"/>
                </div>
            </div>
            <div className={styles.identity}>
                <div className={styles.image}>
                    <input type="text" id="textbox" name="textbox"/>
                </div>
                <div className={styles.name}>
                    <input type="text" id="textbox" name="textbox"/>
                </div>
                <div className={styles.username}>
                    <input type="text" id="textbox" name="textbox"/>
                </div>
                <div className={styles.age}>
                    <input type="text" id="textbox" name="textbox"/>
                </div>
                <div className={styles.sex}>
                    <input type="text" id="textbox" name="textbox"/>
                </div>
            </div>
        </>
    );
}

export default Selection;