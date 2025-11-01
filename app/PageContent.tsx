import React from "react";

const PageContent = () => {
  return (
    <div>
      <h1 className="mb-5 text-5xl font-bold flex justify-center pt-10">
        What We Offer
      </h1>
      <div className="flex justify-center p-10 mb-10 lg:grid-cols-4 sm:grid grid-cols-2 gap-5">
        <div className="rounded-2xl shadow-sm">
          <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-yellow-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-yellow-400 before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <div className="z-10 flex flex-col items-center gap-2">
              <span className="text-slate-400 text-2xl font-bold">
                {" "}
                Create Your<span className="text-amber-400"> Coding </span>{" "}
                <p className="flex justify-center">Questions</p>{" "}
              </span>
              <p className="text-gray-50 text-sm text-center">
                Teachers can create a wide range of coding questions designed to challenge and improve students' coding skills.
                <span className="flex justify-center">
                  {" "}
                  Practice and enhance problem-solving abilities.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl shadow-sm">
          <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-yellow-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-yellow-400 before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <div className="z-10 flex flex-col items-center gap-2">
              <span className="text-slate-400 text-2xl font-bold">
                Conduct <span className="text-amber-400"> Quizzes </span>with
                Ease{" "}
              </span>
              <p className="text-gray-50 text-sm text-center">
                Create and manage quizzes to test students' knowledge and track their progress.
                <span className="flex justify-center"> Engage students with interactive quizzes.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl shadow-sm">
          <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-yellow-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-yellow-400 before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <div className="z-10 flex flex-col items-center gap-2">
              <span className="text-slate-400 text-2xl font-bold">
                Conduct <span className="text-amber-400"> Competitions </span>{" "}
                <p className="flex justify-center">Friendly Coding</p>{" "}
              </span>
              <p className="text-gray-50 text-sm text-center">
                Organize friendly coding competitions to foster a competitive spirit among students.
                <span className="flex justify-center">
                  {" "}
                  Encourage collaboration and learning.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl shadow-sm">
          <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-yellow-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-yellow-400 before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <div className="z-10 flex flex-col items-center gap-2">
              <span className="text-slate-400 text-2xl font-bold">
                Get <span className="text-amber-400"> Analytics </span>to{" "}
                <p className="flex justify-center">Track Progress</p>{" "}
              </span>
              <p className="text-gray-50 text-sm text-center">
                Access detailed analytics to monitor students' progress and identify areas for improvement.
                <span className="flex justify-center"> Make data-driven decisions to enhance learning.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;