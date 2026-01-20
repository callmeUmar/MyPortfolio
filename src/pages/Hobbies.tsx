export default function Hobbies() {
  const img = (name: string) =>
    `${import.meta.env.BASE_URL}projects/hobbies/${name}.jpg`;

  const hobbies = [
    {
      title: "Music",
      desc: "Rock & vibe music — The Neighbourhood, Chase Atlantic, Green Day, Linkin Park.",
      key: "music"
    },
    {
      title: "Martial Arts",
      desc: "Used to do kickboxing, boxing, wrestling, judo, MMA — discipline and focus.",
      key: "martial"
    },
    {
      title: "Cycling",
      desc: "Prefer biking over buses — freedom and clarity on the road.",
      key: "cycling"
    },
    {
      title: "Soccer",
      desc: "Used to play a lot — love the teamwork and energy, almost went professional. Was playing as a Striker in Kyrgyzstan.",
      key: "soccer"
    },
    {
      title: "Movies",
      desc: "Psychological thrillers like *Fight Club* and *Shutter Island*.",
      key: "movies"
    },
    {
      title: "Cars",
      desc: "Love muscle and supercars — favorite and goal cars are *McLaren P1* and *Lexus LC500*.",
      key: "cars"
    },
    {
      title: "Tech Exploration",
      desc: "Exploring AI, wearables, and new tech tools like Whoop.",
      key: "tech"
    },
    {
      title: "Video Games",
      desc: "Soulslike and open-world — *Elden Ring* and *Skyrim*.",
      key: "gaming"
    },
  ];

  return (
    <div className="grid cols-3">
      {hobbies.map((h, i) => (
        <div key={i} className="card hobby-card">
          <div
            className="hobby-photo"
            style={{ backgroundImage: `url('${img(h.key)}')` }}
            aria-label={h.title}
            role="img"
          />
          <div className="hobby-info">
            <h3>{h.title}</h3>
            <p className="muted">{h.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}