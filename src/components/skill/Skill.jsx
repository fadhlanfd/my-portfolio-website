import "./skill.scss";
// import StarIcon from '@mui/icons-material/Star';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarHalfIcon from '@mui/icons-material/StarHalf';

export default function Skill() {

  const data = [
    {
      id: 1,
      name: "React.js",
      img: "assets/react.png",
    },
    {
      id: 2,
      name: "Node.js",
      img:
      "assets/node.png",
      featured: true,
    },
    {
      id: 3,
      name: "Motoko",
      img:
      "assets/motoko.png",
      },
  ];
  return (
    <div className="skill" id="skill">
        <h1>Skills</h1>
        <div className="container">
          {data.map(d=>(
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="user" src={d.img} alt=""/>
            </div>
            <div className="center">
            <h3>{d.name}</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            </div>
            <div className="bottom">
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}
