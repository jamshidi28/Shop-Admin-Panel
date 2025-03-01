import OTPInput from "react-otp-input"
import { HiArrowNarrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";

function CheckOtpForm({ onSubmit, otp, setOtp, onBack, time, otpResponse, isChecking, onResendOtp }) {
    return (
        <div>
            <button className="mb-4 text-primary-900 " onClick={onBack} >
                <HiArrowNarrowRight className="w-5 h-5" />
            </button>

            {otpResponse && (
                <p>
                    {otpResponse?.message}
                    <button className="flex justify-center text-primary-900 items-center gap-x-1" onClick={onBack}>ویرایش
                        <CiEdit className="w-6 h-6 " />
                    </button>
                </p>
            )}
            <div className="mb-4 text-secondary-500">
                {time > 0 ? (
                    <p>{time} ثانیه تا ارسال مجدد کد</p>
                ) : (
                    <button onClick={onResendOtp}>ارسال مجدد کد؟</button>
                )}
            </div>
            <form className='space-y-8' onSubmit={onSubmit}>
                <p>کد تایید را وارد کنید</p>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span> - </span>}
                    inputStyle={{
                        border: "1px solid rgb(var(--color-primary-300))",
                        borderRadius: "0.5rem",
                        width: "2.5rem",
                        height: "2.5rem",
                        padding: "0.5rem 0.2rem",
                    }}
                    containerStyle="flex flex-row-reverse gap-x-2 justify-center"
                    renderInput={(props) => <input type="number" {...props}/>}
                />

                <div>
                    {isChecking ? (
                            <p>loading...</p>
                        ) : (
                            <button type='submit' className='btn btn--primary w-full'>

                                تایید
                            </button>
                        )
                    }
                </div>
            </form>
        </div>
    );
}

export default CheckOtpForm
