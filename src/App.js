import './App.css';
import { useState } from 'react';
import allContacts from './contacts.json';


function App() {

  const [contacts, setContacts] = useState(allContacts.slice(0, 6));
  const restOfContacts = allContacts.slice(7, -1);

  const addRandomContact = () => {
    let randomContact = restOfContacts[Math.floor(Math.random()*restOfContacts.length)];
    setContacts([...contacts, randomContact])
  }

  return (
    <div className="App">
      <button onClick={addRandomContact} className='addRandContact'>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won Oscar</td>
            <td>Won Emmy</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id} id="contactsList">
              <td><img src={contact.pictureUrl} alt={contact.name} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🏆" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
