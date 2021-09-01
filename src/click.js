import React from 'react'
import './App.css';

function Click() {

    function kys() {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
        window.location.reload();

      }
       



    return (
        <div>
            <button className="send-button-click" onClick={kys}>Log out</button>
        </div>
    )
}

export default Click
