import { useForm, ValidationError } from '@formspree/react'

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm('xqkvagwk')

  if (state.succeeded) {
    return (
      <p
        style={{
          fontWeight: '500',
          fontSize: '1.5rem',
          textAlign: 'center',
        }}
      >
        Thanks for reaching out!
        <br /> I will be in touch as soon as possible.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full'>
      <label className='font-bold pb-4' htmlFor='full-name'>
        Full Name
      </label>
      <input
        className='w-full bg-form-input border border-solid border-form-border h-12 rounded-lg py-1 px-3'
        type='text'
        name='name'
        id='full-name'
        placeholder='Enter your name'
        required
      ></input>
      <label className='font-bold py-4' htmlFor='email'>
        Your email
      </label>
      <input
        className='w-full bg-form-input border border-solid border-form-border h-12 rounded-lg py-1 px-3'
        id='email'
        type='email'
        name='email'
        required
        placeholder='Enter your email address'
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <label className='font-bold pb-4 pt-6' htmlFor='message'>
        Your message
      </label>
      <textarea
        className='bg-form-input border border-form-border h-44 rounded-lg resize-none py-3 px-3'
        id='message'
        name='message'
        required
        placeholder='Let me know how I can help'
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button
        className='bg-secondary hover:shadow-lg transition-shadow ease-in-out w-full sm:w-24 px-8 shadow mt-12 py-3 rounded-lg font-bold text-base text-white'
        type='submit'
        id='submit'
        disabled={state.submitting}
      >
        Send
      </button>
    </form>
  )
}

export default ContactForm
