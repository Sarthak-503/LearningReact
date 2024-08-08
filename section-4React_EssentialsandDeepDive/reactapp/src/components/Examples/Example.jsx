import React, { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

const Example = () => {
  const [selectedTopic, setSelectedTopic] = useState();// initially no topic is selected
  let tabContent = <p>Please select a topic.</p>;

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      {/* Old Code-> for this to work comment the code in TabButton.jsx  */}
      {/* <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section> */}

      {/* when there are multiple props then they(for eg -> 'id' here) are not automatically forwarded to inner elements and set on that element automatically ,
 we developer have to manually set them one by one => Tidious work hence used forwarded props or proxy props. Useful if we are making a wrapper component like Section */}
      {/* <Section title="Examples" id="examples">
           <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              
              onClick={() => handleSelect('jsx')}      // Forwarding props to inner element in our custom component
            >
              JSX
           
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </Section> */}

      {/*multiple jsx slots  */}
       <Section title="Examples" id="examples">
        <Tabs
          buttonContainer="menu" // {Section} for custom component // passing component Identifier as a value for props
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleSelect("components")}   // passing an event function
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")} // Forwarding props to inner element in our custom component
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section> 
    </>
  );
};
// Jsx code/ Jsx Element are just values which we can use anywhere like passing it as props through buttons

export default Example;
