import { FileText, Calendar, CheckCircle, Users } from 'lucide-react';

export default function Admissions() {
  const steps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Complete our online application form with your academic details',
    },
    {
      icon: Calendar,
      title: 'Entrance Exam',
      description: 'Take the entrance examination based on your chosen program',
    },
    {
      icon: CheckCircle,
      title: 'Interview',
      description: 'Participate in a personal interview with our admission committee',
    },
    {
      icon: Users,
      title: 'Enrollment',
      description: 'Complete the enrollment process and join our community',
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Admissions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Start your journey with KSR. Follow our simple admission process
            to become part of our prestigious institution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Important Dates
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Application Opens</span>
                  <span className="text-gray-900 font-semibold">January 1, 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Application Deadline</span>
                  <span className="text-gray-900 font-semibold">March 31, 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Entrance Exam</span>
                  <span className="text-gray-900 font-semibold">April 15, 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Classes Begin</span>
                  <span className="text-gray-900 font-semibold">June 1, 2026</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Requirements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Completed high school or equivalent degree</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Academic transcripts and certificates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Letters of recommendation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Personal statement or essay</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Start Your Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
