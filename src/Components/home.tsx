interface singleParagraph {
  description: string;
  image: string;
}

interface Props {
  content: singleParagraph[];
}

const Home: React.FC<Props> = ({ content }: Props) => {
  return (
    <div className="home">
      {content.map((item: singleParagraph, ind: number): JSX.Element => {
        return (
          <div className="desc">
            {ind % 2 === 0 ? (
              <>
                <div>
                  <img src={item.image} alt={item.image} />
                </div>
                <h3>{item.description}</h3>
              </>
            ) : (
              <>
                <h3>{item.description}</h3>
                <div>
                  <img src={item.image} alt={item.image} />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
