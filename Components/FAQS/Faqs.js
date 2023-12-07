import React, {useEffect, useState} from "react";
import {FaqsStyled} from "./Faqs.styled";
import {B2, H6} from "../../elements/Font/Font.styled";
import {MDBAccordion, MDBAccordionItem} from 'mdb-react-ui-kit';
import dynamic from "next/dynamic";

const Faqs = (props) => {
    const [faqsAnswer, setFaqsAnswer] = useState([])
    const {faqsData} = props

    useEffect(() => {
        if (faqsData?.length > 0) {
            getDiscription(faqsData.map((data) => {
                return data.answer
            }))
        }
        return () => {
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [faqsData]);

    let tempFaqsAnswer = []
    const getDiscription = async (data) => {
        await data?.forEach((data) => {
            let obj = JSON.parse(data)
            obj.blocks.map((item) => {
                if (item.type === "Header") {
                    tempFaqsAnswer.push({ans: item?.data?.text})
                } else if (item.type === 'paragraph') {
                    tempFaqsAnswer.push({ans: item?.data?.text})
                }
            })
            setFaqsAnswer(tempFaqsAnswer)
        })
    }


    return (
        <FaqsStyled>
            {
                faqsData?.length > 0 &&
                <div>
                    <div>
                        <H6 className={'text-center faqs-title'}>FAQ’s</H6>
                        <B2 className={'text-center faqs-subtitle'}>Most Frequently Asked Questions about our
                            Services.</B2>
                    </div>
                    <div>
                        {faqsData?.map((data, index) => {
                            return (
                                <MDBAccordion key={index} initialActive={1}>
                                    <MDBAccordionItem collapseId={index === 0 && 1} headerTitle={data.question}>
                                        {faqsAnswer.length > 0 && faqsAnswer[index]?.ans}
                                    </MDBAccordionItem>
                                </MDBAccordion>
                            )
                        })
                        }
                    </div>
                </div>
            }
        </FaqsStyled>
    )

}
// export default Faqs
export default dynamic (() => Promise.resolve(Faqs), {ssr: false})
