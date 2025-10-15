import WhyUsCard from "./WhyUsCard"
import logo from "@/image/logo-only.svg"
import twentyFourHour from "@/image/twentyfourhour.svg"
import CardGreen from "./CardGreen"
import mapsIcon from "@/image/mapsIcon.svg"
import medicineIcon from "@/image/medicineIcon.svg"
import ReHeader from "../Header"

const WhyUs = () => {
    return(
        <div className="">
            <div className="items-center">
                <div className="flex flex-col gap-10 justify-center m-24">
                    {/* title */}
                    <div className="">
                        <ReHeader title={'Mengapa Harus Kami?'} subTitle={'Kami menyediakan Layanan yang Nyaman dan Canggih'}/>
                    </div>
                    {/* card */}
                    <div className="flex flex-row gap-10 justify-center ">
                        <WhyUsCard image={twentyFourHour} text={'Pelayanan'} textBr={'24 jam'}/>
                        <CardGreen image={mapsIcon} text={'Mudah'} textBr={'Ditemukan'}/>
                        <WhyUsCard image={medicineIcon} text={'Pesan'} textBr={'Obat'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs