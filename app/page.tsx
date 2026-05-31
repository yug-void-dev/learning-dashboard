import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import CourseCard from "@/components/CourseCard";
import ActivityCard from "@/components/ActivityCard";
import { courses } from "@/data/courses";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[90px_1fr] gap-6">

          <Sidebar />

          <div className="space-y-6">
            <HeroCard />

            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  progress={course.progress}
                  icon={course.icon}
                />
              ))}

              <ActivityCard />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}