import { Fragment, useState } from "react";

// { items: string[], heading: string}

function ListGroup({items, heading, onSelectItem}) {

    

    //Hook

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const message = items.length === 0 ? <p>No items</p> : null;
    const message2 = items.length === 0 && <p>No items</p>;

    //event handler
    const handleclick = (event) => console.log(event.target.innerText);

  return (
    <>
        <h1>{heading}</h1>
        {message}
        {message2}
        <ul className="list-group">
            {items.map((item, index) => 
                <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
            key={item} 
            onClick= {() => { setSelectedIndex(index);
                onSelectItem(item);
            }}> {item} </li>)}
        </ul>
    </>
  );
}

export default ListGroup;
