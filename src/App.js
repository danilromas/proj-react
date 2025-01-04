import React from 'react';
import './index.scss';

function App() {
  const [open, SetOpen] = React.useState(false);

  const onClickPlus = () => {
    SetOpen(true)
  }

  const onClickMinus = () => {
    SetOpen(false)
  }

  const Modal = ({open, SetOpen, children}) => (
    <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
          <svg onClick={onClickMinus} height="200" viewBox="0 0 200 200" width="200">    
            <title />
          </svg>
          {children}   
        </div>
      </div>
  )



  return (
    <div className="App">
      <button onClick={onClickPlus} className="open-modal-btn">✨ Открыть окно</button>
        <Modal open={open} SetOpen={SetOpen}>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
          <h3>жопа</h3>
        </Modal>

    </div>
  );
}

export default App;