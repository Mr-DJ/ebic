import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="About" description="Project Summary" />}>
    <h1 className="text-lg font-bold">Main</h1>
    <p>
      This project is a program that checks similarities between any 2 blocks of text.
      This ranges from 2 small sentences to 2 whole essays. The concept I have used here 
      is a metric called cosine similarity. Cosine similarity works on any 2 vectors in an n dimensional space.
      Hence I have stored the words of the input text as vectors[arrays], to perform cos similarity onto them.
    </p>
    <h1 className="text-lg font-bold">Mathematics</h1>
    <p>
      cos(Θ)=a.b/|a|.|b| This is the formula that has been implemented. Where a and b are the 2 vectors 
      i.e the 2 arrays on which the operation is performed. Now the cosine similarity returns a value between 
      0 and 1. 1 being completely similar, and 0 being not similar at all.
    </p>
    <h1 className="text-lg font-bold">Issues</h1>
    <p>
      During the implementation of the tool to work with the website, we discovered that client side can't access
      the file system. This meant that we couldn't execute the tool on the site. To recover from this, we modified the 
      python script to perform the similarity check on 2 files when calling the file on CLI with each text document as a 
      string object.

      When the new script was finalized, we proceeded to try to implement the tool when we ran into our second big problem.
      Python scripts can't be explicitly called after the site has been loaded. Moreover, by using Next JS React framework,
      we were further limiting our python execution capability. To recover from this, we tried using various APIs to perform
      the function of a middleware between javascript rendered site and the checker written in python. After multiple attempts
      at fixing this issue, we regret to say that though we found third party solutions like Brython, we were unable to implement
      it in our Next JS server and it was already too late to rework the site.
    </p>
    <h1 className="text-lg font-bold">Whats our Submission atm</h1>
    <p>
      Our current fully funtional submission includes two tools, one that scans and entire folder of contents and performs
      a permutation on the set to return files that are similar to each other by performing cosine similarity on each permute.
      Real world sample application of this project: If say a teacher wanted to check how similar students answer script submissions
      are, she can just run the tool on the folder and see how close the content matches to each other.

      The second tool is a modification of the first, instead of scanning an entire folder, it takes two string type text arguments
      that evaluate each other to show the similarity between the two.
    </p>
  </Main>
);

export default About;
