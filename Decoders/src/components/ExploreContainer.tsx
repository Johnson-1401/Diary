import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <h1>Wecome to our Diary</h1>
      <p>“If you obey all the rules, you miss all the fun”</p>
      
    </div>
  );
};

export default ExploreContainer;
