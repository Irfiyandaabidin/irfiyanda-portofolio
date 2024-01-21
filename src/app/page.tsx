import HomePage from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Footer from '@/components/Footer'
import Portofolio from '@/components/Portofolio'

export default async function Home() {
  return (
    <main>
      <HomePage/>
      <About/>
      <Skills/>
      <Experience/>
      <Education/>
      <Portofolio/>
      <Footer/>
    </main>
  )
}
