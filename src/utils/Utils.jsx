
import {Link} from "react-router-dom"
import {useLocation} from "react-router-dom"
import {useDispatch} from "react-redux"
import { setAppState } from "@app/features/appstate/appStateSlice";
import { aboutFlow,datecisonTable } from "@assets/index";

export const DiscElement = () =>{
    return <span>●</span>;
}
export const CircledElement = () =>{
    return <span>o</span>;
}
export const NumberedElement = ({label}) =>{
    return <span>{label}</span>;
}

 export const CustomLinksContent =  ({hideLinks,performAction }) =>{
    const {pathname} = useLocation()
    const dispatch = useDispatch()

   

    const links = [
    
      {
        label: "Safety Advice",
        path:pathname?.includes("dashboard") ? "/dashboard/safety-advice" : 
        pathname?.includes("admin") ? null: "/safety-advice",
        state:"safety-advice"
      },
        
      {
        label: "Code of Conduct",
        path:pathname?.includes("dashboard") ? "/dashboard/code-of-conduct" :
        pathname?.includes("admin") ? null: "/code-of-conduct",
        state:"code-of-conduct"
      },
      {
        label: "Terms and Conditions",
        state:"terms-conditions",
        path:pathname?.includes("dashboard") ? "/dashboard/terms-conditions" :pathname?.includes("admin") ? null : "/terms-conditions",
      },
      {
        label: "Data Protection & Privacy Policy",
        path:pathname?.includes("dashboard") ? "/dashboard/privacy-policy" : 
        pathname?.includes("admin") ? null: "/privacy-policy",
        state:"privacy-policy"
      },
  ]
  const handleNavigation = (state)=>{
    dispatch(setAppState(state))
    if(performAction){
      performAction()
    }
  }

  return (
    <>
    {!hideLinks && (
        <div className="pt-5 font-bodyFont ">
            <p className="font-semibold">See also:</p>
            <ul className="flex gap-2 flex-col mt-3 ">
            {links?.map(({path,label,state},idx)=>(
                <li className="flex items-center gap-3 pl-5 text-[14px] font-medium"
                key={idx}>
                <DiscElement/>
                <Link to={path}
                className="first-letter:capitalize font-semibold custom-link
                text-blue-800"
                onClick={()=>handleNavigation(state)}
                style={{color:"blue"}}>{label}</Link>
            </li>
            ))}
            </ul>
            <p className="text-[14px] text-justify font-medium font-bodyFont mt-4">
            Please {" "} <Link to={"/dashboard/contact-us"}
                className="first-letter:capitalize font-semibold custom-link
                text-blue-800"
                style={{color:"blue"}}>Contact us</Link> if you found any problem or something is not working on the site and/or
            app or if you have suggestions to help continuously improve the site and/or app.
            </p>
        </div>
    )}
    </>
  )
}
// ============ CODE OF CONDUCT ==========
export const CodeOfConductContentPage = () =>{

  return (
    <div className="">
      <p className="pl-2 ml-8 paragraph m-2">In addition to the Terms and Conditions, members are expected to adhere to the
      following code of conduct and behaviour.</p>

    {/* dos */}
      <div className="ml-5 ">
        <h4 className="info-subtitle mt-3">Dos:</h4>
        <ul className="paragraph">

          <li className="info-list">
            <RenderListItem
            label={<NumberedElement label="2.1."/>}
            text={<p>
              Only book a date with members you are interested in getting to know.
              </p>}
            />
            
              
          </li>
          <li className="info-list">
            <RenderListItem
              label={<NumberedElement label="2.2."/>}
              text={<p>
                Keep communication on the platform to get to know the person better before
                meeting in person.
                </p>}
            />
            
              
          </li>
          <li className="info-list">
            <RenderListItem
            label={<NumberedElement label="2.3."/>}
            text={<p>
              If necessary, only exchange mobile numbers or contact you feel comfortable with
              when you are ready to meet in-person.
              </p>}
            />
          </li>
          <li className="info-list">
            <RenderListItem
            label={<NumberedElement label="2.4."/>}
            text={ <p>
              Be respectful and kind to other members if you do not want contact for further dates.
              </p>}
            />
            
             
          </li>
          <li className="info-list">
            <RenderListItem
            label={<NumberedElement label="2.5."/>}
            text={ <p>
              Be who you are.
              </p>}
            />
            
             
          </li>
          <li className="info-list">
            <RenderListItem
            label={<NumberedElement label="2.6."/>}
            text={ <p>
              Respect other members’ opinions and decisions.
              </p>}
            />
            
             
          </li>
          <li className="info-list">
            <RenderListItem
            label={ <NumberedElement label="2.7."/>}
            text={ <p>
              Report any suspicious behaviour and conduct of members.
              </p>}
            />
           
             
          </li>
        </ul>
      </div>
      {/* donts */}
      <div className="ml-5 ">
        <h4 className="info-subtitle mt-3">Don’ts:</h4>
        <ul className="paragraph">
          <li className="info-list">
            <RenderListItem
            label={<NumberedElement label="2.8."/>}
            text={ <p>
              Do not rush or force a member to arrange an in-person meeting soon after meeting
              on the platform against their will.
              </p>}
            
            />
            
             
          </li>
          <li className="info-list paragraph">
            <RenderListItem
            label={<NumberedElement label="2.9."/>}
            text={ <p>
              Do not force a member to exchange personal contact details such as address and
              phone numbers.
              </p>}
            />
            
             
          </li>
          <li className="info-listp paragraphp">
            <RenderListItem
            label={<NumberedElement label="2.10."/>}
            text={<p>
              Do not use outdated, fake and amended pictures for your profile.
              </p>}
            />
            
              
          </li>
          <li className="info-list">
            <RenderListItem
            label={<NumberedElement label="2.11."/>}
            text={ <p>
              Do not send unnecessary (spam) dates to members.
              </p>}
            />
            
             
          </li>
          <li className="info-list">
            <RenderListItem
            label={<NumberedElement label="2.12."/>}
            text={<p>
              Do not be rude, abusive and offensive, harass other members or act harshly.
              </p>}
            />
              
          </li>
          <li className="info-list">
            <RenderListItem
            label={<NumberedElement label="2.13."/>}
            text={ <p>
              Causal relationship, nudity and other adult themed behaviours and actions are not
              allowed at all times.
              </p>}
            />
             
          </li>
          <li className="info-list">
            <RenderListItem
            label={<NumberedElement label="2.14."/>}
            text={ <p>
              Do not impersonate (pretend to be someone else).
              </p>}
            />
          </li>
        </ul>
      </div>
    </div>
  )

}
// ============ SAFETY ADVICE ==========
export const SafetyAdviceContentPage = () =>{
  const {pathname} = useLocation()

  return (
    <div className="">
      <p className="pl-2 ml-8 paragraph m-2">As much as dating is or can be fun, there could be people who have a different
      agenda or cannot be trusted. Like all internet activities, it is always advisable to take
      safety measures when online and during face-to-face meetings. The following are
      some safety advice to help you get the most out of your dating.
      </p>

    
      <div className="ml-5 ">
        <ul className="paragraph">
          <li className="info-list">
            <NumberedElement label="3.1."/>
            <div className="flex items-center">
              <p>
                <span className="underline mr-1">Bank account and money:

                </span>
              You should never at any time share or provide your bank
              account details and money to any member during online and face-to-face dating.
              Any member who asks for your bank account or money could be a potential
              scammer. Report any such incident using the {" "}
              {(pathname.includes("admin") ||
              pathname.includes("dashboard")) ? (
                <>
                <Link to={"/dashboard/report-member"}
                  className="first-letter:capitalize font-semibold custom-link
                  text-blue-800"
                  style={{color:"blue"}}>Report form</Link>.
                  </>
              ) :(
                <span>
                <strong>Report form.</strong>
                </span>
              )}
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="3.2."/>
            <div className="flex items-center">
              <p>
                <span className="underline mr-1">Contact details:</span>
                Do not give your contact details - mobile or home telephone
                numbers, home or work address, email, Facebook, Instagram, X (formerly Twitter),
                LinkedIn, Skype or other social media. Decline politely to anyone who asks for your
                number or other contacts when you don’t feel comfortable sharing. Be responsible
                and provide the safest means of contact when you decide to meet face-to-face after
                you have got to know your date better online.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="3.3."/>
            <div className="flex items-center">
              <p>
                <span className="underline mr-1">Face-to-face meeting:</span>
                Do not rush or agree to meet a member in-person (face-to-
                face) immediately after meeting online. You should communicate with them on the
                platform to get to know them better before accepting any in-person dates. Any in-
                person date must be in central and public places such as café, bars, pub or
                restaurant or join <strong>BunchOfDates</strong> in-person date sessions. Avoid meeting people in
                your home, their house, remote and isolated locations.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="3.4."/>
            <div className="flex items-center">
              <p>
                <span className="underline mr-1">Means of transport:</span>
                When you arrange to meet another member in-person, do not
                travel together or accept to be picked up from and to your home especially during
                your first few meetings. Arrange your own transportation.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="3.5."/>
            <div className="flex items-center">
              <p>
                <span className="underline mr-1">Time of meeting:</span>
                Be reasonable on the time of in-person meeting. Avoid odd and
                unsociable hours. Check the timetables of public transports if necessary.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="3.6."/>
            <div className="flex items-center">
              <p>
                <span className="underline mr-1">Food and drinks:</span>
                Do not leave your drink or food to be attended by your date during
                in-person meeting. Finish your drink or food before you leave the table for the toilet
                or any other reason.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="3.7."/>
            <div className="flex items-center">
              <p>
                <span className="underline mr-1">Notification:</span>
                Before your in-person meeting with a member, you should tell a
                member of your family or a friend about your date and provide them with the
                meeting details. Stay connected with your family member or friend until you are
                safely home.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="3.8."/>
            <div className="flex items-center">
              <p>
                <span className="underline mr-1">Report:</span>
                Report any suspicious or serious incident to <strong>BunchOfDates</strong> using the {" "}
                {(pathname.includes("admin") ||
              pathname.includes("dashboard")) ? (
              <>
                <Link to={"/dashboard/report-member"}
                className="first-letter:capitalize font-semibold custom-link
                text-blue-800"
                style={{color:"blue"}}>Report form</Link> {" "}
              </>) :(
               <>
               Report form {" "}
               </>
              )}
                 or {" "}
                 <Link to={(pathname.includes("admin") ||
              pathname.includes("dashboard")) ?"/dashboard/contact-us" :"/contact-us"}
                className="first-letter:capitalize font-semibold custom-link
                text-blue-800"
                style={{color:"blue"}}>Contact us</Link>.
                 and/or the police if necessary.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="3.9."/>
            <div className="flex items-center">
              <p>
                <span className="underline mr-1">Events:</span>
                Events: <strong>BunchOfDates</strong> will organise regular events purposely for members to meet
                their dates in-person, so you are welcome to attend.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="3.10."/>
            <div className="flex items-center -ml-2">
              <p>
              <strong>BunchOfDates </strong> will not request members to respond directly to emails or to click a
              link within an email message to access their accounts to prevent online fraudsters
              and phishing. All date requests, promotions and offers will require members to log in
              their <strong>BunchOfDates </strong> accounts to <strong>prevent online fraudsters and phishing.</strong>
              </p>
            </div>
          </li>
         
        
        </ul>
      </div>
     
    </div>
  )

}
// ============ PRIVACY POLICY ==========
export const PrivacyPolicyContentPage = () =>{

  return (
    <div className="">
    
      <div className="ml-5 mt-5">
        <ul className="paragraph">
          <li className="info-list">
            <NumberedElement label="4.1."/>
            <div className="flex items-center">
              <p>
              <strong>BunchOfDates</strong> complies with the {" "}
              <a href="https://www.gov.uk/data-protection" 
              target="_blank"
              rel="noreferrer"
              className="first-letter:capitalize font-medium custom-link
                text-blue-800"
                style={{color:"blue"}}
              >Data Protection Act</a> {" "} 
               under the  {" "}
              <a href="https://www.legislation.gov.uk/ukpga/2018/12/contents/enacted" 
              className="first-letter:capitalize font-medium custom-link
              text-blue-800"
              rel="noreferrer"
              style={{color:"blue"}}
              target="_blank">Data Protection Act
              2018</a>, which is the UK’s implementation of the General Data Protection Regulation
              (GDPR).
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="4.2."/>
            <div className="flex items-center">
              <p>
              <strong>BunchOfDates</strong> technical team has ensured that all the information provided by
              members are kept securely and strictly confidential to protect members’ privacy and
              personal information. You are responsible for the personal information that you
              decide to publicly post and you will indemnify, defend, release, and hold us
              harmless for any claims made in connection with the content you share.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="4.3."/>
            <div className="flex items-center">
              <p>
              <strong>BunchOfDates</strong> will do the utmost best to ensure the safety of the site. Internet
              security is complex with events such as cybercrimes, so no internet site is
              considered to be 100% secure from potential attacks. <strong>BunchOfDates</strong> will act as
              swiftly as possible to address any data security breach in the event of an
              unforeseen cyber-attack.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="4.4."/>
            <div className="flex items-center">
              <p>
              Registration to use the site allows each member to provide mandatory and optional
              information. For security reasons, some mandatory information cannot be amended.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="4.5."/>
            <div className="flex items-center">
              <p>
              Some demographic information and images that a member optionally provides may
              reveal the sexuality, nationality, ethnicity, religion and other demographics of the
              member. It is the member’s responsibility in expressing his/her intentions in such
              information.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="4.6."/>
            <div className="flex items-start flex-col">
              <p>
              <strong>BunchOfDates</strong> does or will NOT:
              </p>
              <li className="info-list">
                <NumberedElement label="4.6.1."/>
                  <div className="flex items-center">
                  <p>
                  Require subscription or direct debit to buy credit to members’ account;
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="4.6.2."/>
                  <div className="flex items-center">
                  <p>
                  See or keep debit or credit card information of members when you buy credit;
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="4.6.3."/>
                  <div className="flex items-center">
                  <p>
                  Require members to transfer money or pay for any
                  other <strong>BunchOfDates</strong> member; and
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="4.6.4."/>
                  <div className="flex items-center">
                  <p>
                  Require members to provide their bank, debit or credit card details and any other
                  personal information outside of registering to use the service.
                  </p>
                </div>
              </li>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="4.7."/>
            <div className="flex items-center">
              <p>
              Members of <strong>BunchOfDates</strong> will have access to your profile name and other
              demographics depending on their membership. Where available, no personal and
              sensitive information will be accessed by other members.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="4.8."/>
            <div className="flex items-center">
              <p>
              <strong>BunchOfDates</strong> administrative and third party technical staff may have limited
              access to some of the members’ information provided at registration during the
              administrative or technical maintenance of the site. All administrative and third party
              technical staff are bound to strict agreement and adherence to
              a <strong>BunchOfDates'</strong> contract. This includes confidentiality, acceptable use policy,
              compliance of the UK GDPR (Data Protection Act 2018) and the consequences in
              the event of a breach of the contract.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="4.9."/>
            <div className="flex items-center">
              <p>
              Members have access to the information <strong>BunchOfDates </strong> holds on them in their
              account page of the platform. Members can also request for these information at a
              cost where relevant.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="4.10."/>
            <div className="flex items-center -ml-2">
              <p>
              Personal information members provide during registration will not be directly
              accessible by third party partners.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="4.11."/>
            <div className="flex items-center -ml-2">
              <p>
              <strong>BunchOfDates</strong> may occasionally share general demographic information, which
              does not include your name or any information that could identify a member, for
              research or other analytical purposes.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="4.12."/>
            <div className="flex items-center -ml-2">
              <p>
              Only anonymised and non-sensitive information on members who have consented
              to <strong>BunchOfDates</strong> to send offers from third party partners will be shared. The third
              party partner will not be able to use such information to identify the member.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="4.13."/>
            <div className="flex items-center -ml-2">
              <p>
              <strong>BunchOfDates</strong>  have the right to share any personal information of a member to the
              police or relevant authorities in the event of the member involved in any fraudulent
              or suspicious activity without prior notification.
              </p>
            </div>
          </li>
          <li className="info-list">
            <NumberedElement label="4.14."/>
            <div className="flex items-center -ml-2">
              <p>
              Members can at any time choose to unsubscribe to offers, promotions and
              newsletters from third party partners.
              </p>
            </div>
          </li>
         
        
        </ul>
      </div>
     
    </div>
  )

}
// ============ ADVICE AND TIPS ==========
export const AdviceAndTipsContentPage = () =>{

  return (
    <div className="">
     <p className="pl-2 ml-8 paragraph m-2">Some advice and tips that could help you in dating and connecting with other
     members.
      </p>
      <div className="ml-5 mt-5">
        <ul className="paragraph flex flex-col gap-4">
          <li className="font-semibold text-[14px] font-bodyFont">
            Dating
            <ul className="mt-3 ml-5 font-medium">
              <li className="info-list">
                <DiscElement/>
                <p>Treat your dates as you would in an in-person date.</p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>First impression is very important.</p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>Appearance - mind what you wear. A smart casual wear is better than
                pyjamas.</p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>Smile and relax..</p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>Be honest, positive, proactive and respectful.</p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>If you are a shy person, don’t be afraid to let your date know - it may help
                overcome it.</p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>Don’t rush to make your mind up on your date. Always consider a second or
                subsequent
                dates to get to know your date better.</p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>Include a one-minute video profile to introduce yourself and share your
                expectations.</p>
              </li>
              <li>
                <div className="info-list">
                <DiscElement/>
                <p>Profile pictures guide that might help:</p>
                </div>
                <ul className="ml-12">
                  <li className="info-list ">
                    <CircledElement/>
                    <p>Use clear and single full-body length pictures.</p>
                  </li>
                  <li className="info-list">
                    <CircledElement/>
                    <p>Avoid selfies.</p>
                  </li>
                  <li className="info-list">
                    <CircledElement/>
                    <p>For females, pictures taken indoors might help.</p>
                  </li>
                  <li className="info-list">
                    <CircledElement/>
                    <p>For males, pictures taken outdoors might help.</p>
                  </li>
                  </ul>
              </li>
            </ul>
          </li>
          <li className="font-semibold text-[14px] font-bodyFont">
            Safe online dating
            <ul className="mt-3 ml-5 font-medium">
              <li className="info-list">
                <DiscElement/>
                <p>This guideline is not to replace your own judgement to keep you safe whilst
                using BunchOfDates.</p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>BunchOfDates will not send members an email with a link in it for security
                reasons. You are always required to log into your account to access the
                services.</p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>BunchOfDates do not collect mobile phone numbers from members, so we
                are not able to and won’t send you any texts messages.</p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>Like all internet activities, it is always advisable to take safety measures when
                online and in-person meetings. As much as dating is or can be fun, there
                could be people who have a different agenda or cannot be trusted. You
                should exercise the same caution at all times (first and subsequent dates) as
                you would normally when you meet people.</p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>BunchOfDates is not responsible for any misleading and false information by
                members. You can judge better for your own safety.</p>
              </li>
            </ul>
          </li>
          <li className="font-semibold text-[14px] font-bodyFont">
            Sharing information
            <ul className="mt-3 ml-5 font-medium">
              <li className="info-list">
                <DiscElement/>
                <p>Don't share and never feel obliged to reveal your full name, email, work or
                home address, phone number, financial information or any other identifying
                information with your date.</p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>If anyone ask for personal information or you are suspicious of any member
                that can compromise your privacy, security or safety then 
                {" "}
                <Link to={"/dashboard/report-member"}
                  className="first-letter:capitalize font-semibold custom-link
                  text-blue-800"
                  style={{color:"blue"}}>Report</Link> to us without
                telling the person.</p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>You are responsible for your own safety as you would if you met the person in
                public places, so be wise on your online activities.</p>
              </li>
              
            </ul>
          </li>
          <li className="font-semibold text-[14px] font-bodyFont">
            Beware of scammers
            <ul className="mt-3 ml-5 font-medium">
              <li className="info-list">
                <DiscElement/>
                <p>Scammers will disguise themselves to get the information they need from you
                using fake or compromised accounts to trick you to solicit money from you.
                Immediately   {" "}
                <Link to={"/dashboard/report-member"}
                  className="first-letter:capitalize font-semibold custom-link
                  text-blue-800"
                  style={{color:"blue"}}>Report</Link> potential scammers soliciting money or any personal
                information from you.</p>
              </li>
              <li>
                <div className="info-list">
                <DiscElement/>
                <p>Some scammers use the following approaches::</p>
                </div>
                <ul className="ml-12">
                  <li className="info-list ">
                    <CircledElement/>
                    <p>In haste to leave BunchOfDates app or platform to use personal email
                    address, phone or a messaging app to chat instead.</p>
                  </li>
                  <li className="info-list">
                    <CircledElement/>
                    <p>Will pretend to like you or fall in love quickly to put you into love trap.</p>
                  </li>
                  <li className="info-list">
                    <CircledElement/>
                    <p>Asks for personal and financial favours to solve personal problems
                    such as travel, medical emergencies, accommodation, bills, etc.
                    Claims that something bad happened and needs help.</p>
                  </li>
                  <li className="info-list">
                    <CircledElement/>
                    <p>Asks you to send money, send gifts and other favours.</p>
                  </li>
                  <li className="info-list">
                    <CircledElement/>
                    <p>Read online for further information on how scammers operates and
                    behave.</p>
                  </li>
                  </ul>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>You are responsible for your own safety as you would if you met the person in
                public places, so be wise on your online activities.</p>
              </li>
              
            </ul>
          </li>
          <li className="font-semibold text-[14px] font-bodyFont">
            Soliciting for money
            <ul className="mt-3 ml-5 font-medium">
              <li className="info-list">
                <DiscElement/>
                <p>Do not send money and share any financial information!</p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>Don’t respond to any requests to send money, financial donation and anything
                that will lead someone getting money from you.</p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>If anyone pressure you to send money or get any sensitive personal and
                financial information, then {" "}
                <Link to={"/dashboard/report-member"}
                  className="first-letter:capitalize font-semibold custom-link
                  "
                  style={{color:"blue"}}>Report</Link> to us.
                 </p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>Contact your bank immediately if you compromise or have been tricked to
                send money to anyone and    <Link to={"/dashboard/report-member"}
                  className="first-letter:capitalize font-semibold custom-link
                  text-blue-800"
                  style={{color:"blue"}}>Report</Link> to us immediately.</p>
              </li>
              
            </ul>
          </li>
          <li className="font-semibold text-[14px] font-bodyFont">
            In-person date
            <ul className="mt-3 ml-5 font-medium">
              <li className="info-list">
                <DiscElement/>
                <p>
                  <span className="font-semibold mr-2">Don’t rush to meet in-person:</span>
                  Keep your communications within
                  BunchOfDates and get to know the other person, using your judgement if you
                  are ready to meet in person.
                </p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>
                  <span className="font-semibold mr-2">Tell someone about your plans:</span>
                  Always tell a trusted friend or family
                  member about your plans before going out, including the exact location of
                  your date and when you expect to be back home. You may consider making
                  your first in-person date a group or double date with a friend’s or join
                  BunchOfDates in-person dates events.
                </p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>
                  <span className="font-semibold mr-2">Share your location:</span>
                  Share your GPS location with a trusted friend or family
                  member while you're out.
                </p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>
                  <span className="font-semibold mr-2">Meet and stay in public:</span>
                  When meeting someone for the first time, meet in a
                  public place where other people are around.
                </p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>
                  <span className="font-semibold mr-2">Familiarise yourself with the meeting spot:</span>
                  If possible, research on the
                  meeting location ahead of time.
                </p>
              </li>
             
              <li className="info-list">
                <DiscElement/>
                <p>
                  <span className="font-semibold mr-2">Monitor any alcohol or substance consumption:</span>
                  Alcohol and other
                  substances can affect behaviour, so be aware of what you and others
                  consume and always keep your glass in hand or in sight. Don’t leave your
                  drink unattended even when visiting the toilet. Don’t accept a drink directly
                  handed to you by the person without you being there when the drink was
                  bought.
                </p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>
                  <span className="font-semibold mr-2">Make sure your mobile phone is charged:</span>
                  Keep your mobile phone fully
                  charged and with you in case of an emergency.
                </p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>
                  <span className="font-semibold mr-2">Arrange your own transportation:</span>
                  Always arrange your own transportation
                  to and from your date to make sure that you have control over when you
                  arrive and leave. Never agree to be picked up at your home.
                </p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>
                  <span className="font-semibold mr-2">Night travel:</span>
                  Avoid travelling and meeting in dark hours.
                </p>
              </li>
              <li className="info-list">
                <DiscElement/>
                <p>
                  <span className="font-semibold mr-2">Unsafe date:</span>
                  If the date isn’t going the way you want or feel uncomfortable,
                  end it and arrange your own transport home.
                </p>
              </li>
             
              <li className="info-list">
                <DiscElement/>
                <p>
                <Link to={"/dashboard/report-member"}
                  className="first-letter:capitalize font-semibold custom-link
                  "
                  style={{color:"blue"}}>Report</Link> anyone you think is suspicious.
                </p>
              </li>
             
              
              
            </ul>
          </li>
        </ul>
      </div>
     
    </div>
  )

}
export const RenderListItem = ({label,text,insideText}) =>{
  return (
    <div className={ `w-full font-bodyFont gap-3
      flex items-start justify-start text-justify `}
     >
        <div className={` 
        first-letter:capitalize ${insideText ?  'w-[60px]' :"w-[40px]"} `}>{label}</div>
        <div className={`text-[14px]  w-full 
        items-justify text-justify
         `}>
          {text}
        </div>
      </div>
  )
}
// ============ TERMS  AND CONDITIONS ==========
export const TermsContentPage = () =>{
  const {pathname} = useLocation()

  return (
    <div className="">
        <p className="pl-2 ml-8 paragraph m-2"> The Terms and Conditions     apply to anyone who will use or access <strong>BunchOfDates</strong>.
          Please read to ensure that you agree and comply with the content. If you do not
          agree to these terms and conditions, then please do not use the service. Once you
          register to become a member you are bound by all terms and conditions.
        </p>
      <div className="ml-5 mt-5">
        <ul className="paragraph flex flex-col gap-6">
          <li>
            <h5 className="font-semibold
            ">
          ●   Definition & Interpretations
            </h5>
            <ul>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.1."/>}
                text={<div className="flex items-center">
                  <p>
                  “User”, Membership” or “Member” refers to anyone who has registered to
                  use <strong>BunchOfDates</strong> services.
                  </p>
                </div>}/>
                
                
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.2."/>}
                text={<div className="flex items-center">
                  <p>
                  “Subscription” refers to setting up an agreement
                   to use <strong>BunchOfDates</strong> at a
                  specified time period and commitment to make fixed or regular payments during the
                  time period for the services.
                  </p>
                </div>}
                />
                
               
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.3."/>}
                text={ <div className="flex items-justify">
                  <p>
                  “Account” means having a <strong>BunchOfDates</strong> membership account unless it is explicitly
                  specified as bank or financial account.
                  </p>
                </div>}
                />
                
               
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.4."/>}
                text={<div className="flex items-center">
                  <p>
                  “Credit” refers to the amount of money or its equivalent available in
                  your <strong>BunchOfDates</strong> account to book, connect or have a date with other members or
                  users.
                  </p>
                </div>}
                />
                
                
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.5."/>}
                text={ <div className="flex items-center">
                  <p>
                  “Platform” and “Site” refers to the <strong>BunchOfDates</strong> website.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.6."/>}
                text={ <div className="flex items-center">
                  <p>
                  “App” and “Apps” refers to the <strong>BunchOfDates</strong> mobile applications versions.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.7."/>}
                text={<div className="flex items-center">
                  <p>
                  “Date” or “Dating” refers to connecting or meeting other members of <strong>BunchOfDates</strong>.
                  </p>
                </div>}
                />
              </li>
            </ul>
          </li>
          <li>
            <h5 className="font-semibold
          ">
          ●   Registration &  Membership
          </h5>
            <ul>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.8."/>}
                text={<div className="flex items-center">
                  <p>
                  Registration to become a user or member is FREE. That is, no fee or payment is
                  required to register as a user or member. 
                  <strong>BunchOfDates</strong> members are referred to
                  as users or members.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.9."/>}
                text={ <div className="flex items-center">
                  <p>
                  Membership requires a completion of a registration form.
                  </p>
                </div>}
                />
               
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.10."/>}
                text={<div className="flex items-center">
                  <p>
                  You MUST be at least eighteen (18) years to be eligible to register as a member to
                  use <strong>BunchOfDates</strong> and as legally permitted to use our services as enforced by laws
                  of United Kingdom. We do not conduct criminal background checks, but reserve the
                  right to do so at our discretion and using available public records. Our members are
                  solely responsible for their interaction with others. We ask that members have not
                  been convicted of any assault, violence, sexual misconduct or harassment. You
                  must not incorporate any image or likeness of any individual under 18 years of age.
                  Your membership will be revoked in breach of this at any time with or without
                  notification and may escalate any breach to the police.
                  </p>
                </div>}
                />
                
             
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.11."/>}
                text={<div className="flex items-center">
                  <p>
                  You must register by and for yourself. You are not allowed to register for someone
                  unless you are helping the person to do so whilst both you are present during the
                  registration.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.12."/>}
                text={<div className="flex items-center">
                  <p>
                  Indecent profile images, videos and graphics are not allowed. Profile pictures must
                  be clear and true reflection of the member. Group picture(s) may not be allowed,
                  especially when all your profile images are group pictures.
                  </p>
                </div>}
                
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.13."/>}
                text={<div className="flex items-center">
                  <p>
                  The profile images are subject to approval by <strong>BunchOfDates</strong> and will not be
                  accepted if found not to conform to the required picture format.
                  </p>
                </div>}
                />
                
              </li>
              <li className="info-list">
                <RenderListItem 
                label={<NumberedElement label="1.14."/>}
                text={ <div className="flex items-center">
                  <p>
                  All members are by default classed as “General” membership upon registration. That
                  is, you are automatically a “General” member after the initial registration.
                  </p>
                </div>}
                
                />
              </li>
              <li className="info-list">
                <RenderListItem 
                label={<NumberedElement label="1.15."/>}
                text={<div className="flex items-center">
                  <p>
                  General members can upgrade to “Premium” membership at any time.
                  </p>
                </div>}
                />
                
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.16."/>}
                text={ <div className="flex items-center">
                  <p>
                  Premium members have privileges that General members won’t have, including
                  booking a date with both Premium and General members. General members can
                  ONLY initiate booking a date with other General members and not with Premium
                  members. <strong>
                  General members may, however, be able to reschedule a date request
                  from Premium members.
                  </strong>
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.17."/>}
                text={ <div className="flex items-center">
                  <p>
                  You cannot use someone’s membership to use <strong>BunchOfDates</strong>. You must register
                  and use your own account.
                  </p>
                </div>}
                
                />
                
               
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.18."/>}
                text={ <div className="flex items-center">
                  <p>
                  Members have the right to deactivate (cancel) their membership and reactivate when
                  needed.
                  </p>
                </div>}
                />
              </li>
             
            </ul>
          </li>
          <li>
          <h5 className="font-semibold
          ">●   Fee, Payment, Credit & Cancellation</h5>
            <ul>
              <li className="">
                <RenderListItem
                label={<NumberedElement label="1.19."/>}
                text={<div className="flex items-center">
                  <p>
                  <strong>BunchOfDates</strong> operates strictly a NO REFUND policy.
                  </p>
                </div>}
                />
              </li>
              <li className="">
                <RenderListItem
                label={<NumberedElement label="1.20."/>}
                text={<div className="flex items-center">
                  <p>
                  Though General membership is free, the number of dates they can initiate is limited.
                  Premium members have no limitation, but they require “Credit” to book a date with
                  other members.
                  </p>
                </div>}
                />
                
                
              </li>
              <li className="">
                <RenderListItem
                label={<NumberedElement label="1.21."/>}
                text={<div className="flex items-center">
                  <p>
                  No “Subscription” or direct debit is required to buy credit. Credit is pay as you use,
                  so your bank card detail will not be saved. You can’t book a date if you run out of
                  credit.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.22."/>}
                text={<div className="flex items-center">
                  <p>
                  No refund is given even if members decide to cancel their membership before or
                  after using <strong>BunchOfDates</strong> or if they decide to leave whilst they still have unused
                  credit. Members have to use all their credits before they decide to
                  leave <strong>BunchOfDates</strong>.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.23."/>}
                text={ <div className="flex items-center">
                  <p>
                  Refund is also not given if members are removed or terminated from
                  using <strong>BunchOfDates</strong> for not complying with the terms and conditions, and code of
                  conduct.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.24."/>}
                text={<div className="flex items-center">
                  <p>
                  Only members with credit in their <strong>BunchOfDates</strong> account can book and have dates
                  with other members. That is, both members must have credit in their accounts.
                  General members have limited free dates.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.25."/>}
                text={ <div className="flex items-center">
                  <p>
                  The activation of credit starts after a valid and successful purchase of credit.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.26."/>}
                text={ <div className="flex items-center">
                  <p>
                  Credits are charged per week and a minimum of eight-week credit is required.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.27."/>}
                text={ <div className="flex items-center">
                  <p>
                  A member’s credit is valid for the period the credit was purchased. For example, if
                  the fee is £1 per week, this will expire 7 days from the day you credited your
                  account.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.28."/>}
                text={ <div className="flex items-center">
                  <p>
                  The fees, offers and terms of the credit shown on the website and app are all subject
                  to change.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.29."/>}
                text={ <div className="flex items-center">
                  <p>
                  Automatic renewal, credit purchase and direct debits are NOT allowed via the
                  website and app as <strong>BunchOfDates</strong> does not retain members bank account details.
                  Members can purchase further credit as required.
                  </p>
                </div>}
                />
              </li>
             
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.30."/>}
                text={ <div className="flex items-center">
                  <p>
                  <strong>BunchOfDates</strong> can be accessed via the internet, so it is the responsibility of the
                  member to arrange and pay for access to internet services.
                  </p>
                </div>}
                />
                
               
              </li>
             
             
            </ul>
          </li>
          <li>
          <h5 className="font-semibold
          ">●   Information, Safety & Security</h5>
            <ul>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.31."/>}
                text={<div className="flex items-center">
                  <p>
                  Members are responsible for their own security, safety and sensible online dating
                  and must NOT be abusive, insulting, threatening, promote or encourage racism,
                  sexism, hatred, bigotry or fanaticism of any sort. You must not use language which
                  could be deemed offensive, or is likely to harass, upset, embarrass, alarm or annoy
                  any other person.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.32."/>}
                text={<div className="flex items-center">
                  <p>
                  <strong>BunchOfDates</strong> does not require members to share their credit or debit card
                  information and any other personal information that can allow fraudulent activities or
                  damage.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.33."/>}
                text={<div className="flex items-center">
                  <p>
                  Any member found providing false information or using a third party’s information will
                  have their account deactivated.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.34."/>}
                text={<div className="flex items-center">
                  <p>
                  Members are not allowed to show any form of advertisement on their profile, and
                  before, during and after dating sessions. Members must not relate our services to
                  any other commercial activities, including and without limitation, sales, competitions,
                  advertising, links to other websites, premium line phone numbers and social media
                  contents.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.35."/>}
                text={<div className="flex items-center">
                  <p>
                  Members are liable to any content, information or activities that may breach the right
                  of other members or third parties.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.36."/>}
                text={<div className="flex items-center">
                  <p>
                  Usernames, passwords and any other information used to identify a member are
                  strictly private and confidential. Members must not share these with any other
                  person or third party.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.37."/>}
                text={<div className="flex items-center">
                  <p>
                  <strong>BunchOfDates</strong> is a platform to help people connect with each other. We do not
                  provide advice on any form of marriage or relationship. Members have the
                  responsibility to decide what or who is right for them.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.38."/>}
                text={<div className="flex items-center">
                  <p>
                  <strong>BunchOfDates</strong> has no obligation and technical means to fully verify and carry out
                  identity of members. 
                  <strong>We have, however, included a face verification system to verify
                  members.</strong>
                  </p>
                </div>}
                />
                
                
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.39."/>}
                text={<div className="flex items-center">
                  <p>
                  Members can verify the identity of members via the video date or require an
                  identification check of their dates if they recognise any suspicious behaviour. It is a
                  member’s responsibility to exercise their option to ask for identification before their
                  video dating session.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.40."/>}
                text={ <div className="flex items-center">
                  <p>
                  Members are advised not to assume that the information provided by other members
                  is correct. It is the responsibility of members to verify it and make their own
                  judgement during their dating session.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.41."/>}
                text={ <div className="flex items-center">
                  <p>
                  You should exercise the same caution at all times (first and subsequent dates) as
                  you would normally when you meet people in person. 
                  <strong>BunchOfDates</strong> is not
                  responsible for any misleading and false information by members.
                  </p>
                </div>}
                />
              </li>
             
              <li className="info-list">
                <NumberedElement label="1.42."/>
                <div className="flex items-center">
                  <p>
                  Members are responsible and liable for their security and safety at all times,
                  including agreeing to share your bank or financial account and other personal
                  information via the platform.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.43."/>}
                text={<div className="flex items-center">
                  <p>
                  Members are advised to take precautions when you decide to meet another member
                  that you have met via the use of BunchOfDates in person. All meetings are at the
                  risk and responsibility of members and not BunchOfDates.
                   See the  {" "}
                  {(pathname.includes("admin") ||
                  pathname.includes("dashboard")) ? (
                    <>
                    <Link to={"/dashboard/safety-advice"}
                      className="first-letter:capitalize font-semibold custom-link
                      text-blue-800"
                      style={{color:"blue"}}>Safety Advice</Link>.
                      </>
                  ) :(
                    <span>
                    <strong>Safety Advice.</strong>
                    </span>
                  )}
                  
                  </p>
                </div>}
                />
                
                
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.44."/>}
                text={ <div className="flex items-center">
                  <p>
                  Members are responsible if you share your identity 
                  with a third party to use
                  your <strong>BunchOfDates</strong> account. This also breaches the
                   use of the site and apps.
                  </p>
                </div>}
                />
                
               
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.45."/>}
                text={<div className="flex items-center">
                  <p>
                  Report immediately if you suspect someone has used your <strong>BunchOfDates</strong> account.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.46."/>}
                text={<div className="flex items-center">
                  <p>
                  All members’ information will be treated strictly confidential. The information may be
                  disclosed in the event of investigation into fraudulent activities or other security
                  breach. <strong>BunchOfDates</strong> account.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.47."/>}
                text={<div className="flex items-center">
                  <p>
                  Members are not allowed to publicise or share other members’ information or
                  comments in any form and format, including texting, on Facebook and other social
                  media platforms.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.48."/>}
                text={ <div className="flex items-center">
                  <p>
                  Members agree not to reveal any form of personal information, such as names,
                  email, address (if known), and other known contacts numbers (mobile or telephone)
                  while using <strong>BunchOfDates</strong> that enables 
                  other members to personally contact them.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.49."/>}
                text={<div className="flex items-center">
                  <p>
                  Members must not send spam or junk emails to
                    <strong>BunchOfDates</strong> or use the platform
                  in any unlawful manner, for any unlawful purpose or in any manner inconsistent with
                  these terms or act fraudulently or maliciously for example by hacking into or inserting
                  malicious codes, such as viruses, or harmful data, into any of our platform and app.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.50."/>}
                text={<div className="flex items-center">
                  <p>
                  Members must not encourage any illegal activity, including but not limited to
                  terrorism, inciting racial hatred or the submission of which in itself constitutes a
                  criminal offence.
                  </p>
                </div>}
                />
              </li>
             
            </ul>
          </li>
          <li>
          <h5 className="font-semibold
          ">●   Functionality of Service</h5>
            <ul>
              <li className="info-list">
                <RenderListItem
                label={<NumberedElement label="1.51."/>}
                text={<div className="flex items-center">
                  <p>
                  <strong>BunchOfDates</strong> is based on a peer-to-peer real time video communication. The
                  technology is cross platform works on many browsers including Google Chrome and
                  Firefox browsers. We recommend you use Chrome or Firefox browser though other
                  browsers should work too.
                  </p>
                </div>}
                />
              </li>
              <li className="info-list">
                <NumberedElement label="1.52."/>
                <div className="flex items-center ">
                  <p>
                  You can also use <strong>BunchOfDates</strong> App - iOS and Android mobile apps.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.53."/>
                <div className="flex items-center">
                  <p>
                  <strong>BunchOfDates</strong> can be accessed on computers, compatible tablets and smart
                  phones that have audio-video or webcam and internet connectivity.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.54."/>
                <div className="flex items-center">
                  <p>
                  The performance of <strong>BunchOfDates</strong> , like Google Meet, FaceTime, Zoom, Teams,
                  Skype and other internet video communication, will be dependent on the quality and
                  strength of your internet connectivity.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.55."/>
                <div className="flex items-center">
                  <p>
                  It is members’ responsibility to ensure quality, proper and continuous service from
                  their internet service providers to ensure effective use and functionality
                  of <strong>BunchOfDates</strong>.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.56."/>
                <div className="flex items-center">
                  <p>
                  Access and correct functionality of computers (software and hardware), webcams
                  and other audio-video equipment is the responsibility of members.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.57."/>
                <div className="flex items-center">
                  <p>
                  Members must have the skills and knowledge of using the computer, mobile apps,
                  internet, webcam and other audio-video equipment.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.58."/>
                <div className="flex items-center">
                  <p>
                  Members have the responsibility to ensure no pop-ups killing tool(s), internet
                  security, parental and other settings restrict or constrain the correct functionality of
                  using <strong>BunchOfDates</strong>. Any settings that 
                  would affect the functionality should be
                  deactivated or provide exemption for using <strong>BunchOfDates</strong>.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.59."/>
                <div className="flex items-center">
                  <p>
                  The functionality of the service may occasionally be affected by technical
                  improvements, maintenance and updates of contents. Members would be notified
                  prior to any major activities that would affect the functionality.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.60."/>
                <div className="flex items-center">
                  <p>
                  <strong>BunchOfDates</strong> will not send emails with a link in it for security reasons.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.61."/>
                <div className="flex items-center">
                  <p>
                  <strong>BunchOfDates</strong> is not responsible for any damage to your computer hardware,
                  computer software or other equipment or technology from any security breach, virus,
                  bug, tampering, fraud, error, omission, interruption, defect, delay in operation or
                  transmission, computer line or network failure or any other technical or another
                  malfunction.
                  </p>
                </div>
              </li>
             
            </ul>
          </li>
          <li>
          <h5 className="font-semibold
          ">●   Conduct &  Behaviour</h5>
            <ul>
              <li className="info-list">
                <NumberedElement label="1.62."/>
                <div className="flex items-center">
                  <p>
                  Strictly NO ADULT or PORN themed behaviours and actions before, during and after
                  dating sessions.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.63."/>
                <div className="flex items-center">
                  <p>
                  Strictly NO abusive language, threats and aggressive behaviours before, during and
                  after dating sessions towards other members.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.64."/>
                <div className="flex items-center">
                  <p>
                  Members have the responsibility to manage 
                  and keep up to date
                  their <strong>BunchOfDates</strong> calendar to show 
                  their availability to date or connect with other
                  members.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.65."/>
                <div className="flex items-center">
                  <p>
                  Members who do not comply with the terms and conditions will be blocked and
                  removed from using <strong>BunchOfDates</strong> without prior notice.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.66."/>
                <div className="flex items-center">
                  <p>
                  <strong>BunchOfDates</strong> have no technical means to monitor members’ dating sessions for
                  bad conduct and behaviours.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.67."/>
                <div className="flex items-center">
                  <p>
                  Members are encouraged to notify BunchOfDates of nudity, abusive and
                  inappropriate content and behaviour by other
                   members using the {" "}
                   {pathname.includes("dashboard") ? (
                    <>
                    <Link to={"/dashboard/report-member"}
                      className="first-letter:capitalize font-semibold custom-link
                      text-blue-800"
                      style={{color:"blue"}}>Report form</Link>.
                      </>
                  ) :(
                    <span>
                    <strong>Report form.</strong>
                    </span>
                  )}
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.68."/>
                <div className="flex items-center">
                  <p>
                  The identity of the member making a report will be kept confidential. It will not be
                  revealed to other members and third parties, but may be required to assist if the
                  issue requires further investigations by police or other relevant authorities.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.69."/>
                <div className="flex items-center">
                  <p>
                  <strong>BunchOfDates</strong> reserves the right to take actions against unacceptable behaviour by
                  members outside of the Terms and Conditions and Code of Conduct.
                  </p>
                </div>
              </li>
              
            </ul>
          </li>
          <li>
          <h5 className="font-semibold
          ">●   Risk & Liabilities</h5>
            <ul>
              <li className="info-list">
                <NumberedElement label="1.70."/>
                <div className="flex items-center">
                  <p>
                  Members who share or provide personal information, such as full name, bank and
                  financial accounts details, email, social media accounts,
                   contact number or address do so at their own risk and are liable for any damage caused, including fraud, loss of
                   money, other illegal activities, personal injury and death.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.71."/>
                <div className="flex items-center">
                  <p>
                  Any member is liable to any damage or action for not complying with the Terms and
                  Conditions and other <strong>BunchOfDates</strong> policies.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.72."/>
                <div className="flex items-center">
                  <p>
                  For security reasons,<strong>BunchOfDates</strong> does not request, process or keep bank or
                  financial information of members when they purchase credit.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.73."/>
                <div className="flex items-center">
                  <p>
                  The risk of access to financial information and financial loss is very low in the event
                  of cyber-attack as no bank or financial information
                   is not saved on <strong>BunchOfDates</strong>
                  systems.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.74."/>
                <div className="flex items-center">
                  <p>
                  <strong>BunchOfDates</strong> is responsible for securing members’ information provided during
                  registration.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.75."/>
                <div className="flex items-center">
                  <p>
                  <strong>BunchOfDates</strong>  is not liable for business losses or loss of reputation. We are not to
                  be used for domestic and private abuse and we have no liability for any loss of profit,
                  loss of business, business interruption or loss of business opportunity.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.76."/>
                <div className="flex items-center">
                  <p>
                  <strong>BunchOfDates</strong> or third parties may advertise or provide links on the platform to
                  other third party websites, which <strong>BunchOfDates</strong> may or may not approve. Members
                  use these third party links and websites at their own risk and liable to any damage or
                  loss. Members acknowledge and agree that <strong>BunchOfDates</strong> is not liable for the
                  availability or accuracy of such websites or resources or the contents, products or
                  services on or available from such websites.
                  </p>
                </div>
              </li>
             
              
            </ul>
          </li>
          <li>
          <h5 className="font-semibold
          ">●   Intellectual Property</h5>
            <ul>
              <li className="info-list">
                <NumberedElement label="1.77."/>
                <div className="flex items-center">
                  <p>
                  All contents belong to <strong>BunchOfDates</strong>. Any texts, content, graphics, user interfaces,
                  trademarks, logos, sounds, artwork, and other intellectual property appearing on
                  <strong>BunchOfDates</strong> are owned, controlled or licensed by us and are protected by
                  copyright, trademark and other intellectual property law rights. All intellectual
                  property rights belong to us and you have no intellectual property rights in, or
                  to, <strong>BunchOfDates</strong> in all parts of the world other than the right to use the service in
                  accordance with these terms and conditions.
                  </p>
                </div>
              </li>
              <li className="info-list">
                <NumberedElement label="1.78."/>
                <div className="flex items-center">
                  <p>
                  The membership to <strong>BunchOfDates</strong> guarantees a limited, non-exclusive, personal,
                  non-transferable, revocable, license to access and use all the Content as a service
                  user, without the right to sublicense, taking in consideration that: (i) you must not
                  use, sell, modify or distribute the Content except as permitted by its functionality; (ii)
                  you must not create derivative works from our Content, or commercially exploit it, in
                  whole or in part, in any way; and (iii) you may only use our Content for lawful
                  purpose only as a user of the service. We reserve all rights and other rights except
                  the use of the service as provided by <strong>BunchOfDates</strong>.
                  </p>
                </div>
              </li>
              <li >
                <div className="info-list">
                  <NumberedElement label="1.79."/>
                  <div className="flex items-start flex-col">
                    <p>
                    You agree that you will:
                    </p>
                  </div>
                </div>

                <ul className="ml-8">
                  <li className="info-list">
                  <NumberedElement label="1.79.1."/>
                    <div className="flex items-center">
                      <p>
                      Not rent, lease, sub-license, loan, provide, or otherwise make
                      available <strong>BunchOfDates</strong> or the Services in any form, in whole or in part to
                      any person without prior written consent from us;
                      </p>
                    </div>
                    </li>
                  <li className="info-list">
                  <NumberedElement label="1.79.2."/>
                    <div className="flex items-center">
                      <p>
                      Not copy except as part of the normal use of service or where it is necessary
                      for the purpose of back-up or operational security;
                      </p>
                    </div>
                  </li>
                  <li className="info-list">
                  <NumberedElement label="1.79.3."/>
                    <div className="flex items-center">
                      <p>
                      Not translate, merge, adapt, vary, alter or modify, the whole or any part
                      of <strong>BunchOfDates</strong> nor permit any part of them to be combined with, or
                      become incorporated in, any other programs, except as necessary to use the
                      service on devices as permitted in these terms;
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="info-list">
                      <NumberedElement label="1.79.4."/>
                      <div className="flex items-center">
                        <p>
                        Not disassemble, de-compile, reverse engineer or create derivative works
                        based on the whole or any part of it nor attempt to do any such things, except to the extent that (by virtue of sections 50B and 296A of the Copyright,
                        Designs and Patents Act 1988) such actions cannot be prohibited because
                        they are necessary to de-compile to obtain the information necessary to
                        create an independent program that can be operated
                        with <strong>BunchOfDates (Permitted Objective)</strong>, and provided that the information
                        obtained by you during such activities:
                        </p>
                      </div>
                    </div>
                    <ul className="ml-8">
                      <li className="info-list">
                        <NumberedElement label="1.79.4.1"/>
                        <div className="flex items-center">
                          <p>
                          Is not disclosed or communicated without our prior written consent to
                          any third party to whom it is not necessary to disclose or communicate it
                          in order to achieve the Permitted Objective; and
                          </p>
                        </div>
                      </li>
                      <li className="info-list">
                        <NumberedElement label="1.79.4.2"/>
                        <div className="flex items-center">
                          <p>
                          Is not used to create any or applications that is substantially similar in its
                          expression as <strong>BunchOfDates</strong>; and
                          </p>
                        </div>
                      </li>
                      <li className="info-list">
                        <NumberedElement label="1.79.4.3"/>
                        <div className="flex items-center">
                          <p>
                          Is used only for the Permitted Objective;
                          </p>
                        </div>
                      </li>
                      <li className="info-list">
                        <NumberedElement label="1.79.4.2"/>
                        <div className="flex items-center">
                          <p>
                          Comply with all applicable technology control or export laws and regulations
                          that apply to the technology used or supported by <strong>BunchOfDates</strong>.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              
            </ul>
          </li>
          <li>
          <h5 className="font-semibold
          ">●   Amendments</h5>
            <ul>
              <li className="info-list">
                <NumberedElement label="1.80."/>
                <div className="flex items-center">
                  <p>
                  The Terms and Conditions will be reviewed periodically. Members will be notified of
                  any amendments and the date(s) they take effect.
                  </p>
                </div>
              </li>
            </ul>
          </li>
        
        </ul>
      </div>
     
    </div>
  )

}

// ----------------- how it works -----------
export const HowItWorksPage = ()=>{
    const {pathname}= useLocation()

 
  const howItWorksList =[
    ...(!pathname.includes("dashboard") ? 
    [

      {
    
        content: (
          <div>
            <span>
            You can book a date even if the member is not online. You just need to search and
            check the member’s availability in their calendar and book a date that is convenient
            for both of you.
            </span>
          </div>
        ),
      },
      {

        content: (
          <div>
            <span>
            The member will receive a notification by email or on the app to accept, reschedule,
            cancel or decline a date request. By date, we mean virtual video date.
            </span>
          </div>
        ),
      },
    ] :[
      {
     
        content: (
          <div>
            <span>
            You search the members you want to have a date with. You can use the filter where
            relevant. By date, we mean virtual video date.
            </span>
          </div>
        ),
      },
      {
  
        content: (
          <div>
            <span>
            You then book a date with the member. You can book a
             date even if the member is
            not online. You just need to check the member’s 
            availability in their calendar and
            book a date that is convenient for both of you.
            </span>
          </div>
        ),
      },
      {
        
        content: (
          <div>
            <span>
            The member will receive a notification by email
             or on the app to accept, reschedule,
            cancel or decline a date request. The below explains
             these options:
            </span>
            <ul className=" ml-8 mt-1 gap-1 flex flex-col">
              <li className="how-it-works-list">
                <span><CircledElement/></span>
              <div>
              <strong>Accept</strong> {" "} - allows you to attend the video date per the date and time requested.
              </div>
              </li>
              <li className="how-it-works-list">
                <span><CircledElement/></span>
                <div>
                <strong>Reschedule</strong> {" "} - allows you to reschedule the date to another time.
                </div>
              </li>
              <li className="how-it-works-list">
                <span><CircledElement/></span>
                <div>
                <strong>Cancel</strong> {" "} - if you can’t attend the video date at the requested date and time,
                and you
                can’t confirm your immediate availability to reschedule the date
                request.
                You can request a new date when you know your availability.
                </div>
              </li>
              <li className="how-it-works-list">
                <span><CircledElement/></span>
                <div>
                <strong>Decline</strong> {" "} - if you don’t want to have a date with the member. This will seize any
                future
                date between you and the member.
                </div>
              </li>
            </ul>
          </div>
        ),
      },
    ]),
    {
      content: (
        <div>
          <span>Tips to avoid missing a date… You should: </span>
          <ul className=" ml-8 mt-1 gap-1 flex flex-col">
            <li className="how-it-works-list">
              <span><CircledElement/></span>
            Download the BunchOfDates mobile app and allow push notifications.
            </li>
            <li className="how-it-works-list">
            <span><CircledElement/></span>

            Use the add to my calendar feature on the mobile app to set a reminder of
            your date time in your mobile phone calendar. This feature is not available in
            the web platform.
            </li>
            <li className="how-it-works-list">
            <span><CircledElement/></span>
            Check the email account you used to register on BunchOfDates regularly to
            see your date requests.</li>
            <li className="how-it-works-list">
            <span><CircledElement/></span>
            Turn on email notification and check your email spam or junk folder in case a
            date request lands there.
            </li>
            <li className="how-it-works-list">
            <span><CircledElement/></span>
            Add BunchOfDates email address(es) to your contact to avoid emails going to
            your email spam or junk folder.
            </li>
          </ul>
        </div>
      ),
    },
    {
      content: (
        <div>
          <span>The datecisions (date decisions) are: </span>
          <ul className=" ml-8 mt-1 gap-1 flex flex-col">
            <li className="how-it-works-list">
              <span><CircledElement/></span>
            <div>
            <strong>Like</strong> {" "} - adds to your like connections and book further dates. If your date likes
            you too then you have mutual likes.
            </div>
            </li>
            <li className="how-it-works-list">
              <span><CircledElement/></span>
              <div>
              <strong> Friendship</strong> {" "} - adds to your friends’ zone and book further dates as you like.
              </div>
            </li>
            <li className="how-it-works-list">
              <span><CircledElement/></span>
              <div>
              <strong>Nope</strong> {" "} - no connection or no like, so no further dates.
              </div>
            </li>
            
          </ul>
        </div>
      ),
    },
    {
      content: (
        <div>
          You make a datecision after every date. For each date, you only have one chance to
          amend your datecision within 12 hours from the end of your date in “My Datecision”
          page. You can’t amend the datecision afterwards until the next date with the same
          person.
        </div>
      ),
    },
    {
      content: (
        <div>
          Check your date decisions in the “My Datecision” page and the date outcome in the
          “Date Outcome” page.
        </div>
      ),
    },
    {
      content: (
        <>
          The table summarises the outcome of combination of datecisions between two
          members.
          <div className=" mt-3 flex justify-start 
          m-1 gap-2 flex-col">
            <div>
            <h4 className="font-semibold text-[14px] font-bodyFont">Date Outcome Matrix</h4>
            <img src={datecisonTable} className="w-[85%] h-auto 
            object-cover" />
            </div>
          </div>
        </>
      ),
    },

    {
      content: (
        <div>
        Continue booking as many first and subsequent dates as you like until you find your true or authentic connection before arranging for any in-person date.
        </div>
      ),
    },
    
    {
      content: (
        <div>
        <span className="font-semibold mb-2 font-bodyFont text-[14px]">
          Remember: 
        </span>
        <div className="">
          <ul className=" ml-8 mt-1 gap-1 flex flex-col">
            <li className="how-it-works-list">
              <CircledElement/>
              Like any Christian dating and other dating sites and apps such as Christian
              Connection, Salt, Match.com, Hinge and eHarmony, the more you date, the
              better you connect with people and make a better datecision. And… DON’T
              forget to make your datecision after each date.
            </li>
            <li className="how-it-works-list">
            <CircledElement/>
            <div>

              Report any user who behaves badly, such as nudity, abusive language, bad
              or suspicious behaviours before, during and after date sessions using the
           
                {!pathname.includes("dashboard") ? (
                  <span className="">{" "}  
                  <span className="font-semibold">report form</span> (accessible after you log in).</span>
                ) : (

                  <Link className={`text-designColor font-semibold
                  cursor-pointer custom-link hover:underline
                  duration-300 hover:opacity-90 ml-2 `}
                  to={`/dashboard/report-member` 
                }>
                  Report form.
                </Link>
              )}
            </div>
                </li>
          </ul>
        </div>
        </div>
      ),
    },


    
  ];
  return (
    <div>
       <ul className="how-it-works-listsp flex flex-col gap-3 mt-0
          ">
            {howItWorksList?.map(({content},idx)=>(
              <li key={idx} className="flex gap-3 items-start">
                <DiscElement/>
                <div className=" text-[13px] md:text-[14px] font-bodyFont
                paragraph">{content}</div>
              </li>
            ))}
          </ul>
    </div>
  )
}

  