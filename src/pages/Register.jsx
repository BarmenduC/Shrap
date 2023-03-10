import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';



const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);


      uploadTask.on(

        (error) => {
          setErr(true);
        },
        () => {

          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            await updateProfile(res.user,{

              displayName,
              photoURL:downloadURL
            });
            await setDoc(doc(db, "users", res.user.uid),{
              uid : res.user.uid,
              displayName,
              email,
              photoURL : downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid),{});
            navigate("/");
          });
        }
      );
      

    } catch (err) {
      setErr(true);
    }

  }



  return (
    <div className='formContainer'>
      < div className='formWrapper'>
        <span className="logo">Shrap</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='display name' name="" id="" />
          <input type="email" placeholder='email' name="" id="" />
          <input type="password" placeholder='password' name="" id="" />
          <input style={{ display: "none" }} type="file" placeholder='' name="" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went Wrong!</span>}
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register