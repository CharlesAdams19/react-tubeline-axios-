import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [tubeLines, setTubeLines] = useState([]);

  useEffect(() => {
    async function getTubeData() {
      try {
        const { data } = await axios.get('https://api.tfl.gov.uk/line/mode/tube/status');
        setTubeLines(data);
      } catch (error) {
        console.log('Error fetching tube lines:', error);
      }
    }

    getTubeData();
  }, []);

  return (
    <div>
      <h1>London Underground Status</h1>
      <ul>
        {tubeLines.map(line => (
          <li key={line.id}>
            {line.name} {line.lineStatuses[0]?.statusSeverityDescription}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
