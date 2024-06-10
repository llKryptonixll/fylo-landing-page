const Productive = () => {
  return (
    <>
    <section className="flex xl:flex-row justify-center flex-col xl:space-x-8 xl:space-y-0 space-y-8 md:p-padding p-paddingSmall items-center bg-light_grayish_blue mt-20 relative z-20">
      <div className="absolute -z-10 left-0 -top-20 w-full h-20">
        <img className="w-full h-full sm:block hidden" src="/images/bg-curve-desktop.svg" alt="blue wave or curve" />
        <img className="w-full h-full sm:hidden block" src="/images/bg-curve-mobile.svg" alt="blue wave or curve" />
      </div>

      <div className="grid gap-12">
        <article className="text-very_dark_blue grid gap-6">
          <h2 className="sm:text-3xl text-lg font-bold font-railway md:text-left text-center">Stay productive, wherever you are</h2>
          <p className="font-medium text-desaturated_blue text-lg grid gap-6">
            <span>
              Never let location be an issue when accessing your files. Fylo has you
              covered for all of your file storage needs.
            </span>
            <span>
              Securely share files and folders with friends, family and colleagues for
              live collaboration. No email attachments required!
            </span>
          </p>
          <div className="flex md:justify-self-start justify-self-center items-center space-x-2 border-b-[1px] pb-1 hover:border-opacity-70 border-moderate_cyan w-max cursor-pointer group">
            <a href="#" className="font-medium text-lg text-moderate_cyan group-hover:text-opacity-70">See how Fylo works</a>
            <img src="/images/icon-arrow.svg" alt="arrow icon" />
          </div>
        </article>

        <div className="bg-white md:justify-self-start justify-self-center md:max-w-96 p-8 grid gap-4 rounded-md text-very_dark_blue">
          <img className="w-6" src="/images/icon-quotes.svg" alt="quotes icon" />
          <p className="font-md">
            Fylo has improved our team productivity by an order of magnitude. Since
            making the switch our team has become a well-oiled collaboration machine.
          </p>
          <div className="flex space-x-2 items-center">
            <img className="w-10 rounded-full" src="/images/avatar-testimonial.jpg" alt="kyle burton profile image" />
            <p className="grid">
              <span className="font-bold text-sm">Kyle Burton</span>
              <span className="text-xs">Founder & CEO, Huddle</span>
            </p>
          </div>
        </div>
      </div>

      <div className="xl:order-last order-first flex justify-center">
        <img className="xl:w-auto md:w-[70%] w-[90%]" src="/images/illustration-2.svg" alt="Multiple Cartoon People are looking at Files" />
      </div>
    </section>
    </>
  )
}

export default Productive