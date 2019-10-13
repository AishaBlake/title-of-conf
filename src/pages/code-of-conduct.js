import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CodeOfConduct = () => (
  <Layout>
    <SEO title="Sponsor" />
    <section style={{
      padding: `5% 10%`
    }}>
        <h1>Code of Conduct</h1>
        <p>&lt;title of conf&gt; is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age or religion. We do not tolerate harassment of conference participants in any form. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organizers.</p>

        <p>
            Harassment includes, but is not limited to:
            <ul>
                <li>Verbal comments that reinforce social structures of domination related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion.</li>
                <li>Sexual images in public spaces</li>
                <li>Deliberate intimidation, stalking, or following</li>
                <li>Harassing photography or recording</li>
                <li>Sustained disruption of talks or other events</li>
                <li>Inappropriate physical contact</li>
                <li>Unwelcome sexual attention</li>
                <li>Advocating for, or encouraging, any of the above behaviour</li>
            </ul>
        </p>
        <h2>Enforcement</h2>
        <p>
            Participants asked to stop any harassing behavior are expected to comply immediately. Vendors conducting related events and sponsors running booths, or similar activities are also subject to the anti-harassment policy. In particular, sponsors should not use sexualized images, activities, or other material. Booth staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.
        </p>
        <p>If a participant engages in harassing behaviour, event organisers retain the right to take any actions to keep the event a welcoming environment for all participants. This includes warning the offender or expulsion from the conference with no refund.</p>

        <p>Event organisers may take action to redress anything designed to, or with the clear impact of, disrupting the event or making the environment hostile for any participants.</p>
        <p>We expect participants to follow these rules at all event venues and event-related social activities. We think people should follow these rules outside event activities too!</p>
        <h2>Reporting</h2>
        <p>If someone makes you or anyone else feel unsafe or unwelcome, please report it as soon as possible. Conference staff can be identified by their staff badges. Harassment and other code of conduct violations reduce the value of our event for everyone. We want you to be happy at our event. People like you make our event a better place.</p>
        <p>You can make a report either personally or anonymously.</p>
        <h2>Anonymous Report</h2>
        {/* <p>You can make an anonymous report here [Wufoo form or similar that DOES NOT require an email address to submit.</p> */}
        <p>We can't follow up an anonymous report with you directly, but we will fully investigate it and take whatever action is necessary to prevent a recurrence.</p>
        <h2>Personal Report</h2>
        <p>You can make a personal report by:
            <ul>
            {/* <li>Calling or messaging this phone number: [Phone number for reporting]. This phone number will be continuously monitored for the duration of the event.</li> */}
            <li>Contacting a staff member, identified by STAFF badges.</li>
            </ul>
        </p>
        <p>When taking a personal report, our staff will ensure you are safe and cannot be overheard. They may involve other event staff to ensure your report is managed properly. Once safe, we'll ask you to tell us about what happened. This can be upsetting, but we'll handle it as respectfully as possible, and you can bring someone to support you. You won't be asked to confront anyone and we won't tell anyone who you are.
        </p>
{/* Our team will be happy to help you contact hotel/venue security, local law enforcement, local support services, provide escorts, or otherwise assist you to feel safe for the duration of the event. We value your attendance.
[Email address for organizers]
[Phone number for conference security or organizers]
[Phone number for hotel/venue security]
[Local law enforcement]
[Local sexual assault hot line]
[Local emergency and non-emergency medical (e.g., urgent care, day clinic)]
[Local taxi company] */}
    </section>
  </Layout>
);

export default CodeOfConduct;