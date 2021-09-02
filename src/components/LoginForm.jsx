import { useState } from 'react';
import axios from 'axios';

const projectID = '2ec651f0-a45d-40d0-99ed-4f101c2d2f63';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Nice try, fool ;)');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title" style={{width: ""}}><img alt="" className="title" style={{width: "200px"}} src="/images/polstrat-white.png"></img></h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span><strong>Log in</strong></span>
            </button>

            
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;
