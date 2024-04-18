import Artikel from "@/components/landingPage/Artikel"
import Hero from "@/components/landingPage/Hero"
import Navbar from "@/components/landingPage/Navbar"
import Testimonial from "@/components/landingPage/Testimoni"
import WhyUs from "@/components/landingPage/WhyUs"
import Footer from "@/components/landingPage/footer"

const Page = () => {
  const namaPasien = { nama: 'kevin', umur: 12, beratBadan: 50, penyakit: 'batuk berdahak', idKamar: 111 }

  return (
    <>
    <section>
      <Navbar/>
    </section>
    <section>
      <Hero/>
    </section>
    <section>
      <WhyUs/>
    </section>
    <section>
      <Testimonial/>
    </section>
    <section>
      <Artikel/>
    </section>
    <section>
      <Footer/>
    </section>
    </>
  )
}

export default Page