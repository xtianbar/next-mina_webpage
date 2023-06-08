import Image from 'next/image'

export default function Home() {
  return (
      <>
        <header>
          <div className='text-6xl'>Hello this is a header</div>
        </header>
        <aside>
          Aside
        </aside>
        <main>
          Main
        </main>
        <footer>
          footer
        </footer>
      </>
  )
}
