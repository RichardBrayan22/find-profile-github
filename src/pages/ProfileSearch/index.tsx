import ResultCard from 'components/ResultCard';
import './styles.css';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  url_git: string;
};

type Profile = {
  avatar_url: string;
  html_url: string;
  followers: string;
  location: string;
  name: string;
};

const ProfileSearch = () => {
  const [profile, setProfile] = useState<Profile>();

  const [formData, setFormData] = useState<FormData>({
    url_git: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.url_git}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
        console.log(error);
      });
  };

  return (
    <div className="cep-search-container">
      <div className="container search-container">
        <h3>Encontre um perfil Github</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="url_git"
              className="search-input"
              placeholder="Usuário Github"
              value={formData.url_git}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {profile && (
        <>
          <ResultCard
            avatar_url={profile.avatar_url}
            html_url={profile.html_url}
            followers={profile.followers}
            location={profile.location}
            name={profile.name}
          />
        </>
      )}
    </div>
  );
};

export default ProfileSearch;
