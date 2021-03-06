import { useState, useEffect } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Confirm, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import Layout from '../../../components/NoteLayout';

const Note = ({ note }) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if(isDeleting) {
      deleteNote();
    }
  }, [isDeleting])

  const open = () => setConfirm(true);
  const close = () => setConfirm(false);
  const deleteNote = async () => {
    const noteId = router.query.id;
    try {
      const deleted = await fetch(`/api/notes/${noteId}`, {
        method: 'DELETE'
      });
      router.push('/notes')
    } catch (error) {
      console.log(error)
    }
  }
  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  }

  return (
    <Layout>
      <div className="note-container">
        {isDeleting
          ? <Loader active/>
          : <>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <Link href={`/notes/${note._id}/edit`}>
              <Button primary>Edit</Button>
            </Link>
            <Button color="red" onClick={open}>Delete</Button>
          </>
        }
        <Confirm
          open={confirm}
          onCancel={close}
          onConfirm={handleDelete}
        />
      </div>
    </Layout>
  )
}

Note.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`/api/notes/${id}`)
  const { data } = await res.json();

  return { note: data }
}

export default Note;