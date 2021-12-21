interface skill {
  title: string;
  fluency: number;
}

interface skills {
  content: skill[];
}

const Skills: React.FC<skills> = ({ content }: skills) => {
  const style: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    width: "75%",
    borderRadius: "30px",
  };
  return (
    <div className="container">
      <div>
        {content.map((item: skill): JSX.Element => {
          const progress: React.CSSProperties = {
            width: `${item.fluency}%`,
            backgroundColor: "white",
            margin: "5px",
            color: "black",
            paddingLeft: "10px",
            borderRadius: "inherit",
            transition: "width 1s linear forwards",
          };
          return (
            <div className="skills">
              <h4>{item.title}</h4>
              <div style={style}>
                <div style={progress}>{item.fluency}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
