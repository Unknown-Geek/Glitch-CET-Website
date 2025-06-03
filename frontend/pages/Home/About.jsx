import game from "../../assets/gamebg.png";
import hachi from "../../assets/hachi.png";
export default function About() {
  return (
    <div className="flex flex-col p-6 md:p-12  justify-start min-h-screen mb-10">
      <h1
        className="text-3xl md:text-6xl font-normal  mb-4 "
        style={{ fontFamily: "Morton" }}
      >
        <span className=" text-[#ED246D]">//</span>About{" "}
        <span className=" text-[#ED246D]">Us</span>
      </h1>
      <div className="text-xl md:text-3xl font-pixelify  md:leading-10  flex flex-col gap-y-3 md:gap-y-7  mt-7">
        <p>
          Gl<span className=" text-[#ED246D]">i</span>tch CET is the first game
          development club at the College of Engineering Trivandrum. We are a
          group of students brought together by a shared love for games,
          combining creativity, technology, and storytelling.
        </p>
        <p>
          {" "}
          We code with passion, create with purpose, and grow together by
          solving challenges as a team.
        </p>{" "}
        <p>
          From design and development to art, sound, and story, we explore every
          part of what makes a game come to life. Whether you're just getting
          started or already experienced, you'll find a space here to learn,
          build, and belong.
        </p>
        <p> Let’s build games. Let’s build the future.</p>
      </div>
      <div className="relative mt-10">
        <img
          src={game}
          alt="Game Background"
          className="w-full h-auto mt-10   mix-blend-screen"
        />
        <div
          className=" absolute animate-bounce 
    left-[45%] top-[75%] 
    -translate-x-1/2   sm:top-[67%] flex flex-col items-center justify-center
  "
        >
          <span className="text-amber-200 text-[5px] md:text-[7px] lg:text-sm  font-pixelify">
            HACHI
          </span>
          <img
            src={hachi}
            alt="Hachi"
            className=" w-[10px] h-[10px] sm:w-[30px] sm:h-[30px] lg:w-[70px] lg:h-[70px] "
          />
        </div>
      </div>
    </div>
  );
}
