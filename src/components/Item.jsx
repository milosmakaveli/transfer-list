import './Item.css'

export default function Item({label, id, onCheckedChanged, checked}){

    const handleChange = e => {
        onCheckedChanged(id, e.target.checked)
    }

    return (
        <li className="item">
            <label className="item-label">
                <input type="checkbox" checked={checked} onChange={handleChange} />
                {label}
            </label>
        </li>
    )
}