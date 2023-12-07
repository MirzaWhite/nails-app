import React from "react";
import {OurEligibilityStyled} from "./Eligibility.styled";
import Image from "next/image";
import {useMediaQuery} from "react-responsive";
import {B2, H6, S1} from "../../elements/Font/Font.styled";
import dynamic from "next/dynamic";

const Eligibility = () => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});

    return (
        <OurEligibilityStyled>
            <div className={"Eligibility"}>
                <div className={"mobile-head"}>
                    <H6 color={"#5B307C"} weight={500} className={"mb-2 head"}>What We Offer</H6>
                    <B2 color={"#384955"} weight={300} className={"mb-4"}>{"Discover the ultimate nail salon franchise experience with Nails and Beyond. Our brand provides exceptional service and luxurious experiences to our clients, and we're looking for franchise partners who share our passion for excellence. Join a trusted leader in the nail industry. Contact us today to learn more about our franchise opportunities."}</B2>
                </div>
                <div className={"image-section"}>
                    <Image
                        src={isDesktopOrLaptop ? "https://cdn.deepsense.space/nails/assets/images/eligibilityds.png" : "https://cdn.deepsense.space/nails/assets/images/eligibility.png"}
                        alt={"eligibility"}
                        layout={"fixed"}
                        width={isDesktopOrLaptop ? 520 : 310}
                        height={isDesktopOrLaptop ? 520 : 310}
                    />
                </div>


                <div className={"eligibility-conditions"}>
                    <div className={"ds-head"}>
                        <H6 color={"#5B307C"} weight={500} className={"mb-2 head"}>What We Offer</H6>
                        {/*<B2 color={"#384955"} weight={300} className={"mb-4"}>To become a franchisee of our luxury*/}
                        {/*    salon, you should have a passion for the beauty industry and a commitment to delivering*/}
                        {/*    exceptional customer service. We invite you to explore the opportunity to become a*/}
                        {/*    franchisee of our luxury salon.</B2>*/}
                    </div>
                    <div className={"conditions1"}>
                        <div className={"heading mb-2"}>
                            <Image
                                src={"https://cdn.deepsense.space/nails/assets/images/tick.png"}
                                alt={"tick"}
                                layout={"fixed"}
                                width={20}
                                height={20}
                            />
                            <B2 color={"#5B307C"} weight={400} className={"mb-0"}>Comprehensive, in-demand services</B2>

                        </div>
                        <div>
                            <B2>You can offer clients a diverse range of sought-after treatments, including nail art & extensions, lash extensions, lash lifting & tinting, brow lamination & tinting, hair extensions, tattoo (optional), and pedicure & manicure services.</B2>
                        </div>
                    </div>
                    <div className={"conditions1"}>
                        <div className={"heading mb-2"}>
                            <Image
                                src={"https://cdn.deepsense.space/nails/assets/images/tick.png"}
                                alt={"tick"}
                                layout={"fixed"}
                                width={20}
                                height={20}
                            />
                            <B2 color={"#5B307C"} weight={400} className={"mb-0"}>Efficient, stylish studio design</B2>
                        </div>
                        <div>
                            <B2>We will help you set up your own 400-500 sq. ft. studio, furnished with a modern layout that maximizes space and creates a welcoming atmosphere for clients. </B2>
                        </div>
                    </div>
                    <div className={"conditions1"}>
                        <div className={"heading mb-2"}>
                            <Image
                                src={"https://cdn.deepsense.space/nails/assets/images/tick.png"}
                                alt={"tick"}
                                layout={"fixed"}
                                width={20}
                                height={20}
                            />
                            <B2 color={"#5B307C"} weight={400} className={"mb-0"}>Strong return on investment</B2>
                        </div>
                        <div>
                            <B2>You can experience attractive profit margins, with an estimated ROI to be expected within 2 to 2.5 years, making it a financially attractive opportunity.</B2>
                        </div>
                    </div>
                    <div className={"conditions1"}>
                        <div className={"heading mb-2"}>
                            <Image
                                src={"https://cdn.deepsense.space/nails/assets/images/tick.png"}
                                alt={"tick"}
                                layout={"fixed"}
                                width={20}
                                height={20}
                            />
                            <B2 color={"#5B307C"} weight={400} className={"mb-0"}>Comprehensive training and support</B2>
                        </div>
                        <div>
                            <B2>You and your staff will receive extensive training in all aspects of the business, from management to service provision, as well as ongoing support from the Nails ‘n Beyond team - whenever you need it!</B2>
                        </div>
                    </div>
                    <div className={"conditions1"}>
                        <div className={"heading mb-2"}>
                            <Image
                                src={"https://cdn.deepsense.space/nails/assets/images/tick.png"}
                                alt={"tick"}
                                layout={"fixed"}
                                width={20}
                                height={20}
                            />
                            <B2 color={"#5B307C"} weight={400} className={"mb-0"}>Marketing and branding assistance</B2>
                        </div>
                        <div>
                            <B2> {"Benefit from The Naturals Brand as well as Nails ‘n Beyond's proven marketing strategies and strong brand recognition to attract clients and foster loyalty."} </B2>
                        </div>
                    </div>
                </div>
            </div>
        </OurEligibilityStyled>
    );
};

// export default Eligibility;
export default dynamic(() => Promise.resolve(Eligibility), {ssr: false})
