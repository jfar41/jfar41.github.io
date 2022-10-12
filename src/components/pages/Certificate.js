import "../../style.scss"

const CERTIFICATES = {
    "awsJobRoles": {
        img: require("../../images/aws-job-roles-in-cloud.png"),
        style: "horizontal"
    },
    "generalAssembly": {
        img: require("../../images/GeneralAssemblyCertificate.png"),
        style: "vertical"
    },
    "qrCode": {
        img: require("../../images/qrCode.png"),
        style: "vertical"
    },
    "resume": {
        img: require("../../images/swe-resume.png"),
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