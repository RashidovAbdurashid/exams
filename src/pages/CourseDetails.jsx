import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

const CourseDetails = () => {
  const { id } = useParams();

  const course = courses.find((item) => item.id === Number(id));

  return (
    <div>
      <h1 className="text-3xl font-bold">{course?.title}</h1>
    </div>
  );
};

export default CourseDetails;
