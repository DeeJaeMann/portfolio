import bio from "@/data/bio"

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl font-bold md:text-7xl mb-1 md:mb-3 dark:text-white">
        Dee Jae
      </h1>
      <p className="text-base mb-3 font-medium md:text-xl">Full-Stack Software Engineer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">{bio}</p>
    </div>
  );
};

export default Intro;
