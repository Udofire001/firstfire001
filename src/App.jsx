import './index.css';
import { useState } from 'react';


function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="app">
      <header>
        <button onClick={ () => setSidebarOpen(!isSidebarOpen)}>
          Toggle
        </button>
      </header>
      <div className="container">
        {isSidebarOpen && <aside>Sidebar</aside>}
        <main>Main Content</main>
        <section className='grid md:grid-cols-3 gap-4'>

          <nav className='bg-white shadow p-4 mb-4 rounded-lg'>
            <h1 className='text-2xl font-bold text-indigo-600'> Crypto Price Tracker</h1>
          </nav>

          {/* Dummy Crypto Cards */}
          <div className='bg-white p-4 rounded-lg shadow'>Bitcoin - $66,9900</div>
          <div className='bg-white p-4 rounded-lg shadow'>Ethereum - $3,400</div>
          <div className='bg-white p-4 rounded-lg shadow'>Dogecoin - $0.08</div>
        </section>


      </div>
    </div>

  );
};

export default App;