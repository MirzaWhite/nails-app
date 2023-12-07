import {AnimatePanelStyle, OfferServicesContainerStyle} from "./OfferServices.styled";
import {B2, H6, S2} from "../../elements/Font/Font.styled";
import {useMediaQuery} from "react-responsive";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import {useEffect, useState} from "react";
import {ContainedButton} from "../../elements/Button/Button";
import {v4 as uuidv4} from 'uuid';
import CustomImage from "../CustomImage/CustomImage";
import Link from "next/link";
import dynamic from "next/dynamic";

const OfferServices = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    const [hasMounted, setHasMounted] = useState(false);
    const [servicesData, setServicesData] =useState(props.Services)
    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }

    return (
        <OfferServicesContainerStyle>
            <H6 weight={600} className={"title text-center"}>Services We Offer</H6>
            <B2 weight={400} className={"description text-center"} color={"#384955"}>
                We offer a variety of nail artistry and styling services that will help you to express your
                creativity and flaunt your style
            </B2>
            <div className={"back-container"}>
                {
                    isDesktopOrLaptop &&
                    <div className={"d-flex align-items-center justify-content-evenly large-device-services-list"}>
                        {
                            servicesData?.edges?.map((item) => {
                                return (
                                    <div className={"service-item"} key={uuidv4()}>
                                        <S2 weight={500} className={"mb-2 text-center service-title"}>{item?.node?.name}</S2>
                                        <CustomImage
                                            src={
                                                isDesktopOrLaptop
                                                    ? item?.node?.desktopImage
                                                    : item?.node?.mobileImage
                                            }
                                            alt={""}
                                            width={280}
                                            height={280}
                                            style={{borderRadius: "20px"}}
                                            fallbackImg={"https://cdn.deepsense.space/nails/assets/images/offer-service-1.png"}
                                            priority={false}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                {
                    !isDesktopOrLaptop &&
                    <div className={"small-device-services-list"}>
                        <Accordion preExpanded={[2]}>
                            {
                                servicesData?.edges.map((item, index) => {
                                    return (
                                        <AccordionItem key={index} uuid={index}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <S2 weight={500}
                                                        className={"mb-2 text-center"}>{item?.node?.name}</S2>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <AnimatePanelStyle>
                                                    <CustomImage
                                                        src={
                                                            isDesktopOrLaptop
                                                                ? item?.node?.desktopImage
                                                                : item?.node?.mobileImage
                                                        }
                                                        alt={""}
                                                        width={280}
                                                        height={280}
                                                        style={{borderRadius: "20px"}}
                                                        fallbackImg={"https://cdn.deepsense.space/nails/assets/images/offer-service-1.png"}
                                                        priority={false}
                                                    />
                                                    {/*<Image src={ServiceImg1} alt={""} width={280} height={280} style={{borderRadius:"20px"}}/>*/}
                                                </AnimatePanelStyle>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                })
                            }
                        </Accordion>
                    </div>
                }

                <div className={"d-flex justify-content-center btn-section"}>
                    <Link href={"/products"}>
                        <ContainedButton padding={"16px 48px"} fontSize={"16px"} lineHeight={"22px"}>Our
                            Services</ContainedButton>
                    </Link>
                </div>
            </div>
        </OfferServicesContainerStyle>
    )
}

// export default OfferServices;
export default dynamic(() => Promise.resolve(OfferServices), {ssr: false})