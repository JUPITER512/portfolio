import { Timeline } from "@components/Timeline";
import {data} from '@data/ExperienceData'
const Experience = () => {
  return (
    <div className="w-full" id="experience">
      <Timeline data={data} />
    </div>
  );
};

export default Experience;
