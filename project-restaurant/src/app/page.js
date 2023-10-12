import Image from 'next/image'
import styles from './page.module.css'
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {

  return (
  <>
  <header className="text-center">
  <h1>348 E Main St, Lexington, KY</h1><h1>JONATHAN</h1><h1>open daily 12:31am - 1:02am</h1>

  </header>

    <div className="container">
      <Image
      src="/bird.png"
      width={500}
      height={500}
      alt="neopets throwback photo of island bird"
      />
      </div>



  </>

  )
}