import React from 'react'

// usefull for making wrapper component -> lets there are many components similar to tabs
const Section = ({title,children,...props}) => {
  return (
   <section {...props}>
    <h2>{title}</h2>
    {children}
   </section>
  )
}

export default Section;
