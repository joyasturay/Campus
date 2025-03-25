import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/CollegeList.css';

const CollegeList = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get('http://localhost:8080/college/all');
        setColleges(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="college-container">
      <h1 className="college-title">Colleges</h1>
      <div className="college-grid">
        {colleges.map((college) => (
          <div key={college._id} className="college-card">
            <div className="college-image-container">
              {college.image ? (
                <img 
                  src={college.image} 
                  alt={college.name} 
                  className="college-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=College+Image';
                  }}
                />
              ) : (
                <div className="college-image-placeholder">
                  🏛️ No Image Available
                </div>
              )}
            </div>
            <div className="college-info">
              <h2 className="college-name">{college.name}</h2>
              <p className="college-location">📍 {college.location}</p>
              <p className="college-description">{college.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeList;