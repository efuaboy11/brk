import "../../css/signUp/signUp.css"
import "../../css/signUp/login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons"
import { useState, useContext, useEffect } from "react";
import { useForm } from 'react-hook-form';
import FloatingAlert from "../../component/alert";
import AuthContext from "../../context/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";
import otpPic from '../../img/otp.png'

export const ForgotPassWord2 = () => {

  const {
    password,
    setPassword,
    messages,
    alertVisible,
    setAlertVisible,
    disablebutton,
    setDisablebutton,
    isSuccess,
    otp,
    setOtp,
    ForgotPasssword,
    setPage,
    setActivateCaptcha,
    errorMessages,
    onCaptchaChange,
  } = useContext(AuthContext)

  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => setShowPassword(!showPassword)

  setPage('login')

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data, e) => {
    if (isValid) {
      ForgotPasssword(e)
    } else {
      setDisablebutton(false)
    }
  }

  useEffect(() => {
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
            <img src={otpPic} alt="" className="auth-illustration" />
          </div>

          {/* RIGHT FORM */}
          <div className="col-md-7 auth-right">
            <div className="auth-form">

              <div className="text-center mb-4">
                <h1 className="auth-title">
                  <span className="primary-txt">New</span> Password
                </h1>
                <p className="auth-subtitle">Enter your new password and OTP code</p>
              </div>

              {errorMessages && (
                <div className="error-box">
                  <p><i class="bi bi-exclamation-circle"></i> {errorMessages}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)}>

                {/* OTP FIELD */}
                <label className="form-label auth-text">OTP Code</label>
                <div className="styled-input otp-wrapper">
                  <span className="otp-icon">
                    <FontAwesomeIcon icon={faLock} />
                  </span>

                  <input
                    type="text"
                    className={`auth-text otp-input-field ${errors.otp ? "input-error" : ""}`}
                    {...register("otp", { required: true })}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter your OTP"
                  />
                </div>

                {errors.otp && (
                  <span className="error-text">OTP is required</span>
                )}

                {/* NEW PASSWORD FIELD */}
                <label className="form-label auth-text mt-3">New Password</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`styled-input ${errors.password ? "input-error" : ""}`}
                    {...register("password", { required: true })}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your new password"
                  />
                  <span className="password-toggle" onClick={toggleShowPassword}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </span>
                </div>

                {errors.password && (
                  <span className="error-text">Password is required</span>
                )}

                {/* CAPTCHA */}
                <div className="mt-3">
                  <ReCAPTCHA
                    sitekey="6LcXPSYsAAAAACi4E4JmgDhbJD56txhT_QJFzMDD"
                    onChange={onCaptchaChange}
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  disabled={disablebutton}
                  type="submit"
                  className={`auth-btn ${disablebutton ? "btn-disabled" : ""}`}
                >
                  Submit
                </button>

              </form>

            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
