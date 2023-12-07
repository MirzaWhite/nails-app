import {PartnerBrandContainerStyle} from "./PartnerBrand.styled";
import {B2, H6} from "../../elements/Font/Font.styled";
import {useMediaQuery} from "react-responsive";
import dynamic from "next/dynamic";
import Image from "next/image";

const PartnerBrand = () => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});

    return (
        <PartnerBrandContainerStyle>
            {
                !isDesktopOrLaptop && <TitleAndDescription/>
            }
            <div className={"inner-container"}>
                {
                    isDesktopOrLaptop && <TitleAndDescription/>
                }
                <div className={"d-flex flex-nowrap partner-section justify-content-center align-items-center"}>
                    <div className={"partner-item"}>
                        <Image src={"https://cdn.deepsense.space/nails/assets/images/partner1.png"} alt={""} layout={"fill"} objectPosition={"center"} objectFit={"cover"}
                               priority={false}/>
                    </div>
                    <div className={"partner-item"}>
                        <Image src={"https://cdn.deepsense.space/nails/assets/images/partner2.png"} alt={""} layout={"fill"} objectPosition={"center"} objectFit={"cover"}
                               priority={false}/>
                    </div>
                    <div className={"partner-item"}>
                        <Image src={"https://cdn.deepsense.space/nails/assets/images/partner3.png"} alt={""} layout={"fill"} objectPosition={"center"} objectFit={"cover"}
                               priority={false}/>
                    </div>
                    <div className={"partner-item"}>
                        <Image src={"https://cdn.deepsense.space/nails/assets/images/partner4.png"} alt={""} layout={"fill"} objectPosition={"center"} objectFit={"cover"}
                               priority={false}/>
                    </div>
                    <div className={"partner-item"}>
                        <Image src={"https://cdn.deepsense.space/nails/assets/images/partner5.png"} alt={""} layout={"fill"} objectPosition={"center"} objectFit={"cover"}
                               priority={false}/>
                    </div>
                    <div className={"partner-item"}>
                        <Image src={"https://cdn.deepsense.space/nails/assets/images/partner6.png"} alt={""} layout={"fill"} objectPosition={"center"} objectFit={"cover"}
                               priority={false}/>
                    </div>
                </div>
            </div>
        </PartnerBrandContainerStyle>
    )
}
export default dynamic(() => Promise.resolve(PartnerBrand), {ssr: false})

const TitleAndDescription = () => {
    return (
        <div>
            <H6 weight={600} className={"title text-center"}>Partner Brands</H6>
            <B2 weight={400} className={"description text-center"} color={"#384955"}>
                We collaborate with the best brands to
                ensure that you get the best care
            </B2>
        </div>
    )
}