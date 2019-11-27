import React from 'react';

export default function Tab({tabItems, activeTab, setActiveTab, children}) {
    return (
        <>
            <div className="tabs">
                { tabItems.map(tab => 
                    <button 
                        key={tab} 
                        className={`tab ${activeTab === tab ? "activeTab" : "" }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>) 
                }
            </div>
            <div className="tabContent">
                { children }
            </div>
        </>
    )
}