import './App.css';
import { useState } from 'react';
import allContacts from './contacts.json';


function App() {

  const [contacts, setContacts] = useState(allContacts.slice(0, 5));
  const restOfContacts = allContacts.slice(6, -1);

  const addRandomContact = () => {
    if (contacts.length === allContacts.length) return;

    let randomContact = restOfContacts[Math.floor(Math.random() * restOfContacts.length)];

    const alreadyIn = contacts.find(contact => contact.id === randomContact.id);
    if (alreadyIn) {
      addRandomContact()
    } else {
      setContacts([...contacts, randomContact])
    }
  }

  const sortByName = () => {
    setContacts([...contacts].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())));
  }

  const sortByPopularity = () => {
    setContacts([...contacts].sort((a, b) => b.popularity - a.popularity))
  }

  const deleteContact = (id) => {
    setContacts([...contacts].filter(contact => contact.id !== id));
  }

  return (
    <div className="App">
      <button onClick={addRandomContact} className='actionBtn'>Add Random Contact</button>
      <button onClick={sortByName} className='actionBtn'>Sort by Name</button>
      <button onClick={sortByPopularity} className='actionBtn'>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won Oscar</td>
            <td>Won Emmy</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id} id="contactsList">
              <td><img src={contact.pictureUrl} alt={contact.name} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🏆" : ""}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
