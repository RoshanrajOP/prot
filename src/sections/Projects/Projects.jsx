import styles from './ProjectsStyles.module.css';
import content from '../../assets/contentgenerator.png';
import codeeditor from '../../assets/codeeditoride.png';
import todo from '../../assets/todoapp.png';
import coursebuilder from '../../assets/coursebuilder.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={content}
          link="https://github.com/RoshanrajOP/content-generator"
          h3="Content Generator"
          p="Content Generator App"
        />
        <ProjectCard
          src={codeeditor}
          link="https://github.com/RoshanrajOP/code-editor"
          h3="Code Editro IDE"
          p="collaborative code editor"
        />
        <ProjectCard
          src={todo}
          link="https://github.com/RoshanrajOP/Todo-app"
          h3="TODO APP"
          p="Todo app"
        />
        <ProjectCard
          src={coursebuilder}
          link="https://github.com/RoshanrajOP/Course-builder"
          h3="Course Builder"
          p="Task assigning App"
        />
      </div>
    </section>
  );
}

export default Projects;
