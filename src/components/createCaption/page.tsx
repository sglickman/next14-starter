"use client";

import { Caption, Contest } from "@/lib/definitions";
import styles from "./createCaption.module.css";
// import { Button } from "@/app/ui/button";
import Image from "next/image";
import { useFormState } from "react-dom";
import { State, createCaption } from "@/lib/actions";
import { caslon_italics, caslon } from "@/styles/fonts";

const CreateCaption = ({ contest }: { contest: Contest }) => {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createCaption, initialState);
  return (
    <form action={dispatch}>
      <input type="hidden" name="contest_id" value={contest.id} />
      <input type="hidden" name="author_id" value="1" />
      <div className={styles.container}>
        <div className={styles.top}>
          <h1 className={styles.title}>Create Caption</h1>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={contest.contest_image_url}
            alt="Cartoon"
            fill
          />
        </div>
        <div className={styles.captionContainer}>
          <div className={styles.captionInputContainer}>
            <textarea
              id="caption"
              name="captionText"
              className={`${styles.captionInput} ${caslon_italics.className}`}
              // defaultValue="Proposed Caption"
              aria-describedby="caption-error"
            />
          </div>
          <div className={styles.captionInputErrorContainer} id="caption-error">
            {state.errors?.caption &&
              state.errors?.caption.map((error: string) => (
                <p className={styles.captionInputError} key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className={styles.noteContainer}>
          <label htmlFor="note" className={styles.formLabel}>
            Note (optional)
          </label>
          <div className={styles.captionNoteContainer}>
            <textarea
              id="note"
              name="noteText"
              className={`${styles.noteInput} ${caslon.className}`}
              // defaultValue="Note"
              aria-describedby="note-error"
            />
          </div>
          <div className={styles.noteInputErrorContainer} id="note-error">
            {state.errors?.note &&
              state.errors?.note.map((error: string) => (
                <p className={styles.noteInputError} key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.submitButton} type="submit">
            Create Caption
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateCaption;
