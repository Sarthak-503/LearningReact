export default function TabButton ({children, onSelect, isSelected}) {
  
    return (
        <li>
            {/* onClick =>Props/attribute here */}
            {/* Here we are using fn as a value to onclick prop */}
            {/* if we use handleClick(), then handleClick() executed when button rendered into screen */}
            <button className={isSelected?'active':undefined} onClick={onSelect}>{children}</button>
                                                    {/*  undefined or '' */}
        </li>
    )
}

 