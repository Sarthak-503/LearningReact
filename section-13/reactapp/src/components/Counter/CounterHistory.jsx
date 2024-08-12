import { Component, useState } from 'react';

import { log } from '../../log.js';

function HistoryItem({ count }) {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
}

export default function CounterHistory({ history }) {
  log('<CounterHistory /> rendered', 2);

  return (
    <ol>
      {/* setting key to index of the count value here and that index is in the end not a value
      that's strictly mapped to a specific count value. Instead, the index always stays the same.
      The index of this item here will always be zero. The index of this item here will always be one.
      But if I add a new value here to my list of changes, then of course those keys haven't changed.
      But the values that belong to those keys haveand that's the problem with using index as a key value.
      And that's why you typically shouldn't do thatand why you instead should try to use a key value
      that is strictly connected to a specific value.
      
      Disadvantage-2 
      Every time I click a button then all list items change.They all flash, which means they all change,
      They all are touched by React. bcz React creates these DOM snapshots,it sees that in the end it now has a totally different
      HTML code that should be rendered because a new item was added here.
      And it therefore basically throws away the old list and re-renders the new list because everything changed.
      And it's therefore able to reuse those old DOM elements
      Using new key => instead of recreating them,it just inserts a new element in front of them.
      And therefore, using such a key does not just help with state management, as shown in the previous lecture.
      Instead, it also helps React render such lists  in a more optimal way.
      */}
      {/* {history.map((count, index) => (
        <HistoryItem key={index} count={count} />
      ))} */}
      {/* state here tied to a concrete instances */}
      {history.map((count) => (
        <HistoryItem key={count.id} count={count.value} />
      ))}

    </ol>
  );
}
//state belongs to concrete component instances, how can it jump across component instances? The position of this Component in the Component tree. React tracks state by component type(HistoryItem) & position(of that component)
// in the tree.Because this is a problem that typically only occurs in lists like this because it can only occur
//if you have sibling components that are of the same type  and the number or position of those components may change.
// there you given wrong key