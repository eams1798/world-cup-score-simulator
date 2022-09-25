import './styles/StartScreen.css';

export default function StartScreen () {
    return (
      <div className="start-screen">
        <button className="btn-start" onClick={() => {
          const startScreen = document.querySelector('.start-screen');
          startScreen.classList.add('screen-hidden');
        }} >START</button>
      </div>
    )
}