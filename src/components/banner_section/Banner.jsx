import Email_Input from "../layout/Email_Input"
import ButtonCTA from "../layout/ButtonCTA"
import useEmailValidator from "../../hooks/useEmailValidator"

const Banner = () => {

    const { email, isValid, handleEmailChange, handleSubmit } = useEmailValidator();

    return (
        <section className="bg-desaturated_blue min-h-[320px] flex lg:flex-row flex-col lg:space-x-8 lg:space-y-0 space-y-8 justify-between items-center md:px-padding px-paddingSmall py-16">
            <div className="flex-1 grid gap-4 max-w-[500px] lg:text-left text-center">
                <h2 className="sm:text-3xl text-xl font-bold font-railway text-light_grayish_blue">Get early access today</h2>
                <p className="text-light_gray">
                    It only takes a minute to sign up and our free starter tier is extremely generous.
                    If you have any questions, our support team would be happy to help you.
                </p>
            </div>
            <div className={`${isValid ? "" : "gap-6"} flex-1 grid gap-4 max-w-[500px] w-full relative`}>
                <Email_Input
                    email={email}
                    isValid={isValid}
                    handleEmailChange={handleEmailChange}
                    placeholderText="email@example.com"
                />
                <span className={`${isValid ? "hidden" : "block"} absolute text-xs left-0 bottom-[46px] text-light_gray`}>Please check your Email</span>
                <ButtonCTA
                    textContent="Get Started For Free"
                    handleSubmit={handleSubmit}
                    customStyles="
                        lg:w-[40%] w-full
                    "
                />
            </div>
        </section>

    )
}

export default Banner