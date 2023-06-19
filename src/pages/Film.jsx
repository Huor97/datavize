// import { useState } from "react";
import { useParams } from "react-router-dom";
import Annonces from "../composents/Annonces";
import Descriptions from "../composents/Descriptions";

const Film = () => {
  let { tvShowsId } = useParams();
  // affichage des données
  // const [posts, setPosts] = useState([]);
  const tvShows = [
    {
      id: 1,
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.picswalls.com%2Fwallpapers%2F2017%2F12%2F11%2Fnature-desktop-background_123026895_313.jpg&f=1&nofb=1&ipt=1604077a656fc4dfe1e3184cae1b6227f8a80093aff40bdec6c7044d3f95bd1d&ipo=images",
      alt: "I love you nature",
      description: `1, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
      fuga suscipit. Similique hic veritatis expedita cupiditate nobis, ea
      ex blanditiis harum cumque ipsa, perspiciatis deserunt aspernatur
      delectus fugit quidem quaerat?`,
      annonce: "https://youtu.be/dVHZ-q2aLmY",
    },
    {
      id: 2,
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.picswalls.com%2Fwallpapers%2F2017%2F12%2F11%2Fnature-desktop-background_123026895_313.jpg&f=1&nofb=1&ipt=1604077a656fc4dfe1e3184cae1b6227f8a80093aff40bdec6c7044d3f95bd1d&ipo=images",
      alt: "Now with dog - Rosé",
      description: `2, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
      fuga suscipit. Similique hic veritatis expedita cupiditate nobis, ea
      ex blanditiis harum cumque ipsa, perspiciatis deserunt aspernatur
      delectus fugit quidem quaerat?`,
      annonce: "https://youtu.be/OAYzWTtNj9U",
    },
    {
      id: 3,
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.picswalls.com%2Fwallpapers%2F2017%2F12%2F11%2Fnature-desktop-background_123026895_313.jpg&f=1&nofb=1&ipt=1604077a656fc4dfe1e3184cae1b6227f8a80093aff40bdec6c7044d3f95bd1d&ipo=images",
      alt: "Now with dog - Rosé",
      description: `3, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
      fuga suscipit. Similique hic veritatis expedita cupiditate nobis, ea
      ex blanditiis harum cumque ipsa, perspiciatis deserunt aspernatur
      delectus fugit quidem quaerat?`,
      annonce: "https://youtu.be/C_oyIKvo5_A",
    },
    {
      id: 4,
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.picswalls.com%2Fwallpapers%2F2017%2F12%2F11%2Fnature-desktop-background_123026895_313.jpg&f=1&nofb=1&ipt=1604077a656fc4dfe1e3184cae1b6227f8a80093aff40bdec6c7044d3f95bd1d&ipo=images",
      alt: "Now with dog - Rosé",
      description: `4, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
      fuga suscipit. Similique hic veritatis expedita cupiditate nobis, ea
      ex blanditiis harum cumque ipsa, perspiciatis deserunt aspernatur
      delectus fugit quidem quaerat?`,
      annonce: "https://youtu.be/ZkaZsdhtuno",
    },
    {
      id: 5,
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.picswalls.com%2Fwallpapers%2F2017%2F12%2F11%2Fnature-desktop-background_123026895_313.jpg&f=1&nofb=1&ipt=1604077a656fc4dfe1e3184cae1b6227f8a80093aff40bdec6c7044d3f95bd1d&ipo=images",
      alt: "Now with dog - Rosé",
      description: `5, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
      fuga suscipit. Similique hic veritatis expedita cupiditate nobis, ea
      ex blanditiis harum cumque ipsa, perspiciatis deserunt aspernatur
      delectus fugit quidem quaerat?`,
      annonce: "https://youtu.be/gD3TSnS17L8",
    },
  ];

  return (
    <>
      {/* à parti d'id d'un film arrive sur ce page */}
      {/* affiche sur ce page:
       * nav vertical;
       * anonce d'un film;
       * description d'un film.
       */}

      {tvShows.map((tvShow, index) =>
        tvShow.id === parseInt(tvShowsId) ? (
          <div id="container" className="flex justify-center">
            {/* annonce et description film */}
            <div className="w-[100%] flex justify-end">
              <div className=" w-[90%]">
                <Descriptions
                  key={index}
                  images={tvShow.image}
                  descriptions={tvShow.description}
                  annonces={tvShow.annonce}
                />
              </div>
            </div>
            {/* 8 film */}
            <div></div>
          </div>
        ) : null
      )}
    </>
  );
};

export default Film;
