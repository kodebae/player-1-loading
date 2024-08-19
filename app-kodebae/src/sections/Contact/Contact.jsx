import { useForm, ValidationError } from '@formspree/react'

export const Contact = () => {

  const [state, handleSubmit] = useForm('--------')

  return (
    <section className="contact" id="connect">
      <div className="contact-container">
        <div className="contact-form-container">
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
                <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
                <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone No."
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>
            <div className="form-group">
              <textarea
                rows="6"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button type="submit" disabled={state.submitting}>
              {state.succeeded ? 'Sent' : 'Send'}
            </button>
            {state.succeeded && <p className="success">Message sent successfully!</p>}
            {state.errors.length > 0 && <p className="danger">Failed to send message.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};
