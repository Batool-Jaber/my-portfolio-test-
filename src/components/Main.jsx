const Main = (props) => {
  return (
    <>
      <div className="bg-pink-100 pr-50 pl-50 pt-7 pb-7">

        <div className="bg-gradient-to-br from-pink-300 to-pink-900 rounded-[10px] text-white text-center p-4 mb-[25px] shadow-md">
          <h1 className="text-4xl font-bold my-5 ">Welcome to {props.title}</h1>
          <p className="pb-[20px] text-lg ">{props.description}</p>
        </div>

        <div className="bg-white rounded-[10px] p-[25px] mb-[25px] text-[#3a3756] shadow-md">
          <h2 className="text-pink-600 text-center mb-[30px] text-4xl font-bold ">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-[20px] p-5">
            <div className="bg-red-500 text-white px-[100px] py-[20px] rounded-[10px] text-center">
              <h2 className="text-[18px] font-bold my-2">{props.skills[0].name}</h2>
              <p className="text-[14px] mb-2">{props.skills[0].description}</p>
            </div>

            <div className="bg-blue-400 text-white px-[100px] py-[20px] rounded-[10px] text-center">
              <h2 className="text-[18px] font-bold my-2">{props.skills[1].name}</h2>
              <p className="text-[14px] mb-2">{props.skills[1].description}</p>
            </div>

            <div className="bg-orange-400 text-white px-[100px] py-[20px] rounded-[10px] text-center">
              <h2 className="text-[18px] font-bold my-2">{props.skills[2].name}</h2>
              <p className="text-[14px] mb-2">{props.skills[2].description}</p>
            </div>

          </div>
        </div>
        

        <div className="bg-white rounded-[10px] p-[25px] mb-[25px] text-[#3a3756] shadow-md">
          <h2 className="text-pink-600 text-center mb-[30px] text-4xl font-bold">Recent Projects</h2>
          <div className="flex flex-wrap justify-center gap-[20px]">
            <div className="bg-slate-200 px-[100px] py-[20px] rounded-[10px]  text-center shadow-sm">
              <h2 className="text-red-600 text-[18px] font-bold my-2">{props.projects[0].name}</h2>
              <p className="text-black text-[14px] mb-2">{props.projects[0].description}</p>
            </div>
            <div className="bg-slate-200 px-[100px] py-[20px] rounded-[10px]  text-center shadow-sm">
              <h2 className="text-blue-400 text-[18px] font-bold my-2">{props.projects[1].name}</h2>
              <p className="text-black text-[14px] mb-2">{props.projects[1].description}</p>
            </div>
          </div>
        </div>


        <div className="bg-pink-900 text-white rounded-[10px] p-[25px] text-center">
          <h2 className="text-[25px] font-bold my-2 ">Get in Touch</h2>
          <p className="mb-[5px]">Email : {props.email}</p>
          <p>Phone : {props.phone}</p>
        </div>
      </div>
    </>
  );
};

export default Main;