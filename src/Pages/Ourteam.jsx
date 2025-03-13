import { useEffect, useRef } from "react";
import { TeamData } from '../__mocks__data/TeamData'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Ourteam = () => {

  const containerRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 10%",
        end: "+=600",
        scrub: true,
        pin: true
      }
    });

    tl.to(h1Ref.current, { 
      x: "-40vw", 
      y: "-10vh", 
      scale: 0.8 
    })
    .to(h2Ref.current, { 
      x: "40vw", 
      y: "40vh", 
      scale: 0.8 
    }, "<")
    .fromTo(boxRef.current, 
      { scale: 0, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1, y: 150 }
    ).fromTo(
      '.team-container',
      {backgroundColor: '#fff'},
      {backgroundColor: '#0000002c'}
    )

  }, []);

  return (
    <>
    <div ref={containerRef} className="team-container">

    <div className="team-heading">
        <h2 ref={h1Ref}  className='teamText'>Team of</h2>
        <h2  ref={h2Ref}>experts</h2>
        <p>Our team is working everyday to build a better world & help ensure you get the best services</p>
      </div>

      <div ref={boxRef} className="team-members-cards">
        {TeamData.map((member, index) => (
          <div className={`team-member-card team${index + 1}`} key={index}>
            <div className="team-member-image">
              <img src={member.image} alt={member.name} />
              <p className='team-description'>{member.description}</p>
            </div>
            <div className="team-member-info">
              <h4>{member.position}</h4>
              <h3>{member.name}</h3>
              <div className="team-social-media">
                {/* Add social icons here if needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Ourteam
