import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextBlock from "../components/textBlock"
import CTALink from "../components/callToActon"
import Block from "../components/block"

const Sponsor = () => (
  <Layout>
    <SEO title="Call for performers" />
    <TextBlock bgColor="#E7ECEF" title="Call for Performers" subtitle="Join the cast">
      <p>&lt;title of conf&gt;'s Call for Performers (CFP) is currently closed! </p>
    </TextBlock>
    <section style={{
      padding: `5% 10%`,
      textAlign: `center`
    }}>
      <p style={{
          color: `#7A335F`,
          fontSize: `1.4rem`,
          fontWeight: `600`,
          lineHeight: `1.8rem`,
          margin: `0 auto 1.45rem`,
          maxWidth: `600px`,
          textAlign: `center`
        }}>We welcome submissions of musical parodies, original music, and original short plays.</p>
      <div style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`
      }}>
        <CTALink url="https://forms.gle/rKVrKdUFhFBdtrpz9">
          Apply as a Writer
        </CTALink>
        <CTALink url="https://forms.gle/vV6egkJrsdTSxaps6">
          Apply as a Performer
        </CTALink>
      </div>
    </section>
    <Block bgColor="#E7ECEF" title="What we're looking for">
    <p>&lt;title of conf&gt; is a one-day, single-track musical tech conference. We want to explore some delightfully different ways to present stories that capture the day-to-day experience of creating software. Individual performance slots will be around <strong>10 minutes</strong> long but please indicate in the notes if you have an idea for something wonderful that would take significantly more or less time. We may have some wiggle room! We welcome submissions of:</p>
    <ul>
      <li>musical parodies (for example, <a href="https://twitter.com/mseckington/status/1194626636676624387">On My Own</a>)</li>
      <li>original music (for example, <a href="https://www.youtube.com/watch?v=ZGeWNR8CWnA">Microsoft the Musical</a>)</li>
      <li>original short plays (for example, <a href="https://www.youtube.com/watch?v=9qYR0NqsDcA&feature=youtu.be">Code Review, Forwards and Back</a>)</li>
    </ul>
    <p>If you have an idea for a performance in a different format, please <a href="mailto:cfp@titleofconf.org">email cfp@titleofconf.org</a>!</p>
    </Block>
    <Block title="The selection process">
      <p><strong>If you want to write something (and maybe perform it):</strong></p>
      <ul>
        <li>Fill out the <a href="https://forms.gle/rKVrKdUFhFBdtrpz9">&lt;title of conf&gt; Writer CFP</a> form.</li>
        <li>You can submit a maximum of five different pieces via the form.</li>
        <li>Your piece does NOT need to be finished! We'll ask you to provide documentation, which could include notes or a draft of the piece.</li>
        <li>If you are submitting multiple pieces, and you have a strong preference for one piece over another, please indicate your preferences in the "Notes" section of the form.</li>
      </ul>
      <p><strong>If you ONLY want to perform (no writing involved):</strong></p>
      <ul>
        <li>Fill out the <a href="https://forms.gle/vV6egkJrsdTSxaps6">&lt;title of conf&gt; Performer CFP</a> form.</li>
      </ul>
      <p><strong>If you are interested in performing (regardless of whether or not you write it), you'll need to make an audition video!</strong></p>
      <ul>
        <li>The video should be 1-2 minutes in length.</li>
        <li>Publish your video on a platform we can see without a password (such as an unlisted YouTube video).</li>
        <li>Briefly tell us your name and your topic.</li>
        <li>The video should be of you doing the thing you're applying to do - whether that be singing, acting, etc. It doesn't have to be exactly what you'll perform at &lt;title of conf&gt;, but it should give us a good idea of what we're going to experience.</li>
        <li>If you're submitting multiple pieces as a writer and would also like to perform, you only need to submit one audition video.</li>
        <li>If you have any questions at all, please reach out via <a href="https://discord.gg/832rT7q">Discord</a>, <a href="https://twitter.com/TitleOfConf">Twitter</a>, or <a href="mailto:cfp@titleofconf.org">email</a>.</li>
      </ul>
      <p><strong>A little about how we decide:</strong></p>
      <ul>
        <li>The selection process will <em>not</em> be anonymous.</li>
        <li>As we receive the CFP submissions and the video auditions, we'll review them as a board along with a volunteer selection committee.</li>
        <li>Above all, we're looking for content that is both relevant to delivery teams (devs, QA, project managers) and entertaining.</li>
        <li>We hope to include a wide variety of musical and theatrical styles, so please apply your own unique spin to your submission!</li>
      </ul>
      <p><strong>The CFP closes January 25, 2020.</strong></p>
      <p>Our goal is to announce the lineup by <strong>February 10, 2020</strong>. Every applicant will be notified of the status of their application in advance of that announcement.</p>

    </Block>
    <Block bgColor="#E7ECEF" title="Benefits">
      <ul>
        <li>&lt;title of conf&gt; ticket (of course)</li>
        <li>Invitation to Cast Dinner on Wednesday, May 6th, 2020</li>
        <li>20% discount on purchase of one <a href="https://selfconference.org/">self.conference</a> ticket</li>
      </ul>
    </Block>
    <Block title="Submission support">
      <p>We will host office hours via Discord. You can use this time to workshop your proposal and get clarification on anything in the CFP. During these scheduled sessions, we're happy to provide feedback on individual applications. Please check back here as we will add to the list of office hour sessions based on demand and organizers' availability.</p>
      <ul>
        <li>Saturday, December 7 @ 2pm Eastern</li>
        <li>Saturday, December 14 @ 2pm Eastern</li>
        <li>Saturday, January 25 @ 3pm Eastern</li>
      </ul>
      <p>To gain access to these office hours and the rest of the &lt;title of conf&gt; community, you'll need to <a href="https://discord.gg/832rT7q">join the Discord server</a>. We are also available via email at <a href="mailto:cfp@titleofconf.org">cfp@titleofconf.org</a> and our <a href="https://twitter.com/TitleOfConf">Twitter DMs are open</a>!</p>
    </Block>

  </Layout>
);

export default Sponsor