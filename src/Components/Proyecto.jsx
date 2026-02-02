import { useEffect, useState } from "react";
import axios from "axios";

function Proyecto() {
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const [projects, setProjects] = useState([]);

useEffect(() => {
  axios.get("http://localhost:5000/api/proyecto")
    .then(res => {
    
      setProjects(res.data);
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
}, []);

if (loading) return <p>Cargando...</p>;
if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Mis Proyectos</h2>
      <ul>
        {projects.map(p =>(
          <li key={p._id}>{p.name} - {p.description}</li>
        ))}
      </ul>
              
    </div>
  );
}

export default Proyecto;