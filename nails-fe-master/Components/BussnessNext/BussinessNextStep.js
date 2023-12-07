import React from 'react'
import styled from 'styled-components'
import {H6, S2, H4, B2} from "../../elements/Font/Font.styled";
import dynamic from "next/dynamic";

const BusinessNextLevel = () => {
    return (
        <BusinessNextLevelStyle>
            <div className='Business'>
                <div className='why-franchise'>
                    <div className='why-box'>
                        <H6 color={'#5B307C'} weight={500} className={' heading mb-1'}>500</H6>
                        <S2 color={'#384955'} weight={400} className={''}>Expert Stylists</S2>
                    </div>
                    <div className='why-box'>
                        <H6 color={'#5B307C'} weight={500} className={' heading mb-1'}>24</H6>
                        <S2 color={'#384955'} weight={400} className={''}>Branches</S2>
                    </div>
                    <div className='why-box'>
                        <H6 color={'#5B307C'} weight={500} className={' heading mb-1'}>10</H6>
                        <S2 color={'#384955'} weight={400} className={''}>Years in Industry</S2>
                    </div>
                </div>
                <div className='BusinessNextLevels'>
                    <H6 color={'#5B307C'} font-weight={500} className={' head mb-5'}>Take Your Business to Next level
                        with Simple Three Steps!</H6>
                    <div className={"steps"}>
                        <div className={"step"}>
                            <div className='count mb-2'>
                                <H4 color={"#5B307C"} weight={500}>1</H4>
                            </div>
                            <S2 color={"#5B307C"} weight={500} className={"mb-2 heading title"}>Application and
                                Qualification</S2>
                            <B2 color={"#384955"} weight={400} className={"mb-2 title"}>The first step in our franchise process is to fill out our franchise application form. This form will ask for basic information about you and your
                                background, including your work history, financial situation, and experience in the beauty
                                industry. </B2>
                        </div>
                        <div className={"step"}>
                            <div className='count mb-2'>
                                <H4 color={"#5B307C"} weight={500}>2</H4>
                            </div>
                            <S2 color={"#5B307C"} weight={500} className={"mb-2 heading  title"}>Discovery and
                                Education</S2>
                            <B2 color={"#384955"} weight={400} className={"mb-2 title"}>If you are approved for our franchise program, we will schedule a discovery and education call with you. During this call, we will provide you with detailed information about our franchise program,
                                including our business model and marketing strategies.</B2>
                        </div>
                        <div className={"step"}>
                            <div className='count mb-2'>
                                <H4 color={"#5B307C"} weight={500}>3</H4>
                            </div>
                            <S2 color={"#5B307C"} weight={500} className={"mb-2 heading  title"}>Franchise Agreement and
                                Training</S2>
                            <B2 color={"#384955"} weight={400} className={"mb-2 title"}>After you have completed the discovery and education process, we will provide you with a franchise agreement to review and sign. This agreement will outline the terms and conditions of our franchise
                                program and royalties you will be responsible for. </B2>
                        </div>
                    </div>
                </div>
            </div>
        </BusinessNextLevelStyle>
    )
}

// export default BusinessNextLevel;
export default dynamic (() => Promise.resolve(BusinessNextLevel), {ssr: false})



const BusinessNextLevelStyle = styled.div`
  .why-franchise {
    padding: 40px;
    background: #EFEAF2;
    border-radius: 80px 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    margin: 40px 0px;
    @media (min-width: 1224px) {
      border-radius: 0px 0px;
      padding: 40px 0px;
      flex-direction: row;
      gap: 0px;
      justify-content: space-around;
      margin: 0px 0px 60px 0px;
    }
  }
.heading{
  background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.why-box {
    padding: 8px 0px;
    text-align: center;
    background: linear-gradient(0deg, #FBFAFF 3.21%, #FFFFFF 100%);
    box-shadow: 0px 4px 4px #DBCEE2;
    border-radius: 24px 8px;
    @media (min-width: 1224px) {
      border-radius: 0px 0px;
      background: #EFEAF2;
      text-align: inherit;
      box-shadow: 0px 0px 0px #EFEAF2;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  .BusinessNextLevels {
    padding: 0px 32px 40px 32px;
    @media(min-width: 1224px){
      padding: 0px 0px;
      width: 90%;
      margin: 0px auto;
    }
  }

  .head {
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    @media(min-width: 768px){
      padding: 0px 0px;
      width: 65%;
      text-align: center;
      margin: 0px auto;
    }
  }

  .count {
    background: #EFEAF2;
    border-radius: 16px 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 60px;
    max-height: 60px;

  }

  .count1 {
    text-transform: uppercase;
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .steps{
    @media(min-width: 1224px){
      display: flex;
      justify-content: space-between;
      align-content: center;
      gap: 20px;
    }
    @media(min-width: 1224px){
      display: flex;
      justify-content: space-between;
      align-content: center;
      gap: 60px;
    }
  }

  .step {
    margin: 0px 0px 40px 0px;
  }
`