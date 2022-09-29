import "../../style.scss"

const CERTIFICATES = {
    "GeneralAssembly": {
        img: require("../../images/GeneralAssemblyCertificate.png"),
        style: "vertical"
    },
    "awsJobRoles": {
        img: require("../../images/aws-job-roles-in-cloud.png"),
        style: "horizontal"
    },
    "qrCode": {
        img: require("../../images/qrCode.png"),
        style: "vertical"
    }
}
export const Certificate = ({type}) => {
    console.log(type)
    return (
        <div className="certificate">
            <img src={CERTIFICATES[type].img} className={CERTIFICATES[type].style} />
        </div>
    )
}