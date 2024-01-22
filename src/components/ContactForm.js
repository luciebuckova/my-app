import { useForm } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mzbndzgn");
  if (state.succeeded) {
    return <p>Díky za Vaši zprávu, brzy se Vám ozvu!</p>;
  }
  return (
    <form
      className="container mx-auto mt-8 max-w-xl space-y-4 text-left"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
          <label htmlFor="form-first" className="text-lg md:text-xl">
            Jméno
          </label>
          <input
            className="focus-border-teal-400 rounded-lg border border-purple-600 bg-neutral-50 px-4 py-2 text-lg font-light text-purple-600 focus:border-teal-400 focus:outline-0  dark:bg-neutral-950 md:text-xl"
            id="form-first"
            type="text"
            name="first"
            autoComplete="given-name"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="form-last" className="text-lg md:text-xl">
            Příjmení
          </label>
          <input
            className="focus-border-teal-400 rounded-lg border border-purple-600 bg-neutral-50 px-4 py-2 text-lg font-light text-purple-600 focus:border-teal-400 focus:outline-0  dark:bg-neutral-950 md:text-xl"
            id="form-last"
            type="text"
            name="last"
            autoComplete="family-name"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="form-email" className="text-lg md:text-xl">
          E-mail
        </label>
        <input
          className="focus-border-teal-400 flex-1 rounded-lg border border-purple-600 bg-neutral-50 px-4 py-2 text-lg font-light text-purple-600 focus:border-teal-400 focus:outline-0  dark:bg-neutral-950 md:text-xl"
          id="form-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="form-message" className="text-lg md:text-xl">
          Zpráva
        </label>
        <textarea
          id="form-message"
          rows="6"
          name="message"
          required
          className="focus-border-teal-400 rounded-lg border border-purple-600 bg-neutral-50 px-4 py-2 text-lg font-light text-purple-600 focus:border-teal-400 focus:outline-0  dark:bg-neutral-950 md:text-xl"
        ></textarea>
      </div>
      <div className="grid place-content-center">
        <button
          type="submit"
          disabled={state.submitting}
          className="btn-primary mt-8"
        >
          Odeslat
        </button>
      </div>
    </form>
  );
}
