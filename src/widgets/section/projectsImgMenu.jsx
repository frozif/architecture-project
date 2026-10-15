import projectImgOne from '@/assets/img/projectImg1.png'
import projectImgTwo from '@/assets/img/projectImg2.png'
import projectImgThree from '@/assets/img/projectImg3.png'
import projectImgFour from '@/assets/img/projectImg4.png'
import projectImgFive from '@/assets/img/projectImg5.png'
import projectImgSix from '@/assets/img/projectImg6.png'



function ProjectsImgMenu(){




return (
  <section className="projects_img">
<div className="container">
  <div className="projects_img_main">
    <div className="projects_img_img">
    <img src={projectImgOne} alt="project img 1" />
    <img src={projectImgTwo} alt="project img 2" />
    <img src={projectImgThree} alt="project img 3" />
    <img src={projectImgFour} alt="project img 4" />
    <img src={projectImgFive} alt="project img 5" />
    <img src={projectImgSix} alt="project img 6" />
    </div>
  </div>
</div>
  </section>
)
}

export default ProjectsImgMenu