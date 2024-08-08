// we won't get an identifier if passing just 'handleSelect', here we are passing an Event function contains argument
export default function TabButton(
  // {children, onSelect, isSelected}
  { children, isSelected, ...props}

) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (

    <li>
         {/* <button className={isSelected?'active':undefined} onClick={onSelect}>{children}</button> */}
      <button className={isSelected ? 'active' : undefined}  {...props} >
        {children}
      </button>
    </li>
  );
}
