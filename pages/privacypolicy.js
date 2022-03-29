import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ColdenDev - Social Media</title>
        <meta name="description" content="Official social media pages of ColdenDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Privacy Policy
        </h1>

        <br/><br/><br/>

        <div className={styles.grid}>
          <div>
            <h2>Privacy Policy</h2>
            <p>Simon Ugor built apps WhatTheRocket, Drop That Box and Planets Dodge as Free apps. This SERVICE is provided by Simon Ugor at no cost and is intended for use as is.
            This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
            If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at WhatTheRocket, Drop That Box and Planets Dodge unless otherwise defined in this Privacy Policy.</p>
            <h2>Information Collection and Use</h2>
            <p>For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way.
            The apps does use third-party services that may collect information used to identify you.
            Link to the privacy policy of third-party service providers used by the apps - <a href='https://unity3d.com/legal/privacy-policy'>Unity</a></p>
            <h2>Log Data</h2>
            <p>I want to inform you that whenever you use my Service, in a case of an error in apps I collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.</p>
            <h2>Cookies</h2>
            <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device&apos;s internal memory.
            This Service does not use these “cookies” explicitly. However, apps may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>
            <h2>Service Providers</h2>
            <p>I may employ third-party companies and individuals due to the following reasons: To faciliate our Service; To provide the Service on our behalf; To perform Service-related services; To assist us in analyzing how our Service is used. I want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
            <h2>Security</h2>
            <p>I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.</p>
            <h2>Links to Other Sites</h2>
            <p>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
            <h2>Children&apos;s Privacy</h2>
            <p>These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13 years of age. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do the necessary actions.</p>
            <h2>Changes to This Privacy Policy</h2>
            <p>I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.
            This policy is effective as of 2021-12-25</p>
            <h2>Contact Us</h2>
            <p>If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at coldenwebdev@gmail.com.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
