import Image from "next/image"

const WhyUsCard = ({ image, text, textBr }) => {

    return (
        <div className="aspect-square min-w-56 p-8 bg-color-primary drop-shadow rounded-2xl">
            <div className="flex flex-col gap-6">
                <div className="">
                    <Image src={image} width={58} height={58}/>
                </div>
                <div className="">
                    <h1 className="font-bold text-2xl text-color-accent">{text}<br/>{textBr}</h1>
                </div>
            </div>
        </div>
    )
}

export default WhyUsCard