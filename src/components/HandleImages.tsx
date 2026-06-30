import heroImage from '../assets/portrait.jpg';
import brochure from '../assets/Vusi_Dhlamini_CV.pdf';
export default function HandleImages() {
  return (
    <>
      <img src={heroImage} alt="Hero" />
      <a href={brochure} download>
        Download PDF
      </a>
    </>
  );
}
