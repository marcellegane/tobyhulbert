import { HomeSection } from '../pages/Home/index.style'
import {
  ContactTitle,
  ContactText,
  ContactList,
  ContactListItem,
  ContactLink,
} from './index.style'

const ThisContact = () => (
  <HomeSection id="contact">
    <ContactTitle>Contact</ContactTitle>
    <ContactText>
      &#116;&#111;&#098;&#121;&#104;&#117;&#108;&#098;&#101;&#114;&#116;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
    </ContactText>
    <ContactList>
      <ContactListItem>
        <ContactLink
          target="_blank"
          href="https://www.imdb.com/name/nm4782614/"
        >
          IMDb
        </ContactLink>
      </ContactListItem>
      <ContactListItem>
        <ContactLink
          target="_blank"
          href="https://www.allmusic.com/artist/toby-hulbert-mn0001698943/credits"
        >
          All Music
        </ContactLink>
      </ContactListItem>
      <ContactListItem>
        <ContactLink
          target="_blank"
          href="https://www.discogs.com/artist/3069150-Toby-Hulbert?page=2"
        >
          Discogs
        </ContactLink>
      </ContactListItem>
      <ContactListItem>
        <ContactLink target="_blank" href="https://twitter.com/tobyhulbert">
          Twitter
        </ContactLink>
      </ContactListItem>
      <ContactListItem>
        <ContactLink
          target="_blank"
          href="https://www.instagram.com/toby.hulbert/"
        >
          Instagram
        </ContactLink>
      </ContactListItem>
    </ContactList>
  </HomeSection>
)

export { ThisContact as Contact }
