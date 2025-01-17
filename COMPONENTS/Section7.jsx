import React from "react";
import Slides from "./Slides";

export default function Section7() {
  const sec7CardValues = [
    {
      image:
        "https://cdn.prod.website-files.com/5f39912be9da2f5c8fc5cc45/67007a211589f419b5c1b42a_nextdoor-img.jpg",
      imgTitle:
        "https://cdn.prod.website-files.com/5f39912be9da2f5c8fc5cc45/630c0f8097b687ff50a25d0e_nextdoor.svg",
      text: "“Providing support across the organization required a partner with the ability to reach everyone, regardless of location, language preference, or level of need. Modern Health's approach to mental health allowed us to frame this resource as something for everyone.”",
      name: "Beth Steinberg",
      position: "Head of People at Nextdoor",
    },

    {
      image:
        "https://cdn.prod.website-files.com/5f39912be9da2f5c8fc5cc45/67007a211589f419b5c1b3d4_palo-alto-img.jpg",
      imgTitle:
        "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66ea6c7ad1833f3400485726_palo-alto-networks-logo.png",
      text: "“Modern Health was a more broad approach that helped us hit larger subsets of the population by virtue of the offerings and that it wasn’t so concentrated solely on therapy.”",
      name: "Tom Woo",
      position: "VP of Global People at Palo Alto Networks",
    },

    {
      image:
        "https://cdn.prod.website-files.com/5f39912be9da2f5c8fc5cc45/67007a221589f419b5c1b487_trip-actions-img.jpg",
      imgTitle:
        "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66ea6c79d8d50a160f7aa9c6_tripactions-logo.png",
      text: "“Now more than ever, people need mental health support, and I think employers will engage more and more in activities that are really taking care of their employees.”",
      name: "Ariel Cohen",
      position: "‍CEO and Co-founder at TripActions",
    },
  ];

  return (
    <section className="sec7-container">
      <Slides
        title="Experiences"
        text="Discover what our customer champions have to say"
        className="sec7-cards-wrapper"
      >
        {sec7CardValues.map((item, i) => (
          <div className="sec7-cards" key={i}>
            <img className="image-card" src={item.image} />

            <div className="card-details">
              <img className="image-title" src={item.imgTitle} />
              <p className="text">{item.text}</p>
              <h4>{item.name}</h4>
              <p className="pos">{item.position}</p>
            </div>
          </div>
        ))}
      </Slides>
    </section>
  );
}
