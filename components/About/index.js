import { About, AboutTitle, AboutText } from './index.style'
import { Stack } from '../../Luna/components/atoms/Stack/index.style'

const ThisAbout = () => (
  <About id="about">
    <Stack>
      <AboutTitle>About</AboutTitle>

      <AboutText>
        In an era of laptop producers that has led to everyone and their dog
        calling themselves an engineer, Toby is a rare breed.
      </AboutText>

      <AboutText>
        After graduating from University of Surrey’s BMus Tonmeister course,
        Toby made his way up the ranks in-house at Abbey Road where he spent
        seven years immersing himself in the studio’s rich recording history and
        working with some of the world’s most imminent producers including Tony
        Visconti, Nile Rodgers and Malay. One of very few engineers to have the
        opportunity to learn in such a professional studio environment, his
        career developed by working on a huge variety of styles and genres. His
        work includes recordings with artists such as Nick Cave & The Bad Seeds,
        Oh Wonder, Frank Ocean, Dirty Heads, Kasabian and Dawes, and as part of
        Abbey Road’s live sessions he’s worked with artists including Alabama
        Shakes, Mumford & Sons, Izzy Bizu & Jack Garratt. Toby has also worked
        as a score recordist on titles including the Oscar winning Gravity, The
        Imitation Game, Suffragette and The Avengers, and as a digital scoring
        engineer for Ridley Scott's The Martian, as well as engineering solo
        sessions for Hacksaw Ridge.
      </AboutText>

      <AboutText>
        In 2019 Toby moved to Nashville, TN, to work alongside six-time Grammy
        winning record producer Dave Cobb at RCA Studio A. He’s now focused on
        continuing to learn from the Southern American recording styles and
        enjoys creating natural recordings to tape with musicians playing live
        together.
      </AboutText>

      <AboutText>
        Toby’s study of analogue recording techniques while working in studios
        in London and Nashville means he uses a hybrid approach, combining the
        best of digital software with the character of analogue equipment to
        perfectly suit the music he records. A great enthusiasm for music and
        experimentation means Toby’s sessions are in a relaxed atmosphere to
        enable artists to be their most creative.
      </AboutText>
    </Stack>
  </About>
)

export { ThisAbout as About }
