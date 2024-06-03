import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSeleceted from "./components/NoProjectSeleceted";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text,
        id: taskId,
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = () => {};

  const handleSelectProject = (id) => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  };

  const handleDeleteProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  };

  const handleStartAddProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleCancelAddProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handleAddProject = (projectData) => {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks = {projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSeleceted onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="flex h-screen my-8">
        <ProjectSideBar
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
          onSelectProject={handleSelectProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
