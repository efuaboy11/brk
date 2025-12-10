import "../../css/signUp/signUp.css";
import "../../css/signUp/otp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { useForm } from 'react-hook-form';
import FloatingAlert from "../../component/alert";
import AuthContext from "../../context/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";
import otpPic from '../../img/otp.png';

export const OTP = () => {
  const { 
    email,
    setEmail,
    password,
    setPassword,
    messages,
    alertVisible,
    setAlertVisible,
    showAmimaton,
    setShowAnimation,
    disablebutton,
    setDisablebutton,
    otp,
    setOtp,
    LoginUser,
    isSuccess,
    setActivateCaptcha,
    onCaptchaChange,
    errorMessages
  } = useContext(AuthContext);

  setPassword(localStorage.getItem('password'));
  setEmail(localStorage.getItem('email'));

  const { register, handleSubmit, formState: { errors, isValid } } = useForm();

  const onSubmit = (data, e) => {
    if (isValid) {
      console.log(data);
      LoginUser(e);
    } else {
      console.log('error');
      setDisablebutton(false);
    }
  }

  useEffect(() => {
    setActivateCaptcha(true);
  }, []);

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
            <img src={otpPic} alt="OTP Illustration" className="auth-illustration" />
          </div>

          {/* RIGHT FORM */}
          <div className="col-md-7 auth-right">
            <div className="auth-form">

              <div className="text-center mb-4">
                <h1 className="auth-title">OTP</h1>
                <p className="auth-text">An OTP was sent to your email</p>
              </div>

              {errorMessages && (
                <div className="error-box">
                  <p><i className="bi bi-exclamation-circle"></i> {errorMessages}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-label auth-text">OTP Code</label>
                <div className="password-wrapper">
                  <input
                    type="text"
                    className={`styled-input ${errors.otp ? "input-error" : ""}`}
                    {...register("otp", { required: true })}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                  />
                  <span className="password-toggle">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                </div>
                {errors.otp && <span className="error-text">OTP is required</span>}

                <div className="mt-3">
                  <ReCAPTCHA sitekey="6LcfQSYsAAAAAP1oegAzCBYDTqROOIIoyotyHpyQ" onChange={onCaptchaChange} />
                </div>

                <button
                  disabled={disablebutton}
                  className={`auth-btn ${disablebutton ? "btn-disabled" : ""}`}
                  type="submit"
                >
                  Submit
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
