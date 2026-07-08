import WikiCard from './WikiCard';
import PhotoCard from './PhotoCard';

import babyBoyImg from '../assets/images/BabyBoy.jpg';
import teenBoyImg from '../assets/images/TeenBoy.jpg';
import bigBoyImg from '../assets/images/BigBoy.jpg';
import dondeTitoImg from '../assets/images/DondeTito.jpg';
import ovellaNegraImg from '../assets/images/OvellaNegra.jpg';
import kochiImg from '../assets/images/Kochi.jpg';
import pookieImg from '../assets/images/Pookie.jpg';
import guitarImg from '../assets/images/Guitar.jpg';
import templePondImg from '../assets/images/TemplePond.jpg';
import onamBoyImg from '../assets/images/OnamBoy.jpg';

function JournalEntry({ date, text, wikiSearchTerm }) {
  return (
    <div className="timeline-entry">
      <div className="event-date">
        {date && <div className="event-dot"></div>}
        {date}
      </div>
      <div className="timeline-story">
        <div className="event-card">
          <div>{text}</div>
        </div>
      </div>
      <div className="timeline-wiki">
        <WikiCard searchTerm={wikiSearchTerm} />
      </div>
    </div>
  );
}

function PhotoEntry({ imageSrc, imageExtra, height, heightExtra }) {
  return (
    <div className="photo-entry-wrapper">
      {imageSrc && <PhotoCard imageSrc={imageSrc} height={height} />}
      {imageExtra && <PhotoCard imageSrc={imageExtra} height={heightExtra || height} />}
    </div>
  );
}

