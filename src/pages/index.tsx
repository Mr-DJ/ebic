import { useRouter } from 'next/router';
import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import Form from '../templates/Form';

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
    {/* <div>
      <textarea value={"Enter text to check for plagiarsm..."} ></textarea>
    </div> */}
    <Form></Form>
    </Main>  
  );
};

export default Index;
