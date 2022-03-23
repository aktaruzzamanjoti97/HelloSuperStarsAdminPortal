import React, { useState } from 'react';

const SouvenirTabPanel = (props) => {

    const [selectedTab, setSelectedTab] = useState({
        selected: props.selected || 0
    })


    const renderTab = (index) => {
        setSelectedTab({
            selected: index
        });
    }

    const renderMenu = () => {
        const panels = props.children;
        return panels.map((elem, index) => {
            let selectedStyle = index === selectedTab.selected ? " selected" : " ";
            let icon = elem.props.icon;
            let display = elem.props.hide;
            return display ? null : (
                <div
                    key={index}
                    className={"tab" + selectedStyle}
                    onClick={() => renderTab(index)}
                >
                    <span className="fw-bolder"> {elem.props.title}</span>
                    {icon ? <i className={icon + " tab__icon"} /> : null}
                </div>
            );
        });
    }

    const getSubTitle = () => {
        const subtitle = props.children[selectedTab.selected].props.subtitle;
        if (!subtitle) return null;

        return <h2 className="subtitle">{subtitle}</h2>;
    }

    return (
        <div>
            <ul className="tabs">{renderMenu()}</ul>
            <div className="tab__content">
                {/* {getSubTitle()} */}
                {props.children[selectedTab.selected]}
            </div>
        </div>
    );
};

export default SouvenirTabPanel; 