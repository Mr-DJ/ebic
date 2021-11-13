import { useRouter } from 'next/router';
import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
// import Form from '../templates/Form';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Epic Plagiarism Detector"
          description="Checks text input for plagiarised content."
        />
      }
    >
    <h1 className="font-bold text-2xl">
      Input Form Here
    </h1>
    <form className="pb-5" method="POST">
        <div className="py-2">
          <textarea id="text1" className="inline-block form-textarea w-auto px-3 py-2 text-base text-gray-700 placeholder-gray-600 border-2 border-gray-500 rounded-lg focus:shadow-outline" rows={15} cols={35} name="text" />       
          <textarea id="text2" className="ml-4 inline-block form-textarea w-auto px-3 py-2 text-base text-gray-700 placeholder-gray-600 border-2 border-gray-500 rounded-lg focus:shadow-outline" rows={15} cols={35} name="text" />       
        </div>
        <button className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 float-right">
          Check
        </button>
        <br></br>
      </form>
    </Main>  
  );
};

export default Index;
