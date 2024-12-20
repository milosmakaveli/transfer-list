import { useState } from "react"
import './DoubleList.css'
import { items } from "../data";
import Item from "./Item";


export default function DoubleList() {
    const [checkedIDs, setCheckedIDs] = useState([]);
    const [sides, setSides] = useState([]);

    const onCheckedChanged = (id, isChecked) => {
        setCheckedIDs(prevCheckedIDs => {
            if (isChecked) {
                return prevCheckedIDs.includes(id) ? prevCheckedIDs : [...prevCheckedIDs, id]
            } else {
                return prevCheckedIDs.filter((idx) => idx !== id)
            }
        })
    }

    const moveToSide = side => {
        if (checkedIDs.length === 0) return;
        setSides(prevSides => {
            const updatedSides = [...prevSides];
            checkedIDs.forEach(id => {
                updatedSides[id] = side
            })
            return updatedSides
        })
        setCheckedIDs([]);
    }



    return (
        <div className="double-list">
            <ul className="list-left">
                {items.map((item, id) => (
                    !sides[id] && (
                        <Item
                            key={id}
                            id={id}
                            label={item}
                            checked={checkedIDs.includes(id)}
                            onCheckedChanged={onCheckedChanged}
                        />
                    )
                ))}
            </ul>
            <div className="button-container">
                <button className="button" onClick={() => moveToSide(false)}>&lt;</button>
                <button className="button" onClick={() => moveToSide(true)}>&gt;</button>
            </div>
            <ul className="list-left">
                {items.map((item, id) => (
                    sides[id] && (
                        <Item
                            key={id}
                            id={id}
                            label={item}
                            checked={checkedIDs.includes(id)}
                            onCheckedChanged={onCheckedChanged}
                        />
                    )
                ))}
            </ul>

        </div>
    )
}
