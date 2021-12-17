interface project {
  title: string;
  description: string[];
}

interface projects {
  content: project[];
}

const Projects: React.FC<projects> = ({ content }: projects) => {
  return (
    <div className="projects">
      {content.map((item: project, ind: number): JSX.Element => {
        return (
          <div>
            {ind % 2 === 0 ? (
              <>
                <div></div>
                <div key={ind}>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.description.map(
                      (points: string, ind: number): JSX.Element => {
                        return <li key={ind}>{points}</li>;
                      }
                    )}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div key={ind}>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.description.map(
                      (points: string, ind: number): JSX.Element => {
                        return <li key={ind}>{points}</li>;
                      }
                    )}
                  </ul>
                </div>
                <div></div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
