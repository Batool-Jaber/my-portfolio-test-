function AboutMain() {
  return (
    <div className="p-[30px] bg-pink-100">

      <div className="bg-white  p-[30px] rounded-[10px] shadow-md mb-[30px] mx-[170px]">
        <div className="flex items-center gap-[30px]">
          <div className="w-[120px] h-[120px] bg-gradient-to-br from-pink-300 to-pink-900 text-white text-[40px] flex items-center justify-center rounded-full">
            BJ
          </div>
          <div>
            <h2 className="mb-[10px] text-pink-600 text-[30px] font-bold">Hello, I'm Batool!</h2>
            <p className="text-gray-700 w-[900px]">
              A creative and detail-oriented developer passionate about crafting intuitive user experiences.
              Skilled in transforming ideas into responsive and engaging web interfaces.
              Committed to writing clean code and continuously learning new technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white mx-[170px] p-[30px] rounded-[10px] shadow-md mb-[30px]">
        <h2 className="text-center text-pink-600 text-4xl font-bold mb-[25px]">My Journey</h2>
        <div className="pl-[20px]">
          <div className="mb-[25px] bg-slate-100 p-[15px] border-l-[5px] border-red-600 flex items-center gap-[20px]">
            <div className="bg-red-600 text-white px-[15px] py-[5px] rounded-[20px] text-sm">2023 - 2025</div>
            <div>
              <h3 className="text-pink-950 font-semibold">UI/UX Designer</h3>
              <p className="text-gray-700">
                Working on modern web app interfaces and improving usability for better experience.
              </p>
            </div>
          </div>

          <div className="mb-[25px] bg-slate-100 p-[15px] border-l-[5px] border-blue-400 flex items-center gap-[20px]">
            <div className="bg-blue-400 text-white px-[15px] py-[5px] rounded-[20px] text-sm">2021 - 2023</div>
            <div>
              <h3 className="text-pink-950 font-semibold">Frontend Developer</h3>
              <p className="text-gray-700">
                Developed responsive websites using HTML, CSS, and JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mx-[170px] p-[30px] rounded-[10px] shadow-md mb-[30px]">
        <h2 className="text-center text-pink-600 text-4xl font-bold mb-[25px]">My Interests</h2>
        <div className="flex flex-wrap justify-around gap-[20px]">
          <div className="bg-gradient-to-br from-indigo-400 to-purple-600 text-white p-[20px] rounded-[10px] w-[330px] text-center">
            <div className="text-[30px]">💻</div>
            <h4 className="my-[10px] font-bold">Coding</h4>
            <p className="text-sm">Exploring new technologies</p>
          </div>

          <div className="bg-gradient-to-br from-pink-300 to-red-500 text-white p-[20px] rounded-[10px] w-[330px] text-center">
            <div className="text-[30px]">📚</div>
            <h4 className="my-[10px] font-bold">Reading</h4>
            <p className="text-sm">Tech blogs & design books</p>
          </div>

          <div className="bg-gradient-to-br from-blue-400 to-cyan-300 text-white p-[20px] rounded-[10px] w-[330px] text-center">
            <div className="text-[30px]">☕</div>
            <h4 className="my-[10px] font-bold">Coffee</h4>
            <p className="text-sm">My favorite fuel</p>
          </div>
        </div>
      </div>

      <div className="bg-white mx-[170px] p-[30px] rounded-[10px] shadow-md mb-[30px]">
        <h2 className="text-center text-pink-600 text-4xl font-bold mb-[25px]">Technical Skills</h2>

        <div className="overflow-hidden rounded-[10px] shadow-md">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-pink-600 text-white">
                <th className="p-[12px]">Technology</th>
                <th className="p-[12px]">Years of Experience</th>
                <th className="p-[12px]">Proficiency</th>
                <th className="p-[12px]">Projects</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="p-[10px]">HTML</td>
                <td className="p-[10px]">3 Years</td>
                <td className="p-[10px] text-green-600">Expert</td>
                <td className="p-[10px]">25+ Websites</td>
              </tr>
              <tr>
                <td className="p-[10px]">CSS</td>
                <td className="p-[10px]">3 Years</td>
                <td className="p-[10px] text-green-600">Expert</td>
                <td className="p-[10px]">25+ Websites</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-[10px]">JavaScript</td>
                <td className="p-[10px]">2 Years</td>
                <td className="p-[10px] text-orange-500">Advanced</td>
                <td className="p-[10px]">10+ Projects</td>
              </tr>
              <tr>
                <td className="p-[10px]">Figma</td>
                <td className="p-[10px]">2 Years</td>
                <td className="p-[10px] text-sky-500">Intermediate</td>
                <td className="p-[10px]">10+ Designs</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-[10px]">React</td>
                <td className="p-[10px]">1 Year</td>
                <td className="p-[10px] text-blue-500">Intermediate</td>
                <td className="p-[10px]">5+ Projects</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div className="bg-gradient-to-br from-pink-300 to-pink-900 text-white text-center p-[40px] max-w-[1125px] mx-auto rounded-[10px]">
        <h1 className="mb-[30px] text-4xl font-bold">Quick Stats</h1>
        <div className="flex flex-wrap justify-center gap-[200px]">
          <div>
            <h3 className="text-[36px] mb-[5px] font-bold">50+</h3>
            <p>Projects</p>
          </div>
          <div>
            <h3 className="text-[36px] mb-[5px] font-bold">3</h3>
            <p>Years Experience</p>
          </div>
          <div>
            <h3 className="text-[36px] mb-[5px] font-bold">15+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMain;
