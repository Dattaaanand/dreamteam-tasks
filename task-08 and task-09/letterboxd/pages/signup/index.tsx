import React, {useState} from 'react';
import styles from 'styles/Signup.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const index = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const current = useRouter();
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const myData = {email, username, password};

    try{
      const response = await fetch('http://127.0.0.1:5000/register', {
        method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(myData)
      });

      const result = await response.json();
      if (response.ok){
        localStorage.setItem('username', username);
        current.push('/')
      }
      else{
        setErrorMessage(result.message || 'Credentials Already Exist!');
      }
    }
    catch(error){
      console.error("Error:", error);
      setErrorMessage("Couldn't Connect to Server")
    }
  };

  return (
    <>
      <div className={styles.mainCard}>
        <div className={styles.imgContainer}>
          <Image className={styles.imageStyle} src="/images/oppenheimer.jpg" alt='skyfall' width={500} height={200} unoptimized/>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentHolder}>
          <Link href="/" className={styles.navElement}>
            <Image src="/images/cross-icon.png" alt="Cross Icon" width={35} height={35} />
          </Link>
          <h1 className={styles.contentText}>Join Letterboxd</h1>
          
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <div className={styles.formContainer}>
            <form className={styles.formHolder} onSubmit={submit}>
            <div>
              <label htmlFor="Email">Email Address <br /></label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className={styles.inputBox}
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="username"> Username <br /> </label>
              <input
                required
                type="text"
                id="username"
                name="username"
                value={username}
                className={styles.inputBox}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password">Password <br /> </label>
              <input
                required
                type="password"
                id="password"
                name="password"
                value={password}
                className={styles.inputBox}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div style={{ marginTop: "10px", marginBottom: "15px", display: "flex", alignItems: "center" }}>
              <input type="checkbox" required id="checkbox1" name="Terms" style={{ marginRight: "10px" }} />
              <label htmlFor="checkbox1" style={{ fontSize: "14px" }}>
                I'm at least 16 years old and accept the Terms of Use.
              </label>
            </div>

            <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
              <input type="checkbox" required id="checkbox2" name="Privacy Policy" style={{ marginRight: "10px" }} />
              <label htmlFor="checkbox2" style={{ fontSize: "14px" }}>
                I accept the Privacy Policy.
              </label>
            </div>

            <div>
              <button type="submit" className={styles.submitBtn}>
                SIGN UP
              </button>
            </div>
        </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
