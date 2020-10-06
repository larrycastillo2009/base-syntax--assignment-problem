import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    userOutputs: [
      {jeffsum: "Just my luck, no ice. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! They're using our own satellites against us. And the clock is ticking. Checkmate... Hey, take a look at the earthlings. Goodbye!\n" +
            "\n", name:"Larry"},
      {jeffsum:"You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? Did he just throw my cat out of the window? Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Must go faster... go, go, go, go, go!",
      name: "Tony"}
    ]
  }
  switchParagraphHandler = (newParagraoh) =>{
    this.setState({
      userOutputs: [
        {jeffsum:"Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Hey, take a look at the earthlings. Goodbye! What do they got in there? King Kong? Jaguar shark! So tell me - does it really exist? Just my luck, no ice. I gave it a cold? I gave it a virus. A computer virus." ,
          name:"Larry"},
        {jeffsum:"Remind me to thank John for a lovely weekend. Must go faster. Did he just throw my cat out of the window? Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?",
          name: "Tony"}
      ]})
  }

  nameChangedHandler =(event)=>{
    this.setState({
      userOutputs: [
        {jeffsum:"Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Hey, take a look at the earthlings. Goodbye! What do they got in there? King Kong? Jaguar shark! So tell me - does it really exist? Just my luck, no ice. I gave it a cold? I gave it a virus. A computer virus." ,
          name:event.target.value},
        {jeffsum:"Remind me to thank John for a lovely weekend. Must go faster. Did he just throw my cat out of the window? Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?",
          name: "Tony"}
      ]}

    )
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>

        <p>SOLUTION</p>

        <UserInput changed={this.nameChangedHandler}></UserInput>
        <UserOutput body={this.state.userOutputs[0].jeffsum} name={this.state.userOutputs[0].name}></UserOutput>
        <UserOutput body={this.state.userOutputs[1].jeffsum} name={this.state.userOutputs[1].name}></UserOutput>
        <button
            onClick={()=> this.switchParagraphHandler()}>Switch Paragraph</button>
      </div>
    );
  }
}

export default App;
