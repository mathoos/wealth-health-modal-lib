# wealth-health-modal-lib

> **Modale qui apparaît avec un texte personnalisé au click sur un bouton**

[![NPM](https://img.shields.io/npm/v/wealth-health-modal-lib.svg)](https://www.npmjs.com/package/wealth-health-modal-lib)
[![NODE](https://img.shields.io/badge/node-v.16.17.1-green)](https://nodejs.org/en)


## Install

```bash
npm i wealth-health-modal-lib
npm link wealth-health-modal-lib // pour le dev
```

## Dependances

```jsx
{
  "name": "myProject",
  "dependencies": {
    "wealth-health-modal-lib": "^1.0.7",
  },
}
```

## Usage

```jsx
// import du .js et du .css
import Modal from 'wealth-health-modal-lib/dist/index.js';
import 'wealth-health-modal-lib/dist/index.css';

function Component() {

  // État local de la modale initialisé à false
  const [showModal, setShowModal] = useState(false);

  const functionToShowModal = () => {
    setShowModal(true); // On affiche la modale
  };

  // On initialise l'état de la modale à false
  const closeModal = () => {
    setShowModal(false);
  };  

  return(
    <button onClick={functionToShowModal}>Save</button> // Le bouton qui va afficher la modale au click

    // La modale avec les props
    <Modal
      show={showModal} // donner précisions sur les props (obligatoire ou pas / booléen ...)
      handleClose={closeModal} 
      txt={<span>*Texte à générer*</span>} 
    />
  ); 
};
```

## License

[mathoos](https://github.com/mathoos)