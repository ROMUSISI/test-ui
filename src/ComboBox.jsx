import React, { useState } from "react";
import './ComboBox.css';

const ComboBox = ({ placeHolder, options, optionKeyLabel }) => {
    const [listOpen, setListOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [optionsArray, setOptionsArray] = useState(options);
    const [selectedValue, setSelectedValue] = useState('');
    const [focusOnList, setFocusOnList] = useState (true);

    const handleShowDropDown = () => {
        setListOpen(!listOpen);
        setFocusOnList (true);
    };

    const handleOnChange = (event) => {

        const myValue = event.target.value;

        setQuery(myValue);

        // If input is empty, reset optionsArray to the full options list
        if (myValue === '') {
            setOptionsArray(options);
        } else {
            // Filter options based on input
            const filteredOptions = options.filter(option =>
                option[optionKeyLabel].toLowerCase().includes(myValue.toLowerCase())
            );
            setOptionsArray(filteredOptions);
            setListOpen(listOpen);
        }
    };

    const handleOnClickList = (index) => {
        const selectedItemArray = optionsArray.filter (item => item.id === index);
        const selectedObject = selectedItemArray[0];
        setQuery(selectedObject.name);
        setListOpen (false);

    }

    const handleOnBlur = () => {
        setTimeout (() => {
            setFocusOnList (false);
        }, 200)
    }

    return (
        <div className="combo-div">
            <div className="input-div">
                <input
                    type="text"
                    placeholder={placeHolder}
                    value={query}
                    onChange={handleOnChange}
                    onBlur={() =>handleOnBlur()}
                    onClick={handleShowDropDown}
                />
            </div>
            {listOpen && (
                <div className={`drop-list-div ${!focusOnList ? 'hidden' : ''}`} >
                    {optionsArray.length > 0 ? (
                        optionsArray.map((option) => (
                            <li key={option.id} onClick={()=> handleOnClickList(option.id)}>{option[optionKeyLabel]}</li>
                        ))
                    ) : (
                        <li>No options found</li>
                    )}
                </div>
            )}
        </div>
    );
};

export default ComboBox;