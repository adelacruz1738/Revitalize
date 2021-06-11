import React, { Fragment } from "react";
import "../../css/meditate.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Details from "../layout/Details";
import { motion } from "framer-motion";
import Controls from "../../../src/components/layout/Controls";

const songs = [
  {
    id: 1,
    title: "Irish Coast",
    img_src: "/imgs/gif1.gif",
    src: "/songs/coast.mp3",
    description: `Water Guard formed. Also known as the Preventative Boat Service. 
                    The Waterguard was the sea-based arm of revenue enforcement 
                    who patrolled the shore. The Waterguard was initially based in 
                    Watch Houses around the coast, and boat crews patrolled the 
                    coast each night. It was under Navy control from 1816 to 1822, 
                    when it and riding officers were amalgamated under the control 
                    of the Board of Customs.`,
  },
  {
    id: 2,
    title: "Distant Thunder",
    img_src: "/imgs/gif2.gif",
    src: "/songs/thunder.mp3",
    description: `That morning, the voice on the weather radio warned about a line of strong thunderstorms moving east across New York City and onto Long Island. Judging from the crackle of the static on the radio, there was a lot of lightning traveling with these storms. The weather radar on the early morning news showed a line of gray-white blobs representing the thunderstorms. The brightest white blobs were the
                      strongest storm cells. Were the brightest blobs headed my way? I was hopeful because I 
                      liked incredible storms. But, I also liked gardening, and I knew I only had about an hour to tend to my garden outside before the storm would chase me indoors.`,
  },
  {
    id: 3,
    title: "Rain",
    img_src: "/imgs/gif3.gif",
    src: "/songs/rain.mp3",
    description: `One rainy morning when the clouds darker than bruises and the green glow of the fireflies was mixed white, a big rain storm came. It was pitch black but when the sun came up the rain stopped and the water all dried up. The people got out of their homes and played some games. Two boys started to paint and their names were Oliver and John. They loved to paint and fish so when they finished painting, they got the boat and dragged it into the water. Oliver jumped in the boat and then John jumped in. The rainstorm came again and the people went back inside. The rainstorm hit the boat and Oliver said, ‘’ Oh no! We are going to die!’’ with a scared face. John said, “You are right.’’ The storm hit the boat and the boat broke. They hit the bank of a different island and they got knocked out of the boat. When the boys woke up Oliver said, “Look what happened to the boat?” He had an idea to build a raft and sail home. When they got home they were very happy.`,
  },
  {
    id: 4,
    title: "Coffee Shop",
    img_src: "/imgs/coffee.jpg",
    src: "/songs/coffee.mp3",
    description: `It’s a Monday afternoon. She is sitting in a lone coffee shop. It’s her down time in between classes, and she chose to subway downtown and focus on the paper that could make or break her college degree.She hears him before she sees him. The door opens. The tiny bell hung above it rings, signaling his presence. She looks up from her cappuccino and laptop at the noise and the burst of cold air coming through. She freezes and stops her work, almost spilling her drink all over her in the process. He hasn’t changed a bit. He takes off his black beanie, and his dark brown hair is styled just the way she remembers. His hands, covered by chic, black leather gloves, rub against each other for warmth before being placed in his equally fashionable gray pea coat. His dark-rimmed glasses make him seem just a bit more sophisticated than he really is. He has taken on the style of New York fashion and looks just as she’s seen him in her dreams.`,
  },
  {
    id: 5,
    title: "Ocean Waves",
    img_src: "/imgs/gif5.gif",
    src: "/songs/ocean.mp3",
    description: `He was born beside the sea – almost literally, for his mother's birth pangs began when she was walking along the shoreline under a pale sun gathering butterfly shells. He was born in Filey, on the east Yorkshire coast, a fishing town with a perfect sweep of pale golden beach, crumbling grassy cliffs, and the unique Filey Brigg, a mixture of many rocks, beginning at Carr Naze, and stretching out in a long peninsula into the North Sea, full of rock pools and rivulets, harsh and tempting at once. His father was an oceanographer, the son of an oceanographer who studied the deep currents of the North Sea. His mother taught English at a high school and wrote fierce little poems about waves and weather. They took him walking along the beach, and scrambling on the Brigg and fishing from rocks and with lines over the side of rowing boats. The family had almost a collection of bottles picked up by sailing vessels and along coastlines. Several of these were numbered bottles, sealed and weighted to bob along the seabed, designed by the Marine Science project to map the movement of currents around the coast. One – a rather sinister-looking early 20th-century medicine bottle – contained a lined sheet of paper. This read "Dear Mary" and was followed by the phrase "I love you, I love you, I love you … " repeated until it filled both sides.`,
  },
];

export const Meditate = (props, state) => {
  // Matching corresponding id from previous page to array object
  const id = props.match.params.id;
  const result = songs.filter((song) => song.id === parseInt(id));

  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Passing in components with songs information + text buttons*/}
        <div className="meditate_header">
          <Details song={result} />
        </div>
        <div className="media_player">
          <Controls song={result} />
        </div>
        <div className="done_btn">
          <Link to="/Results">
            <button className="done">Done</button>
          </Link>
        </div>
        <div className="font_box">
          <button className="text_sizer">+</button>
          <button className="text_sizer">-</button>
        </div>
      </motion.div>
    </Fragment>
  );
};

export default connect()(Meditate);
