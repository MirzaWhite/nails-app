
import dynamic from "next/dynamic";
import styled from "styled-components";
import {B1, H4, S1,} from "../../elements/Font/Font.styled";

const PrivacyPolicy = () => {

    return (
        <PrivacyPolicyStyle>
                <div className={"title"}>
                    <H4 weight={600} color={"#ffffff"} className={"title text-center"}> Privacy Policy</H4>
                </div>
                <S1 weight={600} color={"#512f86"} className={"mb-4"}>INFORMATION ABOUT OUR ORGANISATION AND WEBSITE</S1>
                <B1 weight={600} color={"#000000"} className={"mb-4"}>
                    Nails n Beyond  respects your privacy and is committed to protecting it. We provide this Privacy Statement to inform you of our Privacy Policy and practices and of the choices you can make about the way your information is collected online and how that information is used. This website is governed in accordance with the laws of India.
                    The courts of CHENNAI shall have exclusive jurisdiction over any dispute arising out of your use of this website
                </B1>


            <S1 weight={600} color={"#512f86"} className={"mb-4"}>DATA COLLECTION AND USE</S1>
            <B1 weight={600} color={"#000000"} className={"mb-4"}>When you request information through this site, we may need to know some personal information about you. When emailing us or subscribing for free news or information we need your e-mail address, name, and other limited personal identifiers, typically name, address, and contact number. If you chose to purchase information, goods, products, or services, we will usually require some additional limited financial details and you would be bound by the terms & conditions of the other third-party sites Where you request employment related services or products, we will usually need limited data about personal identifiers, education, employment, family, and financial details. Your personal data will be processed to provide information, goods, products, and services you request in the form that you require. If we require sensitive personal data, then we will ensure that the collection and use is in strict accordance with the principles of data protection
                and data privacy of the applicable legislation set out below.<br></br><br></br>
                We may appoint third party organizations to assist us in providing you with the information, goods, products, and services you request. In these circumstances, we will take steps to ensure that your personal information
                is held in strict accordance with our privacy policy and is only used for the purpose of fulfilling your request.
            </B1>


            <S1 weight={600} color={"#512f86"} className={"mb-4"}>DATA RETENTION</S1>
            <B1 weight={600} color={"#000000"} className={"mb-4"}>
                Data is held for the lifetime your subscription is active for the purposes of contacting you
                effectively after which time it is depersonalized and non-identifiable.
                We do not collect any additional information about you other than that outlined above
            </B1>

            <S1 weight={600} color={"#512f86"} className={"mb-4"}>ACCESS TO YOUR PERSONAL DATA </S1>
            <B1 weight={600} color={"#000000"} className={"mb-4"}>To enquire about accessing your personal data,
                or if you have any questions relating to Nails n Beyond data privacy policy please contact us at
                <span className={"ms-2 me-2"}>
                <a href="care@nailsnbeyond.in">
                    care@nailsnbeyond.in
                </a>
                </span>
                We will provide you with a readable copy of the personal data that we keep about you within 40 days, although we will require proof of your identity before disclosing that data. We allow you to challenge the data that we hold on to you and, where appropriate, you may have the data: erased, rectified, amended, or completed. We reserve the right to refuse to provide our visitors with a copy of their personal data but will give reasons for our refusal. You will be able to challenge our decision to refuse to provide you with a copy of your personal data.
                <br></br><br></br>
                At present we do not give visitors to our website the option of using a secure transmission method to send us their personal data.
            </B1>

            <S1 weight={600} color={"#512f86"} className={"mb-4"}>HYPERLINKS </S1>
            <B1 weight={600} color={"#000000"} className={"mb-4"}>
                The Nails n Beyond website may provide links to third-party websites for your convenience and information. If you access those links, you will leave the Nails n Beyond  website. Nails n Beyond  does not control those sites or their privacy practices, which may differ from Natural’s. We do not endorse or make any representations about third-party websites. The Nails n Beyond  Privacy Statement does not cover the personal data you choose to give to unrelated third parties. We encourage you to review the privacy policy of any company before submitting your personal information. Some third-party companies may choose to share their personal data with Nails n Beyond ;
                that sharing is governed by that third-party company’s privacy policy.
            </B1>

        </PrivacyPolicyStyle>
    )
}

// export default OfferServices;
export default dynamic(() => Promise.resolve(PrivacyPolicy), {ssr: false})


export const PrivacyPolicyStyle = styled.div`
    padding: 100px 0px;
    width: 80%;
    margin: 0 auto;
  .title{
    padding: 10px;
    text-align: -webkit-center;
    background-color: #512f86;
    margin-bottom: 10px;
  }
 
`