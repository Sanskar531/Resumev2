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
          <div>
            {ind % 2 === 0 ? (
              <>
                <div>
                  <img src={item.image} alt={item.image} />
                </div>
                <h1>{item.description}</h1>
              </>
            ) : (
              <>
                <h1>{item.description}</h1>
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
