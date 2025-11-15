import { Award, Users, BookOpen, Target } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to academic excellence and student success',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'A diverse and inclusive learning environment',
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'Modern curriculum with industry-relevant programs',
    },
    {
      icon: Target,
      title: 'Vision',
      description: 'Preparing leaders for tomorrow\'s challenges',
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About KSR
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With decades of educational excellence, KSR has been at the forefront
            of nurturing talent and fostering academic achievement. Our commitment
            to quality education and holistic development has made us a trusted
            institution for thousands of students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Faculty Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Alumni</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
