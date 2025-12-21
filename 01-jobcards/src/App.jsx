import React from "react";

const Card = ({ brandLogo, companyName, datePosted, Post, tag1, tag2, location, pay }) => {
  return (
    <div className="card">
      <div className="top">
        <img src={brandLogo} alt={companyName} />
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17.5 12a1 1 0 0 1 1-1H21a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1v-6zM7 12a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6z" />
            <path d="M4.5 8a1 1 0 0 1 1-1H8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1V8z" />
          </svg>
          Business
        </button>
      </div>
      
      <div className="center">
        <h3>
          {companyName} <span>{datePosted}</span>
        </h3>
        <h2>{Post}</h2>
        <div className="tag">
          <h4>{tag1}</h4>
          <h4>{tag2}</h4>
        </div>
      </div>
      
      <div className="bottom">
        <div>
          <h3>{pay}</h3>
          <p>{location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      companyName: "Amazon",
      datePosted: "1 week ago",
      Post: "Senior UI/UX Designer",
      tag1: "Part-time",
      tag2: "Senior Level",
      location: "Bangalore, India",
      pay: "$15K - $25K / Month",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
      companyName: "Google",
      datePosted: "5 days ago",
      Post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      location: "Mumbai, India",
      pay: "$35K - $45K / Month",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png",
      companyName: "Meta",
      datePosted: "2 days ago",
      Post: "Product Designer",
      tag1: "Part-time",
      tag2: "Junior Level",
      location: "Pune, India",
      pay: "$20K - $25K / Month",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      companyName: "Figma",
      datePosted: "4 days ago",
      Post: "UX Designer",
      tag1: "Part-time",
      tag2: "Junior Level",
      location: "Bangalore, India",
      pay: "$10K - $20K / Month",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
      companyName: "Microsoft",
      datePosted: "2 weeks ago",
      Post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      location: "Chennai, India",
      pay: "$45K - $65K / Month",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1200px-Nvidia_logo.svg.png",
      companyName: "Nvidia",
      datePosted: "Recently Posted",
      Post: "Graphics Designer",
      tag1: "Full-time",
      tag2: "Senior Level",
      location: "Bangalore, India",
      pay: "$75K - $105K / Month",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png",
      companyName: "Apple",
      datePosted: "5 days ago",
      Post: "Backend Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      location: "Bangalore, India",
      pay: "$105K - $125K / Month",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1200px-Oracle_logo.svg.png",
      companyName: "Oracle",
      datePosted: "2 weeks ago",
      Post: "Database Administrator",
      tag1: "Full-time",
      tag2: "Senior Level",
      location: "Delhi, India",
      pay: "$50K - $75K / Month",
    },
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }

        body {
          margin: 0;
          padding: 0;
        }

        .parent {
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          padding: 40px;
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
          align-items: flex-start;
        }

        .card {
          height: 330px;
          width: 280px;
          background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
          border-radius: 24px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25), 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .card:hover::before {
          opacity: 1;
        }

        .card .top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .top img {
          height: 48px;
          width: 48px;
          border-radius: 50%;
          border: 2px solid #e0e0e0;
          padding: 3px;
          object-fit: contain;
          background: white;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .card:hover .top img {
          transform: scale(1.1);
          border-color: #667eea;
        }

        .top button {
          display: flex;
          align-items: center;
          border: 1.5px solid #e0e0e0;
          padding: 6px 10px;
          font-size: 10px;
          font-weight: 500;
          border-radius: 8px;
          gap: 4px;
          background-color: #ffffff;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .top button:hover {
          background-color: #f3f4f6;
          border-color: #667eea;
          color: #667eea;
          transform: translateY(-2px);
        }

        .center h3 {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
          transition: color 0.3s ease;
        }

        .card:hover .center h3 {
          color: #667eea;
        }

        .center h3 span {
          font-size: 9px;
          font-weight: 400;
          color: #9ca3af;
          margin-left: 4px;
        }

        .center h2 {
          font-size: 22px;
          font-weight: 700;
          color: #111827;
          margin: 8px 0;
          letter-spacing: -0.5px;
        }

        .center .tag {
          display: flex;
          margin-top: 12px;
          gap: 6px;
          flex-wrap: wrap;
        }

        .center .tag h4 {
          font-size: 10px;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          color: #374151;
          font-weight: 600;
          padding: 5px 10px;
          border-radius: 6px;
          transition: all 0.3s ease;
          cursor: default;
        }

        .center .tag h4:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1.5px solid #e5e7eb;
          padding-top: 18px;
        }

        .bottom button {
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .bottom button:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .bottom button:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .bottom h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
          color: #111827;
        }

        .bottom p {
          font-size: 10px;
          color: #9ca3af;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .parent {
            padding: 20px;
            gap: 20px;
            justify-content: center;
          }
          
          .card {
            width: 100%;
            max-width: 340px;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
      
      <div className="parent">
        {jobOpenings.map((elem, idx) => (
          <Card
            key={idx}
            brandLogo={elem.brandLogo}
            companyName={elem.companyName}
            datePosted={elem.datePosted}
            Post={elem.Post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            location={elem.location}
            pay={elem.pay}
          />
        ))}
      </div>
    </>
  );
};

export default App;