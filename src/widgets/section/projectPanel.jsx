import { useState } from "react";



function ProjectPanel({projectImages}){
  
    const [projectImgType, setProjectImgType] = useState(0)
const MIN = 0;
const MAX = 2; 
const [direction, setDirection] = useState('next');
const goPrev = () => {
  if (projectImgType <= MIN) return;
  setDirection('prev');
  setProjectImgType(projectImgType - 1);
};

const goNext = () => {
  if (projectImgType >= MAX) return;
  setDirection('next');
  setProjectImgType(projectImgType + 1);
};


function projectType(index) {


  return (
    <img src={projectImages[index]} alt="проекты" />
  )
}



return (
  <section className="our_projects">
<div className="container">
  <div className="our_projects_main">
<h2 className='our_projects_title'>Our Projects</h2>
<div className="our_projects_info">
  <div key={projectImgType} className={`our_projects_slide slide_${direction}`}>
    {projectType(projectImgType)}
  </div>
  <div className="our_projects_btns">
    <button className='our_projects_btn_prev' type="button"
      onClick={goPrev}
      disabled={projectImgType <= MIN}
    ></button>
    <button className='our_projects_btn_next' type="button"
      onClick={goNext}
      disabled={projectImgType >= MAX}
    ></button>
  </div>
</div>
  </div>
</div>
  </section>
)
}



export default ProjectPanel