export default function Timeline() {
  return (
    <main className="timeline-track">
      <JournalEntry
        date="2001"
        text="Vivek was born in Riyadh, Kingdom of Saudi Arabia, to his parents, Vijayamma V. T. and T. Vijayan. He spent his early years as a child with his mother, who worked as a nurse in Riyadh."
        wikiSearchTerm="Riyadh"
      />

      <PhotoEntry imageSrc={babyBoyImg} height="16"/>

      <JournalEntry
        date="2004"
        text="At the age of 3, he returned to Kerala to begin his schooling."
        wikiSearchTerm="Kerala"
      />

      <JournalEntry
        text={
          <div className="journal-entry">
            He started his education at{" "}
            <a href="https://christthiruvalla.edu.in/" target="_blank" rel="noopener noreferrer">
              Christ Central Public School, Thiruvalla
            </a>
            , where he spent his kindergarten years. During this time, he developed an interest in drawing.
          </div>
        }
        wikiSearchTerm="Thiruvalla"
      />

      <JournalEntry
        date="2008"
        text={
          <div className="journal-entry">
            He moved to a village near Thrikodithanam Mahavishnu Temple and joined{" "}
            <a href="https://shps-kili.org/" target="_blank" rel="noopener noreferrer">
              Sacred Heart Public School, Kilimala
            </a>
            , for his primary education.
          </div>
        }
        wikiSearchTerm="Thrikodithanam Mahavishnu Temple"
      />

      <PhotoEntry imageSrc={teenBoyImg} height="16.5"/>

      <JournalEntry
        date="2013"
        text={
          <div className="journal-entry">
            He joined{" "}
            <a href="https://www.sbhss.in/" target="_blank" rel="noopener noreferrer">
              St. Berchmans Higher Secondary School, Changanassery
            </a>
            , for his high school education. During these years, he developed a strong interest in music production and physics.
            He also received training as a cadet in the{" "}
            <a href="https://indiancc.mygov.in/" target="_blank" rel="noopener noreferrer">
              National Cadet Corps
            </a>
            {" "}in the army wing.
          </div>
        }
        wikiSearchTerm="Changanassery"
      />

      <JournalEntry
        date="2018"
        text={
          <div className="journal-entry">
            He continued at St. Berchmans Higher Secondary School for his higher secondary education, specializing in{" "}
            <a href="https://www.sbhss.in/2023/07/science-with-computer-science.html" target="_blank" rel="noopener noreferrer">
              Computer Science
            </a>
            . Here, he discovered his interest in programming.
            His love for physics also grew during this time. Inspired by{" "}
            <a href="https://www.alberteinstein.com/" target="_blank" rel="noopener noreferrer">
              Albert Einstein
            </a>
            {" "}and{" "}
            <a href="https://richardfeynman.com/" target="_blank" rel="noopener noreferrer">
              Richard Feynman
            </a>
            {" "}
            , he decided to pursue a career in scientific research.
            Apart from his studies, he composed original soundtracks for short films and collaborated on songs with artists.
            He won the Best Music Director Award (Malayalam category) at the{" "}
            <a href="https://www.facebook.com/SMIFA.official" target="_blank" rel="noopener noreferrer">
              Stoned Monkey International Film Awards for Shorts
            </a>
            {" "}in 2019, along with his brother, for their original score for the short film "
            <a href="https://www.youtube.com/watch?v=GZIeB2N_F5o" target="_blank" rel="noopener noreferrer">
              Amok: The Darkest Phase
            </a>
            ." He also volunteered for the{" "}
            <a href="https://nss.gov.in/" target="_blank" rel="noopener noreferrer">
              National Service Scheme
            </a>
            , where he engaged in social service activities.
          </div>
        }
      />

      <JournalEntry
        date="2020"
        text={
          <div className="journal-entry">
            He began his Bachelor's degree in Computer Science and Engineering at the{" "}
            <a href="https://ceconline.edu/" target="_blank" rel="noopener noreferrer">
              College of Engineering, Chengannur
            </a>
            , under{" "}
            <a href="https://www.ktu.edu.in/" target="_blank" rel="noopener noreferrer">
              APJ Abdul Kalam Technological University
            </a>
            . He was awarded a tuition fee waiver by{" "}
            <a href="https://aicte.gov.in/" target="_blank" rel="noopener noreferrer">
              All India Council for Technical Education
            </a>
            . It was during these years that he discovered the field of{" "}
            <a href="https://en.wikipedia.org/wiki/Music_technology" target="_blank" rel="noopener noreferrer">
              Music Technology
            </a>
            , combining his love for Music and Computing. He then founded{" "}
            <a href="https://codeberg.org/Coconut-Audio" target="_blank" rel="noopener noreferrer">
              Coconut Audio
            </a>
            , which was started for him to learn the{" "}
            <a href="https://juce.com/" target="_blank" rel="noopener noreferrer">
              JUCE
            </a>
            {" "}framework. Coconut Audio is an initiative that manufactures free and open-source{" "}
            <a href="https://steinbergmedia.github.io/vst3_dev_portal/pages/index.html" target="_blank" rel="noopener noreferrer">
              Virtual Studio Technology
            </a>
            {" "}(VST) applications.
          </div>
        }
        wikiSearchTerm="Chengannur"
      />

      <PhotoEntry imageSrc={bigBoyImg} height="16" imageExtra={onamBoyImg} heightExtra="15.5"/>

      <JournalEntry
        text={
          <div className="journal-entry">
            During his college years, he engaged in various volunteering activities. He was part of the media team for the{" "}
            <a href="https://www.cecieee.org/" target="_blank" rel="noopener noreferrer">
              IEEE Student Branch CEC
            </a>
            ,{" "}
            <a href="https://tinkerhub-cec-website.vercel.app/" target="_blank" rel="noopener noreferrer">
              TinkerHub CEC
            </a>
            , and{" "}
            <a href="https://www.youtube.com/@CECify" target="_blank" rel="noopener noreferrer">
              CECify Radio
            </a>
            . He volunteered with the{" "}
            <a href="https://arc.ceconline.edu/" target="_blank" rel="noopener noreferrer">
              Alumni Relation Cell
            </a>
            {" "}at CEC to strengthen the relationship between the college and its alumni.
            He also served as Joint Convenor for{" "}
            <a href="https://tharang.ihrd.ac.in/" target="_blank" rel="noopener noreferrer">
              IHRD Tharang
            </a>
            , a National Techno-Cultural-Entrepreneurial Fest, where he led the media team and created promotional content.
            Apart from college activities, he also did freelance{" "}
            <a href="https://en.wikipedia.org/wiki/Record_producer" target="_blank" rel="noopener noreferrer">
              Music Production
            </a>
            . He worked on original soundtracks for short films, advertisements, and collaborated with artists.
            Additionally, he contributed to additional programming for feature films, collaborating with his brother.
          </div>
        }
      />

      <JournalEntry
        date="2024"
        text={
          <div className="journal-entry">
            After finishing his bachelor's degree, he traveled to Barcelona to pursue a master's degree in{" "}
            <a href="https://www.upf.edu/web/smc" target="_blank" rel="noopener noreferrer">
              Sound and Music Computing
            </a>
            {" "}at{" "}
            <a href="https://www.upf.edu/" target="_blank" rel="noopener noreferrer">
              Pompeu Fabra University
            </a>
            {" "}in El Poblenou. There, he became involved in{" "}
            <a href="https://ismir.net/" target="_blank" rel="noopener noreferrer">
              Music Information Retrieval
            </a>
            {" "}and engaged in research on the computational analysis of{" "}
            <a href="https://mtg.github.io/IAM-tutorial-ismir22/landing.html" target="_blank" rel="noopener noreferrer">
              Carnatic music
            </a>
            .
          </div>
        }
        wikiSearchTerm="Barcelona"
      />

      <PhotoEntry imageSrc={dondeTitoImg} height="16.5" imageExtra={pookieImg} heightExtra="15"/>

      <JournalEntry
        date="2025"
        text={
          <div className="journal-entry">
            He started his internship as a research assistant at the {" "}
            <a href="https://www.upf.edu/web/mtg/" target="_blank" rel="noopener noreferrer">
              Music Technology Group
            </a>
            {" "}(MTG). His research focused on Svara Representation Learning for Carnatic music under the supervision of{" "}
            <a href="https://rocamora.uy/" target="_blank" rel="noopener noreferrer">
              Martín Rocamora
            </a>
            , assisting{" "}
            <a href="https://thomasgnuttall.github.io/about/" target="_blank" rel="noopener noreferrer">
              Thomas Nuttall
            </a>
            , a pre-doctoral researcher at MTG. He co-authored his first research paper, "
            <a href="https://repositori.upf.edu/items/930b9b2c-7a15-4dec-8d16-7048d83237a4" target="_blank" rel="noopener noreferrer">
              Leveraging Melodic Context for Improved Svara Representation
            </a>
            ," which won the Best Paper Award at the{" "}
            <a href="https://cmmr2025.prism.cnrs.fr/" target="_blank" rel="noopener noreferrer">
              17th International Symposium on Computer Music Multidisciplinary Research
            </a>
            {" "}(CMMR) at{" "}
            <a href="https://www.ucl.ac.uk/" target="_blank" rel="noopener noreferrer">
              University College London
            </a>.
            He also contributed to open-source projects like{" "}
            <a href="https://mirdata.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">
              Mirdata
            </a>
            ,{" "}
            <a href="https://mtg.github.io/compIAM/" target="_blank" rel="noopener noreferrer">
              CompIAM
            </a>
            , and open datasets. During this time, he also picked up the guitar.
          </div>
        }
        wikiSearchTerm="El Poblenou"
      />

      <PhotoEntry imageSrc={guitarImg} height="15.5" imageExtra={ovellaNegraImg} heightExtra="17"/>

      <JournalEntry
        date="2026"
        text={
          <div className="journal-entry">
            After completing his internship at MTG, he joined{" "}
            <a href="https://www.pitchinnovations.com/" target="_blank" rel="noopener noreferrer">
              Pitch Innovations
            </a>
            , an audio plugin manufacturing company based in Chennai, India.
            There, he worked on Fluid Pitch 2, the successor to{" "}
            <a href="https://www.pitchinnovations.com/products/fluid-pitch" target="_blank" rel="noopener noreferrer">
              Fluid Pitch
            </a>
            . His contribution was the Carnatic Engine, which synthesizes{" "}
            <a href="https://en.wikipedia.org/wiki/Gamaka_(music)" target="_blank" rel="noopener noreferrer">
              Gamakas
            </a>
            {" "}from plain{" "}
            <a href="https://midi.org/" target="_blank" rel="noopener noreferrer">
              Musical Instrument Digital Interface
            </a>
            {" "}(MIDI) notes, based on his work at the Music Technology Group. This can then be mapped to{" "}
            <a href="https://midi.org/mpe-midi-polyphonic-expression" target="_blank" rel="noopener noreferrer">
              MIDI Polyphonic Expression
            </a>
            {" "}(MPE).
          </div>
        }
        wikiSearchTerm="Chennai"
      />

      <PhotoEntry imageSrc={kochiImg} height="15" imageExtra={templePondImg} heightExtra="16"/>

      <JournalEntry
        text={
          <div className="journal-entry">
            Based on his research at MTG, he published his second paper, his first as the main author, titled "
            <a href="https://doi.org/10.1145/3815723.3815730" target="_blank" rel="noopener noreferrer">
              A Raga-Independent Encoder for Svara Representation
            </a>."
            Collaborating with Thomas, he devised a{" "}
            <a href="https://www.geeksforgeeks.org/machine-learning/self-supervised-learning-ssl/" target="_blank" rel="noopener noreferrer">
              Self-supervised Learning
            </a>
            {" "}framework to learn representations of svaras without annotated datasets.
            The paper was presented at the{" "}
            <a href="https://dlfm.web.ox.ac.uk/" target="_blank" rel="noopener noreferrer">
              13th International Conference on Digital Libraries for Musicology
            </a>
            {" "}in Thessaloniki, Greece.
          </div>
        }
        wikiSearchTerm="Thessaloniki"
      />
    </main>
  );
}
