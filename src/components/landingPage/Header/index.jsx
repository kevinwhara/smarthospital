const ReHeader = ({ title, subTitle }) => {
    return(
<div className="">
                <div className="flex flex-col text-center">
                    <h1 className="font-extrabold text-5xl">{title}</h1>
                    <p className="font-normal text-md opacity-15">{subTitle}</p>
                </div>
            </div>
    )
}

export default ReHeader