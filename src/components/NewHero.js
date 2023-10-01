import React from 'react';
import Draggable from 'react-draggable';
// import Eddie from '../images/cutouts/eddie.png';
import Group1 from '../images/cutouts/group1.png';
import Clearpath from '../images/cutouts/clearpath.png';
import Dog from '../images/cutouts/dog.png';
import Group3 from '../images/cutouts/group3.png';
// import Dog2 from '../images/cutouts/dog2.png';
import Fountain from '../images/cutouts/fountain.png';
import SophMandy from '../images/cutouts/sophMandy.png';
import SophKatie from '../images/cutouts/sophKatie.png';
import Bubbles from '../images/cutouts/bubbles.png';
// import Camera from '../images/cutouts/camera.png';
// import Run from '../images/cutouts/10k.png';
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const NewHero = () => {
  return (
    <div className="pt-24 pb-36">
      <div>
        <div className="font-martian-mono text-2xl font-bold text-stone-950"> About Me</div>
        <div className="font-playfair-display pt-4">
          click and drag below to build a snapshot of my life.
        </div>
      </div>
      <div className="flex justify-center">
        <Draggable handle=".sophMandy" defaultPosition={{ x: 604, y: 71 }}>
          <div className="sophMandy">
            <img
              className="w-96 h-auto"
              src={SophMandy}
              alt="sophMandy"
              onDragStart={(event) => event.preventDefault()}
            />
          </div>
        </Draggable>
        <Draggable handle=".sophKatie" defaultPosition={{ x: 592, y: 50 }}>
          <div className="sophKatie">
            <img
              className="w-60 h-auto"
              src={SophKatie}
              alt="sophKatie"
              onDragStart={(event) => event.preventDefault()}
            />
          </div>
        </Draggable>
        <Draggable handle=".group1" defaultPosition={{ x: 641, y: 55 }}>
          <div className="group1">
            <img
              className="w-96 h-auto"
              src={Group1}
              alt="group1"
              onDragStart={(event) => event.preventDefault()}
            />
          </div>
        </Draggable>
        <Draggable handle=".clearpath" defaultPosition={{ x: 157, y: 355 }}>
          <div className="clearpath">
            <img
              className="w-96 h-auto"
              src={Clearpath}
              alt="clearpath"
              onDragStart={(event) => event.preventDefault()}
            />
          </div>
        </Draggable>
        <Draggable handle=".group3" defaultPosition={{ x: -429, y: 317 }}>
          <div className="group3">
            <img
              className="w-96 h-auto"
              src={Group3}
              alt="Group3"
              onDragStart={(event) => event.preventDefault()}
            />
          </div>
        </Draggable>
        <Draggable handle=".dog" defaultPosition={{ x: -220, y: 178 }}>
          <div className="dog">
            <img
              className="w-60 h-auto"
              src={Dog}
              alt="dog"
              onDragStart={(event) => event.preventDefault()}
            />
          </div>
        </Draggable>
        <Draggable handle=".fountain" defaultPosition={{ x: -661, y: 331 }}>
          <div className="fountain">
            <img
              className="w-56 h-auto"
              src={Fountain}
              alt="fountain"
              onDragStart={(event) => event.preventDefault()}
            />
          </div>
        </Draggable>
        <Draggable handle=".bubbles" defaultPosition={{ x: -661, y: 331 }}>
          <div className="bubbles">
            <img
              className="w-36 h-auto"
              src={Bubbles}
              alt="bubbles"
              onDragStart={(event) => event.preventDefault()}
            />
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default NewHero;
