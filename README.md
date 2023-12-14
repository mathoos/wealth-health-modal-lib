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

  // Fonction appelée au click sur le bouton .showModale qui initialise l'état de la modale à true
  const functionToShowModal = () => {
    setShowModal(true); // On affiche la modale
  };

  // Fonction appelée au click sur le bouton .close qui initialise l'état de la modale à false
  const closeModal = () => {
    setShowModal(false);
  };  

  return(
    <button onClick={functionToShowModal} className="showModale">Bouton pour afficher la modale</button> // Le bouton qui va afficher la modale au click

    // La modale avec les props
    <Modal
      show={showModal} // prop obligatoire qui permet de définir l'état de la modale à false
      handleClose={closeModal} // prop obligatoire qui permet de fermer la modale
      content={<span>Texte à générer</span>} // prop qui permet de définir le texte à afficher dans la modale
    />
  ); 
};
```

## License

[mathoos](https://github.com/mathoos)