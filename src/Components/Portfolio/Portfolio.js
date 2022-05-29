import React from "react";

const Portfolio = () => {
  return (
    <div className="mx-auto mt-10">
      <div class="card w-96 bg-base-100 text-black shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold text-sky-400">PERSONAL PORTFOLIO</h2>
          <p className=" font-semibold">i'am SAZZAD from gopalgonj BD</p>
          <p className="font-semibold">main.sazzad@gmail.com</p>
          <p>
            I have passed Takmeel from Qawmi Madrasa Jamia Arabia Darul Uloom
            Deobhog and am currently engaged in mother care at home
          </p>
          <p className="text-center text-xl font-bold text-sky-400 border-b-2 border-sky-200">
            TECHNOLOGY
          </p>
          <p>
            1. tailwindCss <br />
            2. bootstrapCss <br />
            3. javascript <br />
            4. react js <br />
            5. mongodb <br />
            6. firebase <br />
          </p>
          <p className="text-center text-xl font-bold text-sky-400 border-b-2 border-sky-200">
           PROJECTS
                  </p>
                  <a href="https://laptop-24af0.web.app/" target="_blank" rel="noreferrer">Laptop</a> 
                  {/* <a href="https://laptop-24af0.web.app/" target="_blank" rel="noreferrer">Laptop</a>  */}
                  <a href="https://photography-d3c58.web.app/" target="_blank" rel="noreferrer">Photography</a> 
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
