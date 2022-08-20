import "./contact.scss";
import { Mail } from "@material-ui/icons";
import SummarizeIcon from '@mui/icons-material/Summarize';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Contact() {


  const data = [
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.849327577231!2d107.59779865332386!3d-6.81738731607404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e11302ba1e25%3A0x652c1f347c478e03!2sLembang!5e0!3m2!1sen!2sid!4v1648812174946!5m2!1sen!2sid",
    },
  ];

  return (
    <div className="container">
      <div className="contact" id="contact">
        <div className="left">
          {data.map(d=>(
            <iframe title="My Map" src={d.src} width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        ))}
        </div>
          <div className="right">
            <h1>Contact</h1>
            <div className="card">
            <form action="mailto:fadhlan.fadlilah2000@gmail.com" method="post" enctype="text/plain">
              <div className="inputBox">
              <Mail className="icon"/>
              <input type="text" placeholder="Email"  name="Email" required/>
              </div>
              <div className="inputBox">
              <PhoneIcon className="icon"/>
              <input type="tel" placeholder="Number Phone" name="Phone" required/>
              </div>
              <div className="inputBox">
              <SummarizeIcon className="icons"/>
              <div className="text">
              <textarea type="text" placeholder="Message"></textarea>
              </div>
              </div>
              <Stack className="button" direction="row" spacing={2}>
              <Button type="submit" className="buttonClass" variant="outline">
              <h3>send</h3>
              <SendIcon className="icon"/>
              </Button>
              </Stack>
            </form>
            </div>
          </div>
        </div>
      <section className="footer">
        <div className="credit">
        <h1>Copyright © 2022 <span>Fadhlan Fadhlillah</span> | All rights reserved</h1></div>
      </section>
      </div>
  )
}
