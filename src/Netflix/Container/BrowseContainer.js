import React, {useState, useContext, useEffect} from 'react';
import {ProfileContainer} from './ProfilesContainer';
import {FirebaseContext} from '../Context/firebase';
import NetflixLoading from '../../Shared/Loading/Loading';
import Cards from '../Cards/NetflixCards';
import Header from '../Header/NetflixHeader';
import FooterContainer from '../Container/FooterContainer';
import Player from '../VideoPlayer/Player';
import Fuse from 'fuse.js';

export default function BrowseContainer({slides}) {
  const {firebase} = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState({});
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('series');
  const [slidesRow, setSlidesRow] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlidesRow(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const option = {
      keys: ['data.title', 'data.slug']
    };
    const fuse = new Fuse(slidesRow, option);
    const results = fuse.search(search).map(({item}) => item);
    if (slidesRow.length > 0 && search.length > 3 && results.length > 0) {
      setSlidesRow(results);
    } else {
      setSlidesRow(slides[category]);
    }
  }, [search, category, slides, slidesRow]);

  return profile.displayName ? (
    <>
      {loading ? (
        <NetflixLoading
          src={`/images/users/${user.photoURL}.png`}
          backgroundColor='black'
        />
      ) : (
        <NetflixLoading.PageRelease />
      )}
      <Header src='joker1' height='100vh' dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo src='/images/icons/logo.svg' alt='Home' to='/Netflix' />
            <Header.TextLink
              left='60px'
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search search={search} setSearch={setSearch} />
            <Header.Profiles>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profiles>
          </Header.Group>
        </Header.Frame>
        <Header.HeaderFeature dontShowOnSmallViewPort>
          <Header.HeaderTitle>Watch Joker Now !</Header.HeaderTitle>
          <Header.HeaderText>
            In 1981, party clown and aspiring stand-up comedian Arthur Fleck lives with
            his mother, Penny, in Gotham City. Gotham is rife with crime and unemployment,
            leaving swaths of the population disenfranchised and impoverished. Arthur
            suffers from a medical disorder that causes him to laugh at inappropriate
            times, depending on social services for medication.
          </Header.HeaderText>
          <Player>
            <Player.Button bottom='120px' />
            <Player.Video src='/videos/Cyberpunk.mp4' />
          </Player>
        </Header.HeaderFeature>
      </Header>
      <Cards.Group margin='10px' dontShowOnSmallViewPort>
        {slidesRow.map(items => (
          <Cards key={`${category}-${items.title.toLowerCase()}`}>
            <Cards.Title>{items.title}</Cards.Title>
            <Cards.Frame>
              {items.data.map(names => (
                <Cards.Item key={names.docId} item={names}>
                  <Cards.Images
                    src={`/images/${category}/${names.genre}/${names.slug}/small.jpg`}
                  />
                  <Cards.Info>
                    <Cards.SubTitle>{names.title}</Cards.SubTitle>
                  </Cards.Info>
                </Cards.Item>
              ))}
            </Cards.Frame>
            <Cards.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src='/videos/Cyberpunk.mp4' />
              </Player>
            </Cards.Feature>
          </Cards>
        ))}
      </Cards.Group>
      <FooterContainer />
    </>
  ) : (
    <ProfileContainer user={user} setProfile={setProfile} />
  );
}
