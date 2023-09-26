import React from "react";
import { Link } from "react-router-dom";
import { FaForward} from "react-icons/fa";
import StudentForm from "../components/StudentForm";
import {DiYeoman} from "react-icons/di";

const CreateStudentPage = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover object-top"
              src="https://img.freepik.com/premium-photo/businessman-%E2%80%A6egy-finance-operations-sale_661047-3490.jpg?w=996"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white text-center">
                Welcome Back!
                <div>
                Student Dropout Analysis!
                </div>
                 
              </h3>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Create a Employee
            </h2>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
              <Link
                to={"/"}
                className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700 flex items-center gap-3 underline"
              >
                
               Go to Student Data
               <FaForward />
              </Link>
            </p>

            <StudentForm />
          </div>
        </div>
      </div>
      <div className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 cursor-pointer hover:underline focus:text-indigo-700 flex items-center  gap-3 underline mb-11 justify-end px-10 pb-[200px]">
          <h3><DiYeoman size='3rem' color='blue'/>Chat Bot</h3>
      </div>
    </section>
  );
};

export default CreateStudentPage;
