import './index.css';


function App() {
  return  (
    <div className='min-h-screen bg-gray-100 p-4'>
      <nav className='bg-white shadow p-4 mb-4 rounded-lg'>
        <h1 className='text-2xl font-bold text-indigo-600'> Crypto Price Tracker</h1>
      </nav>

      <section className='grid md:grid-cols-3 gap-4'>
        {/* Dummy Crypto Cards */}
        <div className='bg-white p-4 rounded-lg shadow'>Bitcoin - $66,99990000</div>
        <div className='bg-white p-4 rounded-lg shadow'>Ethereum - $3,400</div>
        <div className='bg-white p-4 rounded-lg shadow'>Dogecoin - $0.08</div>
      </section>
    </div>
  )
}

export default App;