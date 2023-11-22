import data from "../data/data";

const HeroImages = () => {
  return (
    <>
      <div className="flex justify-center mt-5 mb-3">
        <p className="font-semibold text-violet-200 text-2xl md:text-4xl">
          Explore, Discover and Enjoy
        </p>
      </div>

      <hr className="w-5/6 mx-auto border-0 h-px mb-2 md:mb-1 bg-gradient-to-l from-transparent via-violet-400 to-transparent" />

      <div className="w-5/6 mx-auto md:flex gap-8 text-white">
        {data.map((card) => (
          <div
            key={card.id}
            className="bg-cover bg-top bg-no-repeat card relative h-36 md:h-96 rounded-lg flex-[0.7] my-3 transition-all duration-700 group hover:flex-5"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="absolute bottom-0 left-0 group-hover:bg-violet-900/60 rounded-b-lg bg-transparent transition-colors duration-500 w-full h-20">
              <p className="absolute font-semibold bottom-5 left-4 text-3xl md:opacity-0 transition-opacity ease-in duration-300 group-hover:opacity-100 text-violet-100">
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroImages;
