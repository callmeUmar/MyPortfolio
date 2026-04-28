import React from 'react';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';

const hobbies = [
  {
    title: "Music",
    description: (
      <p>
        I grew up on Green Day and The Neighbourhood, and they're still on heavy rotation. Something about that mix of loud-and-melodic and moody-and-cinematic just clicks for me. I've tried to teach myself guitar a few times — let's just say my fingers and the fretboard are still in the early stages of negotiations. I'll get there eventually.
      </p>
    )
  },
  {
    title: "Sports",
    description: (
      <>
        <p>Sports have been a huge part of my life for as long as I can remember.</p>
        <p>I played soccer for a local team back home as a striker and right winger, and one of the coolest moments was getting to play against the Kyrgyzstan national team — a level above what I was used to, and the kind of game you remember every detail of years later.</p>
        <p>These days I train MMA and kickboxing, and I genuinely love it. There's something about combat sports that teaches you the kind of composure you can't get anywhere else — you can't fake your way through a sparring round. It's also why UFC nights are non-negotiable for me.</p>
        <p>When I want to disconnect, I ride my bike. No goal, no destination, just clear my head.</p>
      </>
    )
  },
  {
    title: "Reading",
    description: (
      <>
        <p>I read for the same reason I train — to stay sharp.</p>
        <p>The books that have stuck with me most are the ones that meet me where I am. The Defining Decade by Meg Jay (sometimes published as "Why Your Twenties Matter") came along when I was figuring out a lot of things at once, and it gave me a clearer way to think about the decisions I was making.</p>
        <p>I also think reading itself matters more now than it used to. We're surrounded by short, fast dopamine — TikTok, Instagram, endless feeds — and I genuinely believe it's wrecking our attention and reward systems. Sitting with a book for an hour is the closest thing I have to mental cross-training.</p>
        <p>And yes — if you've spent any time on this site, you've probably caught the Greek philosophy theme. There's a reason that stuff has lasted thousands of years. It still works.</p>
      </>
    )
  },
  {
    title: "Games",
    description: (
      <>
        <p>I used to play a lot back in the day. PUBG, CS:GO, Call of Duty, Skyrim — all favorites, but Skyrim is the one that stands out. Something about the open world, the freedom to disappear into it for hours, and the sheer scale of what was possible just stuck with me.</p>
        <p>Honestly, looking back, I think gaming is part of what pulled me into computer science in the first place. Wondering how any of it actually worked under the hood eventually became more interesting than just playing it.</p>
      </>
    )
  },
  {
    title: "Cars",
    description: (
      <p>
        I love cars. The sound of a revving engine, the engineering, the way a good design just looks right — all of it. I'm not driving anything luxury yet, but I have a plan. The Lexus LC500 is first on the list, and somewhere down the road, a Ferrari 488 Spider. Goals worth working toward.
      </p>
    )
  }
];

export default function Hobbies() {
  return (
    <PageLayout
      title="Hobbies."
      subtitle="Life beyond the screen"
      description="When I'm not writing code, I'm reading, training, or out on my bike. These habits keep me grounded and bring fresh thinking back to the work I do."
      bgText="PASSION"
      statueSrc="/statue-hobbies.png"
      bgColor="#1f2922" // Dark forest green
    >
      <section className="summary-section">
        <div className="summary-content" style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <div className="hobbies-list" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {hobbies.map((hobby, index) => (
              <div key={index} className="hobby-item" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.8rem', color: 'var(--gold)', margin: '0 0 1rem 0' }}>{hobby.title}</h3>
                <div style={{ color: '#ccc', lineHeight: '1.8', margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {hobby.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}