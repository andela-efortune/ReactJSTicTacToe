import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const people = [
  {
    name: 'John Doe',
    age: 101,
    gender: 'male',
    nationality: 'USA',
    hobbies: 'Great with examples in programming',
    objectId: 1
  },
  {
    name: 'Fortune Ekeruo',
    age: 25,
    gender: 'male',
    nationality: 'Nigerian',
    hobbies: 'Coding',
    objectId: 2
  },
  {
    name: 'Francia Raisa',
    age: 'old enough',
    gender: 'female',
    nationality: 'USA',
    hobbies: 'Dancing, Ice skating and Acting',
    objectId: 3
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          people.map((person) => {
              <div key={person.objectId}>
                <div><strong>Name: </strong> {person.name} </div>
                <div><strong>Age: </strong> {person.age} </div>
                <div><strong>Gender: </strong> {person.gender} </div>
                <div><strong>Nationality: </strong> {person.nationality} </div>
                <div><strong>Hobbies: </strong> {person.hobbies} </div>
              </div>
          })
        }
      </div>
    );
  }
}

export default App;
