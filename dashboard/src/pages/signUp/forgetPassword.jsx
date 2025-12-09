import "../../css/signUp/signUp.css"
import "../../css/signUp/login.css"
import {useContext, useEffect} from "react";
import { useForm } from 'react-hook-form';
import FloatingAlert from "../../component/alert";
import AuthContext from "../../context/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import Pic from '../../img/forgot.png'

export const ForgotPasssword = () => {

  const { 
    email,
    setEmail,
    messages,
    alertVisible,
    setAlertVisible,
    showAmimaton, 
    setShowAnimation,
    disablebutton, 
    setDisablebutton,
    RequestOTP,
    isSuccess,
    setPage,
    setActivateCaptcha,
    errorMessages,
    onCaptchaChange,
  }= useContext(AuthContext)

  setPage('forgot-password-2')

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data, e) =>{
    if (isValid){
      RequestOTP(e)
    } else {
      setDisablebutton(false)
    }
  }

  useEffect(() =>{
    setActivateCaptcha(true)
  }, [])

  return (
    <div className="auth-bg">
      <section className="auth-container container-lg">

        <FloatingAlert
          message={messages}
          isVisible={alertVisible}
          onClose={() => setAlertVisible(false)}
          successs={isSuccess}
        />

        <div className="auth-card row">
          
          {/* LEFT IMAGE */}
          <div className="col-md-5 auth-left d-none d-md-flex">
            <img src={Pic} alt="" className="auth-illustration" />
          </div>

          {/* RIGHT FORM */}
          <div className="col-md-7 auth-right">
            <div className="auth-form">

              <div className="text-center mb-4">
                <h1 className="auth-title">
                  <span className="primary-txt">Forgot</span> Your Password
                </h1>
                <p className="auth-subtitle">
                  Please enter the email you use to sign in to <span className="font-bold">AmaniLightEquity</span>.
                  You will receive an <span className="font-bold">OTP</span> to reset your password.
                </p>
              </div>

              {errorMessages && (
                <div className="error-box">
                  <p><i class="bi bi-exclamation-circle"></i> {errorMessages}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)}>

                <label className="form-label auth-text">Email</label>

                <input 
                  type="email"
                  className={`styled-input ${errors.email ? "input-error" : ""}`}
                  {...register("email", { required: true })}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g johnDoe23@gmail.com"
                />

                {errors.email && (
                  <span className="error-text">Email is required</span>
                )}

                <div className="mt-3">
                  <ReCAPTCHA 
                    sitekey="6LdtdQUrAAAAAFVowoPJ2WME7eepwmJ91VApnOE-" 
                    onChange={onCaptchaChange}
                  />
                </div>

                <button
                  disabled={disablebutton}
                  type="submit"
                  className={`auth-btn ${disablebutton ? "btn-disabled" : ""}`}
                >
                  SEND OTP
                </button>

                <div className="auth-links">
                  <p>Remembered your password? <Link to="/login">Sign in</Link></p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </section>
    </div>
  )
}
