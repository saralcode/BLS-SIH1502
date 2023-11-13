import { ReactNode } from 'react';
import { BsPatchQuestion } from 'react-icons/bs';
import { FaPhotoVideo } from 'react-icons/fa';
import { FiUsers, FiMonitor, FiBook, FiTrendingUp, FiSmile, FiClipboard, FiMap } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
const data = [
    {
      title: 'Students',
      description: 'Manage your student records and activities.',
      icon: FiUsers ,
    },
    {
      title: 'Dashboard',
      description: 'Access real-time data analytics and insights.',
      icon: FiMonitor ,
    },
    {
      title: 'Study Materials',
      description: 'Upload and organize study materials.',
      icon: FiBook ,
    },
    {
      title: 'Performance Analysis',
      description: 'View in-depth performance analytics and trends.',
      icon: FiTrendingUp ,
    },
    {
      title: 'Collaborative Learning',
      description: 'Enhance learning through group projects and discussions.',
      icon: FiUsers ,
    },
    {
      title: 'Interactive Quizzes',
      description: 'Engage students with interactive quizzes and assessments.',
      icon: FiClipboard ,
    },
    {
      title: 'Personalized Roadmaps',
      description: 'Create customized study paths for individual students.',
      icon: FiMap ,
    },
    {
      title:"Study Related Shorts",
      description:"Study Related Short Videos with in-between Questions",
      icon:FaPhotoVideo
    },
    {
      title:"Doubt Resolution",
      description:"Integrated AI to solve Doubt or It can be solved by teacher in Offline/Online mode",
      icon:BsPatchQuestion

    }
  ];


const HomeFeatures: React.FC = () => {
    return (
      <div className="container mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((value, index)=>{
                return <IconCard
                key={"homepageFeatures"+index}
                title={value.title}
                description={value.description}
                Icon={value.icon}
              />
            })}


        </div>
      </div>
    );
  };
  interface IconCardProps {
    title: string;
    description: string;
    Icon: IconType;
  }
  const IconCard: React.FC<IconCardProps> = ({ title, description, Icon }) => {
    return (
      <div data-aos="fade-up" className="bg-white rounded-lg shadow-md p-4">
        <div className="text-3xl text-blue-500 mb-2 flex justify-center">
            <Icon className='h-20 w-20' />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };
  export default HomeFeatures;