import { Code, FlaskConical, Briefcase, Palette, Stethoscope, Calculator } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      icon: Code,
      title: 'Computer Science',
      duration: '4 Years',
      description: 'Master programming, software development, and emerging technologies',
    },
    {
      icon: FlaskConical,
      title: 'Engineering',
      duration: '4 Years',
      description: 'Comprehensive engineering programs in multiple disciplines',
    },
    {
      icon: Briefcase,
      title: 'Business Administration',
      duration: '3 Years',
      description: 'Learn management, finance, and entrepreneurship skills',
    },
    {
      icon: Palette,
      title: 'Arts & Design',
      duration: '3 Years',
      description: 'Explore creativity through visual and applied arts',
    },
    {
      icon: Stethoscope,
      title: 'Health Sciences',
      duration: '4 Years',
      description: 'Prepare for careers in healthcare and medical fields',
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      duration: '3 Years',
      description: 'Advanced mathematical theory and applications',
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of undergraduate and graduate programs designed
            to equip you with the knowledge and skills for a successful career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4">
                <course.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {course.title}
              </h3>
              <div className="text-sm text-blue-600 font-medium mb-3">
                {course.duration}
              </div>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
