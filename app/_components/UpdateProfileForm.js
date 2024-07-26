"use client";

import React, { useState } from "react";

import { updateProfile } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ customer, children }) {
  const [count, setCount] = useState();

  const { fullName, email, nationalID } = customer;

  return (
    <form
      action={updateProfile}
      className=" py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          name="fullName"
          defaultValue={fullName}
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-300"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          name="email"
          defaultValue={email}
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-300"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingText="...updating">Update Profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
