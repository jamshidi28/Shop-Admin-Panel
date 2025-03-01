"use client"
import React, { useEffect, useState } from 'react'
import SendOtpForm from './SendOtpForm'
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import CheckOtpForm from './CheckOtpForm';
import { useRouter } from 'next/navigation'
import { checkOtp, getOtp } from '@/services/authService';
const RESEND_TIME = 90;

function AuthPage() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState(1);
    const [time, setTime] = useState(RESEND_TIME);
    const router = useRouter();
    const { error, mutateAsync: mutateGetOtp, data: otpResponse, isPending } = useMutation({
        mutationFn: getOtp
    })
    const { mutateAsync: mutateCheckOtp, isPending: isChecking } = useMutation({
        mutationFn: checkOtp
    })
    const phoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value)
    };

    const sendOtpHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await mutateGetOtp({ phoneNumber })
            toast.success(data.message);
            setStep(2);
            setTime(RESEND_TIME);
            setOtp("")
        } catch (error) {
            toast.error(error?.response?.data?.message)
            // console.log(error?.response?.data?.message)
        }
    }

    const checkOtpHandler = async (e) => {
        e.preventDefault();
        try {
            const { user, message } = await mutateCheckOtp({ phoneNumber, otp });
            toast.success(message);
            if (user.isActive) {
                router.push("/")
            } else {
                router.push("/complete-profile")
            }
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
        return () => {
          if (timer) clearInterval(timer);
        };
      }, [time]);

    const renderSteps = () => {
        switch (step) {
            case 1:
                return (
                    <SendOtpForm
                        phoneNumber={phoneNumber}
                        onChange={phoneNumberHandler}
                        onSubmit={sendOtpHandler}
                        isPending={isPending}
                    />)
            case 2:
                return (
                    <CheckOtpForm
                        otp={otp}
                        setOtp={setOtp}
                        onSubmit={checkOtpHandler}
                        onBack={() => setStep((s) => s - 1)}
                        time={time}
                        otpResponse={otpResponse}
                        isChecking={isChecking}
                    />
                )
            default:
                return null;
        }
    }
    return (
        <div className="flex justify-center " >
            <div className="w-full sm:max-w-sm">
                {renderSteps()}
            </div>

        </div>
    )
}

export default AuthPage
