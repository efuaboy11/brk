
import "../../css/signUp/signUp.css"
import "../../css/signUp/login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useState, useContext, useEffect} from "react";
import { useForm } from 'react-hook-form';
import FloatingAlert from "../../component/alert";
import AuthContext from "../../context/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";
import loginPic from '../../img/login.png'

export const Login = () =>{
  const {
    email, 
    setEmail,
    password,
    setPassword,
    messages,
    onCaptchaChange,
    alertVisible,
    setAlertVisible,
    RequestOTP,
    showAmimaton, 
    disablebutton, 
    setDisablebutton,
    isSuccess,
    setPage,
    setActivateCaptcha,
    errorMessages, 
    setErrorMessage,

  }= useContext(AuthContext)

  const[ showPassword, setShowPassword] = useState(false)

  const toogleShowPassword = () =>{
    setShowPassword(!showPassword)
  }

  setPage('otp-page')


  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data, e) =>{
    if (isValid){
      console.log(data)

      RequestOTP(e)
    }else{
      console.log('error')
      setDisablebutton(false)
    }
  }
  useEffect(() =>{
    setActivateCaptcha(true)
  }, [])

  


  return(
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
          <img src={loginPic} alt="" className="auth-illustration" />
        </div>

        {/* RIGHT FORM */}
        <div className="col-md-7 auth-right">
          <div className="auth-form">

            <div className="text-center mb-4">
              <h1 className="auth-title">Welcome Back</h1>
              <p className="auth-subtitle">Log in and continue your investment journey</p>
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
                placeholder="example@domain.com"
              />
              {errors.email && <span className="error-text">Email is required</span>}

              <label className="form-label auth-text mt-3">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`styled-input ${errors.password ? "input-error" : ""}`}
                  {...register("password", { required: true })}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <span className="password-toggle" onClick={toogleShowPassword}>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
              {errors.password && <span className="error-text">Password is required</span>}

              <div className="mt-3">
                <ReCAPTCHA sitekey="6LcfQSYsAAAAAP1oegAzCBYDTqROOIIoyotyHpyQ" onChange={onCaptchaChange} />
              </div>

              <button
                disabled={disablebutton}
                className={`auth-btn ${disablebutton ? "btn-disabled" : ""}`}
                type="submit"
              >
                Login
              </button>

              <div className="auth-links">
                <p><span className="auth-text">New here?</span> <Link to="/register">Create account</Link></p>
                <p><Link to="/forgot-password">Forgot password?</Link></p>
              </div>

            </form>
          </div>
        </div>

      </div>

    </section>
  </div>

  )
}