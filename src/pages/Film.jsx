// import { useState } from "react";
import { useParams } from "react-router-dom";
import Annonces from "../composents/Annonces";

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
    },
    {
      id: 2,
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.picswalls.com%2Fwallpapers%2F2017%2F12%2F11%2Fnature-desktop-background_123026895_313.jpg&f=1&nofb=1&ipt=1604077a656fc4dfe1e3184cae1b6227f8a80093aff40bdec6c7044d3f95bd1d&ipo=images",
      alt: "Now with dog - Rosé",
    },
    {
      id: 3,
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.picswalls.com%2Fwallpapers%2F2017%2F12%2F11%2Fnature-desktop-background_123026895_313.jpg&f=1&nofb=1&ipt=1604077a656fc4dfe1e3184cae1b6227f8a80093aff40bdec6c7044d3f95bd1d&ipo=images",
      alt: "Now with dog - Rosé",
    },
    {
      id: 4,
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.picswalls.com%2Fwallpapers%2F2017%2F12%2F11%2Fnature-desktop-background_123026895_313.jpg&f=1&nofb=1&ipt=1604077a656fc4dfe1e3184cae1b6227f8a80093aff40bdec6c7044d3f95bd1d&ipo=images",
      alt: "Now with dog - Rosé",
    },
    {
      id: 5,
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.picswalls.com%2Fwallpapers%2F2017%2F12%2F11%2Fnature-desktop-background_123026895_313.jpg&f=1&nofb=1&ipt=1604077a656fc4dfe1e3184cae1b6227f8a80093aff40bdec6c7044d3f95bd1d&ipo=images",
      alt: "Now with dog - Rosé",
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
                <Annonces key={index} image={tvShow.image} />
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
