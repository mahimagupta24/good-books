import React, { useState } from "react";
import "./styles.css";

const booksLibrary = {
  fiction: [
    {
      name: "The Mangolia Palace",
      description:
        "a fiction package full of mystery, history and has lavish details about power and money.",
      rating: "4.5/5"
    },
    {
      name: "The Fields",
      description:
        "The story of Sergeant, a new crime investigator in a small farming town, simmers with tension and fear that there’s something dangerous just around the corner.",
      rating: "4.0/5"
    },
    {
      name: "Like a Sister",
      description:
        "the story of a girl who hunts for the truth about the mystery of death of her half sister.",
      rating: "3.5/5"
    }
  ],
  autobiography: [
    {
      name: "My Experiments with Truth",
      description:
        "The idea of truth as an ever-evolving process of developing a mindset about the world, rather than the study of a static object, is central to Gandhi’s autobiography.",
      rating: "4.0/5"
    },
    {
      name: "Long Walk to Freedom",
      description:
        "It is an autobiograbhy of Nelson Mandela who writes that the end of apartheid was not the end of hate or division in South Africa because even though it was a long walk to freedom for him and his people, national reconciliation was still lacking.",
      rating: "4.3/5"
    },
    {
      name: "Wings of Fire",
      description:
        "An autobiography of the former President of India who had an unparalleled career as a defence scientist, culminating in the highest civilian award of India, the Bharat Ratna.",
      rating: "4.8/5"
    }
  ],
  comedy: [
    {
      name: "Yes Please",
      description:
        "  a humorous memoir in which the author gives a poweful message  that  women know how to ask for what they want, and they don’t apologize for it.",
      rating: "4.5/5"
    },
    {
      name: "The Best of Tenali Raman",
      description:
        "Teanali Raman is regarded as one of the most popular folk figures. From childhood Raman was a pranker.The book has a simple language and is delightfully written.",
      rating: "4.7/5"
    },
    {
      name: "Is Everone Hanging without Me?",
      description:
        "It is a comedy book but gives a message that in order to accomplish goals, one must never give up despite the odds that face them.",
      rating: "4.8/5"
    }
  ]
};

export default function App() {
  const [genre, setGenre] = useState("fiction");
  function genreClickHandler(inputGenre) {
    setGenre(inputGenre);
  }
  const buttons = Object.keys(booksLibrary).map((item) => {
    return (
      <button className="button" onClick={() => genreClickHandler(item)}>
        {item}
      </button>
    );
  });
  return (
    <div className="App">
      <h1>goodbooks</h1>
      <h2>Check out my favourite books.Select a genre to get started.</h2>
      {buttons}
      <hr></hr>
      {booksLibrary[genre].map((item) => {
        return (
          <div className="books">
            <h3>{item.name}</h3>
            <h4>{item.description}</h4>
            <h5>{item.rating}</h5>
          </div>
        );
      })}
    </div>
  );
}
