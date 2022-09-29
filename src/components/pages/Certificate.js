import "../../style.scss"

const CERTIFICATES = {
    "GeneralAssembly": {
        img: require("../../images/GeneralAssemblyCertificate.png")
    },
    "awsJobRoles": {
        img: require("../../images/aws-job-roles-in-cloud.png")
    }
}
export const Certificate = ({type}) => {
    console.log(type)
    return (
        <div className="certificate">
            <img src={CERTIFICATES[type].img}  />
        </div>
    )
}