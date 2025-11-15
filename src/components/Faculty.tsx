import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Faculty() {
  const facultyMembers = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Professor of Computer Science',
      qualification: 'PhD, MIT',
      specialization: 'Artificial Intelligence & Machine Learning',
    },
    {
      name: 'Dr. Michael Chen',
      position: 'Head of Engineering Department',
      qualification: 'PhD, Stanford University',
      specialization: 'Mechanical Engineering & Robotics',
    },
    {
      name: 'Dr. Emily Rodriguez',
      position: 'Professor of Business Administration',
      qualification: 'PhD, Harvard Business School',
      specialization: 'Strategic Management & Entrepreneurship',
    },
    {
      name: 'Dr. James Wilson',
      position: 'Professor of Mathematics',
      qualification: 'PhD, Oxford University',
      specialization: 'Applied Mathematics & Statistics',
    },
    {
      name: 'Dr. Priya Sharma',
      position: 'Dean of Health Sciences',
      qualification: 'MD, Johns Hopkins',
      specialization: 'Public Health & Epidemiology',
    },
    {
      name: 'Dr. David Thompson',
      position: 'Professor of Arts & Design',
      qualification: 'MFA, Yale University',
      specialization: 'Visual Arts & Digital Media',
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Faculty
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from distinguished educators and researchers who are experts
            in their fields and dedicated to student success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-4 flex items-center justify-center">
                <GraduationCap className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">{member.position}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start">
                  <Award className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-gray-400" />
                  <span>{member.qualification}</span>
                </div>
                <div className="flex items-start">
                  <BookOpen className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-gray-400" />
                  <span>{member.specialization}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Join Our Academic Team
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            We are always looking for passionate educators and researchers
            to join our growing institution.
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            View Career Opportunities
          </button>
        </div>
      </div>
    </div>
  );
}
