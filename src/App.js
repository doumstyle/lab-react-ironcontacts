import './App.css';
import { useState } from 'react';
import allContacts from './contacts.json';


function App() {

  const [contacts] = useState(allContacts.slice(0, 5));

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
