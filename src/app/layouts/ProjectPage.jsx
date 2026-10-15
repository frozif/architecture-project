import { useState } from 'react'
import HeaderPanel from '@/widgets/header/headerPanel'
import ServicePanel from '@/widgets/section/servicePanel'
import ProjectPanel from '@/widgets/section/projectPanel'
import ProjectsImgMenu from '@/widgets/section/projectsImgMenu'
import RequestPanel from '@/widgets/section/requestPanel'
import FooterPanel from '@/widgets/footer/footerPanel'


import project1 from '@/assets/img/project1.png'
import project2 from '@/assets/img/project2.png'
import project3 from '@/assets/img/project3.png'

function ProjectPage(){


  




const projectImages = [project1, project2, project3]


return (
<div className="project">
  <HeaderPanel></HeaderPanel>
<main>
  <ServicePanel></ServicePanel>
<ProjectPanel  projectImages={projectImages} ></ProjectPanel>
  <ProjectsImgMenu projectImages={projectImages}></ProjectsImgMenu>
  <RequestPanel></RequestPanel>
</main>
<FooterPanel></FooterPanel>
</div>
)
}


export default ProjectPage


