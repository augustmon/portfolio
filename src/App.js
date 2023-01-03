import "./App.css";
import ExperienceList from "./components/ExperienceList/ExperienceList";

import workExperience from "./JSON/work-experience.json";
import education from "./JSON/education.json";
import SkillList from "./components/SkillList/SkillList";

function App() {
  return (
    <div className="App">
      <ExperienceList
        heading="Work Experience"
        headingColor="var(--sky-blue-80)"
        itemColor="var(--sky-blue-100)"
        items={workExperience}
      />

      <ExperienceList
        heading="Education"
        headingColor="var(--baby-blue-80)"
        itemColor="var(--baby-blue-100)"
        items={education}
      />

      <SkillList
        text="'Soft' Skills"
        skills={["badminton", "howdy"]}
        color="var(--purple-100)"
      />
      <SkillList
        text='"Hard" Skills'
        skills={["hoohaa", "walawalabingbing"]}
        color="var(--purple-80)"
      />
    </div>
  );
}

export default App;
