import { useState } from 'react'

import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone:""
  })

  const handleSubmit = async (e) =>{
    e.preventDefault();
 // Final POST URL = http://localhost:3000/person
 const res = await fetch('http://localhost:3000/person', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});

console.log(res)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        name="surname"
        value={formData.surname}
        onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="phone"
        name="phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App
