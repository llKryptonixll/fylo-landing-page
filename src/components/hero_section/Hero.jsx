import Navbar from "../layout/Navbar"
import ButtonCTA from "../layout/ButtonCTA"
import Email_Input from "../layout/Email_Input"
import useEmailValidator from "../../hooks/useEmailValidator"

const Hero = () => {

  const { email, isValid, handleEmailChange, handleSubmit } = useEmailValidator();

  return (
    <header className="font-railway grid gap-12 md:p-padding p-paddingSmall min-h-screen">
      <Navbar />
      <div className="flex xl:flex-row flex-col space-x-14 items-center self-start">
        <div className="grid gap-4 xl:-order-1 order-2 xl:text-left text-center">
          <div className="grid gap-4">
            <h1 className="text-very_dark_blue sm:text-4xl text-2xl font-bold">All your files in one secure location, accessible anywhere.</h1>
            <p className="text-very_dark_blue text-lg font-medium">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
          </div>
          <div className={`${isValid ? "" : "space-y-6"} flex sm:flex-row flex-col items-center sm:space-x-4 sm:space-y-0 space-y-4 xl:max-w-[90%] w-full min-h-10 relative`}>
            <Email_Input
              email={email}
              isValid={isValid}
              handleEmailChange={handleEmailChange}
              placeholderText="Enter your email..."
              borderStyle="border-[1px] border-very_dark_blue rounded-[0.2em]"
            />
            <span className={`${isValid ? "hidden" : "block"} absolute text-xs sm:-left-[1em] left-0 sm:bottom-[-20px] bottom-[46px]  text-red-500`}>Please check your Email</span>
            <ButtonCTA
              handleSubmit={handleSubmit}
              textContent="Get Started"
              customStyles="
                xl:basis-40 basis-[40%] w-full
              "
            />
          </div>
        </div>
        <img className="lg:w-[55%] w-[90%] sm:mb-0 mb-10" src="/images/illustration-1.svg" alt="A Folder with files" />
      </div>
    </header>
  )
}

export default Hero