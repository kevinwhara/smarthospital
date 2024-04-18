import ReHeader from "@/components/landingPage/Header"
import CardArtikel from "@/components/landingPage/Artikel/cardArtikel"
import dietIMG from "@/image/artikel/dietIMG.png"
import sleepIMG from "@/image/artikel/sleepIMG.png"
import runningIMG from "@/image/artikel/runningIMG.png"

const Artikel = () => {
    return(
<div className="flex flex-col gap-8 p-16">
            <ReHeader title={'Artikel'} subTitle={'Beberapa Artikel terbaru kami'}/>
            <div className="flex flex-row gap-16 justify-center">
                <CardArtikel 
                    image={dietIMG} 
                    title={'Bahaya Banget! | Bahaya Diet yang mungkin belum kamu ketahui!'} 
                    paragraph={'Banyak orang berkeinginan untuk memiliki berat badan ideal hingga memaksakan diri menjalani diet ketat. Diet ketat...'} 
                    namaDokter={'Setiawan'} time={'30 Mnt'}/>
                <CardArtikel 
                    image={sleepIMG} 
                    title={'Pentingnya Tidur yang Cukup Bagi Kesehatan Tubuh'} 
                    paragraph={'Artikel ini menggarisbawahi pentingnya tidur yang cukup untuk kesehatan tubuh, termasuk proses penyembuhan, konsolidasi memori, serta...'} 
                    namaDokter={'Rizad'} time={'5 Hour'}/>
                <CardArtikel 
                    image={runningIMG} 
                    title={'Manfaat Olahraga Rutin Bagi Kesehatan Mental'} 
                    paragraph={'Seiring dengan kesadaran yang semakin meningkat terhadap pentingnya kesehatan mental, olahraga telah diakui sebagai salah satu faktor penting...'} 
                    namaDokter={'Setiawan'} time={'7 Hour'}/>
            </div>
        </div>
    )
}

export default Artikel