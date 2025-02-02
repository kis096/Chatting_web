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

          input,
          textarea {
            text-transform: none; /* Ensure text is displayed as typed */
            font-size: 1rem;
            padding: 0.8rem;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            background-color: ${({ theme }) => theme.colors.btn};
            color: white;
            border: none;
            padding: 0.8rem;
            border-radius: 5px;

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
      <h2 className="common-heading">Contact Page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30817718.83981817!2d70.4802768!3d19.4586463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01574b6cab81%3A0x83721e93131ac2d5!2sAvantika%20Rd%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1733570096342!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mjkvdvdl"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message"></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;





