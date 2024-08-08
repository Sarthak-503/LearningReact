// import componentsImg from './assets/components.png';
// starting with use=> React Hooks (used inside react comp fn or another react Hooks(custom react Hooks))
import { useState } from 'react';
import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from './data-with-examples.js';
function App() {


  // Can't use regular variable to re-render it 
  let tabContent = 'Please click a button'; 
  
  // setSelectedTopic re-renders this component and change the value(can't be initialised inside nested function)
  const [selectedTopic,setSelectedTopic] = useState('Please click a button');
  const [selectedTopic1,setSelectedTopic1] = useState();


  function handleSelect(selectedButton) {
    // selectedButton =>'comonents', ' jsx' , 'props', 'state'
    // console.log(selectedButton);

    // tabContent=selectedButton;
    setSelectedTopic(selectedButton);
    setSelectedTopic1(selectedButton);

    console.log(selectedTopic);
    // When you call setSelectedTopic fn here,React in the end schedules, this state update and it then re-executes this component function.
    //So therefore the updated value will only be available after this app component function executed again. Only then the new value is 
    // available which is why we don't see it. if we log right after scheduling this update. Because here we're still in the old app function, 

}
console.log('APP COMPONENT EXECUTING');
let contentOfTab = <p>Please select a topic</p> ;
if(selectedTopic1){
  contentOfTab=(
<div id='tab-content'>
<h3>{EXAMPLES[selectedTopic1].title}</h3>
<p>{EXAMPLES[selectedTopic1].description}</p>
<pre>
  <code>
  {EXAMPLES[selectedTopic1].code}
  </code>
</pre>

</div>
) }
  return (
    <div>
      {/* The css styles present in the Header.css will also apply to this as in that css we mentioned the header tag */}
      <header>
        <h1>
        Hello World!
        </h1>
      </header>
      <Header/>
      <main>
        <h2>Core Concepts </h2>
        <section id='core-concepts'>
          <ul>
          {/* <CoreConcept
          title="Components"
          description="The Core UI building block"
          image={componentsImg}
          />
          <CoreConcept
          title="Props"
          description="The Core UI building block of Props"
          image={componentsImg}
          /> */}
          {/* <CoreConcept
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} /> */}

          {CORE_CONCEPTS.map((conceptItem)=><CoreConcept key={conceptItem.title} {...conceptItem}/>)
          }
          

       </ul>
        </section>
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
              {/* a children prop is always passed as defailt used to indicate the content(can be jsx, word, another component) b/w the custom component */}
              {/* component composition (Your component can wrap other component or other contents) */}
              
              {/* Automatically called when button renders*/}
              {/* <TabButton onSelect={handleSelect()}></TabButton> */}

              {/* Which button was clicked=> not known in this, we won't get that identifier which button was it */}
              {/* <TabButton onSelect={handleSelect}></TabButton> */}

              <TabButton isSelected={selectedTopic1==='components'} onSelect={() => handleSelect('components')}>Components</TabButton>
              <TabButton isSelected={selectedTopic1==='jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>  
              <TabButton isSelected={selectedTopic1==='props'} onSelect={() => handleSelect('props')}>Props</TabButton>  
              <TabButton isSelected={selectedTopic1==='state'} onSelect={() => handleSelect('state')}>State</TabButton>
              {/* controlling how handleSelect will be executed by react => by passing an anonymous arrow fn as a value  */}
              {/*when TabButton parsed=> Arrow fn get defined not the code inside it get executed */}
            </menu>
           {/* {selectedTopic}   */}
           {/* M-1  */}
           {!selectedTopic1?<p>Please select a topic</p> :null}
             {selectedTopic1?<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic1].title}</h3>
            <p>{EXAMPLES[selectedTopic1].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic1].code}
              </code>
            </pre>

           </div>:null}
           {/* M-2  */}
            {!selectedTopic1?<p>Please select a topic</p> :<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic1].title}</h3>
            <p>{EXAMPLES[selectedTopic1].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic1].code}
              </code>
            </pre>
           </div>}
           {/* M-3 -> More Readable and understandable code */}
           {!selectedTopic1&&<p>Please select a topic</p>}
             {selectedTopic1&&<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic1].title}</h3>
            <p>{EXAMPLES[selectedTopic1].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic1].code}
              </code>
            </pre>

           </div>}
           {/* M-4  */}
              {contentOfTab}
        </section>

      </main>
    </div>
  );
}

export default App;

//Note -> jsx can output array of renderable data
// {
//   // ['Hello','World']
//   // or 
//   <p>Hello</p>,
//   <p>World</p>,
// }