import React, {useContext, useState} from 'react';
import {Modal} from "./components/Modal";
import {Context} from "./context";

export const App = () => {
    const { value } = useContext(Context)
    const [visible, setVisible] = useState(false)
  
    return (
        <div>
            <Modal visible={visible} onClose={() => setVisible(false)}/>
            
            <div>value: {value}</div>
            
            <button onClick={() => setVisible(true)}>Show modal</button>
        </div>
    );
}

