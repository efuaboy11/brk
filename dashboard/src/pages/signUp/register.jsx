import "../../css/signUp/signUp.css"
import "../../css/signUp/login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import pic from "../../img/good-mark.png"
import signPic from '../../img/sign-up.png'
import { useForm } from 'react-hook-form';
import FloatingAlert from "../../component/alert";
import AuthContext from "../../context/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";

export const Register = () => {

  const [captchaToken, setCaptchaToken] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAmimaton, setShowAnimation] = useState(false);

  const [messages, setMessage] = useState('');
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disablebutton, setDisablebutton] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [Issuccess, setIsSucess] = useState(true);

  const toogleShowPassword = () => setShowPassword(!showPassword);

  const [alertVisible, setAlertVisible] = useState(false);
  const { errorMessages, setErrorMessage } = useContext(AuthContext);

  const onCaptchaChange = (token) => setCaptchaToken(token);

  const showAlert = () => {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 7000);
  };

  const { register, handleSubmit, formState: { errors, isValid } } = useForm();

  const closeModal = () => setShowModal(false);

  const onSubmit = (data, e) => {
    if (isValid) {
      addUser(e);
    } else {
      setDisablebutton(false);
    }
  };

  const addUser = async (e) => {
    if (!captchaToken) {
      setErrorMessage("Please complete the CAPTCHA");
      return;
    }

    setErrorMessage("");
    setDisablebutton(true);
    setShowAnimation(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append('user_name', userName);
    formData.append('full_name', fullName);
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch('https://api.veloxarion.com/api/users/', {
        method: 'POST',
        body: formData,
      });

      if (response.status === 201) {
        setShowModal(true);
        setDisablebutton(false);
        setShowAnimation(false);
        setFullName('');
        setUserName('');
        setEmail('');
        setPassword('');
        setIsSucess(true);
      } else {
        const errorData = await response.json();
        const errorMessages = Object.values(errorData).flat().join(', ');

        setDisablebutton(false);
        setShowAnimation(false);
        setIsSucess(false);
        showAlert();
        setMessage(errorMessages);
      }

    } catch (error) {
      showAlert();
      setIsSucess(false);
      setMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="auth-bg">
      <section className="auth-container container-lg">

        <FloatingAlert
          message={messages}
          isVisible={alertVisible}
          onClose={() => setAlertVisible(false)}
          successs={Issuccess}
        />

        {/* SUCCESS MODAL */}
        {showModal && (
          <section className="overlay-background">
            <div className="modal-container">
              <div className="modal-content">
                <div className="d-flex justify-content-end cursor-pointer">
                  <FontAwesomeIcon icon={faXmark} size="2x" onClick={closeModal} />
                </div>

                <div className="text-center pt-3">
                  <img src={pic} width="80px" alt="" />
                  <h1>SUCCESSFUL</h1>
                  <p>Your account has been created. Start investing now.</p>
                  <p><Link to="/login" className="py-2 px-3">Login</Link></p>
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="auth-card row">

          {/* LEFT IMAGE */}
          <div className="col-md-5 auth-left d-none d-md-flex">
            <img src={signPic} alt="" className="auth-illustration" />
          </div>

          {/* RIGHT FORM */}
          <div className="col-md-7 auth-right">
            <div className="auth-form">

              <div className="text-center mb-4">
                <h1 className="auth-title"><span className="primary-txt">Sign</span> Up</h1>
                <p className="auth-subtitle">Create an account with Veloxarion today</p>
              </div>

              {errorMessages && (
                <div className="error-box">
                  <p><i class="bi bi-exclamation-circle"></i> {errorMessages}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="row">

                  {/* FULL NAME */}
                  <div className="col-md-6">
                    <label className="form-label auth-text">Full Name</label>
                    <input
                      type="text"
                      className={`styled-input ${errors.fullName ? "input-error" : ""}`}
                      {...register("fullName", { required: true })}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <span className="error-text">Full name is required</span>}
                  </div>

                  {/* USERNAME */}
                  <div className="col-md-6">
                    <label className="form-label auth-text">Username</label>
                    <input
                      type="text"
                      className={`styled-input ${errors.userName ? "input-error" : ""}`}
                      {...register("userName", { required: true })}
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="JohnDoe234"
                    />
                    {errors.userName && <span className="error-text">Username is required</span>}
                  </div>

                  {/* EMAIL */}
                  <div className="col-12">
                    <label className="form-label auth-text">Email</label>
                    <input
                      type="email"
                      className={`styled-input ${errors.email ? "input-error" : ""}`}
                      {...register("email", { required: true })}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@mail.com"
                    />
                    {errors.email && <span className="error-text">Email is required</span>}
                  </div>

                  {/* PASSWORD */}
                  <div className="col-12">
                    <label className="form-label auth-text">Password</label>

                    <div className="password-wrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`styled-input ${errors.password ? "input-error" : ""}`}
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                          }
                        })}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                      />

                      <span className="password-toggle" onClick={toogleShowPassword}>
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                      </span>
                    </div>

                    {errors.password && (
                      <span className="error-text">{errors.password.message}</span>
                    )}
                  </div>
                </div>

                {/* CAPTCHA */}
                <div className="mt-3">
                  <ReCAPTCHA
                    sitekey="6LcfQSYsAAAAAP1oegAzCBYDTqROOIIoyotyHpyQ"
                    onChange={onCaptchaChange}
                  />
                </div>

                {/* SUBMIT */}
                <button
                  disabled={disablebutton}
                  type="submit"
                  className={`auth-btn ${disablebutton ? "btn-disabled" : ""}`}
                >
                  Create Account
                </button>

                <div className="auth-links mt-2">
                  <p><span className="auth-text">Already have an account?</span> <Link to="/login">Sign in instead</Link></p>
                </div>

              </form>

            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
