export default function GoogleSignUp() {

  return (
    <div className='googleSignUp'>
      <div id="g_id_onload"
          data-client_id="864090627228-2kqbbpejhd9bpe118jbfmh2id3hrrf2l.apps.googleusercontent.com"
          data-context="signup"
          data-ux_mode="popup"
          data-callback="userSignupCredentialHandler"
          data-auto_prompt="false">
      </div>

      <div className="g_id_signin"
          data-type="standard"
          data-shape="rectangular"
          data-theme="filled_blue"
          data-text="signup_with"
          data-size="large"
          data-locale="en"
          data-logo_alignment="left">
      </div>
    </div>
  );
}