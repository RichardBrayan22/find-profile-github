import './styles.css';

type Props = {
  avatar_url : string;
  html_url  : string;
  followers: string;
  location: string;
  name: string;
};

const ResultCard = ({ avatar_url, html_url, followers, location, name }: Props) => {
  return (
    <div className="container result-card-container">
      <div className="result-container">
        <div className="img-result-container">
          <img
            src={avatar_url}
            alt=""
          />
        </div>
        <div className="content-result-container">
          <h1>Informações</h1>
          <div className="card-content-result">
            <h3 className="result-title">Perfil:</h3>
            <a href={html_url} className="link-url-git">{html_url}</a>
          </div>
          <div className="card-content-result">
            <h3 className="result-title">Seguidores:</h3>
            <p className="result-description">{followers}</p>
          </div>
          <div className="card-content-result">
            <h3 className="result-title">Localidade:</h3>
            <p className="result-description">{location}</p>
          </div>
          <div className="card-content-result">
            <h3 className="result-title">Nome:</h3>
            <p className="result-description">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
