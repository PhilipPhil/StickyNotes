import logo from './logo.svg';
import ReactStickyNotes from './components/react-sticky-notes';
import './app.scss';

function App() {
  return (
    <div className="app-body">
      <ReactStickyNotes
        backgroundColor="#fefefe"
        useCSS={true}
        containerHeight={"400px"}
      />
    </div>

  );
}

export default App;
