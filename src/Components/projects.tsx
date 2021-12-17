interface project {
  title: string;
  description: string[];
  github: string;
  image: string;
  website?: string;
}

interface projects {
  content: project[];
}

const Projects: React.FC<projects> = ({ content }: projects) => {
  return (
    <div className="projects">
      {content.map((item: project, ind: number): JSX.Element => {
        return (
          <div className="desc">
            {ind % 2 === 0 ? (
              <>
                <div>
                  <img src={item.image} alt={item.image}></img>
                </div>
                <div key={ind}>
                  <h3>
                    <i>
                      <a href={item.github}>{item.title}</a>
                    </i>
                  </h3>
                  {item.website ? (
                    <p>
                      <a href={item.website}>View Website</a>
                    </p>
                  ) : null}
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
                  <h3>
                    <i>
                      <a href={item.github}>{item.title}</a>
                    </i>
                  </h3>
                  {item.website ? (
                    <p>
                      <a href={item.website}>View Website</a>
                    </p>
                  ) : null}
                  <ul>
                    {item.description.map(
                      (points: string, ind: number): JSX.Element => {
                        return <li key={ind}>{points}</li>;
                      }
                    )}
                  </ul>
                </div>
                <div>
                  <img src={item.image} alt={item.image}></img>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
