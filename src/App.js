import "./App.css";
import MainBio from "./Components/MainBio";

function App() {
  const person = [
    {
      name: "Forhadul Islam",
      title: "Frontend Developer",
      mobile: "018xxxxxxx",
      age: "20",
      skills: ["html", "css", "bootstrap", "scss", "javascript"],
      email: "https://mdforhadul44@gmail.com",
      github: "https://github.com/mdforhadulislam",
      linkedIn: "https://www.linkedin.com/in/forhadul-islam-29b7aa223/",
    },
    {
      name: "Asief Mahir",
      title: "Full Stack Developer",
      mobile: "018xxxxxxx",
      age: "23",
      skills: [
        "html",
        "css",
        "bootstrap",
        "scss",
        "javascript",
        "reactjs",
        "react-readux",
      ],
      email: "___________",
      github: "https://github.com/asiefmahir",
      linkedIn: "https://www.linkedin.com/in/asiefmahir/",
    },
  ];

  return (
    <div className="App">
      {person.map((singlePerson, index) => {
        return (
          <MainBio
            key={index}
            name={singlePerson.name}
            title={singlePerson.title}
            mobile={singlePerson.mobile}
            age={singlePerson.age}
            skills={singlePerson.skills}
            email={singlePerson.email}
            github={singlePerson.github}
            linkedIn={singlePerson.linkedIn}
          />
        );
      })}
    </div>
  );
}

export default App;
