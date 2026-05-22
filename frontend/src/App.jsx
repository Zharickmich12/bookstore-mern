import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>NavBar</nav>
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-body">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default App