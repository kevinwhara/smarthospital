import ReHeader from "@/components/landingPage/Header"
import CardTestimoni from "@/components/landingPage/Testimoni/cardTestimoni"

const Testimonial = () => {
    return(
        <div className="flex flex-col gap-10 bg-color-background p-16 items-center">
            <ReHeader title={'Testimoni'} subTitle={'Kata mereka tentang kami'}/>
            <div className="grid grid-cols-2 gap-6">
                    <CardTestimoni nama={'Rangga'} isi={'Obat nya lengkap, cara pesan nya juga mudah dan cepat.'}/>
                    <CardTestimoni nama={'Indri_N'} isi={'Pelayanan nya Ramah bgt!, tempat nya Juga Strategis, Recomended bgt!'}/>
                    <CardTestimoni nama={'Eko'} isi={'Joss, makin mudah ajh beli obat pake MEDGuard.'}/>
                    <CardTestimoni nama={'Parto'} isi={'Joss, makin mudah ajh beli obat pake MEDGuard.'}/>
            </div>
        </div>
    )
}

export default Testimonial