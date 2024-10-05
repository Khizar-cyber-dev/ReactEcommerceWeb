import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274446554!2d74.0047152677807!3d31.483103653925408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727380478656!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
      <div className="container">
        <div className="contact-form">
            <form action="https://formspree.io/f/xpwavwrn" method="POST" className="contact-inputs">
              <input type="text" placeholder="username" name="username" autoComplete="off" required/>
              <input type="email" placeholder="Email" name="email" autoComplete="off" required/>
              <textarea placeholder="Enter your message" name="Message" rows="10" cols="10" required autoComplete="off"></textarea>
              <input type="submit"/>
            </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
