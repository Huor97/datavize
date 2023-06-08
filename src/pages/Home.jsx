import IrreverentTvProgrammes from "../composents/IrreverentTvProgrammes";
import NewReleases from "../composents/NewReleases";
import TvShows from "../composents/TvShows";

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

const Home = () => {
  return (
    <>
      {/* avoir 3 lign, 5 films sur chaque ligne */}
      <div className=" flex flex-col items-center">
        <div className="w-[83%]">
          <h2 class="titre">Binge-worthy US Historical TV Shows</h2>
        </div>
        <div className="flex  justify-center items-center w-[83%]">
          {tvShows.map((tvShow, index) => (
            <TvShows
              key={index}
              id={tvShow.id}
              image={tvShow.image}
              alt={tvShow.alt}
            />
          ))}
        </div>

        <div className="w-[83%] mt-[20px]">
          <h2 class="titre">New Releases</h2>
        </div>
        <div className="flex  justify-center items-center w-[83%]">
          {tvShows.map((tvShow, index) => (
            <NewReleases key={index} image={tvShow.image} alt={tvShow.alt} />
          ))}
        </div>

        <div className="w-[83%] mt-[20px]">
          <h2 class="titre">Irreverent TV Programmes</h2>
        </div>
        <div className="flex  justify-center items-center w-[83%]">
          {tvShows.map((tvShow, index) => (
            <IrreverentTvProgrammes
              key={index}
              image={tvShow.image}
              alt={tvShow.alt}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
