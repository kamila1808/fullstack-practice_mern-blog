import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import { registerUser } from "../redux/features/auth/authSlice";
import { checkIsAuth } from "../redux/features/auth/authSlice";

export const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);

  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      toast(status);
    }
    if(isAuth) navigate('/')
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ username, password }));
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-1/4 h-60 mx-auto mt-40"
    >
      <h1 className="text-lg text-white text-center mb-5">Регистрация</h1>
      <label className="text-s text-gray-400">
        Имя пользователя:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Введите имя пользователя"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-s outline-none placeholder:text-gray-700 mb-5"
        />
      </label>
      <label className="text-s text-gray-400">
        Пароль:
        <input
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Введите пароль"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-s outline-none placeholder:text-gray-700 mb-5"
        />
      </label>
      <div className="flex gap-8 justify-center mt-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex justify-center items-center text-s text-white rounded-sm py-w px-4 bg-gray-600"
        >
          Подтвердить
        </button>
        <Link
          to="/login"
          className="flex justify-center items-center text-s text-white"
        >
          Уже зарегестрированы?
        </Link>
      </div>
    </form>
  );
};
