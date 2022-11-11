import React, { useState } from "react";

const MainDisplay = () => {
    const [view, setView] = useState("Overview");
    return (
        <div className="stack">
            <div className="tab-select">
                <button onClick={() => setView("Overview")}>Overview</button>
                <button onClick={() => setView("Weather")}>
                    Current Weather at Capitol
                </button>
                <button onClick={() => setView("Symbols")}>Symbols</button>
            </div>
        </div>
    );
};

export default MainDisplay;
